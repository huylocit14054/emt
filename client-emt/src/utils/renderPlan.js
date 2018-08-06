import { Tag } from 'antd';
import React from 'react';
import { PREMIUM, STANDARD_UTM, STANDARD_OMS } from '../constants';

const renderPlan = plan => {
  switch (plan) {
    case PREMIUM:
      return <Tag color="gold">{PREMIUM}</Tag>;

    case STANDARD_UTM:
      return <Tag color="purple">{STANDARD_UTM}</Tag>;

    case STANDARD_OMS:
      return <Tag color="geekblue">{STANDARD_OMS}</Tag>;
    default:
      return <Tag color="cyan">{plan}</Tag>;
  }
};

export default renderPlan;
