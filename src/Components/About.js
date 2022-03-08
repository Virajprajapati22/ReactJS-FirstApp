import React from 'react'
import { Navbar } from "./Navbar";

export const About = () => {
  return (
    <>
    <div className="home">
    <div
      style={{
        display: "inline-block",
      }}
    >
      <Navbar />
    </div>
    <div
      style={{
        display: "inline-block",
      }}
    >
      This is about page.
    </div>
  </div>
  </>
  )
}
