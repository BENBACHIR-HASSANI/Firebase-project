import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "firebase/firestore";
// import "../functions/index";

// import { firebase } from "./firebase-config";
export default function Fire() {
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/");
  };
  let navigate = useNavigate();

  // const ref = auth.firestore().collection("developers");
  // console.log(ref);

  // const firestore = firebase.firestore().collection("developers");
  // console.log(firestore);
  // const [users, setUsers] = useState([]);
  // const dev = firebase.firestore().collection("developers");

  return (
    <div
      class="row ml-3"
      style={{ width: "2520px", height: "100%", marginLeft: "150px" }}
    >
      <div class="col-sm-6 mt-5">
        <div class="card">
          <div class="card-header">
            <button
              className="btn btn-primary"
              onClick={handleLogout}
              style={{
                float: "right",
                background: "#65A8F1",
                borderColor: "white",
              }}
            >
              Logout
            </button>
            <h1>#firebase firestore database</h1>
          </div>
          <div class="card-body"></div>
        </div>
      </div>
    </div>
  );
}
