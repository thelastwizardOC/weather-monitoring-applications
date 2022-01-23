import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const WeatherItem = ({ title, value }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemValue}>{value}</Text>
    </View>
  )
}

export default function Home({ data }) {

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12Format = hour >= 13 ? hour % 12 : hour;
      const minutes = String(time.getMinutes()).padStart(2, "0");
      const ampm = hour >= 12 ? 'PM' : 'AM';

      setTime(`${hoursIn12Format}:${minutes} ${ampm}`);
      setDate(`${days[day]}, ${months[month]} ${date}`);
    }, 1000)
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>{time}</Text>
        </View>
        <View>
          <Text style={styles.subHeading}>{date}</Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem title="Temperature" value={Object.keys(data).length !== 0 ? `${data.temperature[0].value}\xB0C` : "loading"} />
          <WeatherItem title="Humidity" value={Object.keys(data).length !== 0 ? `${data.humidity[0].value}%` : "loading"} />
          <WeatherItem title="Soil moisture" value={Object.keys(data).length !== 0 ? `${parseFloat(data.soilmoisture[0].value).toFixed(2)}%` : "loading"} />
          <WeatherItem title="COPPM" value={Object.keys(data).length !== 0 ? `${parseFloat(data.coppm[0].value).toFixed(2)} ppm` : "loading"} />
          <WeatherItem title="Rain drop" value={Object.keys(data).length !== 0 ? `${data.raindrop[0].value > 550 ? 'No rain' : 'Rain'}` : "loading"} />
          <WeatherItem title="Air pressure" value={Object.keys(data).length !== 0 ? `${parseFloat(data.pressure[0].value).toFixed(2)} atm` : "loading"} />
        </View>
      </View>
      <View style={styles.rightAlign}>
        <Text style={styles.timezone}>Ho Chi Minh City</Text>
        <Text style={styles.latlong}>10.76N 106.66E</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 20,
  },
  heading: {
    fontSize: 45,
    color: "white",
    fontWeight: "100"
  },
  subHeading: {
    fontSize: 25,
    color: "#eee",
    fontWeight: "300",
    marginTop: 10
  },
  rightAlign: {
    textAlign: "right",
    marginTop: 20
  },
  timezone: {
    fontSize: 20,
    color: "white"
  },
  latlong: {
    fontSize: 16,
    color: "white",
    fontWeight: "700"
  },
  weatherItemContainer: {
    backgroundColor: "#18181b99",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  weatherItemTitle: {
    color: "#eee",
    fontSize: 15,
    fontWeight: "100"
  },
  weatherItemValue: {
    color: "#eee",
    fontSize: 15,
    fontWeight: "100"
  }
})
