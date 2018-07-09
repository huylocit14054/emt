import { Modal } from 'antd';
import React from 'react';
import $ from 'jquery';
import MyQuery from '../../../../MyQuery';
import UpdateRuleInput from '../RuleInput';
import { getDimensionSuggestionsByProjectId as GET_DIMENSION_SUGGESTIONS_BY_PROJECT_ID } from '../../../../../graphql/queries.gql';

const UpdateRuleForm = class extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { value: props.prevRuleString };
  }

  onChange = (_, newValue) => {
    this.setState({ value: newValue });
  };

  onAdd = () => {
    const { ruleId } = this.props;
    const ruleName = `#rule-suggestions-update-${ruleId}`;
    // Focus cursor to the end of input after adding suggestion
    $(ruleName).blur();
    $(ruleName).focus();
  };

  render() {
    const {
      visible,
      onCancel,
      onUpdate,
      confirmLoading,
      projectId,
      ruleId,
      prevRuleString,
    } = this.props;
    const { value } = this.state;
    return (
      <MyQuery query={GET_DIMENSION_SUGGESTIONS_BY_PROJECT_ID} variables={{ projectId }}>
        {({ projectDimensions }) => (
          <Modal
            maskClosable={false}
            title="Update Project UTM Rule"
            confirmLoading={confirmLoading}
            visible={visible}
            okText="update"
            onCancel={() => {
              this.setState({ value: prevRuleString });
              onCancel();
            }}
            cancelText="cancel"
            onOk={() => onUpdate(projectDimensions, value)}
          >
            <div style={{ marginBottom: 5 }}>
              <i>landing_page_url?</i>
            </div>
            <UpdateRuleInput
              ruleId={ruleId}
              onChange={this.onChange}
              onAdd={this.onAdd}
              value={value}
              data={projectDimensions.map(dimension => ({
                ...dimension,
                display: dimension.name,
              }))}
            />
          </Modal>
        )}
      </MyQuery>
    );
  }
};

export default UpdateRuleForm;
