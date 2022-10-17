import React from "react";
import Header from "../components/Header.js";
import "../styles/ajude.css";
import petpreguica from "../imgs/pet-preguicoso.png";
function Ajude() {
  return (
    <div className="container-ajude">
      <Header />
      <div className="container-como-ajudar">
        <img src={petpreguica}></img>
        <div className="metodos-ajuda">
          <div className="como-ajudar-titulo">
            <h1>Que bom que você tem interesse em ajudar nosso projeto!</h1>
          </div>
          <br></br>
          <div className="informacoes-ajudar">
            <p>
              Todo trabalho que realizamos no projeto irmão animal é feito de
              forma independente, voluntária e sem qualquer ajuda da prefeitura
              de Pedro Leopoldo.
            </p>
            <br></br>
            <p>
              Por aqui você encontra várias formas de contribuir para que
              possamos continuar cuidando dos bichinhos como por exemplo:
            </p>
            <br></br>
            <ul>
              <li>
                <p id="apadrinhe">
                  <a href="#apadrinhe">Apadrinhe</a> um pet com um valor mensal
                  mínimo de R$1,00 mensal.
                </p>
              </li>
              <li>
                <p id="contribuir">
                  <a href="#">Contribuir</a> financeiramente nos ajudando com
                  despesas mensais como: ração, medicamentos, atendimento
                  veterinário e também trabalhos voluntários.
                </p>
              </li>

              <li>
                <p id="lt">
                  <a href="#">Lar temporário</a> até que encontremos uma doação
                  responsável.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ajude;
