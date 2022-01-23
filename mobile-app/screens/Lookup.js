import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

export default function Lookup() {

  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const renderError = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  const renderWeatherData = () => {
    const kelvin = (((data.main.temp - 32) / 1.8) + 273.15).toFixed(2);
    const celsius = ((data.main.temp - 32) / (9 / 5)).toFixed(2);
    return (
      <View style={styles.weatherDataContainer} onStartShouldSetResponder={() => true}>
        <ScrollView style={styles.containerInner}>
          <Text style={styles.title}>{data.name} - {data.sys.country}</Text>
          <View style={styles.box}>
            <Text style={styles.boxLabel}>{data.weather[0].description}</Text>
            <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` }} />
          </View>
          <View style={styles.box}>
            <Text style={styles.boxLabel}>Temp</Text>
            <View style={styles.tempContainer}>
              <Text style={styles.boxText}>{kelvin}K</Text>
              <Text style={styles.boxText}>{data.main.temp}&#8457;</Text>
              <Text style={styles.boxText}>{celsius}&#8451;</Text>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxLabel}>Humidity</Text>
            <Text style={styles.boxText}>{data.main.humidity}%</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxLabel}>Pressure</Text>
            <Text style={styles.boxText}>{data.main.pressure}hPa</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxLabel}>Wind</Text>
            <Text style={styles.boxText}>{data.wind.speed} m/s</Text>
          </View>
        </ScrollView>
      </View>
    )
  }

  const onSubmit = () => {
    setLoading(true);
    setError(null);
    setData(null);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2dc2905b246babebad9249c894ad682c&units=imperial`)
      .then(async (res) => {
        const resData = await res.json();
        if (!res.ok) {
          setError(resData.message);
          setLoading(false);
        } else {
          setData(resData);
          setLoading(false);
        }
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      })
  }

  return (
    <TouchableWithoutFeedback /*onPress={() => Keyboard.dismiss()}*/ >
      <View style={styles.container}>

        <View style={styles.formContainer}>
          <Text style={styles.heading}>Enter city name and press search button</Text>
          <View>
            <TextInput style={styles.input} placeholder="Enter city name..." value={city} onChangeText={(val) => setCity(val)} />
            <TouchableOpacity style={styles.button}
              onPress={() => onSubmit()}
            >
              <Text style={styles.text}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.weatherContainer}>
          {error !== null && renderError()}
          {loading && <ActivityIndicator size="large" color="#00d1b2" />}
          {data !== null && renderWeatherData()}
        </View>

      </View>
    </TouchableWithoutFeedback >
  )
}

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: 'white'
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 4,
    backgroundColor: '#fff',
    color: '#363636',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  weatherDataContainer: {
    flex: 1,
  },
  containerInner: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  boxLabel: {
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 40,
    alignContent: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  error: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundImage: 'linear-gradient(to right, #6b8cd9 0%, #182848  51%, #4b6cb7  100%)'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
})
