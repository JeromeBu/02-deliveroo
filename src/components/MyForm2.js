// Helper styles for demo
import "./MyForm.css";

import React from "react";
// import { render } from "react-dom";
import { Formik } from "formik";
import Yup from "yup";

class MyFormikForm extends React.Component {
  state = {
    isLoading: true,
    inputs: [],
    inputValues: {}
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
    // const inputs = this.state.inputs.map((input, index) => {
    return (
      <div className="formik-form">
        <h1>Basic Formik 2 Demo</h1>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required!"),
            name: Yup.string().required("Name is required")
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
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
              console.log("values", values);
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
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.name && touched.name
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.name &&
                    touched.name && (
                      <div className="input-feedback">{errors.name}</div>
                    )}
                  <br />
                </div>
              );
            });
            console.log("inputs from 2", inputs);
            return (
              <form
                onSubmit={handleSubmit}
                className="shipping-formik flex-container flex-wrap"
              >
                {inputs}
                <button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </button>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            );
          }}
        />
      </div>
    );
  }

  render() {
    if (this.state.isLoading === true) {
      return <p>Chargement du formulaire ...</p>;
    } else {
      return this.renderForm();
    }
  }
}

export default MyFormikForm;
