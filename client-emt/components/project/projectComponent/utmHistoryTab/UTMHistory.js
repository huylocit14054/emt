const React = require('react');

if (typeof window === 'undefined') {
  const loading = () => <div>Loading...</div>;
  module.exports = loading;
} else {
  const ReactDataGrid = require('react-data-grid');
  const { message, Button, Alert } = require('antd');
  const {
    Data: { Selectors },
  } = require('react-data-grid-addons');
  const { UTMAnalysisStyle } = require('../utmAnalysisTab/UTMAnalysisStyle');
  const moment = require('moment');

  const copyToClipboard = str => {
    console.log(str);
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
  class UTMHistory extends React.Component {
    constructor(props, context) {
      super(props, context);
      this._columns = [
        {
          key: 'url',
          name: 'URL',
          filterable: true,
          resizable: true,
        },
        {
          key: 'date',
          name: 'Date',
          filterable: true,
          resizable: true,
        },
        {
          key: 'createdAt',
          name: 'Created at',
          filterable: true,
          resizable: true,
        },
        {
          key: 'action',
          name: 'Action',
          width: 150,
          resizable: true,
        },
      ];

      this.state = { rows: this.createRows(props.currentMemberUtmHistory), filters: {} };
    }

    componentDidMount() {
      if (this.state.rows.length > 0) {
        this.gridHistory.onToggleFilter();
      }
    }

    onClearFilters = () => {
      // all filters removed
      this.setState({ filters: {} });
    };

    getRows = () => Selectors.getRows(this.state);

    getRandomDate = (start, end) =>
      new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      ).toLocaleDateString();

    getSize = () => this.getRows().length;

    createRows = utmHistory => {
      const rows = utmHistory.map(utm => ({
        ...utm,
        date: moment(utm.createdAt).format('DD/MM/YY'),
        createdAt: moment(utm.createdAt).fromNow(),
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
      console.log(this.state.filters);
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
            <ReactDataGrid
              ref={grid => {
                this.gridHistory = grid;
              }}
              columns={this._columns}
              rowGetter={this.rowGetter}
              enableCellSelect
              rowsCount={this.getSize()}
              minHeight={600}
              rowHeight={55}
              onAddFilter={this.handleFilterChange}
              onClearFilters={this.onClearFilters}
            />
          </div>
        );
      return (
        <div>
          <Alert message="Note" description="No data is available" type="info" showIcon />
        </div>
      );
    }
  }

  module.exports = UTMHistory;
}
