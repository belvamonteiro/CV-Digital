import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="header-home">
      <div className="header-info">
        {/* <p data-aos="fade">Learn from the best</p> */}
        <h1>
          Change your Life,
          <br /> Join Millions of Learner.
        </h1>
        <button className="btn btn-warning mt-3">Discover Our Courses</button>
      </div>
    </div>
  );
};

export default Banner;
