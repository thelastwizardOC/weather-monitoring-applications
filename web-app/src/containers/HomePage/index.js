import React, { Component } from 'react';
import WeatherBoard from '../../components/WeatherBoard';
import { bindActionCreators } from 'redux';
import * as weatherActions from '../../actions/weather';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

class HomePage extends Component {

  componentDidMount() {
    const { weatherActionCreators } = this.props;
    const { fetchWeatherNow } = weatherActionCreators;
    fetchWeatherNow();
  }

  render() {

    const { dataNow } = this.props;
    
    return (
      <div>
        {dataNow && <WeatherBoard data={dataNow} />}
      </div>
    );
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);