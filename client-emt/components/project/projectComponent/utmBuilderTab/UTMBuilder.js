const React = require('react');

if (typeof window === 'undefined') {
  const loading = () => <div>Loading...</div>;
  module.exports = loading;
} else {
  const { Mutation } = require('react-apollo');
  const {
    currentMemberUtmHistory: CURRENT_MEMBER_UTM_HISTORY,
  } = require('../../../../graphql/queries.gql');
  const { generateUtms: GENERATE_UTMS_MUTATION } = require('../../../../graphql/mutations.gql');
  const _ = require('lodash');
  const Highlighter = require('react-highlight-words');
  const { Alert, Icon, Tooltip, Spin, message: NotiMessage } = require('antd');
  const update = require('immutability-helper');
  const moment = require('moment');
  const ReactDataGrid = require('react-data-grid');
  const { UTMTopToolbar } = require('./utmBuilder/UTMTopToolbar');
  const { URLsList } = require('./utmBuilder/URLsList');
  const { Editors } = require('react-data-grid-addons');
  const { AutoComplete: AutoCompleteEditor } = Editors;
  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

  let keepProjectId = -1;
  let uuid = 0;
  let initialState = {
    rows: [],
    selectedIndexes: [],
    isValid: false,
    errors: [],
    generatedUtms: null,
  };
  class UTMBuilder extends React.Component {
    constructor(props, context) {
      super(props, context);
      this._columns = props.assignments.map(assignment => {
        const { dimension, optionAuthorizations } = assignment;
        const options = optionAuthorizations.map(optionAuth => ({
          ...optionAuth.option,
          title: optionAuth.option.name,
        }));

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
          name: '*Landing Page URL',
          width: 150,
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

      // Make sure when user navigate to other projects by client side rendering, the state will be reset
      if (keepProjectId !== props.projectId) {
        const newProjectId = props.projectId;
        keepProjectId = newProjectId;
        this.state = {
          rows: [],
          selectedIndexes: [],
          isValid: false,
          errors: [],
          generatedUtms: null,
        };
        uuid = 0;
      } else {
        this.state = initialState;
      }
    }

    componentDidMount() {
      if (uuid === 0) {
        this.handleAddRow();
      }
    }

    componentWillUnmount() {
      const currentUuid = uuid;
      // reset uuid when component is unmounted
      uuid = currentUuid;
      // Remember state for the next mount
      initialState = this.state;
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
      // Check the validations

      this.setState({ rows }, this.validateTable);
    };

    validateTable = () => {
      if (this.state.rows.length === 0) {
        this.setState({ isValid: false, errors: [] });
      } else {
        let tableIsValid = true;
        const errors = [];

        const selectiveAssignments = this.props.assignments.filter(
          assignment => assignment.dimension.category === 'selection'
        );

        const inputAssignments = this.props.assignments.filter(
          assignment => assignment.dimension.category === 'input'
        );

        this.state.rows.forEach(row => {
          // Check the validation of url regex
          if (_.has(row, 'url') && row.url !== '') {
            if (!/^((https?):\/\/)([\da-z.-]+)\.([a-z.]{2,6})([&=?/\w .-]*)*\/?$/.test(row.url)) {
              errors.push(`Landing Page URL at index ${row.id} has invalid format`);
              tableIsValid = false;
            }
          } else {
            errors.push(`Landing Page URL at index ${row.id} cannot be blank`);
            tableIsValid = false;
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

          inputAssignments.forEach(assignment => {
            const { dimension } = assignment;
            const inputValueInRow = row[dimension.id];

            if (/[^ -~]+/.test(inputValueInRow)) {
              errors.push(
                `Found "${inputValueInRow}" at input dimension ${dimension.name} at index ${
                  row.id
                } containing unicode characters (unicode characters are not supported)`
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
      }
    };

    handleAddRow = () => {
      const newRow = {
        id: (uuid += 1),
        date: moment().format('DDMMYY'),
      };

      let rows = this.state.rows.slice();
      rows = update(rows, { $push: [newRow] });
      this.setState({ rows, isValid: false });
    };

    handleAddMultipleRows = duplicatedRows => {
      let rows = this.state.rows.slice();

      rows = update(rows, { $push: duplicatedRows });
      this.setState({ rows }, this.validateTable);
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
      uuid = 0;
      const rows = this.state.rows
        .filter(row => !_.includes(this.state.selectedIndexes, this.state.rows.indexOf(row)))
        .map(row => ({
          ...row,
          id: (uuid += 1),
        }));
      this.setState({ rows, selectedIndexes: [] }, this.validateTable);
    };

    generateUtms = generate => {
      const rows = _.clone(this.state.rows);

      const finalRows = rows.map(row => {
        // Remove id key inside each row
        const rowModified = _.omit(row, 'id');

        // Remove all spaces inside input fields
        Object.keys(row).map(key => {
          if (/\s/.test(rowModified[key])) {
            rowModified[key] = rowModified[key].replace(/\s/g, '+');
          }
        });
        return rowModified;
      });

      const { projectId, currentAppliedRule } = this.props;
      const values = {
        project_id: projectId,
        rule_id: currentAppliedRule.id,
        attributes: finalRows,
      };

      generate({
        variables: {
          input: {
            values: JSON.stringify(values),
          },
        },
      });
    };

    render() {
      const { isValid, errors, generatedUtms, rows } = this.state;
      const { currentAppliedRule, projectId } = this.props;
      if (!currentAppliedRule)
        return (
          <div>
            <Alert
              message="Note"
              description="No UTM builder rule is currently applied"
              type="info"
              showIcon
            />
          </div>
        );
      // greater than 1 because of the landing page url
      if (this._columns.length > 3) {
        return (
          <React.Fragment>
            <div>
              <Alert
                style={{ marginBottom: 20 }}
                message="Current Applied Rule"
                description={
                  <div>
                    <Highlighter
                      highlightClassName="highlight-dimension-utm-builder"
                      searchWords={['{{(.*?)}}', 'landing_page_url']}
                      autoEscape={false}
                      textToHighlight={`landing_page_url?${currentAppliedRule.ruleStringToDisplay}`}
                    />

                    <div style={{ color: '#ad8b00', marginLeft: 2, marginTop: 15 }}>
                      <b>Warning! </b>Rules that are not assigned to you will be blank
                    </div>
                  </div>
                }
                type="info"
                showIcon
              />
            </div>

            <Mutation
              mutation={GENERATE_UTMS_MUTATION}
              onError={error => {
                // If you want to send error to external service?
                error.graphQLErrors.map(({ message }) => {
                  NotiMessage.error(message, 3);
                });
              }}
              refetchQueries={[
                {
                  query: CURRENT_MEMBER_UTM_HISTORY,
                  variables: {
                    projectId: parseInt(projectId),
                  },
                },
              ]}
              onCompleted={data => {
                this.setState({ generatedUtms: data.generateUtms.urlStrings });
              }}
            >
              {(generateUtms, { loading }) => (
                <React.Fragment>
                  <UTMTopToolbar
                    handleAddRow={this.handleAddRow}
                    handleDuplicateRows={this.handleDuplicateRows}
                    handleRemoveSelectedRows={this.handleRemoveSelectedRows}
                    handleGenerateUrls={() => this.generateUtms(generateUtms)}
                    isGenerating={loading}
                    datasIsValid={isValid}
                  />

                  <div style={{ marginTop: 10, marginBottom: 20 }}>
                    <div style={{ marginBottom: 10 }}>
                      {errors.length > 0 && (
                        <Alert
                          message="Error"
                          description={errors.map((error, index) => <div key={index}>{error}</div>)}
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
                      minHeight={rows.length * 30 + 8 * 35}
                      rowHeight={30}
                      rowScrollTimeout={200}
                    />
                  </div>
                  <UTMTopToolbar
                    handleAddRow={this.handleAddRow}
                    handleDuplicateRows={this.handleDuplicateRows}
                    handleRemoveSelectedRows={this.handleRemoveSelectedRows}
                    handleGenerateUrls={() => this.generateUtms(generateUtms)}
                    isGenerating={loading}
                    datasIsValid={isValid}
                  />

                  <Spin indicator={antIcon} spinning={loading}>
                    {generatedUtms && <URLsList urls={generatedUtms} />}
                  </Spin>
                </React.Fragment>
              )}
            </Mutation>
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
