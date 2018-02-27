import React from "react";
import ShippingForm from "./Shipping/ShippingForm";
import ShippingCart from "./Shipping/ShippingCart";
import "./Shipping/Shipping.css";
import NavBar from "./NavBar/NavBar";

class Shipping extends React.Component {
  sendAddress = () => {};
  render() {
    console.log(this);
    return [
      <NavBar key="navbar" />,
      <div
        className="container flex-container space-between shipping"
        key="container"
      >
        <ShippingForm />
        <ShippingCart
          cart={this.props.location.state && this.props.location.state.cart}
          subTot={this.props.location.state && this.props.location.state.subTot}
          deliveryPrice={
            this.props.location.state && this.props.location.state.deliveryPrice
          }
        />
      </div>,
      <header className="sharped" key="header" />
    ];
  }
}

export default Shipping;
