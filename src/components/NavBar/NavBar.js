import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container flex-container space-between">
          <img src="/logo-green.svg" alt="logo" />
          <ul className="flex-container">
            <li>
              <i class="fas fa-user icon" />
              &nbsp; Jérôme Burkard
            </li>
            <li>
              <i className="fas fa-shopping-cart icon" />
              &nbsp; € {this.props.calcSubTot()}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
