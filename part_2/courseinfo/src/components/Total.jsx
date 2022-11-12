import React from 'react';

export default ({ parts }) => (
  <strong>
    Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
  </strong>
);
