import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavbarTop from "./components/NarbarTop";
import NavbarLeft from "./components/NavbarLeft";
import Schools from "./components/Schools";

require("../css/bootstrap.min.css");
require("../css/app.scss");

// console.log("Bonjour tout le monde !");

const App = props => {
  return (
    <HashRouter>
      <NavbarTop />
      <div className="container-fluid">
        <div className="row">
          <NavbarLeft />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Switch>
              <Route path="/admin/schools" component={Schools} />
              <Route path="/admin" component={DashboardPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
