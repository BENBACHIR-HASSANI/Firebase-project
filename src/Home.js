import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  console.log(props);
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);
    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/register");
    }
  }, [navigate]);

  return (
    <div>
      <br />
      <br />

      <div
        class="row ml-3"
        style={{ width: "2520px", height: "100%", marginLeft: "150px" }}
      >
        <div class="col-sm-6 mt-5">
          <div class="card">
            <div class="card-body">
              <button
                className="btn btn-primary"
                onClick={handleLogout}
                style={{ float: "right" }}
              >
                Logout
              </button>

              <br />
              <br />
              <div class="card-header">
                <h3>Home</h3>
              </div>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// return (
//   <div>
//     Home Page
//     <button onClick={handleLogout}>Log out</button>
//   </div>
// );
