import React from "react";
import { Link } from "react-router-dom";



export default function ChatNavbar() {
  function Logout() {
     localStorage.clear();
  }
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
              <h1 id="navbar-text">
                React-Chat
              </h1>
              <button onClick={Logout} className="btn btn-success"><Link id="btn-register" to="/">Logout</Link></button>;
            </div>
          </nav>
    )
}