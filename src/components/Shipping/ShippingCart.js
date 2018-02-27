import React from "react";
import ItemInCart from "../Restaurant/MenuInLineAndCart/ItemInCart";

class ShippingCart extends React.Component {
  render() {
    if (!this.props.cart || this.props.cart <= 0) {
      return (
        <div className="cart">
          <div className="cart-content">
            {" "}
            <p>Your cart is empty</p>
          </div>
        </div>
      );
    }

    const items = this.props.cart.map((item, index) => {
      return (
        <ItemInCart
          key={index}
          title={item.title}
          price={item.price}
          number={item.number}
          fixedCounter={true}
        />
      );
    });

    return (
      <div className="cart">
        <div className="cart-content">
          <br />
          {items}
          <hr />
          <div className="totals">
            <p>Sous-total: € {this.props.subTot.toFixed(2)}</p>
            <p>Frais de livraison: € {this.props.deliveryPrice.toFixed(2)}</p>
            <br />
            <p>
              Total: €{" "}
              {(
                parseFloat(this.props.subTot) +
                parseFloat(this.props.deliveryPrice)
              ).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShippingCart;
