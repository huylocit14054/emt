import { Table, Icon, Divider, Tag } from 'antd';
import { Query } from 'react-apollo';

import _ from 'lodash'

import { getAssignmentsByProjectId as GET_ASSIGNMENTS_BY_PROJECT_ID } from '../../../../graphql/queries.gql';
import UpdateMemberAssignmentsModal from './assigmentList/UpdateMemberAssignmentsModal'

const { Column, ColumnGroup } = Table

export default class AssignmentsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <Query query={GET_ASSIGNMENTS_BY_PROJECT_ID} variables={{projectId: this.props.projectId}}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            return (
              <Table
                pagination={{ pageSize: 5 }}
                loading={loading}
                dataSource={data.assignments}
                rowKey="id"
                bordered
              >
              <Column
              title="Username"
              key="username"
              render={(text, member) => (
               
                  <UpdateMemberAssignmentsModal memberId={member.id} projectId={this.props.projectId} member={member.user}/>
                
              )}
            />
            <ColumnGroup title="Dimensions">
            {data.projectDimensions.map(dimension => (
              <Column
              title={dimension.name}
              key={dimension.id}
              render={member => {
                if (_.includes(member.authorizedDimensions, dimension.id.toString())) {
                    switch (dimension.category) {
                      case 'selection':
                      return (
                        
                          _.find(member.authorizations, {dimension: {id: dimension.id}}).optionAuthorizations.map(auth => (
                            <div>
                            <Tag color="#e8e8e8" style={{color: 'black', margin: "2%"}} key={auth.option.id}>{auth.option.name}</Tag>
                            </div>
                              
                            
                            
                           
                        ))
                      )
                        
                                          
                        break;
                      case 'input':
                        return (
                          <Icon type="check" style={{color: '#52c41a', fontSize: '14pt', marginLeft: '40%', fontWeight: 'bold'}}/>
                        )
                      default:
                        break;
                    }
                }
                return (
                  <Icon type="close" style={{color: '#f5222d', marginLeft: '40%', fontSize: '14pt', fontWeight: 'bold'}}/>
                )
              }}
            />
            ))}
            
           
            </ColumnGroup>
    
              </Table>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}
