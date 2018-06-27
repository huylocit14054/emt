import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import { Table, Divider, Icon } from 'antd';

const { Column } = Table;
const dataSource = [
  {
    id: '1',
    ruleString: 'utm_source=<<hehe>>&&utm_source=<<hehe>>&&tm_source=<<hehe>>',
    createdAt: '2 hours ago',
    isApplied: true,
  },
  {
    id: '2',
    ruleString: 'hahahahahazhaha',
    createdAt: '3 hours ago',
    isApplied: false,
  },
];
export default class RulesList extends Component {
  render() {
    return (
      <Table dataSource={dataSource} rowKey="id" bordered>
        <Column
          width="70%"
          title="Rule"
          key="rule"
          render={rule => (
            <code>
              {' '}
              <Highlighter
                highlightClassName="highlight-dimension"
                searchWords={['<<(.*?)>>']}
                autoEscape={false}
                textToHighlight={rule.ruleString}
              />
            </code>
          )}
        />
        <Column
          align="center"
          title="Created At"
          key="createdAt"
          render={rule => <div>{rule.createdAt}</div>}
        />
        <Column
          align="center"
          title="Applied"
          key="isApplied"
          render={rule =>
            rule.isApplied ? (
              <Icon type="check-circle" style={{ color: '#52c41a' }} />
            ) : (
              <Icon type="close-circle" style={{ color: '#f5222d' }} />
            )
          }
        />
        <Column
          align="center"
          title="Action"
          key="action"
          render={rule => (
            <span>
              <a>Edit</a>
              <Divider type="vertical" />
              <a>Delete</a>
              {!rule.isApplied && (
                <React.Fragment>
                  <Divider type="vertical" />
                  <a>Apply</a>
                </React.Fragment>
              )}
            </span>
          )}
        />
      </Table>
    );
  }
}
