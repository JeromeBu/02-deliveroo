import React from "react";
import "./reset.css";
import "./App.css";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shipping from "./components/Shipping";
import MyForm from "./components/MyForm";
import MyForm2 from "./components/MyForm2";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={RestaurantMenu} />
          <Route path="/restaurant_menu" component={RestaurantMenu} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/testing_formik" component={MyForm} />
          <Route path="/testing_formik2" component={MyForm2} />
        </div>
      </Router>
    );
  }
}

export default App;
