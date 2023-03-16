import React from "react";
import { useFormik } from "formik";
import { Card, Container, Row, Col } from "react-bootstrap";

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
      phonenumber: "+91 ",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log("Form Values", formik.values);
  return (
    <div className="aboutcard mt-4">
      <Row>
        <Container fluid>
          <Col md={{ span: 3, offset: 3 }}>
            <Card style={{ width: "30rem" , backgroundColor:"black"}}>
              <Card.Body>
                <Card.Title style={{ color: "white" }}>Get In Touch</Card.Title>
                <Card.Text style={{ color: "white" }}>
                  If You Wont Any Enquiry Please Fill This Form
                </Card.Text>
                <form onSubmit={formik.handleSubmit}>
                  <div >
                    <label htmlFor="firstName" style={{ color: "white" }}> * First Name :</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="form-control"
                      placeholder="Enter your First Name"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                    {formik.errors.firstName ? (
                      <div className="error">{formik.errors.firstName}</div>
                    ) : null}
                  </div>

                  <div >
                    <label htmlFor="lastName" style={{ color: "white" }}>* Last Name :</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="form-control"
                      placeholder="Enter your Last Name"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                    {formik.errors.lastName ? (
                      <div className="error" >{formik.errors.lastName}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <lable htmlFor="phonenumber" style={{ color: "white" }}> * Phone Number :</lable>
                    <br />
                    <input
                      type="tel"
                      id="phonenumber"
                      name="phonenumber"
                      className="form-control"
                      placeholder="Enter your phone number"
                      onChange={formik.handleChange}
                      value={formik.values.phonenumber}
                    />
                    {formik.errors.phonenumber ? (
                      <div className="error">{formik.errors.phonenumber}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label htmlFor="email" style={{ color: "white" }}> * Email Address :</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your Email Address"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <br />

                  <div>
                    <lable htmlFor="Message" style={{ color: "white" }}>Message : </lable>
                    <br />
                    <input
                      id="Message"
                      name="Message"
                      type="Message"
                      className="form-control"
                      placeholder="Enter your Message"
                      onChange={formik.handleChange}
                      value={formik.values.Message}
                    />
                  </div>
                  <br />
                  <button type="submit" className="button">Submit</button>
                </form>
                <br />
                <div style={{ color: "white" }}> * Fields Marked with * will be Mandatory </div>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </Row>
    </div>
  );
};

export default Enquiry;
