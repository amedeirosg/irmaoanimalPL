import React from "react";
import "../styles/conteudo.css";
import dog1 from "../imgs/dog-adote.jpeg";
import dog2 from "../imgs/dog-ajude.jpeg";
import picture1 from "../imgs/picture4.png";
import picture2 from "../imgs/picture2.png";
import picture3 from "../imgs/pets.png";
import picture4 from "../imgs/pets2.png";
import petduvida from "../imgs/petduvida.png";
import petfofo from "../imgs/petfofo.png";
import { motion } from "framer-motion";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Header from "./Header.js";

function Conteudo() {
  return (
    <div className="conteudo">
      <Header />
      <CarouselProvider
        naturalSlideWidth={24}
        naturalSlideHeight={9.6}
        totalSlides={2}
        interval={3000}
        isPlaying={true}
      >
        <Slider className="container-slider">
          <Slide className="img-slider" index={0}>
            <div className="label">
              <label>Adote um aumigo</label>
            </div>
            <div className="label2">
              <label>Amor para toda a vida!</label>
            </div>
            <div className="button">
              <a href="/adote">Conheça os animais</a>
            </div>
            {<img src={dog1}></img>}
          </Slide>
          <Slide className="img-slider" index={1}>
            <div className="label">
              <label>Ajude a salvar vidas!</label>
            </div>
            <div className="label2">
              <label>Doe a partir de R$1,00 por mês</label>
            </div>
            <div className="button">
              <a href="#">Apadrinhe</a>
            </div>
            {<img src={dog2}></img>}
          </Slide>
        </Slider>
      </CarouselProvider>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        // viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1 }}
        className="motion-div"
      >
        <div className="more-infos">
          <div className="sobre">
            <div className="missao">
              <h2>Missão</h2>
            </div>
            <div className="texto">
              <h3>
                Proteção, conscientização e promoção de ações para promover o
                bem estar dos animais de rua em Pedro Leopoldo.
              </h3>
              <div className="picture-missao">
                <img id="pic1" src={picture1}></img>
                <img id="pic2" src={picture2}></img>
              </div>
            </div>
          </div>
          <div className="sobre">
            <div className="visao">
              <h2>Visão</h2>
            </div>
            <div className="texto">
              <h3>Lorem ipsum dolor sit amet, consectetur</h3>
              <div className="picture-visao">
                <img id="pic3" src={picture3}></img>
              </div>
            </div>
          </div>
          <div className="sobre">
            <div className="valores">
              <h2>Valores</h2>
            </div>
            <div className="texto">
              <h3>
                Ética, respeito, transparência, solidariedade, justiça e
                trabalho em equipe.
              </h3>
              <img id="pic3" src={picture4}></img>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        // viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1 }}
        className="motion-div"
      >
        <div className="wave"></div>
        <div className="container-sobre-nos">
          <div className="sobre-nos">
            <span>Quem somos? </span>
            <div className="texto-sobre-nos">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                diam sit amet lectus eleifend malesuada. Nam fermentum tellus at
                diam vulputate eleifend. Duis gravida ex quis ligula euismod
                accumsan. Etiam ullamcorper, quam vitae iaculis dignissim, neque
                tortor condimentum sem, non mattis lorem tellus id orci.
                Curabitur faucibus odio sed nisl dapibus commodo. Maecenas
                mattis nec urna sit amet semper. Curabitur vel tortor eget ante
                efficitur tincidunt. Fusce fermentum urna at erat molestie, non
                fringilla nisl faucibus. Vestibulum maximus sem vel dignissim
                rutrum. Etiam dignissim nisl nisi, interdum aliquam nibh rhoncus
                vitae.
              </span>
            </div>
          </div>
          <div className="img-sobre-nos">
            <span>
              <iframe
                width="550"
                height="410"
                src="https://www.youtube.com/embed/cTsbzlSU88g"
                title="Wave effect in css - Tutorial"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </span>
          </div>
          <div className="img-pets">
            <img id="pet-duvida" src={petduvida}></img>
            <img id="pet-fofo" src={petfofo}></img>
          </div>
        </div>
      </motion.div>
      <div className="wave2"></div>
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
            <p>
              Doações online via PIX do nosso tesoureiro Yuri (xxxxxxxxxxxx)
            </p>
          </div>
          <p id="ser-voluntario">Seja um voluntário</p>
          <div className="definicao">
            <p>
              Seja um voluntário e entre para a família do Projeto Irmão Animal
              para tornamos a vida dos pets mais felizes
            </p>
          </div>
        </div>
        <div className="apoiadores-topicos">
          <p>Lar temporário</p>
          <div className="definicao">
            <p>
              Forneça um lar temporário até que possamos arrumar um dono
              responsável
            </p>
          </div>
          <p id="seja-parceiro">Seja nosso parceiro</p>
          <div className="definicao">
            <p>Deseja nos ajudar de alguma forma? Venha conosco!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conteudo;
