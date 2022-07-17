import React from "react";
import { useNavigate, BrowserRouter } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("");

  return (
    <>
      {" "}
      <nav className={isActive} id="navbar">
        <div className="container">
          <h1
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
            className="logo"
          >
            OW
          </h1>
          <button
            onClick={() => setIsActive((prev) => (prev === "" ? "active" : ""))}
            className="icon"
            id="toogle"
          >
            <div className="line line1 "></div>
            <div className="line line2"></div>
          </button>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
