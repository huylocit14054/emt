import React from 'react';
import { Query } from 'react-apollo';
import { Table } from 'antd';
import TimeAgo from 'react-timeago';

import { Image } from 'cloudinary-react';
import { CLOUD_NAME } from '../../constants';

import { getAllCompaniesOfApplication as GET_ALL_COMPANIES_QUERY } from '../../graphql/queries.gql';

const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
    render: (_, user) => (
      <a>
        {' '}
        <Image
          cloudName={CLOUD_NAME}
          publicId={user.avatar}
          width="40"
          height="40"
          crop="scale"
          style={{ borderRadius: '50%', border: '1px solid #00b5d0', marginRight: 20 }}
        />
        {user.username}
      </a>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Created at',
    dataIndex: 'createdAt',
    render: date => <TimeAgo date={date} />,
  },
];

const ListOfUsers = () => (
  <Query query={GET_ALL_COMPANIES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div className="loading-text">Loading...</div>;
      if (error) return <div>Error! {error.message}</div>;
      return (
        <Table
          bordered
          columns={columns}
          pagination={{ pageSize: 8 }}
          loading={loading}
          dataSource={data.users}
          rowKey="id"
        />
      );
    }}
  </Query>
);

export default ListOfUsers;
