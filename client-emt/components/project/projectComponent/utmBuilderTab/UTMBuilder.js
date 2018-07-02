const React = require('react');

if (typeof window === 'undefined') {
  const loading = () => <div>loading...</div>;
  module.exports = loading;
} else {
  const _ = require('lodash');
  const Highlighter = require('react-highlight-words');
  const { Alert, Card, Col, Icon, Tooltip } = require('antd');
  const update = require('immutability-helper');
  const moment = require('moment');
  const ReactDataGrid = require('react-data-grid');
  const { UTMTopToolbar } = require('./utmBuilder/UTMTopToolbar');
  const { URLsList } = require('./utmBuilder/URLsList');
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

      // add id column and landing page url column at the begining
      this._columns.unshift(
        {
          key: 'id',
          name: 'Index',
          resizable: true,
          width: 55,
        },
        {
          key: 'url',
          name: 'Landing Page URL',
          resizable: true,
          editable: true,
        }
      );

      // Add Date Column at the end of table
      this._columns.push({
        key: 'date',
        name: 'Date',
        resizable: true,
      });

      this.state = { rows: [], selectedIndexes: [], isValid: false, errors: [] };
    }

    componentWillUnmount() {
      // reset uuid when component is unmounted
      uuid = 0;
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

      // const selectiveDimensions = this.props.assignments
      //   .filter(assignment => assignment.dimension.category === 'selection')
      //   .map(assignment => assignment.dimension);

      // console.log(selectiveDimensions);
      // const selectiveDimensionsIdsArray = selectiveDimensions.map(dimension => dimension.id);
      // console.log(selectiveDimensionsIdsArray);
      // const rowsEdited = this.state.rows.map(row => {
      //   selectiveDimensionsIdsArray.forEach(id => {

      //   });
      // });
      for (let i = fromRow; i <= toRow; i += 1) {
        const rowToUpdate = rows[i];

        const updatedRow = update(rowToUpdate, { $merge: updated });
        rows[i] = updatedRow;
      }
      // Check the validations

      this.setState({ rows }, this.validateTable);
    };

    validateTable = () => {
      let tableIsValid = true;
      const errors = [];

      const selectiveAssignments = this.props.assignments.filter(
        assignment => assignment.dimension.category === 'selection'
      );
      console.log(selectiveAssignments);

      this.state.rows.forEach(row => {
        // Check the validation of url regex
        if (_.has(row, 'url')) {
          if (
            row.url !== '' &&
            !/^((https?):\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(row.url)
          ) {
            errors.push(`Landing Page URL at index ${row.id} has invalid format`);
            tableIsValid = false;
          }
        }
        selectiveAssignments.forEach(assignment => {
          const { dimension, optionAuthorizations } = assignment;
          const options = optionAuthorizations.map(optionAuth => optionAuth.option.name);
          const selectiveValueInRow = row[dimension.id];

          if (
            selectiveValueInRow !== '' &&
            selectiveValueInRow !== undefined &&
            !_.includes(options, selectiveValueInRow)
          ) {
            errors.push(
              `Value "${selectiveValueInRow}" of selective dimension ${dimension.name} at index ${
                row.id
              } is not found`
            );
            tableIsValid = false;
          }
        });
      });

      if (tableIsValid) {
        this.setState({ isValid: true, errors });
      } else {
        this.setState({ isValid: false, errors });
      }
    };

    handleAddRow = () => {
      const newRow = {
        id: (uuid += 1),
        date: moment().format('DDMMYY'),
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
      // reset uuid
      uuid = 0;
      const rows = this.state.rows.filter(
        row => !_.includes(this.state.selectedIndexes, this.state.rows.indexOf(row))
      );
      this.setState({ rows, selectedIndexes: [] });
    };

    handleGenerateUrls = () => {
      console.log(this.state.rows);
    };

    render() {
      const { isValid, errors } = this.state;
      const { currentAppliedRule } = this.props;
      // greater than 1 because of the landing page url
      if (this._columns.length > 3) {
        return (
          <React.Fragment>
            <div style={{ marginBottm: 20 }}>
              <Col span={24} style={{ marginBottom: 20 }}>
                <Card
                  type="inner"
                  title="Current Applied Rule"
                  bordered
                  style={{ textAlign: 'center' }}
                >
                  <code>
                    {' '}
                    <Highlighter
                      highlightClassName="highlight-dimension"
                      searchWords={['<<(.*?)>>', 'landing_page_url']}
                      autoEscape={false}
                      textToHighlight={`landing_page_url?${currentAppliedRule.ruleStringToDisplay}`}
                    />
                  </code>
                </Card>
              </Col>
            </div>

            <UTMTopToolbar
              handleAddRow={this.handleAddRow}
              handleDuplicateRows={this.handleDuplicateRows}
              handleRemoveSelectedRows={this.handleRemoveSelectedRows}
              handleGenerateUrls={this.handleGenerateUrls}
              datasIsValid={isValid}
            />

            <div style={{ marginTop: 10, marginBottom: 20 }}>
              <div style={{ marginBottom: 10 }}>
                {errors.length > 0 && (
                  <Alert
                    message="Error"
                    description={errors.map(error => <div>{error}</div>)}
                    type="error"
                    showIcon
                  />
                )}
              </div>
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
                minHeight={200}
                rowScrollTimeout={200}
              />
            </div>
            <URLsList />
          </React.Fragment>
        );
      }
      // If current member currently not assigned any dimensiions
      return (
        <div>
          <Alert
            message="Note"
            description="You are currently not assigned any dimensions"
            type="info"
            showIcon
          />
        </div>
      );
    }
  }

  module.exports = UTMBuilder;
}
