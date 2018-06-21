import { Button, message, Icon } from 'antd';
import { Mutation } from 'react-apollo';
import { assignDimensionsForMembers as ASSIGN_DIMENSIONS_FOR_MEMBERS_MUTATION } from '../../../../graphql/mutations.gql';
// import { getDimensionsByProjectId as GET_DIMENSIONS_BY_PROJECT_ID_QUERY } from '../../../../graphql/queries.gql';
import AssignDimensionsForm from './assignDimensionsModal/AssignDimensionsForm';

class AssignDimensionsModal extends React.Component {
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = assignDimensions => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log(values);
      values.projectId = parseInt(this.props.projectId);
      assignDimensions({
        variables: {
          input: {
            ...values,
          },
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
          assign dimensions for members
        </Button>
        <br />
        <br />
        <Mutation
          mutation={ASSIGN_DIMENSIONS_FOR_MEMBERS_MUTATION}
          onCompleted={data => {
            console.log(data);
            const { form } = this.formRef.props;
            // this.setState({ visible: false });
            message.success('Dimensions Assigned');
            form.resetFields();
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(({ message }, i) => {
              message.error(message, 3);
            });
          }}
        >
          {(assignDimensions, { loading, data, error }) => (
            <AssignDimensionsForm
              wrappedComponentRef={this.saveFormRef}
              confirmLoading={loading}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={() => this.handleCreate(assignDimensions)}
              projectId={this.props.projectId}
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default AssignDimensionsModal;
