import { Button, Popconfirm } from 'antd';

export const UTMTopToolbar = ({
  handleAddRow,
  handleDuplicateRows,
  handleRemoveSelectedRows,
  handleGenerateUrls,
  datasIsValid,
}) => (
  <div>
    <Button type="primary" icon="plus" onClick={handleAddRow} style={{ marginRight: 5 }}>
      Add Row
    </Button>

    <Button type="primary" icon="copy" onClick={handleDuplicateRows} style={{ marginRight: 5 }}>
      Duplicate Selected Rows
    </Button>

    <Popconfirm
      placement="top"
      title="Are you sure delete selected rows"
      onConfirm={handleRemoveSelectedRows}
      okText="Yes"
      cancelText="No"
    >
      <Button type="danger" icon="delete" style={{ marginRight: 5 }}>
        Remove Selected Rows
      </Button>
    </Popconfirm>

    <Button
      disabled={!datasIsValid}
      type="primary"
      icon="link"
      onClick={handleGenerateUrls}
      style={{ float: 'right' }}
    >
      Generate URL(s)
    </Button>
  </div>
);
