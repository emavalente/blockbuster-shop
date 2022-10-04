import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ItemCount.css";

function ItemCount({ stock, onAdd }) {
  const { alertMessage } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const plusItem = () => {
    count < stock ? setCount(count + 1) : alertMessage(`El stock es de ${stock} unidades`);
  };

  const subtractItem = () => {
    count <= stock && count > 1 ? setCount(count - 1) : alertMessage("Agrega al menos 1 producto!");
  };

  const isDisabled = () => {
    let enabled = count === 0 ? true : false;
    return enabled;
  };

  return (
    <div className="counter">
      <p>Stock: {stock}</p>
      <div className="counter__controls">
        <button className="counter__controlsbtn" onClick={subtractItem}>
          -
        </button>
        <label>{count}</label>
        <button className="counter__controlsbtn" onClick={plusItem}>
          +
        </button>
      </div>
      <button
        disabled={isDisabled()}
        className={`counter__controlsbtn counter__controlsbtn--add ${
          isDisabled() ? "counter__controlsbtn--disabled" : null
        }`}
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
