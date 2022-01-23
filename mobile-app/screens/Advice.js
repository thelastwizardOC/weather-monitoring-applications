import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text, FlatList } from 'react-native';

const content = [
  {
    title: 'It is hot now, you should:',
    sugs: [
      'Drink more water than usual and don’t wait until you are thirsty. Talk to your doctor first if you are on water pills.',
      'Avoid alcohol and sugary drinks.',
      'Take a cool shower or bath.',
      'Use air conditioning or a fan.',
      'Don’t use a fan to blow extremely hot air on yourself, use it create cross-ventilation.',
      'Wear lightweight and loose clothing.',
      'Avoid using your stove or oven.',
    ]
  },
  {
    title: 'It is cold now, you should:',
    sugs: [
      'Wear warm clothes - layers are best, including a hat.',
      'Eating a well-balanced diet, take regular hot drinks and food.',
      'Get a flu shot and a COVID shot.',
      'Exercise creatively.',
      'Pay attention to indoor air quality, turn on heater.',
      'Stay hydrated, add chunks of fresh fruit or an herbal tea bag to your glass of water for a flavor spike.',
    ]
  },
  {
    title: 'It is a beautiful day, you should:',
    sugs: [
      'Take a walk.',
      'Go to the park.',
      'Play outdoor games with friends.',
      'Study.',
      'Explore the city.',
      'Go picnic.',
      'Take pictures.'
    ]
  },
]

export default function Advice({ data }) {
  if (data.temperature === undefined) {
    return (
      <ActivityIndicator
        animating={true}
        style={styles.indicator}
        size="large"
      />
    )
  }
  else {
    if (data.temperature[0].value >= 34) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{content[0].title}</Text>
          <FlatList
            data={content[0].sugs}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          />
        </View>
      )
    }
    else if (data.temperature[0].value <= 24) {
      console.log(data.temperature[0].value)
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{content[1].title}</Text>
          <FlatList
            data={content[1].sugs}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          />
        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{content[2].title}</Text>
          <FlatList
            data={content[2].sugs}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  container: {
    display: 'flex',
    margin: 50
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#005b72',
    textAlign: 'center',
    marginBottom: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
  }
})
