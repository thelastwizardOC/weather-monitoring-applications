import * as weatherConstants from './../constants/weather';

const initialState = {
  dataNow: [],
  dataDay: [],
  dataWeek: [],
  dataMonth: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case weatherConstants.FETCH_WEATHER_NOW: {
      return {
        ...state,
        dataNow: [],
      };
    }
    case weatherConstants.FETCH_WEATHER_NOW_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataNow: data,
      };
    }
    default:
      return state;
  }
};

export default reducer;