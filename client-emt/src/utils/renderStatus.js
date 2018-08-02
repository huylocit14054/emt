import { Tag } from 'antd';
import React from 'react';
import { STATUS_ACTIVE, STATUS_RESTRICTED } from '../constants';

const renderStatus = status => {
  switch (status) {
    case STATUS_ACTIVE:
      return <Tag color="green">{STATUS_ACTIVE}</Tag>;

    case STATUS_RESTRICTED:
      return <Tag color="volcano">{STATUS_RESTRICTED}</Tag>;
    default:
      break;
  }
};

export default renderStatus;
