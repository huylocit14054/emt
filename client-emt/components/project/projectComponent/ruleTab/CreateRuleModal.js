import { Button, message } from 'antd';
import { Mutation } from 'react-apollo';
import { withRouter } from 'next/router';
import React from 'react';
import { createUser as CREATE_USER_MUTATION } from '../../../../graphql/mutations.gql';
import CreateRuleForm from './createRuleModal/CreateRuleForm';

class CreateRuleModal extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = (createRule, rule) => {
    const { router } = this.props;
    const projectId = router.query.id;
    console.log(rule);
    console.log(projectId);
    // createRule({
    //   variables: {
    //     input: {
    //       attributes: JSON.stringify(values),
    //     },
    //   },
    //   update: (
    //     store,
    //     {
    //       data: {
    //         createRule: { createdRule },
    //       },
    //     }
    //   ) => {
    //     const data = store.readQuery({ query: GET_ALL_USERS_QUERY });

    //     data.rules.splice(0, 0, createdRule);
    //     store.writeQuery({
    //       query: GET_ALL_USERS_QUERY,
    //       data,
    //     });
    //   },
    // });
    // });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    const { router } = this.props;
    const projectId = router.query.id;
    const { visible } = this.state;
    return (
      <React.Fragment>
        <Button type="primary" icon="plus" onClick={this.showModal}>
          create new rule
        </Button>
        <br />
        <br />
        <Mutation
          mutation={CREATE_USER_MUTATION}
          onCompleted={data => {
            console.log(data);
            const { form } = this.formRef.props;
            // this.setState({ visible: false });
            message.success('Rule Created');
            form.resetFields();
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(error => {
              message.error(error.message, 3);
            });
          }}
        >
          {(createRule, { loading }) => (
            <CreateRuleForm
              wrappedComponentRef={this.saveFormRef}
              confirmLoading={loading}
              visible={visible}
              projectId={projectId}
              onCancel={this.handleCancel}
              onCreate={rule => this.handleCreate(createRule, rule)}
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default withRouter(CreateRuleModal);
