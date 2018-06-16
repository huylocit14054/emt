import { Form, Input, Select, Button } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;

const AddMemberForm = Form.create()(class extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="inline">
        <FormItem>
          {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input the username/member of user!',
                },
              ],
            })(<Input style={{ width: '300px' }} placeholder="username or email" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('role', {
              initialValue: 'member',
            })(<Select placeholder="Please select member's role">
              <Option key="member">member</Option>
              <Option key="admin">admin</Option>
               </Select>)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
              Add
          </Button>
        </FormItem>
      </Form>
    );
  }
});

export default AddMemberForm;
