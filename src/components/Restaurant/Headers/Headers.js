import React from "react";
import "./Headers.css";

class Headers extends React.Component {
  render() {
    const { name, description, picture, path } = this.props.restaurant;
    return (
      <header className="flex-container">
        <div className="headers-infos">
          <p>
            <span className="text-blue">Home/</span>
            &nbsp; {path}
          </p>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <img src={`https:${picture}?width=400`} alt="resto" />
      </header>
    );
  }
}

export default Headers;
