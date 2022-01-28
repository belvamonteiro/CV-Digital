import React from "react";
import "./Footer.css"; //import css style
import logo from "../../images/logo-white.png";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer>
      <ScrollToTop smooth top="1000" style={{ backgroundColor: "#35a7df" }} />
      <ul className="footer-list">
        <li className="footer-item">
          <img src={logo} alt="" />
          <p>
            O instituto para a promoção e desenvolvimento da inovação - CV Digital
            é uma pessoa coletiva de direito privado, sem fins lucrativos, dotada de outonomia
            organizativa, financeira e patrimonial.
          </p>
        </li>
        <li className="footer-item">
          <h4>Localização</h4>
          <p>Plateau - Avenida 5 de Julho</p>
        </li>
        <li className="footer-item">
          <h4>Contactos</h4>
          <p>
            Telefone: 262 40 70  <br /> Telemóvel: (+238) 958 05 08 <br /> E-Mail:
            cvdigital@gmail.com
          </p>
        </li>
        <li className="footer-item">
          <h4>Funcionamento</h4>
          <p>
            Segunda - Sexta: 09:00 - 20:00 <br /> Sábados & Domingos: 10:30 -
            13:00
          </p>
        </li>
      </ul>
      <p className="copyright-text">
        <small>Copyright &copy; All Rights Reserved By Belva Monteiro & Ermickson Alves.</small>
      </p>
    </footer>
  );
};

export default Footer;
