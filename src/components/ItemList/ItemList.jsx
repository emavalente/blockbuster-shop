import React from "react";
import { useState } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { CircleSpinnerOverlay } from "react-spinner-overlay";

// Recibe el state desde ItemListContainer
function ItemList({ items }) {
  // Spinner State
  const [loading, setLoading] = useState(true);

  return (
    <div className="cardContainer">
      {/* Si el array esta completo mapea cada item generando un componente Item*/}
      {items.length ? (
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            picture={item.thumbnail}
            title={item.title}
            genere={item.genere}
            stars={item.stars}
            price={item.price}
          />
        ))
      ) : (
        <CircleSpinnerOverlay
          loading={loading}
          size={42}
          color="rgb(255 158 181)"
          overlayColor="rgb(255 158 181 / 0%)"
          message={<p className="loadingText">ESPERANDO DATOS...</p>}
        />
      )}
    </div>
  );
}

export default ItemList;
