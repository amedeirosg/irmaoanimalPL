import React from "react";
import flokao from "../imgs/flokao.jpeg";
import "../styles/adote.css";

function CardsTwo() {
  return (
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
  );
}

export default CardsTwo;
