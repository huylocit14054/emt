import React from 'react';

const renderRole = (role, i) => {
  return (
    <span className="role" key={i}>
      {role}
    </span>
  );
};

const renderRoles = roles => {
  roles = roles.map(renderRole);

  const output = [];
  roles.forEach((role, i) => {
    // if list is more than one item and this is the last item, prefix with 'and '
    if (roles.length > 1 && i === roles.length - 1) output.push('and ');
    // output the item
    output.push(role);
    // if list is more than 2 items, append a comma to all but the last item
    if (roles.length > 2 && i < roles.length - 1) output.push(',');
    // if list is more than 1 item, append a space to all but the last item
    if (roles.length > 1 && i < roles.length - 1) output.push(' ');
  });
  return output;
};

export default renderRoles;
