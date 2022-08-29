import React from "react";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  return (
    <div className="main">
      <h2 className="main__content ">{props.gretting}</h2>
    </div>
  );
}

export default ItemListContainer;
