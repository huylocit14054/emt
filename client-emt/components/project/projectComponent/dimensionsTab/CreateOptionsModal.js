import { Button, message, Icon } from 'antd';
import { Mutation } from 'react-apollo';
import { createOptions as CREATE_OPTIONS_MUTATION } from '../../../../graphql/mutations.gql';

import CreateOptionsForm from './createOptionsModal/CreateOptionsForm';

class CreateOptionsModal extends React.Component {
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = createOptions => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log(values);
      //   createOptions({
      //     variables: {
      //       input: {
      //         names: values,
      //         dimensionId: this.props.dimensionId,
      //       },
      //     },
      // update: (
      //   store,
      //   {
      //     data: {
      //       createOptions: { createdOptions },
      //     },
      //   },
      // ) => {
      //   const data = store.readQuery({ query: GET_ALL_OPTIONSS_QUERY });

      //   data.optionss.splice(0, 0, createdOptions);
      //   store.writeQuery({
      //     query: GET_ALL_OPTIONSS_QUERY,
      //     data,
      //   });
      // },
      //   });
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    return (
      <React.Fragment>
        <Button type="primary" icon="plus" onClick={this.showModal}>
          Add Options
        </Button>
        <br />
        <br />
        <Mutation
          mutation={CREATE_OPTIONS_MUTATION}
          onCompleted={data => {
            console.log(data);
            const { form } = this.formRef.props;
            // this.setState({ visible: false });
            message.success('Options Added');
            form.resetFields();
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(({ message }, i) => {
              message.error(message, 3);
            });
          }}
        >
          {(createOptions, { loading, data, error }) => (
            <CreateOptionsForm
              wrappedComponentRef={this.saveFormRef}
              confirmLoading={loading}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={() => this.handleCreate(createOptions)}
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default CreateOptionsModal;
