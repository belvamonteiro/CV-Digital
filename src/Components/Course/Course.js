import React from "react";
import "./Course.css"; //import css style
import { Card } from "react-bootstrap"; //import BOOTSTRAP
import Rating from "react-rating"; //import RATING
import { useHistory } from "react-router-dom";

const Course = (props) => {
  const history = useHistory();
  const { course } = props;
  const {
    id,
    instructor,
    img,
    category,
    courseTitle,
    rating,
  } = course;

  const handleEnroll = () => {
    history.push(`/courseDetails/${id}`);
  };

  return (
    <Card className="course" data-aos="fade-right">
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between align-items-center">
          <p className="course-category">{category}</p>

        </div>
        <h5 className="course-title">{courseTitle}</h5>
        <p className="course-instructor">Instructor : {instructor}</p>
        <div className="course-review d-flex justify-content-between align-items-center">
          <p className="rating">
            <Rating
              initialRating={rating}
              readonly
              emptySymbol="far fa-star star-icon"
              fullSymbol="fas fa-star star-icon"
            ></Rating>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Course;
