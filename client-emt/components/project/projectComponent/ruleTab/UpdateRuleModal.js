import { message } from 'antd';
import { Mutation } from 'react-apollo';
import { withRouter } from 'next/router';
import React from 'react';
import _ from 'lodash';
import { updateRuleString as UPDATE_RULE_MUTATION } from '../../../../graphql/mutations.gql';
import UpdateRuleForm from './updateRuleModal/UpdateRuleForm';

class UpdateRuleModal extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleUpdate = (updateRule, ruleString, projectDimensions) => {
    const { rule } = this.props;
    const { id } = rule;
    let rule_string = ruleString;

    // Map utm_names to ids
    _.forEach(projectDimensions, dimension => {
      rule_string = _.replace(rule_string, dimension.name, dimension.id);
    });
    updateRule({
      variables: {
        input: {
          attributes: JSON.stringify({ id, rule_string }),
        },
      },
      //   update: (
      //     store,
      //     {
      //       data: {
      //         updateRuleString: { updatedRule },
      //       },
      //     }
      //   ) => {
      //     const data = store.readQuery({
      //       query: GET_RULES_BY_PROJECT_ID_QUERY,
      //       variables: {
      //         projectId: project_id,
      //       },
      //     });

      //     data.projectRules = data.projectRules.map(rule => {
      //       if (rule.isApplied) {
      //         return {
      //           ...rule,
      //           isApplied: false,
      //         };
      //       }
      //       return rule;
      //     });
      //     data.projectRules.splice(0, 0, updatedRule);
      //     store.writeQuery({
      //       query: GET_RULES_BY_PROJECT_ID_QUERY,
      //       variables: {
      //         projectId: project_id,
      //       },
      //       data,
      //     });
      //     console.log($('#rule-suggestions').val());
      //   },
    });
  };

  render() {
    const { router, rule } = this.props;
    const projectId = router.query.id;
    const { visible } = this.state;
    return (
      <React.Fragment>
        <a onClick={this.showModal}>Edit</a>

        <Mutation
          mutation={UPDATE_RULE_MUTATION}
          onCompleted={data => {
            console.log(data);
            this.setState({ visible: false });
            message.success('Rule Updated');
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(error => {
              message.error(error.message, 3);
            });
          }}
        >
          {(updateRule, { loading }) => (
            <UpdateRuleForm
              wrappedComponentRef={this.saveFormRef}
              confirmLoading={loading}
              visible={visible}
              ruleId={rule.id}
              prevRuleString={rule.ruleStringToDisplay}
              projectId={projectId}
              onCancel={this.handleCancel}
              onUpdate={(projectDimensions, newRuleString) =>
                this.handleUpdate(updateRule, newRuleString, projectDimensions)
              }
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default withRouter(UpdateRuleModal);
