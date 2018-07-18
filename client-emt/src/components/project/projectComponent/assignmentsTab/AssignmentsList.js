import { Table, Icon, Tag } from 'antd';
import { Query } from 'react-apollo';
import React from 'react';
import _ from 'lodash';
import { Image } from 'cloudinary-react';
import { CLOUD_NAME } from '../../../../constants';
import { getAssignmentsByProjectId as GET_ASSIGNMENTS_BY_PROJECT_ID } from '../../../../graphql/queries.gql';
import UpdateMemberAssignmentsModal from './assigmentList/UpdateMemberAssignmentsModal';

const { Column, ColumnGroup } = Table;

export default class AssignmentsList extends React.Component {
  render() {
    return (
      <Query query={GET_ASSIGNMENTS_BY_PROJECT_ID} variables={{ projectId: this.props.projectId }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <Table
              pagination={{ pageSize: 5 }}
              loading={loading}
              dataSource={data.assignments}
              rowKey="id"
              bordered
              scroll={{
                x: 1500,
              }}
            >
              <Column
                width={250}
                title="Username"
                key="username"
                render={member => (
                  <React.Fragment>
                    <Image
                      cloudName={CLOUD_NAME}
                      publicId={member.user.avatar}
                      width="40"
                      height="40"
                      crop="scale"
                      style={{ borderRadius: '50%', border: '1px solid #00b5d0', marginRight: 20 }}
                    />
                    {member.user.username}
                  </React.Fragment>
                )}
              />
              {data.projectDimensions.length > 0 && (
                <ColumnGroup title="Dimensions">
                  {data.projectDimensions.map(dimension => (
                    <Column
                      align="center"
                      title={dimension.name}
                      key={dimension.id}
                      render={member => {
                        if (_.includes(member.authorizedDimensions, dimension.id.toString())) {
                          switch (dimension.category) {
                            case 'selection':
                              return _.find(member.authorizations, {
                                dimension: { id: dimension.id },
                              }).optionAuthorizations.map(auth => (
                                <div key={auth.option.id}>
                                  <Tag color="#e8e8e8" style={{ color: 'black', margin: '2%' }}>
                                    {auth.option.name}
                                  </Tag>
                                </div>
                              ));

                            case 'input':
                              return (
                                <Icon
                                  type="check"
                                  style={{
                                    color: '#52c41a',
                                    fontSize: '14pt',

                                    fontWeight: 'bold',
                                  }}
                                />
                              );
                            default:
                              break;
                          }
                        }

                        return (
                          <Icon
                            type="close"
                            style={{
                              color: '#f5222d',

                              fontSize: '14pt',
                              fontWeight: 'bold',
                            }}
                          />
                        );
                      }}
                    />
                  ))}
                </ColumnGroup>
              )}

              <Column
                width={150}
                title="Action"
                key="action"
                align="center"
                render={(__, member) => (
                  <UpdateMemberAssignmentsModal
                    memberId={member.id}
                    projectId={this.props.projectId}
                    member={member.user}
                  />
                )}
              />
            </Table>
          );
        }}
      </Query>
    );
  }
}
