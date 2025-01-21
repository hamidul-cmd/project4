import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import FrontEndDevelopment from "../pages/FrontEndDevelopment";

function Approutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/frontenddevelopment" element={<FrontEndDevelopment/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Approutes;
