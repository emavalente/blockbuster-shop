import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import apiPromise from "../../utils/promise";
import { useState, useEffect } from "react";

function ItemListContainer() {
  // const onAdd = (count) => {
  //   alert(`Has agregado ${count} Items al carrito`);
  // };

  // SetState Hook
  const [movies, setMovies] = useState([]);

  //componentDidMount del useEffect Hook. donde un componente necesita hacer algo al montarse es donde se define useEffect.
  useEffect(() => {
    // Manejo la respuesta seteando el state con su valor.
    apiPromise
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="main">
      {/* Envio el state por props */}
      <ItemList items={movies} />
    </div>
  );
}

export default ItemListContainer;
