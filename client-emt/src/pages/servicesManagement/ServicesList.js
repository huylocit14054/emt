import React from 'react';
import CreateServiceDrawer from './servicesList/ServiceDrawer';
import ListOfService from './servicesList/ListOfService';

class ServicesList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CreateServiceDrawer />
        <ListOfService />
      </React.Fragment>
    );
  }
}

export default ServicesList;
