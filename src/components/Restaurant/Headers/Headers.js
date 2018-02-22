import React from "react";
import "./Headers.css";

class Headers extends React.Component {
  render() {
    const { name, description, picture, path } = this.props.restaurant;
    return (
      <header>
        <p>
          <span className="text-blue">Home/</span>
          &nbsp; {path}
        </p>
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={`https:${picture}?width=320&height=180`} alt="resto" />
      </header>
    );
  }
}

export default Headers;
