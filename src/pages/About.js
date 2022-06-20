import React, { Component } from "react";
import "./About.css";
import Challa_Sreya_Headshot from "../assets/Challa_Sreya_Headshot.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={Challa_Sreya_Headshot}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Sreya Challa</div>
            <div className="brief_description">
            University of Michigan | Computer Science & Business Administration | Class of 2024
            </div>
          </div>
        </div>
      </div>
    );
  }
}
