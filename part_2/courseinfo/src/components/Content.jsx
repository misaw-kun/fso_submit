import React from 'react';
import Part from './Part';

export default ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />);
