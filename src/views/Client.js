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
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Badge,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  UncontrolledTooltip, CardTitle
} from "reactstrap";
import { API_BASE } from "assets/env";
import { API_PUBLIC_KEY } from "assets/env";
import Axios from "axios";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "../components/Headers/ClientHeader.js";

class Client extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      products: [],
      loading: true,
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }

    this._isMounted = false;
  }
  
 async componentDidMount(){
    this._isMounted = true;

    const response= await Axios({
      url: API_BASE + "Admin/GetProducts?PublicKey=" + API_PUBLIC_KEY,
   });

   console.log("onload info", response)
   this.setState({
     products: response.data.object,
     loading:false
   })
    return true
  }
  
  componentWillUnmount(){
    this._isMounted = false;

  }

  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };

  async approveMember(member,toApprove){
    const path = toApprove? "ApproveClientAccount":"DeleteClientAccount"
    const form = new FormData();
    form.append("PublicKey", API_PUBLIC_KEY);
    form.append("email", member.email);
    form.append("phoneNumber", member.mobileNo);

    const response= await Axios({
      url: API_BASE + "Admin/"+path+"?PublicKey="+API_PUBLIC_KEY,
      method: "POST",
      data: form,
      headers:{
        Authorization: "Bearer "+ localStorage.getItem("sessionUserToken")
      }
   });

   console.log("RESPONSE FROM MEMBER ACTION", {member, response})

  }
  render() {
    const {state, props}=this;
    if(state.loading){
      return "";
    }

    const products = (<Col lg="6" xl="3">
    <Card className="card-stats mb-4 mb-xl-0 product-card" style={{borderRadius: "8px", overflow: "hidden", }}>
        <img src={require("assets/img/theme/sample_product.jpg")} style={{width: "100%", height: '200px', objectFit: "cover" }}></img>
        <div style={{padding: "1em"}}>
          <h2 style={{fontWeight: 800}}>The Name Of Product</h2>
          <p>A little discription about the product by the seller and why you shoud buy it</p>
          <div className="price">
            <h3>#3000</h3>
          </div>
        </div>
      </Card>
  </Col>)
  
    return (
      <>
        <Header products={state.products.length}/>
        {/* Page content */}
        <Container fluid style={{marginTop: "2em"}}>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {products}
              {products}
              {products}
              {products}
              {products}
              {products}
              {products}
              {products}
              {products}
              {products}
              {products}
              {products}
              {products}
              {products}
              {products}
              {products}
              </Row>
          </div>
        </Container>      </>
    );
  }
}

export default Client;
