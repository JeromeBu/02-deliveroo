import React from "react";

class MenuElement extends React.Component {
  render() {
    return <li>{this.props.title}</li>;
  }
}

export default MenuElement;
