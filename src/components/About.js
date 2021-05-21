import React from "react";
import "../css/About.css";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
function About() {
  return (
    <div className="about_main">
      <div style={{ color: "white", background: "grey" }}>
        <div className="navbar2">
          <Nav></Nav>
          <br></br>
          <br></br>
        </div>

        <div className="navbar1">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="about_banner">
        <h1>Techxios</h1>
      </div>
      <div className="about_page_text">
        <h1>About Techxios</h1>
        <div className="social_icons">
          <div className="icon1">
            <a href="https://www.facebook.com/Tech-Robot-102211541965232">
              <FacebookIcon
                className="social_icon"
                style={{
                  fontSize: 30,
                  color: "#4267B2",

                  cursor: "pointer",
                }}
              ></FacebookIcon>
            </a>
          </div>

          <div className="icon2">
            <a href="https://www.instagram.com/thetechrobot/">
              <InstagramIcon
                className="social_icon"
                style={{
                  fontSize: 30,
                  color: "#cd486b",
                  // color: "black",
                  cursor: "pointer",
                }}
              ></InstagramIcon>
            </a>
          </div>

          <div className="icon3">
            <a href="https://twitter.com/techxios">
              <TwitterIcon
                className="social_icon"
                style={{
                  fontSize: 30,
                  color: "#00acee",
                  // color: "black",
                  cursor: "pointer",
                }}
              ></TwitterIcon>
            </a>
          </div>

          <div className="icon3">
            <a href="https://www.linkedin.com/in/tech-robot-307a6520a/">
              <LinkedInIcon
                className="social_icon"
                style={{
                  fontSize: 30,
                  color: "#0e76a8",
                  // color: "black",
                  cursor: "pointer",
                }}
              ></LinkedInIcon>
            </a>
          </div>
        </div>
        <div className="about_info">
          <h2>
            Techxios mission is to empower the most talented web voices and
            their audiences.
            <br></br>
            This website is Developed by a developer in India. If you yave ny
            query or suggestion about Our website please free to contact us at
            techxiosmedia@gmail.com If you are a marketer looking for ways to
            connect your brand with Techxios influential audiences, please
            contact us at techxiosmedia@gmail.com or message us on Instagram.
          </h2>
          <br></br>
          <br></br>

          <br></br>
        </div>
      </div>
    </div>
  );
}

export default About;
