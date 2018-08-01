import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import humanizeString from 'humanize-string';
import DescriptionItem from './DescriptionItem';

const ListElementsInObject = ({ object }) => (
  <React.Fragment>
    {Object.keys(object).map((key, i) => (
      <Row key={i}>
        <Col span={12}>
          <DescriptionItem title={humanizeString(key)} content={object[key]} />
        </Col>
      </Row>
    ))}
  </React.Fragment>
);

ListElementsInObject.propTypes = {
  object: PropTypes.shape({}).isRequired,
};

export default ListElementsInObject;
