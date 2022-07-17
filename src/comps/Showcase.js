import React from "react";
import { useNavigate } from "react-router-dom";

const Showcase = () => {
  const navigate = useNavigate();
  return (
    <div id="showcase">
      <div className="container">
        <div className="showcase-content">
          <h1>
            <span className="text-primary">Enjoy</span> Your vacation
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            commodi incidunt tempora ex earum libero.
          </p>
          <a
            className="btn"
            onClick={() => {
              navigate("/about");
            }}
          >
            About Our Hotel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
