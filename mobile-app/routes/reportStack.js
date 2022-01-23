import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Report from '../screens/Report';
import Chart from './../screens/Chart';

const Stack = createStackNavigator();

function ReportStack() {

  return (
    <Stack.Navigator>

      <Stack.Screen
        options={{
          title: 'Report',
          headerStyle: {
            backgroundColor: '#005b72',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="ReportPage"
        component={Report} />

      <Stack.Screen
        options={{
          title: 'Yesterday Report',
          headerStyle: {
            backgroundColor: '#005b72',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="YesterdayReport"
        component={Chart} />

      <Stack.Screen
        options={{
          title: 'Last Week Report',
          headerStyle: {
            backgroundColor: '#005b72',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="LastWeekReport"
        component={Chart} />

      <Stack.Screen
        options={{
          title: 'Date Report',
          headerStyle: {
            backgroundColor: '#005b72',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="DateReport"
        component={Chart}
      />

    </Stack.Navigator>
  );
}

export default ReportStack;