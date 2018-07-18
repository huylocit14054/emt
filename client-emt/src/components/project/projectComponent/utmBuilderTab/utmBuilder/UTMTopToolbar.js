import { Button, Popconfirm } from 'antd';
import React from 'react';

export const UTMTopToolbar = ({
  handleAddRow,
  handleDuplicateRows,
  handleRemoveSelectedRows,
  handleGenerateUrls,
  datasIsValid,
  isGenerating,
}) => (
  <div style={{ marginBottom: 20 }}>
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
      loading={isGenerating}
      disabled={!datasIsValid}
      type="primary"
      icon="link"
      onClick={handleGenerateUrls}
      style={{ float: 'right' }}
    >
      Generate UTM(s)
    </Button>
  </div>
);
