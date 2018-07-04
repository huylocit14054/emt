import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import TimeAgo from 'react-timeago';
import { withRouter } from 'next/router';
import { Mutation } from 'react-apollo';
import { Table, Divider, Icon, message, Popconfirm } from 'antd';
import _ from 'lodash';
import UpdateRuleModal from './UpdateRuleModal';
import { getRulesByProjectId as GET_RULES_BY_PROJECT_ID_QUERY } from '../../../../graphql/queries.gql';
import {
  deleteRule as DELETE_RULE_MUTATION,
  applyRule as APPLY_RULE_MUTATION,
} from '../../../../graphql/mutations.gql';
import MyQuery from '../../../MyQuery';

const { Column } = Table;

class RulesList extends Component {
  render() {
    const { router } = this.props;
    const projectId = router.query.id;
    return (
      <MyQuery query={GET_RULES_BY_PROJECT_ID_QUERY} variables={{ projectId }}>
        {({ projectRules }) => (
          <Table
            dataSource={projectRules}
            rowKey="id"
            bordered
            rowClassName={rule => {
              if (rule.isApplied) return 'rule-is-applied';
            }}
          >
            <Column
              width="50%"
              title="Rule"
              key="rule"
              render={rule => (
                <code>
                  {' '}
                  <Highlighter
                    highlightClassName="highlight-dimension"
                    searchWords={['<<(.*?)>>']}
                    autoEscape={false}
                    textToHighlight={rule.ruleStringToDisplay}
                  />
                </code>
              )}
            />
            <Column
              align="center"
              title="Created at"
              key="createdAt"
              render={rule => <TimeAgo date={rule.createdAt} />}
            />
            <Column
              align="center"
              title="Updated at"
              key="updatedAt"
              render={rule => <TimeAgo date={rule.updatedAt} />}
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
                  <UpdateRuleModal rule={rule} />

                  {!rule.isApplied && (
                    <React.Fragment>
                      <Divider type="vertical" />
                      <Mutation
                        mutation={DELETE_RULE_MUTATION}
                        variables={{
                          input: {
                            ruleId: rule.id,
                          },
                        }}
                        onError={error => {
                          // If you want to send error to external service?
                          error.graphQLErrors.map(error => {
                            message.error(error.message, 3);
                          });
                        }}
                        update={store => {
                          const data = store.readQuery({
                            query: GET_RULES_BY_PROJECT_ID_QUERY,
                            variables: {
                              projectId,
                            },
                          });
                          _.remove(data.projectRules, { id: rule.id });
                          store.writeQuery({
                            query: GET_RULES_BY_PROJECT_ID_QUERY,
                            variables: {
                              projectId,
                            },
                            data,
                          });

                          message.success('Rule Deleted!', 3);
                        }}
                      >
                        {(deleteRule, { loading }) => {
                          if (loading) return <Icon type="loading" />;
                          return (
                            <Popconfirm
                              title="Are you sure delete this rule?"
                              onConfirm={deleteRule}
                              okText="Yes"
                              cancelText="No"
                            >
                              <a>Delete</a>
                            </Popconfirm>
                          );
                        }}
                      </Mutation>
                      <Divider type="vertical" />
                      <Mutation
                        mutation={APPLY_RULE_MUTATION}
                        variables={{
                          input: {
                            ruleId: rule.id,
                          },
                        }}
                        onError={error => {
                          // If you want to send error to external service?
                          error.graphQLErrors.map(error => {
                            message.error(error.message, 3);
                          });
                        }}
                        update={store => {
                          const data = store.readQuery({
                            query: GET_RULES_BY_PROJECT_ID_QUERY,
                            variables: {
                              projectId,
                            },
                          });
                          data.projectRules = data.projectRules.map(ruleObject => {
                            if (ruleObject.isApplied) {
                              return {
                                ...ruleObject,
                                isApplied: false,
                              };
                            }
                            if (ruleObject.id === rule.id) {
                              return {
                                ...ruleObject,
                                isApplied: true,
                                updatedAt: Date.now(),
                              };
                            }
                            return ruleObject;
                          });
                          store.writeQuery({
                            query: GET_RULES_BY_PROJECT_ID_QUERY,
                            variables: {
                              projectId,
                            },
                            data,
                          });

                          message.success('Rule Applied!', 3);
                        }}
                      >
                        {(applyRule, { loading }) => {
                          if (loading) return <Icon type="loading" />;
                          return (
                            <Popconfirm
                              title="Are you sure apply this rule?"
                              onConfirm={applyRule}
                              okText="Yes"
                              cancelText="No"
                            >
                              <a>Apply</a>
                            </Popconfirm>
                          );
                        }}
                      </Mutation>
                    </React.Fragment>
                  )}
                </span>
              )}
            />
          </Table>
        )}
      </MyQuery>
    );
  }
}

export default withRouter(RulesList);
