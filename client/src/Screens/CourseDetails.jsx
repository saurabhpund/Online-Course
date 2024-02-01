import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCourseById } from '../store/actions/dataAction';
import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Collapse,
    IconButton,
  } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CourseDetail = ({ selectedCourse, loading, error, fetchCourseById }) => {
  const { courseId } = useParams();
  const [syllabusExpanded, setSyllabusExpanded] = useState(false);

  useEffect(() => {
    fetchCourseById(courseId);
  }, [courseId, fetchCourseById]);

  const handleSyllabusToggle = () => {
    setSyllabusExpanded(!syllabusExpanded);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!selectedCourse) {
    return <p>Course not found</p>;
  }

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px', maxWidth: '600px' }}>
      <img src={selectedCourse.thumbnail} alt={selectedCourse.name} style={{ width: '100%' }} />
      <Typography variant="h4" gutterBottom>
        {selectedCourse.name}
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Instructor: {selectedCourse.instructor}
      </Typography>
      <Typography variant="body1" paragraph>
        Description: {selectedCourse.description}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Enrollment Status: {selectedCourse.enrollmentStatus}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Duration: {selectedCourse.duration}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Schedule: {selectedCourse.schedule}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Location: {selectedCourse.location}
      </Typography>

      <Divider style={{ margin: '20px 0' }} />

      <div>
        <Typography variant="h6">Pre-requisites:</Typography>
        <List>
          {selectedCourse.prerequisites.map((prerequisite, index) => (
            <ListItem key={index}>
              <ListItemText primary={prerequisite} />
            </ListItem>
          ))}
        </List>
      </div>

      <Divider style={{ margin: '20px 0' }} />

      <div>
        <Typography variant="span" sx={{fontWeight: 500, fontSize: "1.3rem", display: "flex", justifyContent: "space-between"}}>Syllabus
        <IconButton onClick={handleSyllabusToggle}>
          <ExpandMoreIcon />
        </IconButton>
        </Typography>
        <Collapse in={syllabusExpanded}>
          <List>
            {selectedCourse.syllabus.map((item) => (
              <ListItem key={item.week}>
                <ListItemText
                  primary={`Week ${item.week}: ${item.topic} - ${item.content}`}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </div>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  selectedCourse: state.data.selectedCourse,
  loading: state.data.loading,
  error: state.data.error,
});

const mapDispatchToProps = {
  fetchCourseById,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
