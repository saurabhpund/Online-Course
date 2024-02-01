import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Card key={course.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ minHeight: "48%" }}
        alt={course.name}
        image={course.thumbnail}
      />
      <CardContent>
        <Link to={`/course/${course.id}`} style={{color: "#222", textDecoration: "none"}}>
          <Typography variant="h5"  component="div">
            {course.name}
          </Typography>
        </Link>
        <Typography
          gutterBottom
          variant="subtitle1"
          color="text.primary"
          sx={{ marginRight: "auto" }}
        >
          {course.instructor}
        </Typography>
        <Typography gutterBottom component={"span"} color="text.primary">
          {course.duration}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/course/${course.id}`} style={{ width: "100%" }}>
          <Button fullWidth variant="contained">
            Apply Now{" "}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
