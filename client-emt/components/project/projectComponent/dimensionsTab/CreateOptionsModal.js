import { Button, message, Icon, Divider } from 'antd';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { createOptions as CREATE_OPTIONS_MUTATION } from '../../../../graphql/mutations.gql';
import _ from 'lodash';
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
      const { dimension } = this.props;

      createOptions({
        variables: {
          input: {
            names: _.compact(values.names),
            dimensionId: dimension.id,
          },
        },
        update: (
          client,
          {
            data: {
              createOptions: { createdOptions },
            },
          },
        ) => {
          // update dimension options
          client.writeFragment({
            id: `Dimension:${dimension.id}`,
            fragment: gql`
              fragment dimension on Dimension {
                options {
                  id
                  name
                }
              }
            `,
            data: {

              options: createdOptions,
              __typename: 'Dimension',
            },
          });
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
     
        
        <Icon type="plus-circle-o" onClick={this.showModal} style={{cursor: 'pointer', fontSize: 18, verticalAlign: "middle"}} className="add-options-btn"/>

        <Mutation
          mutation={CREATE_OPTIONS_MUTATION}
          onCompleted={data => {
            const { form } = this.formRef.props;
            this.setState({ visible: false });
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
              dimensionName={this.props.dimension.name}
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default CreateOptionsModal;
