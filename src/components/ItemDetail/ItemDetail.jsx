import React from "react";
import "./ItemDetail.css";

function ItemDetail(props) {
  const { thumbnail, title, genere, time, stars, premiereDate, director, sinopsis, trailer, stock, price } =
    props.items;

  const backgroundStyled = {
    backgroundImage: `url("${thumbnail}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="detail">
      <div className="detail__img">
        <img src={thumbnail} alt={`imagen de ${title}`}></img>
        <div className="detail__stockPrice">
          <h2>Precio: {price} US$</h2>
          <p>Stock: {stock}</p>
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
              <i className="far fa-play-circle"></i>ver trailer
            </p>
          </div>
          <h3 className="description__stars">
            <p>
              <i className="far fa-star"></i>
              {stars}/10
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
