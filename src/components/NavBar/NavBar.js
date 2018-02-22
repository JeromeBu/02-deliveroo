import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul className="container">
          <li>Nav bar</li>
          <li>Your cart : {this.props.calcSubTot()}</li>
        </ul>;
      </div>
    );
  }
}

export default NavBar;
