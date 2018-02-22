import React from "react";
import "./Menu.css";
import MenuBlock from "./MenuBlock";

class Menu extends React.Component {
  render() {
    const menu = this.props.menu;
    const blocks = [];
    for (const key in menu) {
      if (menu.hasOwnProperty(key)) {
        if (menu[key].length !== 0) {
          blocks.push(
            <MenuBlock
              key={"id" + key}
              title={key}
              section={menu[key]}
              addToCart={this.props.addToCart}
              getNumberInCart={this.props.getNumberInCart}
            />
          );
        }
      }
    }

    return (
      <div className="flex-container menu">
        <div className="flex1">{blocks}</div>
        <div className="side" />
      </div>
    );
  }
}

export default Menu;
