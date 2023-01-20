import "./App.css";
import React, { useEffect, useState } from "react";

import Home from "./Home";
import Login from "./login";
import Register from "./register";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
function App() {
  const [email] = useState("");
  const [password] = useState("");
  let navigate = useNavigate();

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // eslint-disable-next-line no-undef
  // const history = createBrowserHistory();
  // history.listen((location) => {
  //   ReactGA.pageview(location.pathname);
  // });

  useEffect(() => {
    ReactGA.initialize("UA-161441947-3");
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log("test");
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }
  }, [navigate]);
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password).then(
        (response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
              .catch((error) => {
                if (error.code === "auth/wrong-password") {
                  toast.error("Please check the Password");
                }
                if (error.code === "auth/user-not-found") {
                  toast.error("Please check the Email");
                }
              })
              .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                  toast.error("Email Already in Use");
                }
              })
          );
        }
      );
    }
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password).then(
        (response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
              .catch((error) => {
                if (error.code === "auth/wrong-password") {
                  toast.error("Please check the Password");
                }
                if (error.code === "auth/user-not-found") {
                  toast.error("Please check the Email");
                }
              })
              .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                  toast.error("Email Already in Use");
                }
              })
          );
        }
      );
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home title="Home" />} />

        <Route path="/" element={<Login title="Login" />} />
        <Route path="/login" element={<Login title="Login" />} />
        <Route path="/register" element={<Register title="Register" />} />
      </Routes>
    </div>
  );
}

export default App;
