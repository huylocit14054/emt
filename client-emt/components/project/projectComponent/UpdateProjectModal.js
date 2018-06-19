import { Button, message, Icon, List, Card } from 'antd';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
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
    this.setState({ visible: false });
  };
  handleUpdate = updateProject => {
    const form = this.formRef.props.form;
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
          onCompleted={data => {
            console.log(data);
            const form = this.formRef.props.form;
            this.setState({ visible: false });
            message.success('Project Updated');
            form.resetFields();
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(({ message }, i) => {
              message.error(message, 3);
            });
          }}
        >
          {(updateProject, { loading, data, error }) => (
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
