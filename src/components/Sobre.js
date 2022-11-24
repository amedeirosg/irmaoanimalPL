import React from "react";
import { useState, useRef } from "react";
function Sobre() {
  const [nomes, setNomes] = useState([]);
  const [nomesFiltrados, setNomesFiltrados] = useState([]);
  const inputRef = useRef();
  var teste = 0;

  function onClick(e) {
    e.preventDefault();
    const value = inputRef.current.value;
    console.log(inputRef.current.value);

    if (value === "") return;

    setNomes((prev) => {
      return [...prev, value];
    });
    setNomesFiltrados((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  }

  function onChange(e) {
    const value = e.target.value;
    setNomesFiltrados(
      nomes.filter((nome) => nome.toLowerCase().includes(value.toLowerCase()))
    );
    console.log(value);
  }

  return (
    <>
      Filtrar por nome:
      <input onChange={onChange} type="search"></input>
      <form>
        Nome:
        <input ref={inputRef} type="text"></input>
        <button onClick={onClick} type="submit">
          Add
        </button>
      </form>
      <h3>Nomes:</h3>
      {nomesFiltrados.map((nome) => (
        <div>{nome}</div>
      ))}
    </>
  );
}

export default Sobre;
