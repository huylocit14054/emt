import React from 'react';
import { Table } from 'antd';
import TimeAgo from 'react-timeago';
import _ from 'lodash';
import MyQuery from '../../components/MyQuery';
import { allPlans as ALL_PLANS } from './graphql/queries.gql';
import CreatePlanDrawer from './plansList/PlanDrawer';
import PlanAction from './plansList/PlanAction';

const { Column } = Table;

class PlansList extends React.Component {
  render() {
    return (
      <MyQuery query={ALL_PLANS}>
        {({ allPlans }) => (
          <React.Fragment>
            <CreatePlanDrawer />
            <br />
            {console.log(allPlans)}
            <Table
              dataSource={allPlans}
              rowKey="id"
              expandedRowRender={plan => <p>{plan.description}</p>}
              bordered
            >
              <Column title="Name" dataIndex="name" />
              <Column
                title="Services"
                render={({ services }) =>
                  services.map(service => <p key={service.id}>{service.name}</p>)
                }
              />
              <Column
                title="Created At"
                key="createdAt"
                render={plan => <TimeAgo date={plan.createdAt} />}
              />
              <Column
                title="Action"
                key="action"
                render={(text, record) => (
                  <PlanAction
                    id={record.id}
                    name={record.name}
                    description={record.description}
                    services={record.services}
                  />
                )}
              />
            </Table>
          </React.Fragment>
        )}
      </MyQuery>
    );
  }
}

export default PlansList;
