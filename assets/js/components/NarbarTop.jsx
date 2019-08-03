import React from "react";
import { NavLink } from "react-router-dom";
import AuthAPIService from "../services/AuthAPIService";

const NavbarTop = ({ isAuthenticated, onLogout }) => {
  const handleLogout = () => {
    AuthAPIService.logout();
    onLogout(false);
  };

  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <NavLink to="/admin" className="navbar-brand background-none">
          Administration
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                {/* <i className="fas fa-home" /> */}
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/countries">
                {/* <i className="fas fa-globe-africa" /> */}
                Pays
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/schools">
                {/* <i className="fas fa-school" /> */}
                Ecoles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/degrees">
                {/* <i className="fas fa-layer-group" /> */}
                Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/students">
                {/* <i className="fas fa-user-graduate" /> */}
                Etudiants
              </NavLink>
            </li>
          </ul>

          <ul className="nav navbar-nav ml-auto">
            {isAuthenticated ? (
              <>
                <li className="nav-item m-auto">
                  <button
                    type="button"
                    className="btn btn-warning btn-sm"
                    onClick={handleLogout}
                  >
                    Déconnexion
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/registration">
                    Inscription
                  </NavLink>
                </li>
                <li className="nav-item m-auto">
                  <NavLink className="btn btn-success btn-sm mr-2" to="/login">
                    Connexion
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
