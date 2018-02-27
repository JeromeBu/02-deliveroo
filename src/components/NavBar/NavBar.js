import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  renderSubTot() {
    if (this.props.calcSubTot) {
      return (
        <li>
          <i className="fas fa-shopping-cart icon" />
          &nbsp; € {this.props.calcSubTot().toFixed(2)}
        </li>
      );
    }
    return null;
  }
  render() {
    return [
      <div className="navbar" key="navbar">
        <div className="container flex-container space-between">
          <img src="/logo-green.svg" alt="logo" />
          <ul className="flex-container">
            <li>
              <i className="fas fa-user icon" />
              &nbsp; Jérôme Burkard
            </li>
            {this.renderSubTot()}
          </ul>
        </div>
      </div>,
      <div className="spacer navbar-spacer" key="navbar-spacer" />
    ];
  }
}

export default NavBar;
