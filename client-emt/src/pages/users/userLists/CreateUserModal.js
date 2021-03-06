import { Button, message } from 'antd';
import { Mutation } from 'react-apollo';
import React from 'react';
import { createUser as CREATE_USER_MUTATION } from '../../../graphql/mutations.gql';
import { getAllUsers as GET_ALL_USERS_QUERY } from '../../../graphql/queries.gql';
import CreateUserForm from './createUserModal/CreateUserForm';

class CreateUserModal extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = createUser => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      createUser({
        variables: {
          input: {
            attributes: JSON.stringify(values),
          },
        },
        update: (
          store,
          {
            data: {
              createUser: { createdUser },
            },
          }
        ) => {
          const data = store.readQuery({ query: GET_ALL_USERS_QUERY });

          data.users.splice(0, 0, createdUser);
          store.writeQuery({
            query: GET_ALL_USERS_QUERY,
            data,
          });
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
        <Button type="primary" icon="plus" onClick={this.showModal}>
          create new user
        </Button>
        <br />
        <br />
        <Mutation
          mutation={CREATE_USER_MUTATION}
          onCompleted={() => {
            const { form } = this.formRef.props;
            // this.setState({ visible: false });
            message.success('User Created');
            form.resetFields();
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(error => {
              message.error(error.message, 3);
            });
          }}
        >
          {(createUser, { loading }) => (
            <CreateUserForm
              wrappedComponentRef={this.saveFormRef}
              confirmLoading={loading}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={() => this.handleCreate(createUser)}
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default CreateUserModal;
