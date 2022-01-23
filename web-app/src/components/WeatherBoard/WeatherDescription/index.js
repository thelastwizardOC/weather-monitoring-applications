import React from 'react';
import WeatherDescriptionItem from '../WeatherDescriptionItem';
import { withStyles } from '@material-ui/core';
import styles from './styles';


const WeatherDescription = ({ data, classes }) => {
  return (
    <div className="mt-4 mt-md-2">
      <div className={classes.flexContainer}>
        {Object.keys(data).map(item => (
          <WeatherDescriptionItem name={item} value={data[item][0].value} key={item} />
        ))}
      </div>
    </div>
  )
};

export default withStyles(styles)(WeatherDescription);