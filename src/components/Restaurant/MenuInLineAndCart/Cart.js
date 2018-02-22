import React from "react";
import ItemInCart from "./ItemInCart";

class Cart extends React.Component {
  render() {
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
    console.log("function calcSubTot in cart", this.props.calcSubTot);
    console.log("function calcSubTot in cart", this.props.calcSubTot());
    return (
      <div className="cart">
        <div className="btn validate-cart">Valider mon panier</div>
        <div className="in-card">{items}</div>
        <div className="totals">
          <p>Sous-total: {this.props.calcSubTot().toFixed(2)}</p>
        </div>
      </div>
    );
  }
}

export default Cart;
