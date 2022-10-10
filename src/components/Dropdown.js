import React from "react";
import "../styles/dropdown.css";
import { useState, useRef, useEffect } from "react";

function Dropdown(props) {
  const [selected, setSelected] = useState(props.title);
  const [visible, setVisible] = useState("none");

  return (
    <div className="container-principal">
      <div
        onClick={() => {
          if (visible == "none") {
            setVisible("");
          } else {
            setVisible("none");
          }
        }}
        className="dropdown"
      >
        <p>{selected}</p>
      </div>
      <div
        onClick={() => {
          if (visible == "none") {
            setVisible("");
          } else {
            setVisible("none");
          }
        }}
        style={{ display: visible }}
        className="dropdown-conteudo"
      >
        <p
          onClick={() => {
            setSelected(props.item1);
          }}
        >
          {props.item1}
        </p>
        <p
          style={{ display: visible }}
          onClick={() => {
            setSelected(props.item2);
          }}
        >
          {props.item2}
        </p>
      </div>
    </div>
  );
}

export default Dropdown;
