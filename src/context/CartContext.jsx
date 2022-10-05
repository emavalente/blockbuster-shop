import { React, createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const MiProvider = ({ children }) => {
  // Estado que guarda un array con los items agregados al carrito.
  const [itemsAdded, setItemsAdded] = useState([]);

  // Estado que maneja el renderizado del boton agregar al carrito en ItemDetail.
  const [toCart, setToCart] = useState(false);

  const addItem = (item, count, title) => {
    // Si el armedItem existe en el array lo borro (newArray), luego a newArray le agrego un armedItem modificado.
    if (isInCart(item.id)) {
      const itemInCart = itemsAdded.find((i) => i.id === item.id);

      if (itemInCart.count + count <= item.stock) {
        const newArray = itemsAdded.filter((i) => i.id !== item.id);
        itemInCart.count += count;
        newArray.push(itemInCart);

        setItemsAdded(newArray);
        setToCart(true);
        message(`Se actualizó tu Film ${title}`);
      } else {
        alertMessage("Esta cantidad supera el stock, por favor reducela");
      }
    } else {
      // armo un objeto nuevo con las propiedades del item le agrego la propiedad count y lo agrego al carrito.
      const armedItem = { ...item, count };
      setItemsAdded([...itemsAdded, armedItem]);
      message(`Se agregaron al carrito: ${count} cantidades de ${title} `);
      setToCart(true);
    }
  };

  const itemsCounter = () => {
    let qtys = itemsAdded.map((item) => item.count);
    return qtys.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };

  const purchaseValue = () => {
    let totals = itemsAdded.map((item) => item.count * item.price);
    return totals.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };

  const removeItem = (id) => {
    // Devuelve todos los elementos menos el que coincida con la condición y setea el nuevo array.
    setItemsAdded(itemsAdded.filter((item) => item.id !== id));
  };

  const cartCleaner = () => {
    // Borra todo el array
    setItemsAdded([]);
    message("El carrito se ha vaciado correctamente!.");
  };

  const isInCart = (id) => {
    // devuelve true si el elemento existe en el array.
    return itemsAdded.some((item) => item.id === id);
  };

  const message = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const alertMessage = (message) => {
    toast.warn(message, {
      position: "top-center",
      autoClose: 2300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        cartCleaner,
        itemsAdded,
        itemsCounter,
        purchaseValue,
        message,
        alertMessage,
        toCart,
        setToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
