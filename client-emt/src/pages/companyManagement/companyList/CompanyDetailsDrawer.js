import { Drawer, Divider, Col, Row, Tag, List, message, Modal } from 'antd';
import React from 'react';
import DescriptionItem from '../../../components/DescriptionItem';
import MyQuery from '../../../components/MyQuery';
import { getCompanyDetails as GET_COMPANY_DETAILS } from './queries.gql';
import { changeCompanyStatus as CHANGE_COMPANY_STATUS } from '../../../graphql/mutations.gql';
import CloudImage from '../../../components/CloudImage';
import renderRoles from '../../../utils/renderRole';
import CompanyMembersDrawer from './companyDetailsDrawer/CompanyMembersDrawer';
import ChangePlanModal from './companyDetailsDrawer/ChangePlanModal';
import MyMutation from '../../../components/MyMutation';
import { COMPANY } from '../../../constants';
import renderStatus from '../../../utils/renderStatus';
import renderPlan from '../../../utils/renderPlan';

const { confirm } = Modal;

function showConfirm(actionName, changeCompanyStatus) {
  confirm({
    title: `Do you want to ${actionName} this company?`,
    onOk() {
      changeCompanyStatus();
    },
    onCancel() {},
  });
}
const pStyle = {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

export class CompanyDetailsDrawer extends React.Component {
  state = { visible: false };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const { companyId, companyName, companyLogo } = this.props;
    return (
      <React.Fragment>
        <a onClick={this.showDrawer}>View</a>
        <Drawer
          title={
            <CloudImage publicId={companyLogo} width={40} height={40} style={{ marginRight: 20 }}>
              {companyName}
            </CloudImage>
          }
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <MyQuery
            query={GET_COMPANY_DETAILS}
            variables={{ companyId: parseInt(companyId), memberAmount: 3 }}
          >
            {({ company }) => (
              <React.Fragment>
                <p style={pStyle}>Information</p>
                <Row>
                  <Col span={24}>
                    <DescriptionItem title="Name" content={company.name} />{' '}
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <DescriptionItem title="Description" content={company.description} />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Status" content={renderStatus(company.status)} />
                  </Col>
                  <Col span={12}>
                    <MyMutation
                      mutation={CHANGE_COMPANY_STATUS}
                      variables={{
                        input: {
                          attributes: JSON.stringify({
                            id: companyId,
                            status:
                              company.status === COMPANY.status.restricted
                                ? COMPANY.status.active
                                : COMPANY.status.restricted,
                          }),
                        },
                      }}
                      onCompleted={({
                        changeCompanyStatus: {
                          updatedCompany: { status },
                        },
                      }) => {
                        message.success(`${companyName} is ${status}`);
                      }}
                    >
                      {changeCompanyStatus => (
                        <a
                          style={{
                            color: company.status === COMPANY.status.restricted ? null : '#fa541c',
                          }}
                          onClick={() =>
                            showConfirm(
                              company.status === COMPANY.status.restricted ? 'active' : 'deactive',
                              changeCompanyStatus
                            )
                          }
                        >
                          {company.status === COMPANY.status.restricted
                            ? 'Activate Company'
                            : 'Deactivate Company'}
                        </a>
                      )}
                    </MyMutation>
                  </Col>
                </Row>

                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Current plan" content={renderPlan(company.plan.name)} />
                  </Col>
                  <Col span={12}>
                    <ChangePlanModal currentPlan={company.plan.id} companyId={companyId} />
                  </Col>
                </Row>
                <Divider />
                <p style={pStyle}>Contacts</p>

                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Email" content={company.email} />{' '}
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Address" content={company.address} />{' '}
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Phone number" content={company.phoneNumber} />{' '}
                  </Col>
                </Row>
                <Divider />
                <div style={pStyle}>
                  Members <Tag color="blue">{company.companyMemberCount}</Tag>
                </div>
                <List
                  dataSource={company.companyMembers}
                  bordered
                  renderItem={member => (
                    <List.Item key={member.id}>
                      <List.Item.Meta
                        avatar={
                          <CloudImage publicId={member.user.avatar} style={{ marginRight: 20 }} />
                        }
                        title={<a>{member.user.username}</a>}
                        description={renderRoles(member.roles)}
                      />
                    </List.Item>
                  )}
                />
                <br />

                <CompanyMembersDrawer companyId={company.id} companyName={company.name} />
              </React.Fragment>
            )}
          </MyQuery>
        </Drawer>
      </React.Fragment>
    );
  }
}
