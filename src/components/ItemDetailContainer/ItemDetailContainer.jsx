import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiPromise from "../../utils/promise";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  // SetState Hook
  const [movies, setMovies] = useState({});
  const {idItem} = useParams();

  //componentDidMount del useEffect Hook. donde un componente necesita hacer algo al montarse es donde se define useEffect.
  useEffect(() => {

  // Manejo la respuesta seteando el state con su valor.
 if (idItem) {
  apiPromise()
  .then((res) => {
     setMovies(res.find(item => item.id === parseInt(idItem)));
  }).catch((err) => {
    alert(err);
  });
 }
 }, [idItem]);

// useEffec posee una dependencia de renderizado que es el valor de useParams

  return (
    <div className="detailContainer">
      {/* Envio el state por props */}

      <ItemDetail items={movies} />
    </div>
  );
}

export default ItemDetailContainer;
