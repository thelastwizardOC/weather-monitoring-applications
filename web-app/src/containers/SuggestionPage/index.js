import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { bindActionCreators } from 'redux';
import * as weatherActions from '../../actions/weather';
import { connect } from 'react-redux';
import {
  ListGroup,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap"


class SuggestionPage extends Component {

  content = [
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

  componentDidMount() {
    const { weatherActionCreators } = this.props;
    const { fetchWeatherNow } = weatherActionCreators;
    fetchWeatherNow();
  }

  render() {

    const { classes, dataNow } = this.props;
    if (dataNow.length !== 0) {
      console.log(dataNow)
      if (dataNow.temperature[0] >= 34) {
        return (
          <div className={classes.container}>
            <ListGroup>
              <ListGroupItemHeading className={classes.title}>{this.content[0].title}</ListGroupItemHeading>
              {this.content[0].sugs.map(item => <ListGroupItemText>{item}</ListGroupItemText>)}
            </ListGroup>
          </div>
        );
      }
      else if (dataNow.temperature[0] <= 24) {
        return (
          <div className={classes.container}>
            <ListGroup>
              <ListGroupItemHeading className={classes.title}>{this.content[1].title}</ListGroupItemHeading>
              {this.content[1].sugs.map(item => <ListGroupItemText>{item}</ListGroupItemText>)}
            </ListGroup>
          </div>
        );
      }
      else {
        return (
          <div className={classes.container}>
            <ListGroup>
              <ListGroupItemHeading className={classes.title}>{this.content[2].title}</ListGroupItemHeading>
              {this.content[2].sugs.map(item => <ListGroupItemText>{item}</ListGroupItemText>)}
            </ListGroup>
          </div>
        );
      }
    }
    else {
      return (<div></div>)
    }
  }
}

const mapStateToProps = state => {
  return {
    dataNow: state.weather.dataNow,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    weatherActionCreators: bindActionCreators(weatherActions, dispatch)
  }
};

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuggestionPage));