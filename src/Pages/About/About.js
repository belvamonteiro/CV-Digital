import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css"; //importing css style
import Member from "./Member/Member";

const About = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("./team.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <main>
      <section className="about">
        <div className="about-header">
          <h1>
            <span className="heading-about-primary">O instituto para a promoção e desenvolvimento da inovação.</span>{" "}
            <br />
            <span className="heading-about-secondary">Que já conta com muitos sócios.</span>
          </h1>
        </div>
        <div className="about-team container py-5">
          <h2 className="text-center mb-3 pb-2">ASSOCIADOS</h2>
          <hr className="line" />
          <Row xs={1} md={4} className="g-3">
            {members.map((member) => (
              <Col>
                <Member key={member.id} member={member}></Member>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </main>
  );
};

export default About;
