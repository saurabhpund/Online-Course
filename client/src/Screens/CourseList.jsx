import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions/dataAction';
import SearchBar from '../Components/SearchBar';
import CourseCard from '../Components/CourseCard';

const CourseList = ({ data, loading, error, fetchData }) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = (query) => {
    if (query.trim().toLowerCase() === '') {
      setFilteredData(data);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filteredCourses = data.filter(
        (course) =>
          course.name.toLowerCase().includes(lowerCaseQuery) ||
          course.instructor.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredData(filteredCourses);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="CourseListContainer">
        {filteredData.map((course) => (
          <CourseCard
            course={course}
            key={course.id}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
