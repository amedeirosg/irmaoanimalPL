import React from "react";
import Header from "../components/Header.js";
import Dropdown from "../components/Dropdown.js";
import Cards from "../components/Cards.js";
import CardsTwo from "../components/CardsTwo.js";
import flokao from "../imgs/flokao.jpeg";
import "../styles/adote.css";

function Adote() {
  return (
    <div className="container-adote">
      <body></body>
      <div className="topo-tela">
        <Header />
      </div>
      <div className="container-info-body">
        <div className="conteudo-adote-pet">
          <div className="filtros-pet">
            <Dropdown item1="Macho" item2="Femêa" title="Todos os genêros" />
          </div>
          <div className="filtros-pet">
            <Dropdown item1="Cão" item2="Gato" title="Todos os tipos" />
          </div>
          <div className="pesquisar">
            <p>Pesquisar</p>
          </div>
        </div>
        <Cards />
      </div>
      <CardsTwo />
    </div>
  );
}

export default Adote;
