import React from "react";
import Cards from "../components/Cards.js";
import Header from "../components/Header.js";
import "../styles/apadrinhe.css";
import flokao from "../imgs/flokao.jpeg";
function Apadrinhe(props) {
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
      </div>
      <div className="container-busca">
        <div className="buscar-animais">
          <div className="busca-nome">
            <div className="container-filtro">
              <div className="filtrar-animais">
                <input type="checkbox"></input>
                <span>Visualizar todos</span>
              </div>
            </div>
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
              <img src={flokao}></img>
            </div>
            <div className="informations-pet">
              <div className="name-pet">
                <span id="nome">Floki</span>
              </div>
              <div className="idade-genero">
                <div className="idade-pet">
                  <span id="idade">Idade: 2 anos</span>
                </div>
                <div className="genero-pet">
                  <span id="idade">Genêro: Macho</span>
                </div>
              </div>
              <div className="more-details">
                <div className="button-details">
                  <a>Mais detalhes</a>
                </div>
              </div>
            </div>
          </div>
          <div className="individual-cards">
            <div className="picture-pet">
              <img src={flokao}></img>
            </div>
            <div className="informations-pet">
              <div className="name-pet">
                <span id="nome">Floki</span>
              </div>
              <div className="idade-genero">
                <div className="idade-pet">
                  <span id="idade">Idade: 2 anos</span>
                </div>
                <div className="genero-pet">
                  <span id="idade">Genêro: Macho</span>
                </div>
              </div>
              <div className="more-details">
                <div className="button-details">
                  <a>Mais detalhes</a>
                </div>
              </div>
            </div>
          </div>
          <div className="individual-cards">
            <div className="picture-pet">
              <img src={flokao}></img>
            </div>
            <div className="informations-pet">
              <div className="name-pet">
                <span id="nome">Floki</span>
              </div>
              <div className="idade-genero">
                <div className="idade-pet">
                  <span id="idade">Idade: 2 anos</span>
                </div>
                <div className="genero-pet">
                  <span id="idade">Genêro: Macho</span>
                </div>
              </div>
              <div className="more-details">
                <div className="button-details">
                  <a>Mais detalhes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apadrinhe;
