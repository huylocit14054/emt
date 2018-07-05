const React = require('react');

if (typeof window === 'undefined') {
  const loading = () => <div>Loading...</div>;
  module.exports = loading;
} else {
  const ReactDataGrid = require('react-data-grid');

  const { CLOUD_URL } = require('../../../../constants');
  const { message, Button, Alert } = require('antd');
  const {
    Data: { Selectors },
    Draggable: { Container: DraggableContainer },
    Formatters: { ImageFormatter },
  } = require('react-data-grid-addons');
  const CustomToolbar = require('./utmAnalysis/CustomToolbar');
  const { UTMAnalysisStyle } = require('./UTMAnalysisStyle');
  const moment = require('moment');

  const copyToClipboard = str => {
    const el = document.createElement('textarea'); // Create a <textarea> element
    el.value = str; // Set its value to the string that you want copied
    el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px'; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0 // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0) // Store selection if found
        : false; // Mark as false to know no selection existed before
    el.select(); // Select the <textarea> content
    document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
    if (selected) {
      // If a selection existed before copying
      document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
      document.getSelection().addRange(selected); // Restore the original selection
    }
    message.success('Link copied');
  };
  class UTMAnalysis extends React.Component {
    constructor(props, context) {
      super(props, context);
      this._columns = [
        {
          key: 'avatar',
          name: 'Avatar',
          formatter: ImageFormatter,
          width: 60,
          draggable: true,
          resizable: true,
        },
        {
          key: 'username',
          name: 'Username',
          filterable: true,
          draggable: true,
          resizable: true,
        },
        {
          key: 'url',
          name: 'URL',
          filterable: true,
          draggable: true,
          resizable: true,
        },
        {
          key: 'date',
          name: 'Date',
          filterable: true,
          draggable: true,
          resizable: true,
        },
        {
          key: 'createdAt',
          name: 'Created at',
          filterable: true,
          draggable: true,
          resizable: true,
        },
        {
          key: 'action',
          name: 'Action',
          width: 150,
          resizable: true,
        },
      ];

      this.state = {
        rows: this.createRows(props.utmAnalysis),
        filters: {},
        groupBy: [],
        expandedRows: {},
      };
    }

    componentDidMount() {
      if (this.state.rows.length > 0) {
        this.gridAnalysis.onToggleFilter();
      }
    }

    onClearFilters = () => {
      // all filters removed
      this.setState({ filters: {} });
    };

    onColumnGroupAdded = colName => {
      const columnGroups = this.state.groupBy.slice(0);
      const activeColumn = this._columns.find(c => c.key === colName);
      const isNotInGroups = columnGroups.find(c => activeColumn.key === c.name) == null;
      if (isNotInGroups) {
        columnGroups.push({ key: activeColumn.key, name: activeColumn.name });
      }

      this.setState({ groupBy: columnGroups });
    };

    onColumnGroupDeleted = name => {
      const columnGroups = this.state.groupBy.filter(
        g => (typeof g === 'string' ? g !== name : g.key !== name)
      );
      this.setState({ groupBy: columnGroups });
    };

    onRowExpandToggle = ({ columnGroupName, name, shouldExpand }) => {
      const expandedRows = Object.assign({}, this.state.expandedRows);
      expandedRows[columnGroupName] = Object.assign({}, expandedRows[columnGroupName]);
      expandedRows[columnGroupName][name] = { isExpanded: shouldExpand };
      this.setState({ expandedRows });
    };

    getSize = () => this.getRows().length;

    getRandomDate = (start, end) =>
      new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      ).toLocaleDateString();

    getRows = () => Selectors.getRows(this.state);

    createRows = utmAnalysis => {
      const rows = utmAnalysis.map(utm => ({
        ...utm,
        avatar: `${CLOUD_URL}${utm.projectMember.user.avatar}`,
        date: moment(utm.createdAt).format('DD/MM/YY'),
        createdAt: moment(utm.createdAt).fromNow(),
        username: utm.projectMember.user.username,
        action: (
          <Button icon="copy" type="dashed" onClick={() => copyToClipboard(utm.url)}>
            Copy URL{' '}
          </Button>
        ),
      }));

      return rows;
    };

    rowGetter = rowIdx => {
      const rows = this.getRows();
      return rows[rowIdx];
    };

    handleFilterChange = filter => {
      const newFilters = Object.assign({}, this.state.filters);

      if (filter.filterTerm) {
        newFilters[filter.column.key] = filter;
      } else {
        delete newFilters[filter.column.key];
      }
      this.setState({ filters: newFilters });
    };

    render() {
      const { rows } = this.state;
      if (rows.length > 0)
        return (
          <div>
            <UTMAnalysisStyle />
            <DraggableContainer>
              <ReactDataGrid
                ref={grid => {
                  this.gridAnalysis = grid;
                }}
                columns={this._columns}
                rowGetter={this.rowGetter}
                enableCellSelect
                rowsCount={this.getSize()}
                minHeight={600}
                rowHeight={55}
                onRowExpandToggle={this.onRowExpandToggle}
                enableDragAndDrop
                toolbar={
                  <CustomToolbar
                    groupBy={this.state.groupBy}
                    onColumnGroupAdded={this.onColumnGroupAdded}
                    onColumnGroupDeleted={this.onColumnGroupDeleted}
                  />
                }
                onAddFilter={this.handleFilterChange}
                onClearFilters={this.onClearFilters}
              />
            </DraggableContainer>
          </div>
        );
      return (
        <div>
          <Alert message="Note" description="No data is available" type="info" showIcon />
        </div>
      );
    }
  }

  module.exports = UTMAnalysis;
}
