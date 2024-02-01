// dataReducer.js
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_COURSE_BY_ID_REQUEST,
  FETCH_COURSE_BY_ID_SUCCESS,
  FETCH_COURSE_BY_ID_FAILURE,
} from '../actions/dataAction';

const initialState = {
  data: [],
  selectedCourse: null,
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null, data: [] };

    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };

    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload, data: [] };

    case FETCH_COURSE_BY_ID_REQUEST:
      return { ...state, loading: true, error: null, selectedCourse: null };

    case FETCH_COURSE_BY_ID_SUCCESS:
      return { ...state, selectedCourse: action.payload, loading: false, error: null };

    case FETCH_COURSE_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload, selectedCourse: null };

    default:
      return state;
  }
};

export default dataReducer;
