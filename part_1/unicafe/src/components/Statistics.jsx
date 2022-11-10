import React from 'react';
import StatLine from './StatLine';

export default ({ stats }) => {
  const isAnyFeedback = Object.values(stats).some((stat) => stat > 0);
  return !isAnyFeedback ? (
    <>
      <h1>statistics</h1>
      <p>no feedback given</p>
    </>
  ) : (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <StatLine text="good" value={stats.good} />
          </tr>
          <tr>
            <StatLine text="neutral" value={stats.neutral} />
          </tr>
          <tr>
            <StatLine text="bad" value={stats.neutral} />
          </tr>
          <tr>
            <StatLine text="sum" value={stats.sum} />
          </tr>
          <tr>
            <StatLine text="average" value={stats.avg} />
          </tr>
          <tr>
            <StatLine text="positive" value={stats.positive} />
          </tr>
        </tbody>
      </table>
    </>
  );
};
