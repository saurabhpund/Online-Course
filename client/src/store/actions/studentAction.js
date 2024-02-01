import axios from 'axios';

// Action creator for successfully fetching enrolled courses
export const fetchEnrolledCoursesSuccess = (courses) => ({
  type: 'FETCH_ENROLLED_COURSES_SUCCESS',
  payload: courses,
});

// Action creator for failure in fetching enrolled courses
export const fetchEnrolledCoursesFailure = (error) => ({
  type: 'FETCH_ENROLLED_COURSES_FAILURE',
  payload: error,
});

// Action creator for successfully marking a course as completed
export const markCourseAsCompletedSuccess = (courseId) => ({
  type: 'MARK_COURSE_AS_COMPLETED_SUCCESS',
  payload: courseId,
});

// Action creator for failure in marking a course as completed
export const markCourseAsCompletedFailure = (error) => ({
  type: 'MARK_COURSE_AS_COMPLETED_FAILURE',
  payload: error,
});

// Async action to fetch enrolled courses
export const fetchEnrolledCourses = (userId) => {
  return async (dispatch) => {
    try {
      // Make API request to fetch enrolled courses for the user with userId using Axios
      const response = await axios.get(`/api/users/${userId}/enrolled-courses`);
      const data = response.data;

      // Dispatch success action with the fetched courses
      dispatch(fetchEnrolledCoursesSuccess(data));
    } catch (error) {
      // Dispatch failure action with the error message
      dispatch(fetchEnrolledCoursesFailure(error.message));
    }
  };
};

// Async action to mark a course as completed
export const markCourseAsCompleted = (userId, courseId) => {
  return async (dispatch) => {
    try {
      // Make API request to mark the course as completed for the user with userId using Axios
      await axios.post(`/api/users/${userId}/enrolled-courses/${courseId}/complete`);

      // Dispatch success action with the courseId
      dispatch(markCourseAsCompletedSuccess(courseId));
    } catch (error) {
      // Dispatch failure action with the error message
      dispatch(markCourseAsCompletedFailure(error.message));
    }
  };
};
