import React from 'react';
import PropTypes from 'prop-types';
import MyQuery from '../MyQuery';
import CloudImage from '../CloudImage';

const CompanyName = () => (
  <div style={{ color: 'white', marginTop: '15%', marginBottom: '15%', textAlign: 'center' }}>
    <CloudImage
      publicId="default-avatar_wbcfln"
      width={40}
      height={40}
      style={{ marginRight: 7, border: '2px solid white' }}
    >
      Company Name
    </CloudImage>
  </div>
);

export default CompanyName;
