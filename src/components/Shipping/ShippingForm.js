import React from "react";

class ShippingForm extends React.Component {
  state = {
    isLoading: true,
    inputs: [],
    inputValues: {}
  };

  handleClick = () => {
    const inputValues = this.state.inputValues;
    Object.keys(inputValues).forEach(key => {
      console.log(key, ": ", inputValues[key]);
    });
  };

  handleChange = event => {
    const newInputValues = { ...this.state.inputValues };
    newInputValues[event.target.id] = event.target.value;
    this.setState({
      inputValues: newInputValues
    });
  };

  componentDidMount() {
    fetch(
      "https://lereacteurapp.s3.amazonaws.com/react/deliveroo/deliveroo-shipping-form.json"
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          inputs: json,
          isLoading: false
        });
      });
  }

  renderForm() {
    const inputs = this.state.inputs.map((input, index) => {
      return (
        <div
          key={index}
          style={{ width: `${input.col / 12 * 100}%` }}
          className="input-block"
        >
          <label htmlFor={input.name}>{input.title}</label>
          <input
            id={input.name}
            type="text"
            placeholder={input.placeholder}
            onChange={this.handleChange}
          />
        </div>
      );
    });
    if (this.state.isLoading === true) {
      return <p>Chargement du formulaire ...</p>;
    } else {
      return <div className="flex-container flex-wrap">{inputs}</div>;
    }
  }

  render() {
    return (
      <div className="shipping-form">
        {this.renderForm()}
        <hr />
        <p>Votre commande arrivera dans 15 à 25 minutes</p>
        <hr />
        <div className="btn" onClick={this.handleClick}>
          Valider la commande
        </div>
      </div>
    );
  }
}

export default ShippingForm;
