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
  UncontrolledTooltip
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

import Header from "../components/Headers/Header.js";

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      pendingMembers: [],
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
      url: API_BASE + "Admin/AdminDashboardItems?PublicKey=" + API_PUBLIC_KEY,
   });

   console.log("onload info", response)
   const data = response.data.object.result
   this.setState({
     pendingMembers: data.pendingMembers,
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

    return (
      <>
        <Header pendingMembers={state.pendingMembers.length}/>
        {/* Page content */}
        <Container className="mt--7" fluid>
        <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">PENDING MEMBERS</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">user id</th>
                      <th scope="col">account status</th>
                      <th scope="col">username</th>
                      <th scope="col">full name</th>
                      <th scope="col">mobile number</th>
                      <th scope="col">email</th>
                      <th scope="col">address</th>
                      <th scope="col">gender</th>
                      <th scope="col">date of bith</th>
                      <th scope="col">register date</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {state.pendingMembers.map((member)=>{
                      return (
                        <tr>
                          <td>{member.userID}</td>
                          <td>{member.accountStatus}</td>
                          <td>{member.userName}</td>
                          <td>{member.fullName}</td>
                          <td>{member.mobileNo}</td>
                          <td>{member.email}</td>
                          <td>{member.address}</td>
                          <td>{member.gender}</td>
                          <td>{member.dob}</td>
                          <td>{member.registerDate}</td>
                          
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={()=>{
                                    this.approveMember(member, true)
                                  }}
                                  >
                                  Approve
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                      onClick={()=>{
                                        this.approveMember(member,false)
                                      }}
                                  >
                                  Disapprove
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td>
                        </tr>
                       
                      )
                    })}
                   </tbody>
                </Table>
                </Card>
            </div>
          </Row>
          
          </Container>
      </>
    );
  }
}

export default Index;
