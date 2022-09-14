import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import apiPromise from "../../utils/promise";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  // SetState Hook
  const [movies, setMovies] = useState([]);

  // useParams Hook
  const {idType} = useParams();

  //componentDidMount del useEffect Hook. donde un componente necesita hacer algo al montarse es donde se define useEffect.
  useEffect(() => {

    switch (idType) {
      case "movies":
        apiPromise()
        .then((res) => {
          setMovies(res.filter(item => item.type === idType));
        })
        .catch((err) => {
          alert(err);
        });
        break;

        case "series":
        apiPromise()
        .then((res) => {
          setMovies(res.filter(item => item.type === idType));
        })
        .catch((err) => {
          alert(err);
        });
        break;

        case "anime":
        apiPromise()
        .then((res) => {
          setMovies(res.filter(item => item.type === idType));
        })
        .catch((err) => {
          alert(err);
        });
        break;

        case "estrenos":
        apiPromise()
        .then((res) => {
          setMovies(res.filter(item => item.premiereDate > 2017));
        })
        .catch((err) => {
          alert(err);
        });
        break;

        default :
        apiPromise()
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [idType]);

  // El valor del estado es manejado dentro de useEffect y a su vez determinado por el valor de useParams

  return (
    <div className="main">
      {/* Envio el state por props */}
      {
        movies ? <ItemList items={movies} /> : <p>Esperando DATOS</p>
      }

    </div>
  );
}

export default ItemListContainer;
