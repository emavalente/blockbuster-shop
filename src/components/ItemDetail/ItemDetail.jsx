import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";

function ItemDetail({ detail }) {
  // llamo a la funcion addItem desde el contexto.
  const { addItem } = useContext(CartContext);

  // Estado que maneja el renderizado del boton agregar al carrito.
  const [inCart, setInCart] = useState(false);

  // Deserstructuro detail que viene por props.
  const { thumbnail, title, genere, time, stars, premiereDate, director, sinopsis, trailer, stock, price, type } =
    detail;

  // Estilo en linea para el detail__description.
  const backgroundStyled = {
    backgroundImage: `url("${thumbnail}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // Función que recibe una cantidad, setea el estado inCart, llama a addItem().
  const onAdd = (count) => {
    // Mensaje de productos agregados:
    alert(`Agregaste ${count} items de ${title} al carrito`);
    // Corroboro que se agregó el pedido.
    setInCart(true);
    // llamo a la función addItem() y le envio las el objeto detail y la cantidad que se agregó en count.
    addItem(detail, count);
    console.log("Log de ItemDetail:", detail);
  };

  return (
    <div className="detail">
      <div className="detail__img">
        <img src={thumbnail} alt={`imagen de ${title}`}></img>
        <div className="detailActions">
          <h2>Precio: {price} US$</h2>
          <p>Stock: {stock}</p>
          {/* Renderizado condicional del Boton Agregar*/}
          {inCart ? (
            <Link to="/cart" className="detailActions__btn">
              Ver en carrito
            </Link>
          ) : (
            <ItemCount stock={stock} onAdd={onAdd} />
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
            <Link to={`/category/${type}`} className="detailActions__btn">
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
