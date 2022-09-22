import React, { useContext } from "react";
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
            <th>Caratula</th>
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
                  <td>{`$${(item.price * item.count).toFixed(2)}`}</td>
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
              <td colSpan={4} className="carritoVacio__message">
                ¡Carrito Vacío!
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <button>Continuar Compra</button>
            </td>
            <td colSpan={3}>Valor Total: ${purchaseValue()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cart;
