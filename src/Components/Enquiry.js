import React from "react";
import { useFormik } from "formik";
import { Card, Container, Row, Col, Form } from "react-bootstrap";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
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
      customerName: "",
      phonenumber: "+91 ",
      email: "",
      enquiryType: "",
      message: "",
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
            <Card style={{ width: "30rem", backgroundColor: "black" }}>
              <Card.Body>
                <Card.Title style={{ color: "white" }}>
                  Get In Touch For Design for Every Budget
                </Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Get Your Dream Home Today. Let Our Experts Help You
                </Card.Text>
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <label htmlFor="customerName" style={{ color: "white" }}>
                      {" "}
                      * customer Name :
                    </label>
                    <input
                      id="customerName"
                      name="customerName"
                      type="text"
                      className="form-control"
                      placeholder="Enter your First Name"
                      onChange={formik.handleChange}
                      value={formik.values.customerName}
                    />
                    {formik.errors.customerName ? (
                      <div className="error">{formik.errors.customerName}</div>
                    ) : null}
                  </div>
                  <div>
                    <lable htmlFor="phonenumber" style={{ color: "white" }}>
                      {" "}
                      * Phone Number :
                    </lable>
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
                    <label htmlFor="email" style={{ color: "white" }}>
                      {" "}
                      * Email Address :
                    </label>
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
                    <label htmlFor="enquiryType" style={{ color: "white" }}>
                      Your Enquiry Type:
                    </label>
                    <Form.Select
                      id="enquiryType"
                      name="enquiryType"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.enquiryType}
                    >
                      <option value="">Select an enquiry type</option>
                      <option value="pvcinteriordesign">
                        PVC Interior Designs
                      </option>
                      <option value="woodcarvingdesign">
                        Wood Carving Design
                      </option>
                      <option value="pvcmaterialsales">
                        PVC Material Sales
                      </option>
                      <option value="interiorservice">Interior Service</option>
                      <option value="others">Others</option>
                    </Form.Select>
                  </div>

                  <div>
                    <lable htmlFor="Message" style={{ color: "white" }}>
                      Message :{" "}
                    </lable>
                    <br />
                    <input
                      id="message"
                      name="message"
                      type="message"
                      className="form-control"
                      placeholder="Enter your Message"
                      onChange={formik.handleChange}
                      value={formik.values.Message}
                    />
                  </div>
                  <br />
                  <button type="submit" className="button">
                    Get Free Quote
                  </button>
                </form>
                <br />
                <div style={{ color: "white" }}>
                  {" "}
                  * Fields Marked with * will be Mandatory{" "}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </Row>
    </div>
  );
};

export default Enquiry;
