import React from "react";
import { Link } from "react-router-dom";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="cartButton">
      <Link to="/cart">
        <i className="cartButton__icon fas fa-shopping-cart">
          <span className="cartButton__counter">10</span>
        </i>
      </Link>
    </div>
  );
}

export default CartWidget;
