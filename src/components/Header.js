import React from "react";
import "../styles/header.css";
import logo from "../imgs/logo.ico";
import insta from "../imgs/insta.ico";
import face from "../imgs/fb.ico";
import { useState } from "react";
function Header() {
  const [navbar, setNavbar] = useState("container-header");
  const changeNavbar = () => {
    if (window.scrollY > 0) {
      setNavbar("container-header2");
    } else {
      setNavbar("container-header");
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <div className="container-header">
      <div className="container-acessos">
        <div className="img-header">
          <a href="/">
            <img width="80rem" src={logo}></img>
          </a>
        </div>
        <div className="acessos">
          <a href="/adote">Adote</a>
          <a href="/ajude">Ajude</a>
          <a href="/sobre">Sobre</a>
        </div>
        <div className="redes-sociais">
          <a href="https://instagram.com/projetoirmaoanimal" target="_blank">
            <img width="20px" src={insta}></img>
          </a>
          <a href="https://facebook.com/projetoirmaoanimal" target="_blank">
            <img width="20px" src={face}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
