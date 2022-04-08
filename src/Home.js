import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="below-input-box head-text" id="welcome-message">
      Welcome to Random user Generator.  <Link to = 'login'>Login</Link> to Continue
    </div>
  );
}

export default Home;
