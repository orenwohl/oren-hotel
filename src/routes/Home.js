import React from "react";
import { useNavigate, BrowserRouter } from "react-router-dom";
import Navbar from "../comps/Navbar";
import Showcase from "../comps/Showcase";

const Home = () => {
  const navigate = useNavigate();

  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 1;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };
  window.addEventListener("scroll", reveal);

  return (
    <div>
      <header>
        <Navbar />
        <Showcase />
      </header>
      <section id="home-info" className="bg-dark">
        <div className="info-img"></div>
        <div className="info-content">
          <h2>
            <span className="text-primary">The History </span>
            Of Our Hotel
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            nisi nam neque nostrum soluta inventore sapiente officiis dicta
            laudantium id beatae omnis excepturi reprehenderit tempora obcaecati
            accusamus vitae dolore natus quam non, consequuntur doloremque
            corporis similique. Veniam doloremque aliquid ratione.
          </p>
          <a className="btn btn-light">Read More</a>
        </div>
      </section>
      <section id="feaatures" className="reveal">
        <div className="box">
          <i className="fa-solid fa-hotel fa-3x"></i>

          <h3>Great location</h3>
          <p>
            accusamus vitae dolore natus quam non, consequuntur doloremque
            corporis similique. Veniam doloremque aliquid ratione
          </p>
        </div>
        <div className="box bg-primary">
          <i className="fa-solid fa-bowl-food fa-3x"></i>
          <h3>Free Meals</h3>
          <p>
            accusamus vitae dolore natus quam non, consequuntur doloremque
            corporis similique. Veniam doloremque aliquid ratione
          </p>
        </div>
        <div className="box">
          <i className="fa-solid fa-dumbbell fa-3x"></i>
          <h3>Fitness Room</h3>
          <p>
            accusamus vitae dolore natus quam non, consequuntur doloremque
            corporis similique. Veniam doloremque aliquid ratione
          </p>
        </div>
      </section>
      <div className="clr"></div>

      <footer id="main-footer">
        <p>Hotel OW Since 1993, ALL RIGHTS REESERVD</p>
      </footer>
    </div>
  );
};

export default Home;
