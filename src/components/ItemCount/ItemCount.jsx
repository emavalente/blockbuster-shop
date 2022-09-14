import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ initValue, stock, onAdd }) {
  const [count, setCount] = useState(initValue);

  const sumarItem = () => {
    count < stock ? setCount(count + 1) : alert("No quedan más productos en stock");
  };

  const restarItem = () => {
    count > 1 ? setCount(count - 1) : alert("Agrega al menos 1 producto!");
  };

  return (
    <div className="counter">
      <div className="counter__controls">
        <button className="counter__controlsbtn" onClick={restarItem}>-</button>
        <label>{count}</label>
        <button className="counter__controlsbtn" onClick={sumarItem}>+</button>
      </div>
      <button
        className="counter__controlsbtn counter__controlsbtn--agregar"
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
