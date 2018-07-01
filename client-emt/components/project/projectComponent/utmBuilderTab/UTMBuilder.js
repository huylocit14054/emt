const React = require('react');
const { Alert, Icon, Tooltip } = require('antd');
const _ = require('lodash');

if (typeof window === 'undefined') {
  const loading = () => <div>loading...</div>;
  module.exports = loading;
} else {
  const update = require('immutability-helper');
  const ReactDataGrid = require('react-data-grid');
  const { UTMTopToolbar } = require('./utmBuilder/UTMTopToolbar');
  const { Editors } = require('react-data-grid-addons');
  const { AutoComplete: AutoCompleteEditor } = Editors;
  let uuid = 0;
  class UTMBuilder extends React.Component {
    constructor(props, context) {
      super(props, context);
      this._columns = props.assignments.map(assignment => {
        const { dimension, optionAuthorizations } = assignment;
        const options = optionAuthorizations.map(optionAuth => ({
          ...optionAuth.option,
          title: optionAuth.option.name,
        }));
        console.log(options);

        return {
          key: dimension.id,
          name: (
            <div>
              {dimension.name}
              {dimension.category === 'selection' && (
                <Tooltip placement="topRight" title="Selective Dimension">
                  <Icon type="caret-down" style={{ marginLeft: 10 }} />
                </Tooltip>
              )}
            </div>
          ),
          resizable: true,
          editable: dimension.category === 'input' ? true : undefined,
          editor:
            dimension.category === 'selection' ? (
              <AutoCompleteEditor options={options} />
            ) : (
              undefined
            ),
        };
      });

      this.state = { rows: [], selectedIndexes: [] };
    }

    onRowsSelected = rows => {
      this.setState({
        selectedIndexes: this.state.selectedIndexes.concat(rows.map(r => r.rowIdx)),
      });
    };

    onRowsDeselected = rows => {
      const rowIndexes = rows.map(r => r.rowIdx);
      this.setState({
        selectedIndexes: this.state.selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1),
      });
    };

    getColumns = () => {
      const clonedColumns = this._columns.slice();
      clonedColumns[2].events = {
        onClick: (ev, args) => {
          const { idx } = args;
          const { rowIdx } = args;
          this.grid.openCellEditor(rowIdx, idx);
        },
      };

      return clonedColumns;
    };

    getRowAt = index => {
      if (index < 0 || index > this.getSize()) {
        return undefined;
      }

      return this.state.rows[index];
    };

    getSize = () => this.state.rows.length;

    handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
      const rows = this.state.rows.slice();

      for (let i = fromRow; i <= toRow; i += 1) {
        const rowToUpdate = rows[i];
        const updatedRow = update(rowToUpdate, { $merge: updated });
        rows[i] = updatedRow;
      }
      this.setState({ rows });
    };

    handleAddRow = () => {
      const newRow = {
        id: (uuid += 1),
      };

      let rows = this.state.rows.slice();
      rows = update(rows, { $push: [newRow] });
      this.setState({ rows });
    };

    handleAddMultipleRows = duplicatedRows => {
      let rows = this.state.rows.slice();
      rows = update(rows, { $push: duplicatedRows });
      this.setState({ rows });
    };

    handleDuplicateRows = () => {
      let selectedRows = this.state.rows.filter(row =>
        _.includes(this.state.selectedIndexes, this.state.rows.indexOf(row))
      );
      selectedRows = selectedRows.map(row => ({
        ...row,
        id: (uuid += 1),
      }));
      this.handleAddMultipleRows(selectedRows);
    };

    handleRemoveSelectedRows = () => {
      const rows = this.state.rows.filter(
        row => !_.includes(this.state.selectedIndexes, this.state.rows.indexOf(row))
      );
      this.setState({ rows, selectedIndexes: [] });
    };

    handleGenerateUrls = () => {
      console.log(this.state.rows);
    };

    render() {
      if (this._columns.length > 0) {
        return (
          <React.Fragment>
            <UTMTopToolbar
              handleAddRow={this.handleAddRow}
              handleDuplicateRows={this.handleDuplicateRows}
              handleRemoveSelectedRows={this.handleRemoveSelectedRows}
              handleGenerateUrls={this.handleGenerateUrls}
            />
            <div style={{ marginTop: 20 }}>
              <ReactDataGrid
                ref={node => (this.grid = node)}
                enableCellSelect
                columns={this.getColumns()}
                rowGetter={this.getRowAt}
                rowsCount={this.getSize()}
                onGridRowsUpdated={this.handleGridRowsUpdated}
                rowSelection={{
                  showCheckbox: true,
                  enableShiftSelect: true,
                  onRowsSelected: this.onRowsSelected,
                  onRowsDeselected: this.onRowsDeselected,
                  selectBy: {
                    indexes: this.state.selectedIndexes,
                  },
                }}
                rowHeight={50}
                minHeight={400}
                rowScrollTimeout={200}
              />
            </div>
          </React.Fragment>
        );
      }
      // If current member currently not assigned any dimensiions
      return (
        <Alert
          message="Note"
          description="You are currently not assigned any dimensions"
          type="info"
          showIcon
        />
      );
    }
  }

  module.exports = UTMBuilder;
}
