import { Button, message } from 'antd';
import { Mutation } from 'react-apollo';
import { withRouter } from 'next/router';
import React from 'react';
import _ from 'lodash';
import { createRule as CREATE_RULE_MUTATION } from '../../../../graphql/mutations.gql';
import {
  getRulesByProjectId as GET_RULES_BY_PROJECT_ID_QUERY,
  getAssignmentsOfCurrentMember as GET_ASSIGNMENTS_OF_CURRENT_MEMBER_QUERY,
} from '../../../../graphql/queries.gql';
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

  handleCreate = (createRule, ruleString, projectDimensions) => {
    const { router } = this.props;
    const project_id = router.query.id;
    let rule_string = ruleString;

    console.log(rule_string);
    // Map utm_name to id with 2 difference regex (handle paste scenario)
    _.forEach(projectDimensions, dimension => {
      const dimension_name_regex = `<<${dimension.name}>>`;
      rule_string = _.replace(
        rule_string,
        new RegExp(dimension_name_regex, 'g'),
        `<<${dimension.id}>>`
      );
    });

    console.log(rule_string);

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
      // Refetch current applied rule in UTM tab when create new rule
      refetchQueries: [
        {
          query: GET_ASSIGNMENTS_OF_CURRENT_MEMBER_QUERY,
          variables: {
            projectId: parseInt(project_id),
          },
        },
      ],
    });
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
          onCompleted={() => {
            this.setState({ visible: false });
            this.child.resetState();
            message.success('Rule Created');
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
              onRef={instance => {
                this.child = instance;
              }}
              wrappedComponentRef={this.saveFormRef}
              confirmLoading={loading}
              visible={visible}
              projectId={projectId}
              onCancel={this.handleCancel}
              onCreate={(projectDimensions, rule) =>
                this.handleCreate(createRule, rule, projectDimensions)
              }
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default withRouter(CreateRuleModal);
