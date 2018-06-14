import { Table, Icon, Divider } from "antd";
import { Query } from "react-apollo";
import TimeAgo from "react-timeago";
import { getAllUsers as GET_ALL_USERS_QUERY } from "../../graphql/queries.gql";
import CreateUserModal from "./userLists/CreateUserModal";
const columns = [
  {
    title: "Username",
    dataIndex: "username",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Email",
    dataIndex: "email"
  },
  {
    title: "Created at",
    dataIndex: "createdAt",
    render: date => <TimeAgo date={date} />
  }
];

import React, { Component } from "react";

export default class UsersList extends Component {
  render() {
    return (
      <React.Fragment>
        <CreateUserModal />
        <Query query={GET_ALL_USERS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
              <Table columns={columns} dataSource={data.users} rowKey="id" />
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}
