import React from "react";
import Cards from "../components/Cards.js";
import Header from "../components/Header.js";
import "../styles/apadrinhe.css";
function Apadrinhe() {
  return (
    <div className="apadrinhamento">
      <Header />
      <div className="container-apadrinhe">
        <div className="titulo-apadrinhe">
          <h1>Apadrinhamento</h1>
        </div>
        <div className="como-apadrinhar">
          <div className="texto-apadrinhe">
            <h4>
              Você pode apadrinhar um animal individualmente. Doe um valor
              mensal para um dos pets que estão em tratamento para contribuir
              com sua alimentação/hospedagem
            </h4>
          </div>
        </div>
        <div className="container-filtro">
          <div className="filtrar-animais">
            <input type="checkbox"></input>
            <span>Visualizar todos</span>
          </div>
        </div>
      </div>
      <div className="container-busca">
        <div className="buscar-animais">
          <div className="busca-nome">
            <span>Buscar por nome</span>
            <input type="text" placeholder="Insira o nome..."></input>
          </div>
          <div className="btn-pesquisar">
            <a href="#">Pesquisar</a>
          </div>
        </div>
        <div className="cards-apadrinhe">
          <div className="individual-cards">
            <div className="picture-pet">
              <span>oi</span>
            </div>
            <div className="informations-pet">
              <span>oi</span>
            </div>
          </div>
          <div className="individual-cards">
            <div className="picture-pet">
              <span>oi</span>
            </div>
            <div className="informations-pet">
              <span>oi</span>
            </div>
          </div>
          <div className="individual-cards">
            <div className="picture-pet">
              <span>oi</span>
            </div>
            <div className="informations-pet">
              <span>oi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apadrinhe;
