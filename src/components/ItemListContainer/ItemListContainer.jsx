import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(props) {
  // const onAdd = (count) => {
  //   alert(`Has agregado ${count} Items al carrito`);
  // };

  const items = [
    {
      id: 1,
      thumbnail: "https://i.postimg.cc/g2StrXps/poster-11.jpg",
      title: "Tonight she comes",
      genere: "Terror",
      premiereDate: "invalid",
      stars: 5,
      director: "invalid",
      type: "movie",
      price: 300,
    },
    {
      id: 2,
      thumbnail: "https://i.postimg.cc/1zdd7gYX/poster-12.jpg",
      title: "It",
      genere: "Terror",
      premiereDate: "invalid",
      stars: 8,
      director: "invalid",
      type: "movie",
      price: 300,
    },
    {
      id: 3,
      thumbnail: "https://i.postimg.cc/kXCpHPwQ/poster-13.jpg",
      title: "Joker",
      genere: "Drama",
      premiereDate: "invalid",
      stars: 5,
      director: "invalid",
      type: "movie",
      price: 400,
    },
    {
      id: 4,
      thumbnail: "https://i.postimg.cc/Y0Ksk57w/poster-14.jpg",
      title: "Spider-Man Homecoming",
      genere: "Aventura",
      premiereDate: "invalid",
      stars: 7,
      director: "invalid",
      type: "movie",
      price: 500,
    },
    {
      id: 5,
      thumbnail: "https://i.postimg.cc/Y06ySd2L/poster-15.jpg",
      title: "Buscando a Nemo",
      genere: "Animación",
      premiereDate: "invalid",
      stars: 8,
      director: "invalid",
      type: "movie",
      price: 400,
    },
    {
      id: 6,
      thumbnail: "https://i.postimg.cc/fL0rGw6K/poster-16.jpg",
      title: "John Wick - chapter 2",
      genere: "Acción",
      premiereDate: "invalid",
      stars: 8,
      director: "invalid",
      type: "movie",
      price: 500,
    },
    {
      id: 7,
      thumbnail: "https://i.postimg.cc/5NmRdKkZ/poster-17.jpg",
      title: "Interstellar",
      genere: "Ciencia Ficción",
      premiereDate: "invalid",
      stars: 9,
      director: "Christopher Nolan",
      type: "movie",
      price: 300,
    },
    {
      id: 8,
      thumbnail: "https://i.postimg.cc/Vsnh4k9s/poster-18.jpg",
      title: "The Nun",
      genere: "Terror",
      premiereDate: "invalid",
      stars: 6,
      director: "invalid",
      type: "movie",
      price: 400,
    },
    {
      id: 9,
      thumbnail: "https://i.postimg.cc/8C7KvpPS/poster-19.jpg",
      title: "Jurassic World - Fallen Kingdom",
      genere: "Ciencia Ficción",
      premiereDate: "invalid",
      stars: 9,
      director: "Steven Spielberg",
      type: "movie",
      price: 400,
    },
    {
      id: 10,
      thumbnail: "https://i.postimg.cc/HksPp0qj/poster-20.jpg",
      title: "Harry Potter - and the order of the fenix",
      genere: "Aventura",
      premiereDate: "invalid",
      stars: 7,
      director: "invalid",
      type: "movie",
      price: 500,
    },
    {
      id: 11,
      thumbnail: "https://i.postimg.cc/RFfgPgHp/poster-21.jpg",
      title: "E.T",
      genere: "Aventura",
      premiereDate: "invalid",
      stars: 7,
      director: "Steven Spielberg",
      type: "movie",
      price: 200,
    },
    {
      id: 12,
      thumbnail: "https://i.postimg.cc/jjB8QpLJ/poster-22.jpg",
      title: "The Incredibles",
      genere: "Animacion",
      premiereDate: "invalid",
      stars: 7,
      director: "invalid",
      type: "movie",
      price: 300,
    },
  ];

  return (
    <div className="main">
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
