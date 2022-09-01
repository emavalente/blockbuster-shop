import React from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer(props) {
  const onAdd = (count) => {
    alert(`Has agregado ${count} Items al carrito`);
  };

  return (
    <div className="main">
      <h2 className="main__content ">{props.gretting}</h2>
      {/* Por sintaxis de JSX los numeros enviados por props deben ir entre {} */}
      <ItemCount stock={5} initValue={1} onAdd={onAdd} />
    </div>
  );
}

export default ItemListContainer;
