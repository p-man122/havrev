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
import { Link } from "react-router-dom";
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
  Col
} from "reactstrap";
import Axios from "axios";

class Login extends React.Component {
  constructor(){
    super();

    this.state = {
      email: "",
      password: ""
    }

    this.signIn=this.signIn.bind(this)
  }

 async signIn() {
   try{

     const {  email, password } = this.state
     const form = new FormData();
     form.append("PublicKey", API_PUBLIC_KEY);
     form.append("Email", email);
     form.append("Password", password);

     const response= await Axios({
       url: API_BASE + "Client/ValidateLogin",
       method: "POST",
       data: form,
    });

    console.log("Login response is ", response)
    const {data}= response;
    if(data.object){
      Swal.fire({
        title: "Sign In Successful",
        showCancelButton: false,
        showConfirmButton: true,
        icon: "success"
      });

      localStorage.setItem('sessionUserToken', data.object.result.token);
      
      if(data.object.result.adminLogin){

        this.props.history.push('/admin/index');
      }else{

        this.props.history.push('/client/products');
      }

    }else{
      Swal.fire({
        title: "Sign In Failed",
        html: data.shortDescription,
        showCancelButton: false,
        showConfirmButton: true,
        icon: "error"
      });

    }
  }catch(err){
    Swal.fire({
      title: "Oops! sorry we couldn't sign you in",
      html: "please try again"
    })
  }
  }

  render() {
    console.log("props", this.props)
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <h1 style={{ textAlign: "center", marginBottom: "1em", fontWeight: "bold" }}>Sign Into Your Account</h1>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <Input placeholder="Email" type="email" autoComplete="new-email" onChange={({target: {value}})=>{
                      this.setState({
                        email: value
                      })
                    }}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input placeholder="Password" type="password" autoComplete="new-password" onChange={({target: {value}})=>{
                      this.setState({
                        password: value
                      })
                    }}/>
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox" style={{ textAlign: "center" }}>
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={this.signIn}>
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <Link
                to="/auth/register"
                className="text-light"
              >
                <small>Create new account</small>
              </Link>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default Login;
