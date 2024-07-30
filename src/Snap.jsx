import "./Snap.css";
import React from "react";

function Snap() {
  return (
    <div>
      <header>
        <b className="logo">snap</b>
        <nav>
          <ul className="navbar">
            <li>Features</li>
            <li>Company</li>
            <li>Career</li>
            <li>About</li>
          </ul>
        </nav>
        <span className="log">Login</span>
        <button className="reg">Register</button>
      </header>

      <main className="container">
        <div className="sub-container1">
          <h1>Make</h1>
          <h1 className="head">remote work</h1>
          <span className="content-message">
           <span> Get your team in sync, no matter your Location.</span>
           <span>Streamline processes, create team rituals, and </span>
            <span>watch productivity soar.</span>
          </span>
          <br />
          <button className="more">Learn more</button>
        </div>
        <div className="sub-conatiner2">
          <img src="image-hero-desktop.png" />
        </div>
      </main>
    </div>
  );
}

export default Snap;
