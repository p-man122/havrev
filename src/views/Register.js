/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { API_BASE,API_PUBLIC_KEY } from "../assets/env"
import Swal from "sweetalert2";

// reactstrap components
import {
  Button, 
  Card,
  CardHeader,
  CardBody,
  FormGroup,  
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Axios from "axios";
import Gender from "components/Gender";
import DisplayImage from "components/DisplayImage";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      mobileNo: "",
      email:  "",
      fullName: "",
      address: "",
      gender: "male",
      profileImagePath: "",
      dob: new Date(),
      agreePolicy: false,
    }
this.createAccount=this.createAccount.bind(this)
  }

async createAccount() {
    const { 
      username,
      mobileNo,
      email,
      fullName,
      address,
      gender,
      profileImagePath,
      dob,
      agreePolicy
    } = this.state

    const form = new FormData();
    form.append("PublicKey", API_PUBLIC_KEY);
    form.append("UserName", username);
    form.append("MobileNo", mobileNo);
    form.append("Email", email);
    form.append("FullName", fullName);
    form.append("Address", address);
    form.append("Gender", gender);
    form.append("ProfileImagePath", profileImagePath);
    form.append("Dob", dob);
    form.append("AccountType", "Client");
    
    const response = await  Axios({
      url: API_BASE + "Client/SignUp",
      method : "POST",
      data:form, 
      timeout: 0,
      headers: {
      },
    });

    const {data} = response
    if(data.object){
      Swal.fire({
        title: "Registration Successful",
        html: "please check your email to confirm your account",
        showCancelButton: false,
        showConfirmButton: true,
        icon: "success"
      });
    }else{
      Swal.fire({
        title: "Registration Failed",
        html: data.shortDescription,
        showCancelButton: false,
        showConfirmButton: true,
        icon: "error"
      });

    }
  }

  render() {
    const { state, props } = this
    return (
      <>
        <Col lg="6" md="8">
          <Card id="Registeration" className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <h1 style={{ textAlign: "center", marginBottom: "1em", fontWeight: "bold" }}>Create An Account</h1>
              <Form role="form">
                <DisplayImage
                  onChange={(profileImagePath) => {
                    this.setState({
                      profileImagePath
                    })
                  }} ></DisplayImage>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      value={state.username}
                      placeholder="Username" type="text" onChange={({ target: { value } }) => {
                        console.log("value", value)
                        this.setState({
                          username: value
                        })
                      }} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      value={state.mobileNo}
                      placeholder="Mobile Number" type="text" onChange={({ target: { value } }) => {
                        console.log("value", value)
                        this.setState({
                          mobileNo: value
                        })
                      }} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      value={state.email}
                      placeholder="Email" type="email" autoComplete="new-email" onChange={({ target: { value } }) => {
                        this.setState({
                          email: value
                        })
                      }} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      value={state.fullName}
                      placeholder="Full Name" type="text" onChange={({ target: { value } }) => {
                        console.log("value", value)
                        this.setState({
                          fullName: value
                        })
                      }} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      multiple={3}
                      value={state.address}
                      placeholder="Address" type="text" onChange={({ target: { value } }) => {
                        console.log("value", value)
                        this.setState({
                          address: value
                        })
                      }} />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <Gender {...props} onChange={(gender)=>{
                    this.setState({
                      gender
                    })
                  }}></Gender>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      type="date"
                      placeholder="Password"
                      value={state.dob}
                      onChange={({ target: { value } }) => {
                        console.log("date value is ", value)
                        this.setState({
                          dob: value
                        })
                      }} />
                  </InputGroup>
                </FormGroup>
                <div className="text-muted font-italic">
                  <small>
                    {/* password strength:{" "} */}
                    {/* <span className="text-success font-weight-700">strong</span> */}
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div
                      className="custom-control custom-control-alternative custom-checkbox"
                      style={{ textAlign: "center" }}
                    >
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                        checked={state.agreePolicy}
                        onChange={({ target: { checked } }) => {
                          this.setState({
                            agreePolicy: checked
                          })
                        }}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={this.createAccount}>
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
