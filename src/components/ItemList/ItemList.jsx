import React from "react";
import { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "../Item/Item";

function ItemList({ items }) {
  const [movies, setMovies] = useState([]);

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
      {movies.lenght ? (
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
        <p>Loading Movies...</p>
      )}
    </div>
  );
}

export default ItemList;
