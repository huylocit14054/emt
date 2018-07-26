import React from 'react';
import PropTypes from 'prop-types';
import MyQuery from '../MyQuery';
import CloudImage from '../CloudImage';
import { getCompanyById as GET_COMPANY_BY_ID } from '../../graphql/queries.gql';

const CompanyName = ({ companyId }) => (
  <MyQuery query={GET_COMPANY_BY_ID} variables={{ companyId }}>
    {({ company }) => (
      <div
        style={{
          color: 'white',
          marginTop: '15%',
          marginBottom: '15%',
          textAlign: 'center',
          padding: 10,
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <CloudImage
            publicId={company.logo}
            width={40}
            height={40}
            style={{ marginRight: 7, border: '2px solid white' }}
          />
        </div>

        {company.name}
      </div>
    )}
  </MyQuery>
);

CompanyName.propTypes = {
  companyId: PropTypes.number.isRequired,
};
export default CompanyName;
