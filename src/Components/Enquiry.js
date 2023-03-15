import React from "react";
import { useFormik } from "formik";
import { Form, Button, Card, error } from "react-bootstrap";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.phonenumber) {
    errors.phonenumber = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Enquiry = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phonenumber: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log("Form Values", formik.values);
  return (
    <div>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Get In Touch</Card.Title>
          <Card.Text>If You Wont Any Enquiry Please Fill This Form</Card.Text>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
              <label htmlFor="firstName"> * First Name :</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your First Name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors.firstName ? (
                <div className="error">{formik.errors.firstName}</div>
              ) : null}
            </div>

            <div className="form-control">
              <label htmlFor="lastName">* Last Name :</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your Last Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? (
                <div className="error">{formik.errors.lastName}</div>
              ) : null}
            </div>
            <br />
            <div className="form-control">
              <lable htmlFor="phonenumber"> * Phone Number :</lable>
              <br />
              <input
                type="tel"
                id="phonenumber"
                name="phonenumber"
                placeholder="Enter your phone number"
                onChange={formik.handleChange}
                value={formik.values.phonenumber}
              />
              {formik.errors.phonenumber ? (
                <div className="error">{formik.errors.phonenumber}</div>
              ) : null}
            </div>
            <br />
            <div className="form-control">
              <label htmlFor="email"> * Email Address :</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your Email Address"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <br />

            <div className="form-control">
              <lable htmlFor="Message">Message : </lable>
              <br />
              <input
                as="message"
                rows={3}
                placeholder="Enter your message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
            </div>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
          <br />

          <div> * Fields Marked with * will be Mandatory </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Enquiry;
