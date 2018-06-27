import { Button, message } from 'antd';
import { Mutation } from 'react-apollo';
import { withRouter } from 'next/router';
import React from 'react';
import $ from 'jquery';
import { createRule as CREATE_RULE_MUTATION } from '../../../../graphql/mutations.gql';
import { getRulesByProjectId as GET_RULES_BY_PROJECT_ID_QUERY } from '../../../../graphql/queries.gql';
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

  handleCreate = (createRule, rule_string) => {
    const { router } = this.props;
    const project_id = router.query.id;
    createRule({
      variables: {
        input: {
          attributes: JSON.stringify({ rule_string, project_id }),
        },
      },
      update: (
        store,
        {
          data: {
            createRule: { createdRule },
          },
        }
      ) => {
        const data = store.readQuery({
          query: GET_RULES_BY_PROJECT_ID_QUERY,
          variables: {
            projectId: project_id,
          },
        });

        data.projectRules = data.projectRules.map(rule => {
          if (rule.isApplied) {
            return {
              ...rule,
              isApplied: false,
            };
          }
          return rule;
        });
        data.projectRules.splice(0, 0, createdRule);
        store.writeQuery({
          query: GET_RULES_BY_PROJECT_ID_QUERY,
          variables: {
            projectId: project_id,
          },
          data,
        });
      },
    });
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
          mutation={CREATE_RULE_MUTATION}
          onCompleted={data => {
            console.log(data);
            this.setState({ visible: false });
            message.success('Rule Created');
            $('#rule-suggestions').val('');
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
