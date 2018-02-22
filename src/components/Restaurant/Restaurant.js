import React from "react";
import Menu from "./Menu/Menu";
import MenuInLineAndCart from "./MenuInLineAndCart/MenuInLineAndCart";
import Headers from "./Headers/Headers";

class Restaurant extends React.Component {
  render() {
    return [
      <div className="background-white" key="menuInline-headers">
        <div className="container">
          <Headers restaurant={this.props.restaurant} />
        </div>
        <MenuInLineAndCart
          titles={Object.keys(this.props.menu)}
          cart={this.props.cart}
          addToCart={this.props.addToCart}
          removeFromCart={this.props.removeFromCart}
          calcSubTot={this.props.calcSubTot}
          deliveryPrice={this.props.deliveryPrice}
        />
      </div>,
      <div className="container" key="menu">
        <Menu
          menu={this.props.menu}
          addToCart={this.props.addToCart}
          getNumberInCart={this.props.getNumberInCart}
        />
      </div>
    ];
  }
}

export default Restaurant;
