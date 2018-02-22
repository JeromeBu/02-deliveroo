import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return [
      <div className="navbar" key="navbar">
        <div className="container flex-container space-between">
          <img src="/logo-green.svg" alt="logo" />
          <ul className="flex-container">
            <li>
              <i class="fas fa-user icon" />
              &nbsp; Jérôme Burkard
            </li>
            <li>
              <i className="fas fa-shopping-cart icon" />
              &nbsp; € {this.props.calcSubTot().toFixed(2)}
            </li>
          </ul>
        </div>
      </div>,
      <div className="spacer navbar-spacer" />
    ];
  }
}

export default NavBar;
