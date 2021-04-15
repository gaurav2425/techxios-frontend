import React from "react";
import "../css/About.css";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
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
        <h1>Tech Robot</h1>
      </div>
      <div className="about_page_text">
        <h1>About Tech Robot</h1>
        <div className="social_icons">
          <div className="social_icon">
            <a href="https://www.instagram.com/thetechrobot/">
              <FacebookIcon
                style={{ fontSize: 35, color: "#3b5998", cursor: "pointer" }}
              ></FacebookIcon>
            </a>
          </div>
          <div className="social_icon">
            <a href="https://www.instagram.com/thetechrobot/">
              <InstagramIcon
                style={{
                  fontSize: 35,
                  marginLeft: 7,
                  color: "#e95950",
                  cursor: "pointer",
                }}
              ></InstagramIcon>
            </a>
          </div>
          <div className="social_icon">
            <TwitterIcon
              style={{
                fontSize: 35,
                color: "#00acee",
                marginLeft: 7,
                cursor: "pointer",
              }}
            ></TwitterIcon>
          </div>
        </div>
        <div className="about_info">
          <h2>
            TechRobot's mission is to empower the most talented web voices and
            their audiences.
            <br></br>
            This Website is Developed By a Developer in India. If You Have Any
            Query or Suggestion About Our Website Please Free to Contact Us at
            techrobot7@gmail.com If you are a marketer looking for ways to
            connect your brand with Tech Robot influential audiences, please
            contact us at techrobot7@gmail.com or Message Us On Instagram.
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
