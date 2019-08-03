import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavbarTop from "./components/NarbarTop";
import NavbarLeft from "./components/NavbarLeft";
import SchoolPage from "./pages/SchoolPage";
import LoginPage from "./pages/LoginPage";
import AuthAPIService from "./services/AuthAPIService";

require("../css/bootstrap.min.css");
require("../css/app.scss");

const App = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthAPIService.isAuthenticated()
  );

  return (
    <HashRouter>
      <NavbarTop
        isAuthenticated={isAuthenticated}
        onLogout={setIsAuthenticated}
      />
      <div className="container">
        {/* <NavbarLeft /> */}
        <div role="main" className="bs-docs-section clearfix mt-20">
          <div className="row">
            <Switch>
              <Route
                path="/login"
                render={() => <LoginPage onLogin={setIsAuthenticated} />}
              />
              <Route path="/admin/schools" component={SchoolPage} />
              <Route path="/admin" component={DashboardPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
