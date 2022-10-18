import React from "react";
import Header from "../components/Header.js";
import "../styles/ajude.css";
import petpreguica from "../imgs/pet-preguicoso.png";
import Apoiadores from "../components/Apoiadores.js";

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
                  <a href="#">Apadrinhe</a> um pet com um valor mensal mínimo de
                  R$1,00 mensal.
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
          <div className="pra-onde-vai">
            <p>
              Todo valor arrecadado será utilizado para: compra de ração,
              cirurgias, hotel para pets (caso não seja encontrado um Lar
              Temporário), remédios, vacinas, testes, castrações, transporte
              para realização de resgastes, entre outros.
            </p>
          </div>
        </div>
        <footer>
          <Apoiadores />
        </footer>
      </div>
    </div>
  );
}

export default Ajude;
