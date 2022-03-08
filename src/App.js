import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Courses } from "./Components/Courses";
import { Home } from "./Components/Home";

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route path="/aboutus" element={<About></About>}></Route>
          <Route path="/contactus" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    );
  }
}
