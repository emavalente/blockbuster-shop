import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const { itemsAdded, removeItem, purchaseValue } = useContext(CartContext);

  return (
    <div className="cartContainer">
      <h2>Compra actual</h2>
      <hr />
      <table className="carTable">
        <tbody>
          <tr>
            <th className="carTable__th--caratula">Caratula</th>
            <th>Título</th>
            <th>Cantidad</th>
            <th>SubTotal</th>
            <th></th>
          </tr>
          {itemsAdded.length > 0 ? (
            itemsAdded.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.thumbnail} alt={`caratula de ${item.title}`} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.count}</td>
                  <td>{`US$ ${(item.price * item.count).toFixed(2)}`}</td>
                  <td>
                    <button
                      className="cartTable__remove"
                      onClick={() => {
                        removeItem(item.id);
                      }}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} className="carritoVacio__message">
                ¡Carrito Vacío!
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              <Link to="/" className="detailActions__btn">
                Continuar Compra
              </Link>
              {itemsAdded.length > 0 ? <button className="detailActions__btn">Terminar Compra</button> : null}
            </td>
            <td colSpan={2}>{`Valor Total: US$ ${purchaseValue().toFixed(2)}`}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cart;
