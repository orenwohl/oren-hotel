import React from "react";
import Navbar from "../comps/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section id="contact-form" className="py3">
        <div className="container">
          <h1 className="l-heading py2">
            {" "}
            <span className="text-primary">Contact</span>Us
          </h1>
          <p className="py2">Please fill out the form bellow to contact us</p>
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="messege">Messege</label>
              <textarea type="text" name="messege" id="messege" />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section id="contact-info" className="bg-dark">
        <div className="container">
          {" "}
          <div className="box">
            <i className="fa-solid fa-hotel fa-3x"></i>

            <h3> Location</h3>
            <p>Waizman 17 pt</p>
          </div>
          <div className="box bg-primary">
            <i className="fa-solid fa-phone fa-3x"></i>
            <h3>Phone number</h3>
            <p>03-9222545</p>
          </div>
          <div className="box">
            <i className="fa-solid fa-envelope fa-3x"></i>
            <h3>Email</h3>
            <p>Talgoldman@gmail.com</p>
          </div>
        </div>
      </section>
      <footer id="main-footer">
        <p>Hotel OW Since 1993, ALL RIGHTS REESERVD</p>
      </footer>
    </div>
  );
};

export default Contact;
