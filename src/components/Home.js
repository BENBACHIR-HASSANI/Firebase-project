import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import ReactGA from "react-ga";


export default function Home() {
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };
  let navigate = useNavigate();
  useEffect(() => {
    // ReactGA.pageview(window.location.pathname);
    let authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);
    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/register");
    }
  });
  
  
  return (
    <div>
      Home Page
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
