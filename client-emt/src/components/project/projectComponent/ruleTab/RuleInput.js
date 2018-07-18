import React from 'react';
import { MentionsInput, Mention } from 'react-mentions';

import defaultStyle from './RuleFormStyle';

export default class RuleInput extends React.Component {
  render() {
    const { data, onChange, onBlur, onAdd, value, ruleId } = this.props;
    return (
      <MentionsInput
        id={ruleId ? `rule-suggestions-update-${ruleId}` : 'rule-suggestions'}
        rows="10"
        autoFocus
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        markup="{{__display__}}"
        style={defaultStyle}
        displayTransform={display => `{{${display}}}`}
      >
        <Mention
          trigger={/(\[\[(.*))$/}
          data={search =>
            data.filter(dimension => dimension.display.toLowerCase().includes(search.toLowerCase()))
          }
          onAdd={onAdd}
        />
      </MentionsInput>
    );
  }
}
