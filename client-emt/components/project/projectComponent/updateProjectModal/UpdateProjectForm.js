import { Form, Input, Modal, Button, Popconfirm, message } from 'antd';
import { Query, Mutation } from 'react-apollo';
import Router from 'next/router';
import {
  getProjectById as GET_PROJECT_BY_ID,
  getProjectOfCurrentUser as GET_PROJECTS_OF_CURRENT_USER,
} from '../../../../graphql/queries.gql';
import { deteteProject as DELETE_PROJECT } from '../../../../graphql/mutations.gql';

const { TextArea } = Input;
const FormItem = Form.Item;

// if project has more information, query project again with more info instead of using local state
const UpdateProjectForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onUpdate, form, confirmLoading, projectId } = this.props;

      const { getFieldDecorator } = form;

      return (
        <Query query={GET_PROJECT_BY_ID} variables={{ id: parseInt(projectId) }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            const { project } = data;
            return (
              <Modal
                confirmLoading={confirmLoading}
                visible={visible}
                okText="update"
                onCancel={onCancel}
                cancelText="cancel"
                onOk={onUpdate}
              >
                <Form layout="vertical" onSubmit={onUpdate}>
                  <FormItem label="name">
                    {getFieldDecorator('name', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input the name of project!',
                        },
                      ],
                      initialValue: project.name,
                    })(<Input />)}
                  </FormItem>
                  <FormItem label="description">
                    {getFieldDecorator('description', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input the description of project!',
                        },
                      ],
                      initialValue: project.description,
                    })(<TextArea rows={4} />)}
                  </FormItem>
                </Form>

                <Mutation
                  mutation={DELETE_PROJECT}
                  variables={{
                    input: {
                      projectId: parseInt(projectId),
                    },
                  }}
                  onCompleted={() => {
                    message.success('Project Deleted', 3);
                    Router.push('/');
                  }}
                  onError={error => {
                    // If you want to send error to external service?
                    error.graphQLErrors.map(({ message }, i) => {
                      message.error(message, 3);
                    });
                  }}
                  refetchQueries={() => [
                    {
                      query: GET_PROJECTS_OF_CURRENT_USER,
                    },
                  ]}
                >
                  {(deleteProject, { loading }) => (
                    <Popconfirm
                      title="Are you sure delete this project?"
                      onConfirm={deleteProject}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button
                        type="danger"
                        icon="delete"
                        style={{ width: '100%' }}
                        loading={loading}
                      >
                        Delete project
                      </Button>
                    </Popconfirm>
                  )}
                </Mutation>
              </Modal>
            );
          }}
        </Query>
      );
    }
  }
);

export default UpdateProjectForm;
