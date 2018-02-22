import React from "react";

class ItemInCart extends React.Component {
  handleClickMinus = () => {
    this.props.removeFromCart(this.props.fullItem);
  };
  handleClickPlus = () => {
    this.props.addToCart(this.props.fullItem);
  };
  render() {
    return (
      <li>
        <span className="item-counter">
          <div onClick={this.handleClickMinus}>
            <i className="fas fa-minus-circle" />
          </div>
          &nbsp; {this.props.number} &nbsp;
          <div onClick={this.handleClickPlus}>
            <i className="fas fa-plus-circle" />
          </div>
        </span>
        <span className="item-in">{this.props.title}</span>
        <span className="item-price">
          {(this.props.price * this.props.number).toFixed(2)}
        </span>
      </li>
    );
  }
}

export default ItemInCart;
