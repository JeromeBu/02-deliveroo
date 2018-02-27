import React from "react";
import "./reset.css";
import "./App.css";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shipping from "./components/Shipping";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={RestaurantMenu} />
          <Route path="/restaurant_menu" component={RestaurantMenu} />
          <Route path="/shipping" component={Shipping} />
        </div>
      </Router>
    );
  }
}

export default App;
