import { Button, message } from 'antd';
import React from 'react';
import { Mutation } from 'react-apollo';
import { createDimension as CREATE_DIMENSION_MUTATION } from '../../../../graphql/mutations.gql';
import {
  getProjectDimensionsTreeByProjectId as GET_PROJECT_DIMENSIONS_TREE_BY_PROJECT_ID,
  getDimensionsByProjectId as GET_DIMENSIONS_BY_PROJECT_ID_QUERY,
} from '../../../../graphql/queries.gql';
import CreateDimensionForm from './createDimensionModal/CreateDimensionForm';

class CreateDimensionModal extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = createDimension => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      values.project_id = this.props.projectId;
      createDimension({
        variables: {
          input: {
            attributes: JSON.stringify(values),
          },
        },
        update: (
          store,
          {
            data: {
              createDimension: { createdDimension },
            },
          }
        ) => {
          const data = store.readQuery({
            query: GET_DIMENSIONS_BY_PROJECT_ID_QUERY,
            variables: {
              projectId: this.props.projectId,
            },
          });

          data.projectDimensions.splice(0, 0, createdDimension);
          store.writeQuery({
            query: GET_DIMENSIONS_BY_PROJECT_ID_QUERY,
            variables: {
              projectId: this.props.projectId,
            },
            data,
          });
        },
        refetchQueries: [
          {
            query: GET_PROJECT_DIMENSIONS_TREE_BY_PROJECT_ID,
            variables: {
              projectId: parseInt(this.props.projectId),
            },
          },
        ],
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
          create new dimension
        </Button>
        <br />
        <br />
        <Mutation
          mutation={CREATE_DIMENSION_MUTATION}
          onCompleted={() => {
            const { form } = this.formRef.props;
            // this.setState({ visible: false });
            message.success('Dimension Created');
            form.resetFields();
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(error => {
              message.error(error.message, 3);
            });
          }}
        >
          {(createDimension, { loading }) => (
            <CreateDimensionForm
              wrappedComponentRef={this.saveFormRef}
              confirmLoading={loading}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={() => this.handleCreate(createDimension)}
            />
          )}
        </Mutation>
      </React.Fragment>
    );
  }
}

export default CreateDimensionModal;
