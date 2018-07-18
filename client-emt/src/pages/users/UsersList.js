import React from 'react';
import { Table } from 'antd';
import { Query } from 'react-apollo';
import TimeAgo from 'react-timeago';
import { Image } from 'cloudinary-react';
import { CLOUD_NAME } from '../../constants';
import { getAllUsers as GET_ALL_USERS_QUERY } from '../../graphql/queries.gql';
import CreateUserModal from './userLists/CreateUserModal';

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

export default class UsersList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CreateUserModal />
        <Query query={GET_ALL_USERS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
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
      </React.Fragment>
    );
  }
}
