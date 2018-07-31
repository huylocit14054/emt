import React from 'react';
import { Query } from 'react-apollo';
import { Table } from 'antd';
import TimeAgo from 'react-timeago';
import { getAllCompaniesOfApplication as GET_ALL_COMPANIES_QUERY } from '../../graphql/queries.gql';
import CloudImage from '../../components/CloudImage';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (_, company) => (
      <a>
        {' '}
        <CloudImage publicId={company.logo} width={40} height={40} style={{ marginRight: 20 }}>
          {company.name}
        </CloudImage>
      </a>
    ),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    align: 'center',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    align: 'center',
  },
  {
    title: 'Phone number',
    dataIndex: 'phoneNumber',
    align: 'center',
  },
  {
    title: 'Members',
    dataIndex: 'companyMemberCount',
    align: 'center',
    render: count => <span>{count || 0}</span>,
  },
  {
    title: 'Joined',
    dataIndex: 'createdAt',
    align: 'center',
    render: date => <TimeAgo date={date} />,
  },
];

const CompanyList = () => (
  <Query query={GET_ALL_COMPANIES_QUERY}>
    {({ loading, error, data }) => {
      if (error) return <div>Error! {error.message}</div>;
      return (
        <Table
          bordered
          columns={columns}
          pagination={{ pageSize: 8 }}
          loading={loading}
          dataSource={data.allCompanies}
          expandedRowRender={company => <p style={{ margin: 0 }}>{company.description}</p>}
          rowKey="id"
        />
      );
    }}
  </Query>
);

export default CompanyList;
