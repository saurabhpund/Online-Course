// dataAction.js
import axios from 'axios';

// Action Types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_COURSE_BY_ID_REQUEST = 'FETCH_COURSE_BY_ID_REQUEST';
export const FETCH_COURSE_BY_ID_SUCCESS = 'FETCH_COURSE_BY_ID_SUCCESS';
export const FETCH_COURSE_BY_ID_FAILURE = 'FETCH_COURSE_BY_ID_FAILURE';

// Action Creators
export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
      const response = await axios.get('http://localhost:5000/fetchData');
      const data = await response.data;
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};

export const fetchCourseById = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_COURSE_BY_ID_REQUEST });

    try {
      const response = await axios.get(`http://localhost:5000/fetchData/${id}`);
      const course = await response.data.data[0];
      dispatch({ type: FETCH_COURSE_BY_ID_SUCCESS, payload: course});
    } catch (error) {
      dispatch({ type: FETCH_COURSE_BY_ID_FAILURE, payload: error.message });
    }
  };
};
