import React, { useState } from "react";
import "../AuthenticationPages/Register.css";

const Register = () => {
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const [myData, setMyData] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const temp = { ...data, id: new Date().getTime.toString };
    setMyData([...myData, temp]);

    setData({
      Email: "",
      Password: "",
    });
  };

  return (
    <div className="reg">
      <form onSubmit={onSubmitHandler} className="form">
        <label className="label">Email: </label>
        <input
          type="text"
          value={data.Email}
          name="Email"
          onChange={handleInput}
          autoComplete="off"
        />
        <label className="label">Password: </label>
        <input
          type="password"
          value={data.Password}
          name="Password"
          onChange={handleInput}
          autoComplete="off"
        />
        {/* <input type="submit" id="inpt" /> */}
        <button className="submit">Submit</button>
      </form>

      {/* for displaying the email and password */}
      <div>
        {myData.map((currElem) => {
          return (
            <div className="info">
              <p
                style={{
                  font_Weight: "bolder",
                  color: "white",
                }}
              >
               Email: {currElem.Email}
              </p>
              <p
                style={{
                  font_Weight: "bolder",
                  color: "white",
                }}
              >
               Password: {currElem.Password}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Register;
