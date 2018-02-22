import React from "react";

class MenuElement extends React.Component {
  render() {
    return <li className="inline-menu-element">{this.props.title}</li>;
  }
}

export default MenuElement;
