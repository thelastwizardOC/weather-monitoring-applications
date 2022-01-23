import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';
import { withStyles } from '@material-ui/core';

import styles from './styles.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

class LineChart extends Component {
  render() {
    const { labels, data, classes, title } = this.props;

    var datasets = [
      {
        data,
        label: title,
        borderColor: "#3e95cd",
        fill: false
      }
    ]

    return (
      <Container className={classes.Box}>
        <Line
          data={{
            labels,
            datasets
          }}
          options={{
            maintainAspectRatio: false
          }}
        />
      </Container>
    );
  }
}

export default withStyles(styles)(LineChart);