import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(props) {
  const onAdd = (count) => {
    alert(`Has agregado ${count} Items al carrito`);
  };

  return (
    <div className="main">
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
