import { Button, message } from 'antd';
import React from 'react';
import { Mutation } from 'react-apollo';
import { assignDimensionsForMembers as ASSIGN_DIMENSIONS_FOR_MEMBERS_MUTATION } from '../../../../graphql/mutations.gql';
import { getAssignmentsByProjectId as GET_ASSIGNMENTS_BY_PROJECT_ID_QUERY } from '../../../../graphql/queries.gql';
import AssignDimensionsForm from './assignDimensionsModal/AssignDimensionsForm';

class AssignDimensionsModal extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = assignDimensions => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      values.projectId = parseInt(this.props.projectId);
      assignDimensions({
        variables: {
          input: {
            ...values,
          },
        },
        refetchQueries: [
          {
            query: GET_ASSIGNMENTS_BY_PROJECT_ID_QUERY,
            variables: {
              projectId: this.props.projectId,
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
        <Button type="primary" icon="plus" onClick={this.showModal}>
          assign dimensions for members
        </Button>
        <br />
        <br />
        <Mutation
          mutation={ASSIGN_DIMENSIONS_FOR_MEMBERS_MUTATION}
          onCompleted={() => {
            const { form } = this.formRef.props;
            // this.setState({ visible: false });
            message.success('Dimensions Assigned');
            form.resetFields();
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(error => {
              message.error(error.message, 3);
            });
          }}
        >
          {(assignDimensions, { loading }) => (
            <AssignDimensionsForm
              wrappedComponentRef={this.saveFormRef}
              confirmLoading={loading}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={() => this.handleCreate(assignDimensions)}
              projectId={this.props.projectId}
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default AssignDimensionsModal;
