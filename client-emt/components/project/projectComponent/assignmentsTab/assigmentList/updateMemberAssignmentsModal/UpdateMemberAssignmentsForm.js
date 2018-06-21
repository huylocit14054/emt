import { Form, Input, Modal, Rate, Select, Icon, TreeSelect } from 'antd';
import Highlighter from 'react-highlight-words';
import { withApollo, Query } from 'react-apollo';
import { Image } from 'cloudinary-react';
import { CLOUD_NAME } from '../../../../../../constants';
import {
    getAssignmentsByMemberId as GET_ASSIGNMENTS_BY_MEMBER_ID_QUERY,
  getProjectDimensionsTreeByProjectId as GET_PROJECT_DIMENSIONS_TREE_BY_PROJECT_ID,
} from '../../../../../../graphql/queries.gql';

const { TextArea } = Input;
const FormItem = Form.Item;
const { Option } = Select;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const UpdateMemberAssignmentsForm = Form.create()(class extends React.Component {
    state = {
        valueAssigned: []
    }
    render() {
      const {
        visible, onCancel, onCreate, form, confirmLoading, projectId, member, memberId
      } = this.props;

      const { getFieldDecorator } = form;

      return (
        <Modal
          confirmLoading={confirmLoading}
          title={<React.Fragment>
            <Image
            cloudName={CLOUD_NAME}
            publicId={member.avatar}
            width="25"
            height="25"
            crop="scale"
            style={{ borderRadius: '50%', border: "1px solid #00b5d0" , marginRight: 10 }}
          />
            {member.username}
            </React.Fragment> 
             }
          visible={visible}
          closable={false}
          okText="update"
          onCancel={onCancel}
          cancelText="cancel"
          onOk={onCreate}
        > 
          <Form layout="vertical" onSubmit={onCreate}>
            
            <Query
              query={GET_PROJECT_DIMENSIONS_TREE_BY_PROJECT_ID}
              variables={{ projectId: parseInt(projectId) }}
            >
              {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;
                const { projectDimensionsTree } = data;
                const treeData = JSON.parse(projectDimensionsTree);
                const tProps = {
                  treeData,
                  onChange: this.onChange,
                  treeCheckable: true,
                  showCheckedStrategy: SHOW_PARENT,
                  searchPlaceholder: 'Please select',
                };
                return (
                    <Query
              query={GET_ASSIGNMENTS_BY_MEMBER_ID_QUERY}
              variables={{ memberId: parseInt(memberId) }}
            >
              {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;
                const previousAssignmentsOfMember = data.memberAssignments
                return (
                    <FormItem>
                    {getFieldDecorator('newAssignments', {
                      rules: [
                        {
                          required: true,
                          message: 'Please select dimensions(options)',
                        },
                      ],
                      initialValue: previousAssignmentsOfMember,
                    })(<TreeSelect {...tProps}  />)}
                  </FormItem>
                );
            }}
          </Query>
                )
                  
                
              }}
            </Query>
          </Form>
        </Modal>
      );
    }
});

export default withApollo(UpdateMemberAssignmentsForm);
