import { Form, Modal } from 'antd';
import React from 'react';
import $ from 'jquery';
import MyQuery from '../../../../MyQuery';
import CreateRuleInput from './createRuleForm/CreateRuleInput';
import { getDimensionSuggestionsByProjectId as GET_DIMENSION_SUGGESTIONS_BY_PROJECT_ID } from '../../../../../graphql/queries.gql';

const CreateRuleForm = Form.create()(
  class extends React.Component {
    state = {
      value: '',
    };

    onChange = (_, newValue) => {
      this.setState({ value: newValue });
    };

    onBlur = () => (ev, clickedOnSuggestion) => {
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
      const { visible, onCancel, onCreate, confirmLoading, projectId } = this.props;
      const { value } = this.state;
      return (
        <Modal
          title="Create Project UTM Rule"
          confirmLoading={confirmLoading}
          visible={visible}
          okText="create"
          onCancel={onCancel}
          cancelText="cancel"
          onOk={() => onCreate(value)}
        >
          <MyQuery query={GET_DIMENSION_SUGGESTIONS_BY_PROJECT_ID} variables={{ projectId }}>
            {({ projectDimensions }) => (
              <CreateRuleInput
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
  }
);

export default CreateRuleForm;
