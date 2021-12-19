import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap"; //importing BOOTSTRAP
import Course from "../../Components/Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <main className="all-courses">
      <h1 className="text-center mb-3 pb-2">All Courses</h1>
      <hr className="line" />
      <Row xs={1} md={4} className="g-4">
        {courses.map((course) => (
          <Col>
            <Course course={course} key={course.id}></Course>
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default Courses;
