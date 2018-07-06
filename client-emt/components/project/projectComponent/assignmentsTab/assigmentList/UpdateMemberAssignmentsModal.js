import { message } from 'antd';
import React from 'react';
import { Mutation } from 'react-apollo';
import _ from 'lodash';
import {
  getAssignmentsByProjectId as GET_ASSIGNMENTS_BY_PROJECT_ID,
  getAssignmentsByMemberId as GET_ASSIGNMENTS_BY_MEMBER_ID_QUERY,
  getAssignmentsOfCurrentMember as GET_ASSIGNMENTS_OF_CURRENT_MEMBER_QUERY,
} from '../../../../../graphql/queries.gql';
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
    const { form } = this.formRef.props;
    form.resetFields();
    this.setState({ visible: false });
  };

  handleCreate = updateMemberAssignments => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

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
          }
        ) => {
          const data = store.readQuery({
            query: GET_ASSIGNMENTS_BY_PROJECT_ID,
            variables: {
              projectId: this.props.projectId,
            },
          });

          const indexOfUpdatedMember = _.findIndex(data.assignments, { id: this.props.memberId });
          data.assignments.splice(indexOfUpdatedMember, 1, updatedMember);
          store.writeQuery({
            query: GET_ASSIGNMENTS_BY_PROJECT_ID,
            variables: {
              projectId: this.props.projectId,
            },
            data,
          });
        },
        refetchQueries: [
          {
            query: GET_ASSIGNMENTS_BY_MEMBER_ID_QUERY,
            variables: {
              memberId: parseInt(this.props.memberId),
            },
          },
          // Update assignments for current member in utm builder tab right away
          {
            query: GET_ASSIGNMENTS_OF_CURRENT_MEMBER_QUERY,
            variables: {
              projectId: parseInt(this.props.projectId),
            },
          },
        ],
      });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <React.Fragment>
        <a onClick={this.showModal}>Edit</a>

        <Mutation
          mutation={UPDATE_MEMBER_ASSIGNMENTS_MUTATION}
          onCompleted={() => {
            this.setState({ visible: false });
            message.success('Dimensions Updated');
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(error => {
              message.error(error.message, 3);
            });
          }}
        >
          {(updateMemberAssignments, { loading }) => (
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
