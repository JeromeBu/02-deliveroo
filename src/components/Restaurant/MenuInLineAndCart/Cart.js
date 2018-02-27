import React from "react";
import { Link } from "react-router-dom";
import ItemInCart from "./ItemInCart";
// import Shipping from "../../Shipping";

class Cart extends React.Component {
  renderCartContent() {
    if (this.props.cart.length > 0) {
      const items = this.props.cart.map((item, index) => {
        return (
          <ItemInCart
            key={`${index}`}
            title={item.title}
            price={item.price}
            number={item.number}
            fullItem={item}
            addToCart={this.props.addToCart}
            removeFromCart={this.props.removeFromCart}
          />
        );
      });
      const subTot = parseFloat(this.props.calcSubTot());
      const deliveryPrice = parseFloat(this.props.deliveryPrice);
      return (
        <div className="cart-content">
          {items}
          <hr />
          <div className="totals">
            <p>Sous-total: € {subTot.toFixed(2)}</p>
            <p>Frais de livraison: € {deliveryPrice.toFixed(2)}</p>
            <br />
            <p>Total: € {(subTot + deliveryPrice).toFixed(2)}</p>
          </div>
        </div>
      );
    } else {
      return <div className="cart-content">Votre panier est vide</div>;
    }
  }

  render() {
    return (
      <div className="cart cart-fixed ">
        <Link
          to={{
            pathname: "/shipping",
            state: {
              cart: this.props.cart,
              subTot: parseFloat(this.props.calcSubTot()),
              deliveryPrice: parseFloat(this.props.deliveryPrice)
            }
          }}
          className={`validate-cart ${
            this.props.cart.length > 0 ? "validable" : ""
          }`}
        >
          Valider mon panier
        </Link>
        {this.renderCartContent()}
      </div>
    );
  }
}

export default Cart;
