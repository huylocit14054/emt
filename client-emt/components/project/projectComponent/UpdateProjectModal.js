import { message, Icon } from 'antd';
import React from 'react';
import { Mutation } from 'react-apollo';
import { updateProject as UPDATE_PROJECT_MUTATION } from '../../../graphql/mutations.gql';
import UpdateProjectForm from './updateProjectModal/UpdateProjectForm';

class UpdateProjectModal extends React.Component {
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

  handleUpdate = updateProject => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      values.id = this.props.projectId;
      updateProject({
        variables: {
          input: {
            attributes: JSON.stringify(values),
          },
        },
      });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <React.Fragment>
        <Icon type="edit" onClick={this.showModal} style={{ cursor: 'pointer', marginLeft: 10 }} />
        <Mutation
          mutation={UPDATE_PROJECT_MUTATION}
          onCompleted={() => {
            this.setState({ visible: false });
            message.success('Project Updated');
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(error => {
              message.error(error.message, 3);
            });
          }}
        >
          {(updateProject, { loading }) => (
            <UpdateProjectForm
              wrappedComponentRef={this.saveFormRef}
              confirmLoading={loading}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onUpdate={() => this.handleUpdate(updateProject)}
              projectId={this.props.projectId}
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default UpdateProjectModal;
