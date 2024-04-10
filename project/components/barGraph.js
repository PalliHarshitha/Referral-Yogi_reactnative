// BarGraph.js

import React from 'react';
import { View, Text } from 'react-native';
import { BarChart, XAxis, YAxis, Tooltip, Legend } from 'react-native-svg-charts'; // Assuming you're using a library for charts in React Native
import { data, colors } from './data';
import style from './style';

function BarGraph() {
    if (!data || data.length === 0) {
        return (
            <View style={style.error}>
                <Text>Please enter the value</Text>
            </View>
        );
    }
    return (
        <View style={style.bargraph}>
            <Text style={style.heading}>Sample graph showing number of new registrations made on Referral Yogi portal every month</Text>
            <BarChart
                style={{ flex: 1 }}
                data={data}
                svg={{ fill: colors[0] }}
                contentInset={{ top: 10, bottom: 10 }}
            >
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
                <Legend />
            </BarChart>
        </View>
    );
}

export default BarGraph;
