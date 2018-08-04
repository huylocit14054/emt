import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

const DescriptionItem = ({ title, content }) => {
  return (
    <div
      style={{
        fontSize: 14,
        lineHeight: '22px',
        marginBottom: 7,
        color: 'rgba(0,0,0,0.65)',
      }}
    >
      <p
        style={{
          marginRight: 8,
          display: 'inline-block',
          color: 'rgba(0,0,0,0.85)',
        }}
      >
        {title}:
      </p>
      {content || <Tag>Not Provided</Tag>}
    </div>
  );
};

DescriptionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
};

DescriptionItem.defaultProps = {
  content: null,
};
export default DescriptionItem;
