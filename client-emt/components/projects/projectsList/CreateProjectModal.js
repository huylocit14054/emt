import { message, Icon, List, Card } from 'antd';
import React from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import { createProject as CREATE_PROJECT_MUTATION } from '../../../graphql/mutations.gql';
import { getProjectOfCurrentUser as GET_PROJECTS_OF_CURRENT_USER_QUERY } from '../../../graphql/queries.gql';
import CreateProjectForm from './createProjectModal/CreateProjectForm';

const addNewProject = [
  {
    title: 'Add new project',
  },
];
class CreateProjectModal extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = createProject => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      createProject({
        variables: {
          input: {
            attributes: JSON.stringify(values),
          },
        },
        update: (
          store,
          {
            data: {
              createProject: { createdProject },
            },
          }
        ) => {
          const data = store.readQuery({
            query: GET_PROJECTS_OF_CURRENT_USER_QUERY,
          });

          data.projectsAsAdminOfCurrentUser.splice(0, 0, createdProject);
          store.writeQuery({
            query: GET_PROJECTS_OF_CURRENT_USER_QUERY,
            data,
          });
          Router.push(
            `/projectDimensions?id=${createdProject.id}`,
            `/project/${createdProject.id}/dimensions`
          );
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
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={addNewProject}
          renderItem={item => (
            <List.Item>
              <Card className="add-project-btn" onClick={this.showModal}>
                <b>
                  <Icon type="plus" /> {item.title}
                </b>
              </Card>
            </List.Item>
          )}
        />

        <Mutation
          mutation={CREATE_PROJECT_MUTATION}
          onCompleted={() => {
            const { form } = this.formRef.props;
            // this.setState({ visible: false });
            message.success('Project Created');
            form.resetFields();
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(error => {
              message.error(error.message, 3);
            });
          }}
        >
          {(createProject, { loading }) => (
            <CreateProjectForm
              wrappedComponentRef={this.saveFormRef}
              confirmLoading={loading}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={() => this.handleCreate(createProject)}
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default CreateProjectModal;
