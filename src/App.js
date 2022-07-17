import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./comps/Navbar";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
