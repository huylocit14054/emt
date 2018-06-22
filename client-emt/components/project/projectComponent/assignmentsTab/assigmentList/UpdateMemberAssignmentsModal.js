import { Button, message, Icon,Tooltip } from 'antd';
import { Mutation } from 'react-apollo';
import _ from 'lodash'
import { Image } from 'cloudinary-react';
import { CLOUD_NAME } from '../../../../../constants';
import {getAssignmentsByProjectId as GET_ASSIGNMENTS_BY_PROJECT_ID} from '../../../../../graphql/queries.gql'
import { updateMemberAssignments as UPDATE_MEMBER_ASSIGNMENTS_MUTATION } from '../../../../../graphql/mutations.gql';
import UpdateMemberAssignmentsForm from './updateMemberAssignmentsModal/UpdateMemberAssignmentsForm';

class UpdateMemberAssignmentsModal extends React.Component {
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = updateMemberAssignments => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log(values);
      values.memberId = parseInt(this.props.memberId);
      updateMemberAssignments({
        variables: {
          input: {
            ...values,
          },
        },
        update: (
          store,
          {
            data: {
                updateMemberAssignments: { updatedMember },
            },
          },
        ) => {
          const data = store.readQuery({
            query: GET_ASSIGNMENTS_BY_PROJECT_ID,
            variables: {
              projectId: this.props.projectId,
            },
          });

          const indexOfUpdatedMember = _.findIndex(data.assignments, {id: this.props.memberId});
          data.assignments.splice(indexOfUpdatedMember, 1, updatedMember);
          store.writeQuery({
            query: GET_ASSIGNMENTS_BY_PROJECT_ID,
            variables: {
              projectId: this.props.projectId,
            },
            data,
          });
        },
          
        },
      );
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
      const {member} = this.props
    return (
      <React.Fragment>
        <div className="editable-cell">
            <div style={{ paddingRight: 24 }}>
                <div>
                  <Image
                      cloudName={CLOUD_NAME}
                      publicId={member.avatar}
                      width="40" height="40"
                      crop="scale"
                      style={{ borderRadius: '50%', border: "1px solid #00b5d0" , marginRight: 20 }}
                  />
                  {member.username}
                </div>
                <Icon
                  type="edit"
                  className="editable-cell-icon"
                  onClick={this.showModal}
                />
            </div>    
        </div>

        <Mutation
          mutation={UPDATE_MEMBER_ASSIGNMENTS_MUTATION}
          onCompleted={data => {
            console.log(data);
            const { form } = this.formRef.props;
            // this.setState({ visible: false });
            message.success('Dimensions Updated');
 
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(({ message }, i) => {
              message.error(message, 3);
            });
          }}
        >
          {(updateMemberAssignments, { loading, data, error }) => (
            <UpdateMemberAssignmentsForm
              wrappedComponentRef={this.saveFormRef}
              confirmLoading={loading}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={() => this.handleCreate(updateMemberAssignments)}
              projectId={this.props.projectId}
              member={this.props.member}
              memberId={this.props.memberId}
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default UpdateMemberAssignmentsModal;
