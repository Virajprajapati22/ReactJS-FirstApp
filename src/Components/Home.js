import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Navbar } from "./Navbar";
import "../Components/Home.css";
import { Modal } from "./Modal";

export const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const onRegClick = () => {
    setShowForm(!showForm);
    return;
  };

  return (
    <div className="home">
      <div
        style={{
          display: "inline-block",
          position: "fixed",
          top: "0px ",
        }}
      >
        <Navbar />
      </div>
      <div className="main">
        <Button className="btn" onClick={onRegClick}>
          Register
        </Button>
        {showForm ? <Modal show={onRegClick} /> : null}
      </div>
    </div>
  );
};
