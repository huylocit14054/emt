import React from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import _ from 'lodash';
import defaultStyle from './RuleFormStyle';

export default class CreateRuleInput extends React.Component {
  render() {
    const { data, onChange, onBlur, onAdd, value } = this.props;
    return (
      <MentionsInput
        id="rule-suggestions"
        rows="10"
        autoFocus
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        markup="<<__id__>>"
        style={defaultStyle}
        displayTransform={id => `<<${_.find(data, { id }).display}>>`}
      >
        <Mention
          trigger={/(<<(.*))$/}
          data={search =>
            data.filter(dimension => dimension.display.toLowerCase().includes(search.toLowerCase()))
          }
          onAdd={onAdd}
        />
      </MentionsInput>
    );
  }
}
