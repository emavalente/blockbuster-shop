import React from "react";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="cartButton">
      <i className="cartButton__icon fas fa-shopping-cart">
        <span className="cartButton__counter">10</span>
      </i>
    </div>
  );
}

export default CartWidget;
