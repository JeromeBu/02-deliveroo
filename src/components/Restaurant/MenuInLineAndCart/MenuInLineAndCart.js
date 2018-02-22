import React from "react";
import "./MenuInLineAndCart.css";
import MenuInLine from "./MenuInLine";
import Cart from "./Cart";

class MenuInLineAndCart extends React.Component {
  render() {
    return (
      // <div className="position-relative">
      <div className="flex-container menu-and-cart">
        <MenuInLine titles={this.props.titles} />
        <div className="menu-spacer" />
        <Cart
          cart={this.props.cart}
          addToCart={this.props.addToCart}
          removeFromCart={this.props.removeFromCart}
          calcSubTot={this.props.calcSubTot}
          deliveryPrice={this.props.deliveryPrice}
        />
      </div>
      // </div>
    );
  }
}

export default MenuInLineAndCart;
