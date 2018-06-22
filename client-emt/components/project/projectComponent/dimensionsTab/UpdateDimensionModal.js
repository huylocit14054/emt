import { Button, message, Icon } from 'antd';
import { Mutation } from 'react-apollo';
import { updateDimension as UPDATE_DIMENSION_MUTATION } from '../../../../graphql/mutations.gql';
import UpdateDimensionForm from './updateDimensionModal/UpdateDimensionForm';

class UpdateDimensionModal extends React.Component {
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleUpdate = updateDimension => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      values.id = this.props.dimension.id;
      updateDimension({
        variables: {
          input: {
            attributes: JSON.stringify(values),
          },
        },
      });
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    const { dimension } = this.props
    return (
      <React.Fragment>
        
      <div className="editable-cell">
        <div style={{ paddingRight: 24 }}>
            <span>{dimension.name}</span>
            <Icon
              type="edit"
              className="editable-cell-icon"
              onClick={this.showModal}
            />
        </div>    
      </div>

        <Mutation
          mutation={UPDATE_DIMENSION_MUTATION}
          onCompleted={data => {
            console.log(data);
            const { form } = this.formRef.props;
            this.setState({ visible: false });
            message.success('Dimension Updated');
            form.resetFields();
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(({ message }, i) => {
              message.error(message, 3);
            });
          }}
        >
          {(updateDimension, { loading, data, error }) => (
            <UpdateDimensionForm
              wrappedComponentRef={this.saveFormRef}
              confirmLoading={loading}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onUpdate={() => this.handleUpdate(updateDimension)}
              dimension={this.props.dimension}
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default UpdateDimensionModal;
