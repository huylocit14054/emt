import {Form, Input, Icon, Button, Modal} from 'antd';

const FormItem = Form.Item;

let uuid = 0;
const CreateOptionForm = Form.create()(class extends React.Component {
  remove = k => {
    const {form} = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one option
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    });
  };

  add = () => {
    const {form} = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;
    // can use data-binding to set important! notify form to detect changes
    form.setFieldsValue({keys: nextKeys});
  };

  handleSubmit = e => {
    e.preventDefault();
    this
      .props
      .form
      .validateFields((err, values) => {
        if (!err) {

        }
      });
  };

  isEntered = e => {
    console.log(e.keyCode)
    if (e.keyCode == 13) {
      this.add()
    }
  }

  render() {
    const {visible, onCancel, onCreate, form, confirmLoading} = this.props;
    const {getFieldDecorator, getFieldValue} = this.props.form;

    getFieldDecorator('keys', {initialValue: []});
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <FormItem
        label={index === 0
        ? 'Options'
        : ''}
        required={false}
        key={k}>
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: [
            'onChange', 'onBlur'
          ],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input option's name or delete this field."
            }
          ]
        })(<Input
          onKeyUp={this.isEntered}
          placeholder="option name"
          style={{
          width: '95%',
          marginRight: 8
        }}
          autoFocus/>)}
        {keys.length > 1
          ? (<Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => this.remove(k)}/>)
          : null}
      </FormItem>
    ));
    return (
      <Modal
        title={`${this.props.dimensionName} dimension`}
        confirmLoading={confirmLoading}
        visible={visible}
        okText="add"
        onCancel={onCancel}
        cancelText="cancel"
        onOk={onCreate}
        closable={false}>
        <Form onSubmit={this.onCreate}>
          <br/> {formItems}
          <FormItem>
            <Button
              type="dashed"
              onClick={this.add}
              style={{
              width: '100%'
            }}>
              <Icon type="plus"/>
              Add Option
            </Button>
          </FormItem>
        </Form>
      </Modal>
    );
  }
});

export default CreateOptionForm;
