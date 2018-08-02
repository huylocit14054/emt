import { Image } from 'cloudinary-react';
import React from 'react';
import PropTypes from 'prop-types';
import { CLOUD_NAME } from '../constants';

const CloudImage = ({ publicId, width, height, children, style }) => (
  <React.Fragment>
    <Image
      cloudName={CLOUD_NAME}
      publicId={publicId}
      width={width}
      height={height}
      crop="scale"
      style={{
        borderRadius: '50%',
        border: '1px solid #00b5d0',
        ...style,
      }}
    />{' '}
    {children}
  </React.Fragment>
);

CloudImage.propTypes = {
  publicId: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.string,
  style: PropTypes.shape({}),
};

CloudImage.defaultProps = {
  width: 40,
  height: 40,
  style: null,
  children: null,
};
export default CloudImage;
