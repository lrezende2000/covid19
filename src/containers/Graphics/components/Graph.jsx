import React, { memo } from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

function Graph({
  data,
  width,
  heigth,
  xDataKey,
  firstCountryDataKey,
  secondCountryDataKey,
  firstCountryName,
  secondCountryName,
}) {
  return (
    <BarChart width={width} height={heigth} data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="black" />
      <XAxis dataKey={xDataKey} stroke="black" />
      <YAxis stroke="black" />
      <Tooltip />
      <Legend />
      <Bar name={firstCountryName} dataKey={firstCountryDataKey} fill="#861FBE" />
      <Bar name={secondCountryName} dataKey={secondCountryDataKey} fill="#15B1B1" />
    </BarChart>
  );
}

export default memo(Graph);
