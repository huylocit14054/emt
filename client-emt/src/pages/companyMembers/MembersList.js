import React from 'react';

import { Table } from 'antd';
import { getCompanyMember as GET_COMPANY_MEMBERS } from '../../graphql/queries.gql';
import MyQuery from '../../components/MyQuery';
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  return obj;
};

const renderArray = (_, record) => {
  return record.roles.join(', ').replace(/_/g, ' ');
};

const columns = [
  {
    title: 'Userame',
    dataIndex: 'user.username',
    render: renderContent,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: renderContent,
  },
  {
    title: 'Roles',
    dataIndex: 'roles',
    render: renderArray,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
];

const MembersList = ({ companyId }) => (
  <React.Fragment>
    <MyQuery query={GET_COMPANY_MEMBERS} variables={{ companyId: parseInt(companyId) }}>
      {({ companyMembers }) => (
        <Table columns={columns} dataSource={companyMembers} bordered rowKey="id" />
      )}
    </MyQuery>
  </React.Fragment>
);

export default MembersList;
