import React from "react";
import MenuElement from "../Menu/MenuElement";

class MenuInLine extends React.Component {
  render() {
    const titles = this.props.titles
      .slice(0, 5)
      .map((title, index) => <MenuElement title={title} key={index} />);
    return <ul className="flex-container flex1 inline-menu">{titles}</ul>;
  }
}

export default MenuInLine;
