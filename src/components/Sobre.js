import React from "react";
import { useState, useRef } from "react";
function Sobre() {
  const [item, setItem] = useState([]);
  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;

    if (value === "") return;
    setItem((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  }

  function onChange(e) {
    const value = e.target.value;
    setItem((prev) => {
      return prev.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
    });
  }

  return (
    <div>
      Items:
      <input onChange={onChange} type="search"></input>
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New item:
        <input ref={inputRef} type="text"></input>
        <button type="submit">Add</button>
      </form>
      <br />
      <br />
      <h3>Items:</h3>
      {item.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default Sobre;
