import React from "react"
import { Formik } from "formik"
import Yup from "yup"
import "../MyForm.css"
import Checkout from "../Checkout/Checkout"

class ShippingForm extends React.Component {
  state = {
    isLoading: true,
    inputs: [],
    inputValues: {}
  }

  handleClick = () => {
    const inputValues = this.state.inputValues
    Object.keys(inputValues).forEach(key => {
      console.log(key, ": ", inputValues[key])
    })
  }

  handleChange = event => {
    const newInputValues = { ...this.state.inputValues }
    newInputValues[event.target.id] = event.target.value
    this.setState({
      inputValues: newInputValues
    })
  }

  componentDidMount() {
    fetch(
      "https://lereacteurapp.s3.amazonaws.com/react/deliveroo/deliveroo-shipping-form.json"
    )
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json)
        this.setState({
          inputs: json,
          isLoading: false
        })
      })
  }

  renderForm() {
    // const inputs = this.state.inputs.map((input, index) => {
    console.log("Inputs :", this.state.inputs)
    return (
      <div className="shipping-form">
        <Formik
          initialValues={{ email: "", street_address: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required!"),
            name: Yup.string().required("Name is required"),
            phone: Yup.string()
              .min(3, "3 letters minimum")
              .required("Phone is required"),
            flat: Yup.string().required("Flat is required"),
            street_address: Yup.string().required("Address is required")
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
          render={({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          }) => {
            const inputs = this.state.inputs.map((input, index) => {
              console.log(input.name, "values", values[input.name])
              // console.log("values[name]", values[name]);
              return (
                <div
                  key={index}
                  style={{ width: `${input.col / 12 * 100}%` }}
                  className="input-block"
                >
                  <label htmlFor={input.name} style={{ display: "block" }}>
                    {input.title}
                  </label>
                  <input
                    id={input.name}
                    placeholder={input.placeholder}
                    type="text"
                    value={values[input.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors[input.name] && touched[input.name]
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors[input.name] &&
                    touched[input.name] && (
                      <div className="input-feedback">{errors[input.name]}</div>
                    )}
                  <br />
                </div>
              )
            })
            return (
              <form
                onSubmit={handleSubmit}
                className="shipping-formik flex-container flex-wrap"
              >
                {inputs}

                <div style={{ width: "100%" }}>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </div>
              </form>
            )
          }}
        />
      </div>
    )
  }

  render() {
    if (this.state.isLoading === true) {
      return <p>Chargement du formulaire ...</p>
    } else {
      return this.renderForm()
    }
  }
}

export default ShippingForm
