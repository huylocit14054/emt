const React = require('react');

const {
  ToolsPanel: { AdvancedToolbar, GroupedColumnsPanel },
} = require('react-data-grid-addons');

class CustomToolbar extends React.Component {
  render() {
    return (
      <AdvancedToolbar>
        <GroupedColumnsPanel
          groupBy={this.props.groupBy}
          onColumnGroupAdded={this.props.onColumnGroupAdded}
          onColumnGroupDeleted={this.props.onColumnGroupDeleted}
        />
      </AdvancedToolbar>
    );
  }
}

module.exports = CustomToolbar;
