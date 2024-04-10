// TopBar.js

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PieChart from '../components/pieChart';
import BarGraph from '../components/barGraph';
import LineGraph from '../components/lineGraph';
import style from './style';

function TopBar() {
    const [selectedChart, setSelectedChart] = useState(null);

    const handleChartSelection = (chartComponent) => {
        setSelectedChart(chartComponent);
    }

    let chartToRender;
    if (selectedChart === 'Pie Chart') {
        chartToRender = <PieChart />;
    } else if (selectedChart === 'Bar Graph') {
        chartToRender = <BarGraph />;
    } else if (selectedChart === 'Line Graph') {
        chartToRender = <LineGraph />;
    }

    return (
        <View style={style.topbar}>
            <Picker
                selectedValue={selectedChart}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue) => handleChartSelection(itemValue)}
            >
                <Picker.Item label="None" value={null} />
                <Picker.Item label="Pie Chart" value="Pie Chart" />
                <Picker.Item label="Bar Graph" value="Bar Graph" />
                <Picker.Item label="Line Graph" value="Line Graph" />
            </Picker>
            {chartToRender}
        </View>
    );
}

export default TopBar;
