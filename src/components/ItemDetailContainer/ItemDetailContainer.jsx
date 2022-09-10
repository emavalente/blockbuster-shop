import React from "react";
import { useState, useEffect } from "react";
import apiPromise from "../../utils/promise";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  // SetState Hook
  const [movies, setMovies] = useState({});

  //componentDidMount del useEffect Hook. donde un componente necesita hacer algo al montarse es donde se define useEffect.
  useEffect(() => {
    // Manejo la respuesta seteando el state con su valor.
    apiPromise
      .then((res) => {
        setMovies(res[18]);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  console.log(movies);
  return (
    <div className="detailContainer">
      {/* Envio el state por props */}
      <ItemDetail items={movies} />
    </div>
  );
}

export default ItemDetailContainer;
