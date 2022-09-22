import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiPromise from "../../utils/promise";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { CircleSpinnerOverlay } from "react-spinner-overlay";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  // SetState Hook
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);
  const { idItem } = useParams();

  //componentDidMount del useEffect Hook. donde un componente necesita hacer algo al montarse es donde se define useEffect.
  useEffect(() => {
    // Manejo la respuesta seteando el state con su valor.
    if (idItem) {
      apiPromise()
        .then((res) => {
          setMovies(res.find((item) => item.id === parseInt(idItem)));
          setLoading(false);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [idItem]);
  // useEffect posee una dependencia de renderizado que es el valor de useParams
  return (
    <div className="detailContainer">
      {loading ? (
        <CircleSpinnerOverlay
          loading={loading}
          size={42}
          color="rgb(255 158 181)"
          overlayColor="rgb(255 158 181 / 0%)"
          message={<p className="loadingText">ESPERANDO DATOS...</p>}
        />
      ) : (
        <ItemDetail detail={movies} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
