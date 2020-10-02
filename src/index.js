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
import ReactDOM from "react-dom";
import Helmet from "react-helmet" 
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "assets/css/demo.css"

import AdminLayout from "./layouts/Admin.js";
import ClientLayout from "./layouts/Client.js"; 
import AuthLayout from "./layouts/Auth.js";
const urlPrefix = '/';

ReactDOM.render(
  <BrowserRouter>
  <Helmet>
      <title></title>

      <link
        rel="stylesheet"
        // href="/static/fonts/Linearicons/Font/demo-files/demo.css"
        href={`${urlPrefix}src/assets/css/demo.css`}
      />

  </Helmet>

    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/client" render={props => <ClientLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
