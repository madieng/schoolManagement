import React, { useState } from "react";
import AuthAPIService from "../services/AuthAPIService";
import Field from "../components/form/Field";

require("../../css/signin.css");

const LoginPage = ({ onLogin, history }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState(false);

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await AuthAPIService.authenticate(credentials);
      onLogin(true);
      setError(false);
      history.replace("/admin/schools");
    } catch (error) {
      console.log("[ ERROR ]", error);
      setError(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mgTp">
          <form className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
            <h3 className="title">Connexion</h3>
            <hr className="divisor" />
            <Field
              label="Adresse email"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              type="email"
              error={error}
            />
            <Field
              label="Mot de passe"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              type="password"
              error={error}
            />
            <button type="submit" className="btn btn-primary topBtn">
              <i className="fa fa-sign-in" /> Connexion
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
