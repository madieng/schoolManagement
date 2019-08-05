import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Narbar";
import SchoolsPage from "./pages/SchoolsPage";
import LoginPage from "./pages/LoginPage";
import AuthAPIService from "./services/AuthAPIService";
import PrivateRoute from "./components/PrivateRoute";

require("../css/bootstrap.min.css");
require("../css/app.scss");

export default PrivateRoute;

const NavbarWithRouter = withRouter(Navbar);

const App = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthAPIService.isAuthenticated()
  );

  return (
    <HashRouter>
      <NavbarWithRouter
        isAuthenticated={isAuthenticated}
        onLogout={setIsAuthenticated}
      />
      <div className="container">
        <div role="main" className="bs-docs-section clearfix mt-20">
          <div className="row">
            <Switch>
              <Route
                path="/login"
                render={props => (
                  <LoginPage onLogin={setIsAuthenticated} {...props} />
                )}
              />
              <PrivateRoute
                path="/admin/schools"
                component={SchoolsPage}
                isAuthenticated={isAuthenticated}
              />
              <PrivateRoute
                path="/admin"
                component={DashboardPage}
                isAuthenticated={isAuthenticated}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
