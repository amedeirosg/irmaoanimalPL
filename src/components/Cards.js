import React from "react";
import flokao from "../imgs/flokao.jpeg";
import "../styles/adote.css";

function Cards() {
  return (
    <div>
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
  );
}

export default Cards;
