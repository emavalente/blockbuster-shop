import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ initValue, stock, onAdd }) {
  const [count, setCount] = useState(initValue);

  const sumarItem = () => {
    count < stock ? setCount(count + 1) : alert("No quedan más productos en stock");
  };

  const quitarItem = () => {
    count > 1 ? setCount(count - 1) : alert("Agrega al menos 1 producto!");
  };

  return (
    <div className="counterContainer">
      <div className="controlsContainer">
        <button onClick={quitarItem}>-</button>
        <label>{count}</label>
        <button onClick={sumarItem}>+</button>
      </div>
      <button
        className="botonAgregar"
        onClick={() => {
          onAdd(count);
        }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ItemCount;
