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

  onBlur = () => (_, clickedOnSuggestion) => {
    if (!clickedOnSuggestion) {
      console.log('finished editing');
    }
  };

  onAdd = () => {
    // Focus cursor to the end of input after adding suggestion
    $('#rule-suggestions').blur();
    $('#rule-suggestions').focus();
  };

  render() {
    const { visible, onCancel, onUpdate, confirmLoading, projectId } = this.props;
    const { value } = this.state;
    return (
      <Modal
        title="Update Project UTM Rule"
        confirmLoading={confirmLoading}
        visible={visible}
        okText="update"
        onCancel={onCancel}
        cancelText="cancel"
        onOk={() => onUpdate(value)}
      >
        <MyQuery query={GET_DIMENSION_SUGGESTIONS_BY_PROJECT_ID} variables={{ projectId }}>
          {({ projectDimensions }) => (
            <UpdateRuleInput
              onChange={this.onChange}
              onBlur={this.onBlur}
              onAdd={this.onAdd}
              value={value}
              data={projectDimensions.map(dimension => ({
                ...dimension,
                display: dimension.name,
              }))}
            />
          )}
        </MyQuery>
      </Modal>
    );
  }
};

export default UpdateRuleForm;
