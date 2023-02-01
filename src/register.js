import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "react-bootstrap";
import { firebaseConfig } from "./firebase-config";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitRegister = (e) => {
    createUserWithEmailAndPassword(firebaseConfig, email, password).then(
      (response) => {
        sessionStorage.setItem("Auth Token", response._tokenResponse);
      }
    );
    e.preventDefault();
    console.log("clicked");
    navigate("/fetch");
  };
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/fetch");
    }
  }, [navigate]);
  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log("clicked");

    console.log("email and password are" + email + password);
    signInWithEmailAndPassword(firebaseConfig, email, password)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/wrong-password") {
          console.log(error);
          toast.error("Please check the Password");
        }
        if (error.code === "auth/user-not-found") {
          toast.error("Please check the Email");
        }
      });
    navigate("/");
  };
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div style={{ marginLeft: "350px", marginTop: "30px" }}>
      <div class="row ml-5">
        <div class="col-sm-8 mt-5">
          <div class="card">
            <div class="card-body">
              <div
                class="card-header"
                style={{
                  background: "#65A8F1",
                  borderColor: "white",
                  color: "white",
                }}
              >
                <h3>Register</h3>
              </div>
              <div class="card-body">
                <Form onSubmit={onSubmitRegister}>
                  <div class="form-row">
                    <Form.Group>
                      <div class="form-group col-md-12">
                        <Form.Label>Email :</Form.Label>
                        <Form.Control
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <div class="form-group col-md-12">
                        <Form.Label>Password :</Form.Label>
                        <Form.Control
                          type="password"
                          className="form-control"
                          onChange={onChangePassword}
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                    </Form.Group>
                  </div>
                  <br />
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{
                      width: "100%",
                      background: "linear-gradient(to right, purple, #65A8F1 )",
                      borderColor: "white",
                    }}
                  >
                    Register
                  </button>
                </Form>
                <br />
                <Form onSubmit={onSubmitLogin}>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{
                      width: "100%",
                      background: "linear-gradient(to right, #65A8F1, purple)",
                      borderColor: "white",
                    }}
                  >
                    Login
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
