import React from "react";
import "../css/Navbar.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ letterSpacing: 1 }}>TechXios</h1>
        </Link>
      </div>
      <ul>
        <li>
          <div>
            <a className="one">
              <div>Tech</div>
              <ArrowDropDownIcon className="arrow"></ArrowDropDownIcon>
            </a>
          </div>

          <ul className="list_1">
            <div className="list">
              <Link to="/amazon" className="submenu">
                <li style={{ zIndex: 11111111111 }}>Amazon</li>
              </Link>

              <Link to="/google">
                <li>Google</li>
              </Link>

              <Link to="/microsoft">
                <li>Microsoft</li>
              </Link>

              <Link to="/facebook">
                <li>Facebook</li>
              </Link>
            </div>
            <div>
              <Link to="/tesla">
                <li>Tesla</li>
              </Link>
              <Link to="/privacy">
                <li>Privacy</li>
              </Link>
              <Link to="/apple">
                <li>Apple</li>
              </Link>
              <Link to="/cybersecurity">
                <li>Cybersecurity</li>
              </Link>
            </div>
          </ul>
        </li>

        <li>
          <a className="one">
            <div>Review</div>
            {/* <div className="one_icon"> */}
            <ArrowDropDownIcon className="arrow"></ArrowDropDownIcon>
            {/* </div> */}
          </a>
          <ul>
            <Link to="/phones">
              <li>Phones</li>
            </Link>
            <Link to="/laptops">
              <li>Laptops</li>
            </Link>
            <Link to="/headphones">
              <li>Headphones</li>
            </Link>
            <Link to="/cameras">
              <li>Cameras</li>
            </Link>
            <Link to="/speakers">
              <li>Speakers</li>
            </Link>
          </ul>
        </li>

        <li>
          <a className="one">
            <div>Science</div>
            {/* <div className="one_icon"> */}
            <ArrowDropDownIcon className="arrow"></ArrowDropDownIcon>
            {/* </div> */}
          </a>
          <ul className="science">
            <Link to="nasa">
              <li>Nasa</li>
            </Link>
            <Link to="/spaceX">
              <li>SpaceX</li>
            </Link>
            <Link to="health">
              <li>Health</li>
            </Link>
            <Link to="/environment">
              <li>Environment</li>
            </Link>
            <Link to="/energy">
              <li>Energy</li>
            </Link>
            {/* <Link to="/space">
              <li>Space</li>
            </Link> */}
          </ul>
        </li>
        <li>
          <a className="one">
            <div>Entertainment</div>
            {/* <div className="one_icon"> */}
            <ArrowDropDownIcon className="arrow"></ArrowDropDownIcon>
            {/* </div> */}
          </a>
          <ul>
            <Link to="/netflix">
              <li>Netflix</li>
            </Link>
            <Link to="/sports">
              <li>Sports</li>
            </Link>
            <Link to="/television">
              <li>Television</li>
            </Link>
            <Link to="/films">
              <li>Films</li>
            </Link>
            <Link to="/gaming">
              <li>Gaming</li>
            </Link>
          </ul>
        </li>
        <li>
          <a className="one">
            <div>Social</div>
            {/* <div className="one_icon"> */}
            <ArrowDropDownIcon className="arrow"></ArrowDropDownIcon>
            {/* </div> */}
          </a>
          <ul className="subbbb">
            <Link to="/youtube">
              <li>Youtube</li>
            </Link>
            <Link to="Instagram">
              <li>Instagram</li>
            </Link>
            {/* <Link to="/whatsapp">
              <li>Whatsapp</li>
            </Link>
            <Link to="/snapchat">
              <li>Snapchat</li>
            </Link>
            <Link to="/telegram">
              <li>Telegram</li>
            </Link> */}
            <Link to="/twitter">
              <li>Twitter</li>
            </Link>
          </ul>
        </li>
        <li>
          <a className="one">
            <div>More</div>
            {/* <div className="one_icon"> */}
            <ArrowDropDownIcon className="arrow"></ArrowDropDownIcon>
            {/* </div> */}
          </a>
          <ul>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
