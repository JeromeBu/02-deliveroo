import React from "react";
import ItemInCart from "./ItemInCart";

class Cart extends React.Component {
  renderCartContent() {
    if (this.props.cart.length > 0) {
      const items = this.props.cart.map((item, index) => {
        return (
          <ItemInCart
            key={index}
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
          {items.length > 0 ? <hr /> : null}
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
      <div className="cart">
        <div
          className={`btn validate-cart ${
            this.props.cart.length > 0 ? "validable" : ""
          }`}
        >
          Valider mon panier
        </div>
        {this.renderCartContent()}
      </div>
    );
  }
}

export default Cart;
