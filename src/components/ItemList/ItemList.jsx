import React from "react";
import { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { CircleSpinnerOverlay } from "react-spinner-overlay";

function ItemList({ items }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  //componentDidMount
  // donde un componente necesita hacer algo al montarse es donde se define useEffect.
  useEffect(() => {
    let apiPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);

        // reject("UPS!, Error en el servidor...intente nuevamente");
      }, 2000);
    });

    apiPromise
      .then((res) => {
        console.log(res);
        setMovies(res);
      })
      .catch((err) => {
        alert(err);
      });

    console.log(movies);
  }, []);

  return (
    <div className="cardContainer">
      {movies.length ? (
        movies.map((item) => (
          <Item
            key={item.id}
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
          message={<p className="loadingText">CARGANDO DATOS...</p>}
        />
      )}
    </div>
  );
}

export default ItemList;
