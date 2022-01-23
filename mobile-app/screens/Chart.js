import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, ScrollView, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-line-chart'

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `#023047`,
  labelColor: (opacity = 1) => `#333`,
};

export default function Chart(props) {

  const type = props.route.params.type;

  const [labels, setLabels] = useState([]);
  const [tdata, setTdata] = useState([]);
  const [hdata, setHdata] = useState([]);
  const [pdata, setPdata] = useState([]);
  const [cdata, setCdata] = useState([]);

  if (labels.length === 0) {
    if (type === 'yesterday') {
      var yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toString();
      var start = new Date(yesterday).setHours(0, 0, 0, 0).valueOf();
      var end = new Date(yesterday).setHours(23, 59, 59, 999).valueOf();

      fetch(`http://127.0.0.1:8000/api/weather/stat?start=${start}&end=${end}`)
        .then(response => response.json())
        .then(data => {
          setLabels(() => data.temperature.map(item => new Date(item.ts).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })).reverse().filter((item, i) => i % 8 == 0));
          setTdata(() => data.temperature.map(item => item.value).reverse().filter((item, i) => i % 8 == 0));
          setHdata(() => data.humidity.map(item => item.value).reverse().filter((item, i) => i % 8 == 0));
          setPdata(() => data.pressure.map(item => item.value).reverse().filter((item, i) => i % 8 == 0));
          setCdata(() => data.coppm.map(item => item.value).reverse().filter((item, i) => i % 8 == 0));
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    else if (type === 'lastweek') {
      var d = new Date();
      // set to Monday of this week
      d.setDate(d.getDate() - (d.getDay() + 6) % 7);
      // set to previous Monday
      var sunday = d.setDate(d.getDate() - 1);
      var monday = d.setDate(d.getDate() - 6);
      var start = new Date(monday).setHours(0, 0, 0, 0).valueOf();
      var end = new Date(sunday).setHours(23, 59, 59, 999).valueOf();

      fetch(`http://127.0.0.1:8000/api/weather/stat?start=${start}&end=${end}`)
        .then(response => response.json())
        .then(data => {
          setLabels(() => data.temperature.map(item => new Date(item.ts).toLocaleDateString('vi-VN', { month: "numeric", day: "numeric" })).reverse().filter((item, i) => i % 47 == 0));
          setTdata(() => data.temperature.map(item => item.value).reverse());
          setHdata(() => data.humidity.map(item => item.value).reverse());
          setPdata(() => data.pressure.map(item => item.value).reverse());
          setCdata(() => data.coppm.map(item => item.value).reverse());
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else if (type === 'date') {

      var d = props.route.params.date.toString();
      var start = new Date(d).setHours(0, 0, 0, 0).valueOf();
      var end = new Date(d).setHours(23, 59, 59, 999).valueOf();

      fetch(`http://127.0.0.1:8000/api/weather/stat?start=${start}&end=${end}`)
        .then(response => response.json())
        .then(data => {
          setLabels(() => data.temperature.map(item => new Date(item.ts).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })).reverse().filter((item, i) => i % 8 == 0));
          setTdata(() => data.temperature.map(item => item.value).reverse().filter((item, i) => i % 8 == 0));
          setHdata(() => data.humidity.map(item => item.value).reverse().filter((item, i) => i % 8 == 0));
          setPdata(() => data.pressure.map(item => item.value).reverse().filter((item, i) => i % 8 == 0));
          setCdata(() => data.coppm.map(item => item.value).reverse().filter((item, i) => i % 8 == 0));
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  if (labels.length === 0) {
    return (

      <ActivityIndicator
        animating={true}
        style={styles.indicator}
        size="large"
      />
    )
  } else {
    return (
      <ScrollView style={styles.container}>

        <Text style={styles.title}>Temperature</Text>
        <LineChart
          data={{
            labels,
            datasets: [{
              data: tdata
            }]
          }}
          width={Dimensions.get("window").width - 20} // from react-native
          height={220}
          chartConfig={chartConfig}
          style={{
            marginVertical: 10,
            borderRadius: 16,
          }}
          bezier
        />
        <Text style={styles.note}>{'T > 27: hot, 20 < T < 27: good, T < 20: cold'}</Text>

        <Text style={styles.title}>Humidity</Text>
        <LineChart
          data={{
            labels,
            datasets: [{
              data: hdata
            }]
          }}
          width={Dimensions.get("window").width - 20} // from react-native
          height={220}
          chartConfig={chartConfig}
          style={{
            marginVertical: 10,
            borderRadius: 16,
          }}
          bezier
        />
        <Text style={styles.note}>{'H > 70: moist, 40 < H < 60: optimum, H < 30: dry'}</Text>

        <Text style={styles.title}>Pressure</Text>
        <LineChart
          data={{
            labels,
            datasets: [{
              data: pdata
            }]
          }}
          width={Dimensions.get("window").width - 20} // from react-native
          height={220}
          chartConfig={chartConfig}
          style={{
            marginVertical: 10,
            borderRadius: 16,
          }}
          bezier
        />
        <Text style={styles.note}>{'Normal atmospheric pressure is defined as 1 atm. Pressure varies based on the height.'}</Text>

        <Text style={styles.title}>CO ppm</Text>
        <LineChart
          data={{
            labels,
            datasets: [{
              data: cdata
            }]
          }}
          width={Dimensions.get("window").width - 20} // from react-native
          height={220}
          chartConfig={chartConfig}
          style={{
            marginVertical: 10,
            borderRadius: 16,
          }}
          bezier
        />
        <Text style={styles.note}>{'ppm > 100: unhealthy, 51 < ppm < 100: medium, H < 51: good'}</Text>
      </ScrollView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  note: {
    textAlign: 'center',
    marginBottom: 5
  }
})
