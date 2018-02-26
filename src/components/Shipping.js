import React from "react";
import ShippingForm from "./Shipping/ShippingForm";
import ShippingCart from "./Shipping/ShippingCart";
import "./Shipping/Shipping.css";

class Shipping extends React.Component {
  sendAddress = () => {};
  render() {
    console.log("this:");
    console.log(this);
    return (
      <div className="container flex-container space-between">
        <ShippingForm />
        <div className="right-side">Right side</div>
        <ShippingCart
          cart={this.props.location.state.cart}
          subTot={this.props.location.state.subTot}
          deliveryPrice={this.props.location.state.deliveryPrice}
        />
      </div>
    );
  }
}

export default Shipping;
