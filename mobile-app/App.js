import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import ReportStack from './routes/reportStack';
import Advice from './screens/Advice';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Information from './screens/Information';
import Lookup from './screens/Lookup';

const bgImg = require('./assets/background.jpg');
const Tab = createMaterialBottomTabNavigator();

export default function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/weather/')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
        barStyle={{ backgroundColor: '#005b72' }}
        shifting={true}
      >

        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Home" children={() =>

            <View style={styles.container}>
              <ImageBackground source={bgImg} style={styles.bgImg}>
                <Home data={data} />
              </ImageBackground>
            </View>
          } />

        <Tab.Screen
          options={{
            tabBarLabel: 'Report',
            tabBarIcon: ({ color }) => (
              <Ionicons name="stats-chart" color={color} size={26} />
            ),
          }}
          name="ReportPage" component={ReportStack} />

        <Tab.Screen
          options={{
            tabBarLabel: 'Advice',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="tooltip-text" color={color} size={26} />
            ),
          }}
          name="Advice" children={() =>
            <Advice data={data} />
          } />

        <Tab.Screen
          options={{
            tabBarLabel: 'Infomation',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="alpha-i-circle-outline" color={color} size={26} />
            ),
          }}
          name="Infomation" component={Information} />

        <Tab.Screen
          options={{
            tabBarLabel: 'Lookup',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={26} />
            ),
          }}
          name="Lookup" component={Lookup} />

      </Tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
