import React from 'react';
import { Query } from 'react-apollo';
import { Table } from 'antd';
import TimeAgo from 'react-timeago';
import { getAllCompaniesOfApplication as GET_ALL_COMPANIES_QUERY } from '../../graphql/queries.gql';
import CloudImage from '../../components/CloudImage';
import { CompanyDetailsDrawer } from './companyList/CompanyDetailsDrawer';
import renderStatus from '../../utils/renderStatus';
import renderPlan from '../../utils/renderPlan';

const { Column } = Table;

const CompanyList = () => (
  <Query query={GET_ALL_COMPANIES_QUERY}>
    {({ loading, error, data }) => {
      if (error) return <div>Error! {error.message}</div>;
      return (
        <Table
          bordered
          pagination={{ pageSize: 8 }}
          loading={loading}
          dataSource={data.allCompanies}
          expandedRowRender={company => <p style={{ margin: 0 }}>{company.description}</p>}
          rowKey="id"
        >
          <Column
            title="Name"
            key="name"
            render={company => (
              <a>
                {' '}
                <CloudImage
                  publicId={company.logo}
                  width={40}
                  height={40}
                  style={{ marginRight: 20 }}
                >
                  {company.name}
                </CloudImage>
              </a>
            )}
          />
          <Column
            align="center"
            title="Plan"
            dataIndex="plan"
            render={plan => renderPlan(plan.name)}
          />
          <Column align="center" title="Email" dataIndex="email" />
          <Column
            align="center"
            title="Joined"
            dataIndex="createdAt"
            render={date => <TimeAgo date={date} />}
          />
          <Column
            align="center"
            title="Status"
            dataIndex="status"
            render={status => renderStatus(status)}
          />
          <Column
            align="center"
            title="Action"
            key="action"
            render={company => (
              <span>
                <CompanyDetailsDrawer
                  companyId={company.id}
                  companyName={company.name}
                  companyLogo={company.logo}
                />
              </span>
            )}
          />
        </Table>
      );
    }}
  </Query>
);

export default CompanyList;
