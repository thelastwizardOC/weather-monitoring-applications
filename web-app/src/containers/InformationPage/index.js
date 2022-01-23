import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Accordion from '../../components/Accordion/Accordion';


class InformationPage extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Accordion
          title="TEMPERATURE"
          content="Temperature is a physical quantity that expresses hot and cold. It is the manifestation of thermal energy, present in all matter, which is the source of the occurrence of heat, a flow of energy, when a body is in contact with another that is colder or hotter."
        />
        <Accordion
          title="HUMIDITY"
          content="Humidity is the concentration of water vapour present in the air. Water vapor, the gaseous state of water, is generally invisible to the human eye. Humidity indicates the likelihood for precipitation, dew, or fog to be present."
        />
        <Accordion
          title="CO"
          content="Carbon monoxide (CO) is a deadly, colorless, odorless, poisonous gas. It is produced by the incomplete burning of various fuels, including coal, wood, charcoal, oil, kerosene, propane, and natural gas. Products and equipment powered by internal combustion engines such as portable generators, cars, lawn mowers, and power washers also produce CO."
        />
        <Accordion
          title="SOIL MOISTURE"
          content="Soil moisture is the water stored in the soil and is affected by precipitation, temperature, soil characteristics, and more. These same factors help determine the type of biome present, and the suitability of land for growing crops. The health of our crops relies upon an adequate supply of moisture and soil nutrients, among other things."
        />
        <Accordion
          title="AIR PRESSURE"
          content="Atmospheric pressure, also known as barometric pressure (after the barometer), is the pressure within the atmosphere of Earth. It is caused by the gravitational attraction of the planet on the atmospheric gases above the surface and is a function of the mass of the planet, the radius of the surface, and the amount and composition of the gases and their vertical distribution in the atmosphere."
        />
      </div>
    );
  }
}

export default withStyles(styles)(InformationPage);