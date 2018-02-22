import React from "react";

class Headers extends React.Component {
  render() {
    const { name, description, picture } = this.props.restaurant;
    return (
      <div>
        Headers of my restaurant
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={`https:${picture}?width=320&height=180`} alt="resto" />
      </div>
    );
  }
}

export default Headers;
