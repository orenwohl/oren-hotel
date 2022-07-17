import React from "react";
import Navbar from "../comps/Navbar";
import photo from "../image_resources/photo-2.jpg";
import photo2 from "../image_resources/person-1.jpg";
import photo3 from "../image_resources/person-2.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <section id="about-info" className="bg-light py3 ">
        <div className="container">
          <div className="info-left">
            <h1 className="l-heading py2">
              <span className="text-primary">About</span> OW Hotel{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim a
              repellendus consequatur, nemo, animi explicabo ipsa dolorum qui
              amet in nostrum? Aperiam suscipit facilis est qui, aut quaerat?
              Dolor, officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              placeat pariatur beatae iusto laudantium, ad doloribus eos illum
              porro molestiae.
            </p>
          </div>
          <div className="info-right">
            <img src={photo} alt="" />
          </div>
        </div>
      </section>
      <div className="clr"></div>
      <section id="testimonials" className="py3">
        <div className="container">
          <h2 className="l-heading">What Our Guest Say</h2>
          <div className="testimonial bg-primary">
            <img src={photo2} alt="person" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              dicta. Laboriosam, ullam. Adipisci eveniet quis fugit vel delectus
              sunt iure provident repellat? Recusandae, nihil natus aut deleniti
              quae provident, vel nemo quo debitis architecto maiores quas
              fugiat, minus harum aperiam?
            </p>
          </div>
          <div className="testimonial bg-primary">
            <img src={photo3} alt="person" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              dicta. Laboriosam, ullam. Adipisci eveniet quis fugit vel delectus
              sunt iure provident repellat? Recusandae, nihil natus aut deleniti
              quae provident, vel nemo quo debitis architecto maiores quas
              fugiat, minus harum aperiam?
            </p>
          </div>
        </div>
      </section>
      <footer id="main-footer">
        <p>Hotel OW Since 1993, ALL RIGHTS REESERVD</p>
      </footer>
    </div>
  );
};

export default About;
