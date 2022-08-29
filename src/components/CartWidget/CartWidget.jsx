import React from "react";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="cartButton">
      <i class="cartButton__icon fas fa-shopping-cart">
        <spam className="cartButton__counter">10</spam>
      </i>
    </div>
  );
}

export default CartWidget;
