import React from "react";
import "./WeatherEnter.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const WeatherEnter = () => {
  return (
    <>
      <div className="enter">
        <div className="umbrela">
          <img src="/umbrela-removebg-preview.png" alt="umbrela" />
          <h1>O.M.G</h1>
          <h4>Weather App</h4>
          <NavLink to="/main" className="btn">
            <FaArrowRightLong />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default WeatherEnter;
