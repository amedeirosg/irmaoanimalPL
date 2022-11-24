import React from "react";
import Cards from "../components/Cards.js";
import Header from "../components/Header.js";
import "../styles/apadrinhe.css";
import flokao from "../imgs/flokao.jpeg";
import { useRef, useState, useEffect } from "react";
function Apadrinhe(props) {
  const inputRef = useRef("");
  const [id1, setId1] = useState("card1");
  const [id2, setId2] = useState("card2");
  const names = [props.nome1, props.nome2];

  function setFilter() {
    const nameFilter = inputRef.current.value;
    if (names.indexOf(nameFilter) > -1) {
      console.log("Encontrou");
      if (nameFilter == names[0]) {
        setId2("card2ocult");
      } else {
        setId1("card1ocult");
      }
    } else {
      console.log("Nao Encontrou");
      setId1("card1");
      setId2("card2");
    }
    console.log(nameFilter);
    console.log(names);
  }

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
            <input
              ref={inputRef}
              type="text"
              placeholder="Insira o nome..."
            ></input>
          </div>
          <div className="btn-pesquisar">
            <a onClick={setFilter} href="#">
              Pesquisar
            </a>
          </div>
        </div>
        <div className="cards-apadrinhe">
          <div id={id1} className="individual-cards">
            <div className="picture-pet">
              <img src={flokao}></img>
            </div>
            <div className="informations-pet">
              <div className="name-pet">
                <span id="nome">{props.nome1}</span>
              </div>
              <div className="idade-genero">
                <div className="idade-pet">
                  <span id="idade">Idade: {props.idade1}</span>
                </div>
                <div className="genero-pet">
                  <span id="idade">Genêro: {props.genero1}</span>
                </div>
              </div>
              <div className="more-details">
                <div className="button-details">
                  <a>Mais detalhes</a>
                </div>
              </div>
            </div>
          </div>
          <div id={id2} className="individual-cards">
            <div className="picture-pet">
              <img src={flokao}></img>
            </div>
            <div className="informations-pet">
              <div className="name-pet">
                <span id="nome">{props.nome2}</span>
              </div>
              <div className="idade-genero">
                <div className="idade-pet">
                  <span id="idade">Idade: {props.idade2}</span>
                </div>
                <div className="genero-pet">
                  <span id="idade">Genêro: {props.genero2}</span>
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
