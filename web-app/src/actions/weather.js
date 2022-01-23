import * as weatherConstants from '../constants/weather';
import * as weatherApis from '../apis/weather';

export const fetchWeatherNow = () => {
  return dispatch => {
    weatherApis.getNow()
      .then(response => {
        dispatch(fetchWeatherNowSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      })
  }
};

export const fetchWeatherNowSuccess = data => {
  return {
    type: weatherConstants.FETCH_WEATHER_NOW_SUCCESS,
    payload: {
      data,
    },
  };
};