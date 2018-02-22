import React from "react";
import "./Item.css";

class Item extends React.Component {
  handleClick = item => {
    this.props.addToCart(item);
  };

  renderImg = picture => {
    return picture ? (
      <img
        src={`https:${picture}?width=100&height=100&auto=webp&format=jpg&fit=crop`}
        alt="meal"
      />
    ) : null;
  };
  render() {
    const num = this.props.numberInCart;
    const item = this.props.meal;
    const { title, price, picture } = item;
    return (
      <div
        className={`item ${num > 0 ? "item-in-cart" : ""}`}
        onClick={() => this.handleClick(item)}
      >
        <div className="infos flex1">
          <h3>
            <span className="number">{num > 0 ? num : ""}</span> {title}
          </h3>
          <br />
          <p>Prix: {price}</p>
        </div>
        {this.renderImg(picture)}
      </div>
    );
  }
}

export default Item;
