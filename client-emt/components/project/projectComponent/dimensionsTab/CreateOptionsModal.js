import { message, Icon } from 'antd';
import React from 'react';
import { withRouter } from 'next/router';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';
import { createOptions as CREATE_OPTIONS_MUTATION } from '../../../../graphql/mutations.gql';
import { getProjectDimensionsTreeByProjectId as GET_PROJECT_DIMENSIONS_TREE_BY_PROJECT_ID } from '../../../../graphql/queries.gql';
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
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const { dimension } = this.props;
      const projectId = this.props.router.query.id;

      createOptions({
        variables: {
          input: {
            names: _.compact(values.names),
            dimensionId: dimension.id,
          },
        },
        refetchQueries: [
          {
            query: GET_PROJECT_DIMENSIONS_TREE_BY_PROJECT_ID,
            variables: { projectId: parseInt(projectId) },
          },
        ],
        update: (
          client,
          {
            data: {
              createOptions: { createdOptions },
            },
          }
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
        <Icon
          type="plus-circle-o"
          onClick={this.showModal}
          style={{ cursor: 'pointer', fontSize: 18, verticalAlign: 'middle' }}
          className="add-options-btn"
        />

        <Mutation
          mutation={CREATE_OPTIONS_MUTATION}
          onCompleted={() => {
            const { form } = this.formRef.props;
            this.setState({ visible: false });
            message.success('Options Added');
            form.resetFields();
          }}
          onError={error => {
            // If you want to send error to external service?
            error.graphQLErrors.map(error => {
              message.error(error.message, 3);
            });
          }}
        >
          {(createOptions, { loading }) => (
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

export default withRouter(CreateOptionsModal);
