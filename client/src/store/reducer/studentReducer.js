const initialState = {
    enrolledCourses: [],
    loadingEnrolledCourses: false,
    errorEnrolledCourses: null,
  };
  
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ENROLLED_COURSES_SUCCESS':
        return {
          ...state,
          enrolledCourses: action.payload,
          loadingEnrolledCourses: false,
          errorEnrolledCourses: null,
        };
  
      case 'FETCH_ENROLLED_COURSES_FAILURE':
        return {
          ...state,
          enrolledCourses: [],
          loadingEnrolledCourses: false,
          errorEnrolledCourses: action.payload,
        };
  
      case 'MARK_COURSE_AS_COMPLETED_SUCCESS':
        const completedCourseId = action.payload;
        return {
          ...state,
          enrolledCourses: state.enrolledCourses.map((course) =>
            course.id === completedCourseId ? { ...course, completed: true } : course
          ),
        };
  
      case 'MARK_COURSE_AS_COMPLETED_FAILURE':
        return state;
  
      default:
        return state;
    }
  };
  
  export default studentReducer;
  