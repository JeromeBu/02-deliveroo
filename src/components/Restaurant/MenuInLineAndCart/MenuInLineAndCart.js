import React from "react";
import "./MenuInLineAndCart.css";
import MenuInLine from "./MenuInLine";
import Cart from "./Cart";

class MenuInLineAndCart extends React.Component {
  handleScroll = () => {
    if (window.pageYOffset >= this.sticky) {
      this.menuBar.classList.add("sticky");
      this.menuSpacer.classList.add("menu-spacer-active");
    } else {
      this.menuBar.classList.remove("sticky");
      this.menuSpacer.classList.remove("menu-spacer-active");
    }
  };

  componentDidMount() {
    this.menuBar = document.getElementById("menu-and-cart");
    this.menuSpacer = document.getElementById("menu-spacer");
    this.sticky = this.menuBar.offsetTop;
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
