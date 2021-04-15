import React from "react";
import "../css/Footer.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="main_section_1">
        <div className="footer_sec1">
          <h1>Techxios</h1>
          <h4>We create Possibilities to create our world admire things</h4>
        </div>

        <div className="footer_sec2">
          <h1>Explore</h1>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h4>Home</h4>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <h4>About</h4>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <h4>Contact</h4>
          </Link>
        </div>
      </div>
      <div className="main_section_2">
        <div className="footer_sec3">
          <h1>Visit</h1>
          <h4>
            <LocationOnIcon style={{ fontSize: 13 }}></LocationOnIcon> Pune,
            India
          </h4>
          <h2>New Business</h2>
          <h4>thetechrobot7@gmail.com</h4>
        </div>

        <div className="footer_sec4">
          <h1>Follow</h1>
          <a
            href="https://www.facebook.com/Tech-Robot-102211541965232"
            style={{ textDecoration: "none" }}
          >
            <h4>Facebook</h4>
          </a>
          <a
            href="https://www.instagram.com/thetechrobot/"
            style={{ textDecoration: "none" }}
          >
            <h4>Instagram</h4>
          </a>
          <a
            href="https://twitter.com/thetechrobot"
            style={{ textDecoration: "none" }}
          >
            <h4>Twitter</h4>
          </a>
          <a
            href="https://www.linkedin.com/in/tech-robot-307a6520a/"
            style={{ textDecoration: "none" }}
          >
            <h4>LinkedIn</h4>
          </a>
        </div>

        <div className="footer_sec5">
          <h1>Legal</h1>
          <Link to="/privacy-policy" style={{ textDecoration: "none" }}>
            <h4>Privacy Policy</h4>
          </Link>

          <Link to="/terms" style={{ textDecoration: "none" }}>
            <h4>Terms Of Use</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
