import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <main data-aos="fade">
      <div className="header-home">
        <div className="header-info">
          {/* <p data-aos="fade">Learn from the best</p> */}
          <h1>
              Junte-se a nós,
          </h1>
          <h2>E beneficie de todas as oportunidades tecnologicas.</h2>
          <button className="btn btn-warning mt-3">Cadastrar</button>
        </div>
      </div>
    </main>
  );
};

export default Banner;
