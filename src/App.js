import React from "react";
import "./reset.css";
import "./App.css";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Shipping from "./components/Shipping";

class App extends React.Component {
  // state = {
  //   deliveryPrice: 2.5
  // };

  // calcSubTot = () => {
  //   let subTot = 0;
  //   this.state.cart.forEach(elem => {
  //     subTot += elem.number * elem.price;
  //   });
  //   return subTot;
  // };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/restaurant_menu">Restaurant Menu</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          {/* <Route path="/topics" component={Topics} /> */}
          <Route path="/restaurant_menu" component={RestaurantMenu} />
          <Route path="/shipping" component={Shipping} />
        </div>
      </Router>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

export default App;
