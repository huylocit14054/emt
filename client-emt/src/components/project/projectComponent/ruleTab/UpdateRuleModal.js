import { message } from 'antd';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
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

    // Map utm_name to id
    _.forEach(projectDimensions, dimension => {
      const dimension_name_regex = `{{${dimension.name}}}`;
      rule_string = _.replace(
        rule_string,
        new RegExp(dimension_name_regex, 'g'),
        `{{${dimension.id}}}`
      );
    });
    updateRule({
      variables: {
        input: {
          attributes: JSON.stringify({ id, rule_string }),
        },
      },
    });
  };

  render() {
    const { match, rule } = this.props;
    const { projectId } = match.params;
    const { visible } = this.state;
    return (
      <React.Fragment>
        <a onClick={this.showModal}>Edit</a>

        <Mutation
          mutation={UPDATE_RULE_MUTATION}
          onCompleted={() => {
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
