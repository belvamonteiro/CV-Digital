import React, { useState, useEffect } from "react";
import { Container, Spinner, Row, Col, FormControl } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner";
import PopularCourse from "../../Components/PopularCourse/PopularCourse";
import "./Home.css";
// import Header from "../../Components/Header/Header";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Container>
        <div className="courses-home container mt-0 py-5">
          <h2 className="mb-4">PROJETOS MAIS VISTOS</h2>
          <hr className="line" />
          <Row xs={1} md={3} className="g-4">
            {courses.length === 0 ? (
              <Spinner animation="grow" style={{ margin: "50px auto" }} />
            ) : (
              <>
                {courses.map((course) => (
                  <Col>
                    <PopularCourse
                      key={course.id}
                      course={course}
                    ></PopularCourse>
                  </Col>
                ))}
              </>
            )}
          </Row>
          <button className="btn btn-primary d-block mx-auto mt-3">
            Ver todos
          </button>
        </div>
      </Container>
      <div className="alert-home m-0">
        <h2>Estás pronto para seguir o próximo passo para o future?</h2>
        <FormControl
          className="mt-3 full-width"
          placeholder="Give us your feedback"
        />
      </div>
    </div>
  );
};

export default Home;
