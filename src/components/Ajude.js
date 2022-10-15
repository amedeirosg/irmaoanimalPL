import React from "react";
import Header from "../components/Header.js";
import fundoPets from "../imgs/pets-fundo-ajude.jpg";
import "../styles/ajude.css";
function Ajude() {
  return (
    <div className="container-ajude">
      <Header />
      <div className="container-doacoes">
        <img id="img-fundo" src={fundoPets}></img>
        <div className="container-informacoes">
          <div className="doacoes">
            <div className="doacoes-titulo">
              <h1>Doações</h1>
            </div>
            <div className="doacoes-texto">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dictum augue id luctus sollicitudin. Nam aliquet in mi et
                ultrices. Mauris placerat arcu in fermentum blandit. Integer et
                lobortis enim. Nulla et ante sed nisl iaculis lacinia. Donec
                libero mauris, semper commodo massa scelerisque, mollis pulvinar
                mauris. Pellentesque sed pellentesque magna, a dictum sem. Donec
                nec scelerisque eros. Integer metus massa, convallis ut rutrum
                sit amet, molestie vitae lacus. Duis nunc leo, venenatis ut sem
                eu, porta interdum mauris. In nec mi in libero sollicitudin
                consequat. Donec dapibus dapibus mauris eget bibendum. Duis
                lacinia, purus et ullamcorper aliquam, lorem tellus varius
                tortor, et finibus dolor lorem ac odio. Nam nec egestas odio,
                sit amet sodales nulla. Pellentesque porttitor neque vitae arcu
                congue, eu ornare tortor condimentum. Curabitur malesuada rutrum
                sem, eget gravida odio viverra eget. Cras finibus posuere nibh,
                at consectetur dui sodales a. Fusce sod
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ajude;
