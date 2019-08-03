import React, { useState } from "react";
import AuthAPIService from "../services/AuthAPIService";

require("../../css/signin.css");

const LoginPage = ({ onLogin }) => {
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
    } catch (error) {
      console.log("[ ERROR ]", error);
      setError(true);
    }
  };

  return (
    <>
      <form className="form-signin" method="post" onSubmit={handleSubmit}>
        {/* {error && (
          <div className="alert alert-danger" role="alert">
            L'email ou le mot de passe est incorrect !
          </div>
        )} */}
        <h1 className="h3 mb-3 font-weight-normal">Connexion</h1>
        <input
          onChange={handleChange}
          value={credentials.username}
          type="username"
          id="username"
          className="form-control"
          name="username"
          placeholder="Email address"
          required
        />
        <input
          onChange={handleChange}
          value={credentials.password}
          type="password"
          id="password"
          className="form-control"
          name="password"
          placeholder="Password"
          required
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Connexion
        </button>
      </form>
    </>
  );
};

export default LoginPage;
