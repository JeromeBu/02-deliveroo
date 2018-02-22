import React from "react";
import "./MenuInLineAndCart.css";
import MenuInLine from "./MenuInLine";
import Cart from "./Cart";

class MenuInLineAndCart extends React.Component {
  componentDidMount() {
    // Get the navbar
    const menuBar = document.getElementById("menu-and-cart");
    const menuSpacer = document.getElementById("menu-spacer");
    // Get the offset position of the navbar
    const sticky = menuBar.offsetTop;
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {
      if (window.pageYOffset >= sticky) {
        menuBar.classList.add("sticky");
        menuSpacer.classList.add("menu-spacer-active");
      } else {
        menuBar.classList.remove("sticky");
        menuSpacer.classList.remove("menu-spacer-active");
      }
    };

    window.addEventListener("scroll", function() {});
  }
  render() {
    return [
      <div id="menu-spacer" key="menu-spacer" />,
      <div id="menu-and-cart" key="menu-spacer">
        <div className="container position-relative">
          <MenuInLine titles={this.props.titles} />
          <Cart
            cart={this.props.cart}
            addToCart={this.props.addToCart}
            removeFromCart={this.props.removeFromCart}
            calcSubTot={this.props.calcSubTot}
            deliveryPrice={this.props.deliveryPrice}
          />
        </div>
      </div>
    ];
  }
}

export default MenuInLineAndCart;
