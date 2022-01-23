import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

const data = [
  {
    bg: '#A8DDE9',
    color: '#3F5B98',
    category: 'Temperature',
    subCategories: 'Temperature is a physical quantity that expresses hot and cold. It is the manifestation of thermal energy, present in all matter, which is the source of the occurrence of heat, a flow of energy, when a body is in contact with another that is colder or hotter.',
  },
  {
    bg: '#086E4B',
    color: '#FCBE4A',
    category: 'Humidity',
    subCategories: 'Humidity is the concentration of water vapour present in the air. Water vapor, the gaseous state of water, is generally invisible to the human eye. Humidity indicates the likelihood for precipitation, dew, or fog to be present.'
    ,
  },
  {
    bg: '#FECBCA',
    color: '#FD5963',
    category: 'CO',
    subCategories: 'Carbon monoxide (CO) is a deadly, colorless, odorless, poisonous gas. It is produced by the incomplete burning of various fuels, including coal, wood, charcoal, oil, kerosene, propane, and natural gas. Products and equipment powered by internal combustion engines such as portable generators, cars, lawn mowers, and power washers also produce CO.'
  },
  {
    bg: '#193B8C',
    color: '#FECBCD',
    category: 'Soil moisture',
    subCategories: 'Soil moisture is the water stored in the soil and is affected by precipitation, temperature, soil characteristics, and more. These same factors help determine the type of biome present, and the suitability of land for growing crops. The health of our crops relies upon an adequate supply of moisture and soil nutrients, among other things.',
  },
  {
    bg: '#FDBD50',
    color: '#F5F5EB',
    category: 'Air pressure',
    subCategories: 'Atmospheric pressure, also known as barometric pressure (after the barometer), is the pressure within the atmosphere of Earth. It is caused by the gravitational attraction of the planet on the atmospheric gases above the surface and is a function of the mass of the planet, the radius of the surface, and the amount and composition of the gases and their vertical distribution in the atmosphere.',
  },
]

const transition = (
  <Transition.Together>
    <Transition.In type='fade' durationMs={200} />
    <Transition.Change />
    <Transition.Out type='fade' durationMs={200} />
  </Transition.Together>
);

export default function Information() {

  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={styles.container}
    >
      <StatusBar hidden />
      {data.map(({ bg, color, category, subCategories }, index) => {
        return (
          <TouchableOpacity
            key={category}
            onPress={() => {
              ref.current.animateNextTransition();
              setCurrentIndex(index === currentIndex ? null : index);
            }}
            style={styles.cardContainer}
            activeOpacity={0.9}
          >
            <View style={[styles.card, { backgroundColor: bg }]}>
              <Text style={[styles.heading, { color }]}>{category}</Text>
              {index === currentIndex && (
                <View style={styles.subCategoriesList}>
                  <Text key={subCategories} style={[styles.body, { color }]}>
                    {subCategories}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </Transitioning.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 38,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -2,
  },
  body: {
    fontSize: 15,
    lineHeight: 20 * 1.5,
    textAlign: 'left',
  },
  subCategoriesList: {
    marginTop: 20,
  },
})
