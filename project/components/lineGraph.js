import React from 'react';
import { View, Text } from 'react-native';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line } from 'react-native-svg-charts'; // Assuming you're using a library for charts in React Native
import { data, colors } from './data';
import style from './style';

function LineGraph() {
    if (!data || data.length === 0) {
        return (
            <View style={style.error}>
                <Text>Please enter the value</Text>
            </View>
        );
    }
    return (
        <View style={style.linegraph}>
            <Text style={style.heading}>Sample graph showing number of new registrations made on Referral Yogi portal every month</Text>
            <LineChart
                style={{ flex: 1 }}
                data={data}
                svg={{ stroke: colors[0], strokeWidth: 2 }}
                contentInset={{ top: 10, bottom: 10 }}
            >
                <CartesianGrid />
                <XAxis
                    data={data}
                    formatLabel={(value, index) => data[index].name}
                    contentInset={{ left: 20, right: 20 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
                <YAxis
                    svg={{ fontSize: 10, fill: 'black' }}
                    numberOfTicks={10}
                />
                <Tooltip />
                <Line dataKey="value" />
            </LineChart>
        </View>
    );
}

export default LineGraph;
