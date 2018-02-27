import React from "react";
import _ from "lodash";
import data from "../data/data";
import NavBar from "../components/NavBar/NavBar";
import Restaurant from "../components/Restaurant/Restaurant";

class RestaurantMenu extends React.Component {
  state = {
    deliveryPrice: 2.5,
    cart: []
  };

  getIndexOfItem(array, item) {
    const index = _.findIndex(array, function(obj) {
      return obj.id === item.id;
    }); // result is -1 if no match
    return index;
  }

  removeFromCart = item => {
    const newCart = [];
    this.state.cart.forEach(element => {
      newCart.push({ ...element });
    });
    const index = this.getIndexOfItem(newCart, item);
    newCart[index].number--;
    if (newCart[index].number === 0) {
      newCart.splice(index, 1);
    }
    this.setState(
      {
        cart: [...newCart]
      },
      () => console.log("State after click :", this.state)
    );
  };

  addToCart = item => {
    const newCart = [];
    this.state.cart.forEach(element => {
      newCart.push({ ...element });
    });
    const index = this.getIndexOfItem(newCart, item);
    if (index >= 0) {
      newCart[index].number++;
      this.setState(
        {
          cart: [...newCart]
        },
        () => console.log("State after click :", this.state)
      );
    } else {
      item.number = 1;
      this.setState(
        {
          cart: [...newCart, item]
        },
        () => console.log("State after click :", this.state)
      );
    }
  };

  calcSubTot = () => {
    let subTot = 0;
    this.state.cart.forEach(elem => {
      subTot += elem.number * elem.price;
    });
    return subTot;
  };

  getNumberInCart = item => {
    const index = this.getIndexOfItem(this.state.cart, item);
    if (index >= 0) {
      return this.state.cart[index].number;
    } else {
      return 0;
    }
  };

  render() {
    console.log(data);
    return (
      <div className="App ">
        <NavBar calcSubTot={this.calcSubTot} />

        <Restaurant
          restaurant={data.restaurant}
          menu={data.menu}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          cart={this.state.cart}
          calcSubTot={this.calcSubTot}
          getNumberInCart={this.getNumberInCart}
          deliveryPrice={this.state.deliveryPrice}
        />
      </div>
    );
  }
}

export default RestaurantMenu;
