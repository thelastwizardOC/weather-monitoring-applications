import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const WeatherDescriptionItem = ({ name, value, classes }) => {
  return (
    <div className="d-flex justify-content-between">
      <p className={`mb-0 text-uppercase ${classes.Bold}`}>{name}</p>
      <p className="mb-0">
        {name === 'temperature' ? `${value}\xB0C` : ''}
        {name === 'humidity' ? `${value}%` : ''}
        {name === 'pressure' ? `${parseFloat(value).toFixed(2)} pa` : ''}
        {name === 'coppm' ? `${parseFloat(value).toFixed(2)} ppm` : ''}
        {name === 'soilmoisture' ? `${parseFloat(value).toFixed(2)}%` : ''}
        {name === 'raindrop' ? `${value > 550 ? 'No rain' : 'Rain'}` : ''}
      </p>
    </div>
  )
};

export default withStyles(styles)(WeatherDescriptionItem);