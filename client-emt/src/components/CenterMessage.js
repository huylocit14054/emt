import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const CenterMessage = ({ icon, text }) => (
  <div className="message-layout">
    <h1>
      <Icon type={icon} />
      <span>{text}</span>
    </h1>
  </div>
);

CenterMessage.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CenterMessage;
