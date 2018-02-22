import React from "react";
import MenuTitle from "./MenuTitle";
import Item from "./Item";

class MenuBlock extends React.Component {
  render() {
    const title = this.props.title;
    const meals = this.props.section.map((meal, index) => {
      return (
        <Item
          key={"item" + index}
          meal={meal}
          addToCart={this.props.addToCart}
          numberInCart={this.props.getNumberInCart(meal)}
        />
      );
    });

    return [
      <MenuTitle title={title} key="menu" />,
      <div className="flex-container items" key="blocks">
        {meals}
      </div>
    ];
  }
}

export default MenuBlock;
