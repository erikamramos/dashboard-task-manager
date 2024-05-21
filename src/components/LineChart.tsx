import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Task A',
    expected: 100,
    progress: 100,
    amt: 2400,
  },
  {
    name: 'Task B',
    expected: 100,
    progress: 100,
    amt: 2210,
  },
  {
    name: 'Task C',
    expected: 90,
    progress: 100,
    amt: 2290,
  },
  {
    name: 'Task D',
    expected: 90,
    progress: 90,
    amt: 2000,
  },
  {
    name: 'Task E',
    expected: 80,
    progress: 100,
    amt: 2181,
  },
  {
    name: 'Task F',
    expected: 80,
    progress: 90,
    amt: 2500,
  },
  {
    name: 'Task G',
    expected: 0,
    progress: 50,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-v3w7s9';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="progress" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="expected" stroke="#54cbc4" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
