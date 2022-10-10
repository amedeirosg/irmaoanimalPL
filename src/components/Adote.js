import React from "react";
import Header from "../components/Header.js";
import Dropdown from "../components/Dropdown.js";
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
        <div className="infos-pet">
          <div className="cards">
            <div className="img-pet">
              <img src={flokao}></img>
            </div>
            <div className="infos">
              <div className="infos-adocao">
                <div className="name">
                  <span>FLOKI</span>
                </div>
                <div className="genero">
                  <label>Idade: 2 anos</label>
                </div>
                <div className="tipo">
                  <label>Genêro: Macho </label>
                </div>
              </div>
            </div>
            <div className="botao-detalhes">
              <a href="#">Mais Detalhes</a>
            </div>
          </div>
          <div className="cards">
            <div className="img-pet">
              <img src={flokao}></img>
            </div>
            <div className="infos">
              <div className="infos-adocao">
                <div className="name">
                  <span>FLOKI</span>
                </div>
                <div className="genero">
                  <label>Idade: 2 anos</label>
                </div>
                <div className="tipo">
                  <label>Genêro: Macho </label>
                </div>
              </div>
            </div>
            <div className="botao-detalhes">
              <a href="#">Mais Detalhes</a>
            </div>
          </div>
          <div className="cards">
            <div className="img-pet">
              <img src={flokao}></img>
            </div>
            <div className="infos">
              <div className="infos-adocao">
                <div className="name">
                  <span>FLOKI</span>
                </div>
                <div className="genero">
                  <label>Idade: 2 anos</label>
                </div>
                <div className="tipo">
                  <label>Genêro: Macho </label>
                </div>
              </div>
            </div>
            <div className="botao-detalhes">
              <a href="#">Mais Detalhes</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-info-body2">
        <div className="infos-pet2">
          <div className="cards2">
            <div className="img-pet2">
              <img src={flokao}></img>
            </div>
            <div className="infos2">
              <div className="infos-adocao2">
                <div className="name2">
                  <span>FLOKI</span>
                </div>
                <div className="genero2">
                  <label>Idade: 2 anos</label>
                </div>
                <div className="tipo2">
                  <label>Genêro: Macho </label>
                </div>
              </div>
            </div>
            <div className="botao-detalhes2">
              <a href="#">Mais Detalhes</a>
            </div>
          </div>
          <div className="cards2">
            <div className="img-pet2">
              <img src={flokao}></img>
            </div>
            <div className="infos2">
              <div className="infos-adocao2">
                <div className="name2">
                  <span>FLOKI</span>
                </div>
                <div className="genero2">
                  <label>Idade: 2 anos</label>
                </div>
                <div className="tipo2">
                  <label>Genêro: Macho </label>
                </div>
              </div>
            </div>
            <div className="botao-detalhes2">
              <a href="#">Mais Detalhes</a>
            </div>
          </div>
          <div className="cards2">
            <div className="img-pet2">
              <img src={flokao}></img>
            </div>
            <div className="infos2">
              <div className="infos-adocao2">
                <div className="name2">
                  <span>FLOKI</span>
                </div>
                <div className="genero2">
                  <label>Idade: 2 anos</label>
                </div>
                <div className="tipo2">
                  <label>Genêro: Macho </label>
                </div>
              </div>
            </div>
            <div className="botao-detalhes2">
              <a href="#">Mais Detalhes</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adote;
