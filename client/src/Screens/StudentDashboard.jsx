import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEnrolledCourses, markCourseAsCompleted } from '../store/actions/studentAction';

const StudentDashboard = ({ studentId, enrolledCourses, loading, error, fetchEnrolledCourses, markCourseAsCompleted }) => {
  useEffect(() => {
    fetchEnrolledCourses(studentId);
  }, [fetchEnrolledCourses, studentId]);

  const handleMarkAsCompleted = (courseId) => {
    markCourseAsCompleted(studentId, courseId);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Enrolled Courses</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            <div>
              <img src={course.thumbnail} alt={course.name} />
              <h3>{course.name}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: {course.dueDate}</p>
              <p>Progress: {course.progress}%</p>
            </div>
            <button onClick={() => handleMarkAsCompleted(course.id)}>Mark as Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  studentId: state.auth.studentId, // Assuming you have studentId in your auth state
  enrolledCourses: state.student.enrolledCourses,
  loading: state.student.loading,
  error: state.student.error,
});

const mapDispatchToProps = {
  fetchEnrolledCourses,
  markCourseAsCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
