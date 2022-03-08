import React from "react";
import { NavLink } from "react-router-dom";
import ig from "../viraj.jpg";
import "../App.css";

export const Navbar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="img">
          <img src={ig} alt="viru"></img>
        </div>

        <div className="detail">
          <h1>Viraj Prajapati</h1>
          <p>CODING MADE SIMPLE</p>
        </div>

        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/aboutus">About Us</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
        </div>
      </div>
    </div>
  );
};
