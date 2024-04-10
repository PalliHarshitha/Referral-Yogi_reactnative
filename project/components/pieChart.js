import React from 'react';
import { PieChart, Pie, Cell } from 'react-native-svg-charts';
import { View, Text } from 'react-native';
import { data, colors } from './data';

function PieCharts() {
  if (!data || data.length === 0) {
    return (
      <View>
        <Text>Please enter the value</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Sample graph showing number of new registrations made on Referral Yogi portal per month</Text>
      <PieChart style={{ height: 300 }}>
        <Pie
          data={data}
          outerRadius={'80%'}
          innerRadius={10}
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </View>
  );
}

export default PieCharts;
