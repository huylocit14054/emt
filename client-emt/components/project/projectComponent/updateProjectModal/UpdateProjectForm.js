import { Form, Input, Modal, Rate } from 'antd';
import { Query } from 'react-apollo';
import { getProjectById as GET_PROJECT_BY_ID } from '../../../../graphql/queries.gql';

const { TextArea } = Input;
const FormItem = Form.Item;

// if project has more information, query project again with more info instead of using local state
const UpdateProjectForm = Form.create()(class extends React.Component {
  render() {
    const {
      visible, onCancel, onUpdate, form, confirmLoading, projectId,
    } = this.props;

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
              </Modal>
            );
          }}
      </Query>
    );
  }
});

export default UpdateProjectForm;
