import { React, createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const MiProvider = ({ children }) => {
  //itemsAdded: Estado que guarda un array con los items agregados al carrito.
  const [itemsAdded, setItemsAdded] = useState([]);

  // ? Función para agregar un item al carrito
  const addItem = (item, count, title) => {
    // armo un objeto nuevo donde junto las propiedades del item y le agrego la propiedad count.
    const armedItem = { ...item, count };

    // Verificar si hay items duplicados.
    /* Si el armedItem existe en el array lo borro (newArray), luego al newArray le agrego un armedItem modificado. */

    if (isInCart(armedItem.id)) {
      const newArray = itemsAdded.filter((item) => item.id !== armedItem.id);
      newArray.push({ ...item, count: (armedItem.count += count) });
      setItemsAdded(newArray);
      mensaje(`Se actualizó tu Film ${title}`);
    } else {
      setItemsAdded([...itemsAdded, armedItem]);
      mensaje(`Se agregaron al carrito: ${count} cantidades de ${title} `);
    }
  };

  // ? Función sumar cantidades.
  const itemsCounter = () => {
    let qtys = itemsAdded.map((item) => item.count);
    return qtys.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };

  // ? Función para calcular total de la compra.
  const purchaseValue = () => {
    let totals = itemsAdded.map((item) => item.count * item.price);
    return totals.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };

  // ? Función para remover un item del carrito.
  const removeItem = (id) => {
    // Devuelve todos los elementos menos el que coincida con la condición y setea el nuevo array.
    setItemsAdded(itemsAdded.filter((item) => item.id !== id));
  };

  // ? Función para limpiar el carrito.
  const cartCleaner = () => {
    // Borra todo el array
    setItemsAdded([]);
    mensaje("El carrito se ha vaciado correctamente!.");
  };

  // ? Función para verificar si un item en particular se encuentra en el carrito.
  const isInCart = (id) => {
    // devuelve true si el elemento existe en el array.
    return itemsAdded.some((item) => item.id === id);
  };

  // ? Función mensaje para React Tostify.
  const mensaje = (mensaje) => {
    toast(mensaje, {
      position: "top-center",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, cartCleaner, itemsAdded, itemsCounter, purchaseValue, mensaje }}
    >
      {children}
    </CartContext.Provider>
  );
};
