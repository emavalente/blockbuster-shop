import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

function ItemDetail(props) {
  const [inCart, setinCart] = useState(false);

  const { thumbnail, title, genere, time, stars, premiereDate, director, sinopsis, trailer, stock, price } =
    props.items;

  const backgroundStyled = {
    backgroundImage: `url("${thumbnail}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  //Funcion de contador:
  const onAdd = (count) => {
    alert(`Agregaste ${count} items al carrito`);
    setinCart(true);
  };

  return (
    <div className="detail">
      <div className="detail__img">
        <img src={thumbnail} alt={`imagen de ${title}`}></img>
        <div className="itemInfo">
          <h2>Precio: {price} US$</h2>
          <p>Stock: {stock}</p>
          {/* Renderizado condicional */}
          {inCart ? (
            <p className="itemInfo__agregado">Pedido Agregado!</p>
          ) : (
            <ItemCount initValue={0} stock={stock} onAdd={onAdd} />
          )}
        </div>
      </div>
      <div className="detail__description description" style={backgroundStyled}>
        <div className="detail__description detail__description--transparent">
          <h3 className="description__title">{title}</h3>
          <div className="description__miniText">
            <p className="description__time">{time}</p>
            <p className="description__premier">/ Fecha: {premiereDate}</p>
            <p className="description__genere">/ Género: {genere}</p>
            <p className="description__director"> / Director: {director}</p>
          </div>
          <p className="description__sinopsisTitle">Sinopsis: </p>
          <div className="description__sinopsisText">
            <p>{sinopsis}</p>
          </div>
          <div className="description__trailer">
            <p>
              <a href={trailer} target="_blanck">
                <i className="far fa-play-circle"></i>ver trailer
              </a>
            </p>
          </div>
          <div className="description__stars">
            <Link to="/category/:idType" className="back">
              Volver
            </Link>
            <h3>
              <i className="far fa-star"></i>
              {stars}/10
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
