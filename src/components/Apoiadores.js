import React from "react";
import "../styles/Apoiadores.css";
import patinhas from "../imgs/patinhas.png";
function Apoiadores() {
  return (
    <div className="container-apoiadores">
      <div className="nossos-apoiadores">
        <div className="apoiadores-titulo">
          <h2>Você é o nosso principal patrocinador!</h2>
          <h4>Encontre aqui formas de poder ajudar</h4>
        </div>
      </div>
      <div className="apoiadores-conteudo">
        <div className="apoiadores-topicos">
          <p id="doacoes">Doações</p>
          <div className="definicao">
            <p id="texto-topico">
              Doações online via PIX do nosso tesoureiro Yuri (xxxxxxxxxxxx)
            </p>
          </div>
          <p id="ser-voluntario">Seja um voluntário</p>
          <div className="definicao">
            <p id="texto-topico">
              Seja um voluntário e entre para a família do Projeto Irmão Animal
              para tornamos a vida dos pets mais felizes
            </p>
          </div>
        </div>
        <div className="apoiadores-topicos">
          <p>Lar temporário</p>
          <div className="definicao">
            <p id="texto-topico">
              Forneça um lar temporário até que possamos arrumar um dono
              responsável
            </p>
          </div>
          <p id="seja-parceiro">Seja nosso parceiro</p>
          <div className="definicao">
            <p id="texto-topico">
              Deseja nos ajudar de alguma forma? Venha conosco!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apoiadores;
