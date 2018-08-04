import React from 'react';

import { Table } from 'antd';
import humanizeString from 'humanize-string';
import { companyMembers as GET_COMPANY_MEMBERS } from '../../graphql/queries.gql';
import MyQuery from '../../components/MyQuery';

import CloudImage from '../../components/CloudImage';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = value => {
  const obj = {
    children: value,
    props: {},
  };
  return obj;
};

const renderArray = (_, record) => {
  if (record.roles.length === 0) return 'Staff';
  return record.roles.map(r => humanizeString(r)).join(', ');
};

const columns = [
  {
    title: 'Userame',
    dataIndex: 'username',
    render: (_, record) => (
      <a>
        {' '}
        <CloudImage
          publicId={record.user.avatar}
          width={40}
          height={40}
          style={{ marginRight: 20 }}
        >
          {record.user.username}
        </CloudImage>
      </a>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: renderContent,
    align: 'center',
  },
  {
    title: 'Roles',
    dataIndex: 'roles',
    render: renderArray,
    align: 'center',
  },
];

const MembersList = ({ companyId }) => (
  <MyQuery query={GET_COMPANY_MEMBERS} variables={{ companyId: parseInt(companyId) }}>
    {({ companyMembers }) => (
      <Table
        columns={columns}
        dataSource={companyMembers}
        bordered
        rowKey="id"
        style={{ marginTop: '15px' }}
      />
    )}
  </MyQuery>
);

export default MembersList;
