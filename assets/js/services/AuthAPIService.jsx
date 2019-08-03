import Axios from "axios";
import JwtDecode from "jwt-decode";

function authenticate(credentials) {
  try {
    return Axios.post("http://localhost:8000/api/login_check", credentials)
      .then(response => response.data.token)
      .then(token => {
        window.localStorage.setItem("authToken", token);
        setAxios(token);
        return true;
      });
  } catch (error) {
    console.log("[ ERROR ]", error);
    return false;
  }
}

function isAuthenticated() {
  const token = window.localStorage.getItem("authToken");
  if (token && isValidToken) {
    setAxios(token);
    return true;
  } else {
    delete Axios.defaults.headers["Authorization"];
    delete window.localStorage.getItem("authToken");
    return false;
  }
}

function isValidToken(token) {
  return JwtDecode(token).exp * 1000 > new Date().getTime();
}

function setAxios(token) {
  Axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

function logout() {
  delete Axios.defaults.headers["Authorization"];
  window.localStorage.removeItem("authToken");
}

export default {
  authenticate,
  isAuthenticated,
  isValidToken,
  //   setAxios,
  logout
};
