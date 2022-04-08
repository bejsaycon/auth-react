import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./RandomUserApp/custom_hooks/useAuth";

function Home() {
  const {auth} = useAuth();
  return (
    <div className="below-input-box head-text" id="welcome-message">
      Welcome to Random user Generator. <Link to='/login'>Login</Link> to Proceed
    </div>
  
  );
}

export default Home;
