import { Form, Input, Modal, Rate, Select, Icon, TreeSelect } from 'antd';
import Highlighter from 'react-highlight-words';
import { withApollo, Query } from 'react-apollo';
import { Image } from 'cloudinary-react';
import { CLOUD_NAME } from '../../../../../constants';
import {
  membersSuggestion as MEMBERS_SUGGESTION_QUERY,
  getProjectDimensionsTreeByProjectId as GET_PROJECT_DIMENSIONS_TREE_BY_PROJECT_ID,
} from '../../../../../graphql/queries.gql';

const { TextArea } = Input;
const FormItem = Form.Item;
const { Option } = Select;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const AssignDimensionsForm = Form.create()(class extends React.Component {
    state = {
      membersSuggestion: [],
      keyword: '',
      value: [],
      fetching: false,
    };
    fetchMemberSuggestion = async value => {
      this.setState({
        keyword: value,
        membersSuggestion: [],
        fetching: true,
      });
      if (value !== '') {
        const { data } = await this.props.client.query({
          query: MEMBERS_SUGGESTION_QUERY,
          variables: {
            query: value,
            projectId: this.props.projectId,
          },
        });
        const { membersSuggestion } = data;
  
        this.setState({ membersSuggestion, fetching: false });
      }
     
    };

    handleChange = value => {
      this.setState({
        keyword: '',
        value,
        data: [],
        fetching: false,
      });
    };
    render() {
      const { fetching, membersSuggestion, value } = this.state;
      const {
        visible, onCancel, onCreate, form, confirmLoading, projectId,
      } = this.props;

      const { getFieldDecorator } = form;

      return (
        <Modal
        title="Assign dimensions for multiple members"
          confirmLoading={confirmLoading}
          visible={visible}
          closable={false}
          okText="create"
          onCancel={onCancel}
          cancelText="cancel"
          onOk={onCreate}
        >
          <Form layout="vertical" onSubmit={onCreate}>
            <FormItem>
              {getFieldDecorator('members', {
                rules: [
                  {
                    required: true,
                    message: 'Please select members by typing their username/email',
                  },
                ],
                initialValue: [],
              })(<Select
                mode="multiple"
                placeholder="Usernames or email addresses"
                notFoundContent={
                    fetching ? <Icon type="loading" style={{ fontSize: 24 }} spin /> : null
                  }
                filterOption={false}
                defaultActiveFirstOption={false}
                onSearch={this.fetchMemberSuggestion}
                onChange={this.handleChange}
              >
                {membersSuggestion.map(user => (
                  <Option key={user.id}>
                    <Image
                      cloudName={CLOUD_NAME}
                      publicId={user.avatar}
                      width="25"
                      height="25"
                      crop="scale"
                      style={{ borderRadius: '50%', border: "1px solid #00b5d0" , marginRight: 10 }}
                    />
                    <Highlighter
                      highlightClassName="highlight-keyword-username"
                      searchWords={[this.state.keyword]}
                      autoEscape
                      textToHighlight={user.username}
                    />{' '}
                      |
                    <Highlighter
                      className="small-email-text"
                      highlightClassName="highlight-keyword-email"
                      searchWords={[this.state.keyword]}
                      autoEscape
                      textToHighlight={user.email}
                      style={{ marginLeft: 40 }}
                    />
                  </Option>
                  ))}
                 </Select>)}
            </FormItem>
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
                  <FormItem>
                    {getFieldDecorator('choices', {
                      rules: [
                        {
                          required: true,
                          message: 'Please select dimensions(options)',
                        },
                      ],
                      initialValue: [],
                    })(<TreeSelect {...tProps}  />)}
                  </FormItem>
                );
              }}
            </Query>
          </Form>
        </Modal>
      );
    }
});

export default withApollo(AssignDimensionsForm);
