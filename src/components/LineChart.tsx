import { LineChartProps } from '@/interfaces/lineChartProps';
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Definimos la interfaz para las propiedades del componente

export default class CustomLineChart extends PureComponent<LineChartProps> {

  render() {
    const { data, width, height } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={width} height={height} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="code" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="committedAmount" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="plannedAmount" stroke="#54cbc4" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
