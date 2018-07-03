import React from 'react';
import { Table, Input, Button, Icon } from 'antd';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
  },
];

export default class App extends React.Component {
  state = {
    filterDropdownVisible: false,
    data,
    searchText: '',
    filtered: false,
  };

  onInputChange = e => {
    console.log(e.target.value);
    this.setState({ searchText: e.target.value }, this.onSearch(e.target.value));
  };

  onSearch = value => {
    const reg = new RegExp(value, 'gi');
    this.setState({
      filtered: !!value,
      data: data
        .map(record => {
          const match = record.name.match(reg);
          if (!match) {
            return null;
          }
          return {
            ...record,
            name: (
              <span>
                {record.name.split(new RegExp(`(?<=${value})|(?=${value})`, 'i')).map(
                  (text, i) =>
                    text.toLowerCase() === value.toLowerCase() ? (
                      <span key={i} className="highlight">
                        {text}
                      </span>
                    ) : (
                      text
                    ) // eslint-disable-line no-use-before-define
                )}
              </span>
            ),
          };
        })
        .filter(record => !!record),
    });
  };

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => (this.searchInput = ele)}
              placeholder="Search name"
              style={{ width: 300 }}
              value={this.state.searchText}
              onChange={this.onInputChange}
              onPressEnter={this.onSearch}
            />
          </div>
        ),
        filterIcon: (
          <Icon type="filter" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />
        ),
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: visible => {
          this.setState(
            {
              filterDropdownVisible: visible,
            },
            () => this.searchInput && this.searchInput.focus()
          );
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
    ];
    return <Table columns={columns} dataSource={this.state.data} />;
  }
}
