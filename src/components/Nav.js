import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import MovieIcon from "@material-ui/icons/Movie";
import "../css/Nav.css";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import SecurityIcon from "@material-ui/icons/Security";
import HttpsIcon from "@material-ui/icons/Https";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ClearIcon from "@material-ui/icons/Clear";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    left: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {},
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "black",
  },
  content: {
    flexGrow: 1,

    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const [showTech, setShowTech] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showEntertainment, setShowEntertainment] = useState(false);
  const [showScience, setShowScience] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ background: "black", height: "100%", overflowX: "hidden" }}>
      <div>
        <div
          className="nav_setting"
          style={{
            height: 65,
            background: "black",
            alignItems: "center",
            display: "flex",
            direction: "column",
            borderBottom: "rgb(20,20,20) 1px solid",
          }}
        >
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h3
                style={{
                  color: "white",
                  paddingLeft: 15,
                }}
              >
                TechXios
              </h3>
            </Link>
          </div>

          <div onClick={() => setMobileOpen(false)}>
            <IconButton>
              <ClearIcon
                style={{ color: "white", marginRight: 20 }}
              ></ClearIcon>
            </IconButton>
          </div>
        </div>
        <button
          onClick={() => setShowTech(!showTech)}
          style={{
            width: 250,
            border: "none",

            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid rgb(20,20,20)",

            alignItems: "center",
            background: "black",
            outline: "none",
          }}
        >
          <div
            style={{
              height: 50,
              background: "black",
              outline: "none",
              alignItems: "center",
              display: "flex",

              direction: "row",
            }}
          >
            <div>
              <h3
                style={{
                  textAlign: "start",
                  color: "white",
                  marginLeft: 15,
                }}
              >
                Tech
              </h3>
            </div>
          </div>
          <div>
            {showTech ? (
              <div>
                <ExpandMoreIcon
                  className="icon"
                  style={{ color: "red", marginRight: 30 }}
                ></ExpandMoreIcon>
              </div>
            ) : (
              <ExpandMoreIcon
                className="icon_rev"
                style={{ color: "white", marginRight: 30 }}
              ></ExpandMoreIcon>
            )}
          </div>
        </button>

        {showTech ? (
          <div>
            <List>
              <Link
                to="/amazon"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <img
                    src="http://pngimg.com/uploads/amazon/small/amazon_PNG23.png"
                    style={{ width: 25, height: 25 }}
                  ></img>
                  <ListItemText style={{ marginLeft: 25 }}>Amazon</ListItemText>
                </ListItem>
              </Link>

              <Link
                to="/microsoft"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <img
                    src="http://pngimg.com/uploads/microsoft/small/microsoft_PNG18.png"
                    style={{ width: 25, height: 25 }}
                  ></img>
                  <ListItemText style={{ marginLeft: 25 }}>
                    Microsoft
                  </ListItemText>
                </ListItem>
              </Link>

              <Link
                to="/tesla"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <img
                    src=" http://pngimg.com/uploads/tesla_logo/small/tesla_logo_PNG19.png"
                    style={{ width: 25, height: 25 }}
                  ></img>
                  <ListItemText style={{ marginLeft: 25 }}>Tesla</ListItemText>
                </ListItem>
              </Link>

              <Link
                to="/apple"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <img
                    src=" http://pngimg.com/uploads/apple_logo/small/apple_logo_PNG19695.png"
                    style={{ width: 25, height: 30 }}
                  ></img>
                  <ListItemText style={{ marginLeft: 25 }}>Apple</ListItemText>
                </ListItem>
              </Link>

              <Link
                to="/google"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <img
                    src=" http://pngimg.com/uploads/google/small/google_PNG19630.png"
                    style={{ width: 25, height: 25 }}
                  ></img>
                  <ListItemText style={{ marginLeft: 25 }}>Google</ListItemText>
                </ListItem>
              </Link>

              <Link
                to="/facebook"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <img
                    src=" http://pngimg.com/uploads/facebook_logos/small/facebook_logos_PNG19751.png"
                    style={{ width: 35, height: 25, marginLeft: -5 }}
                  ></img>
                  <ListItemText style={{ marginLeft: 20 }}>
                    Facebook
                  </ListItemText>
                </ListItem>
              </Link>

              <Link
                to="/privacy"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <HttpsIcon></HttpsIcon>
                  <ListItemText style={{ marginLeft: 25 }}>
                    Privacy
                  </ListItemText>
                </ListItem>
              </Link>

              <Link
                to="/cybersecurity"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <SecurityIcon></SecurityIcon>
                  <ListItemText style={{ marginLeft: 25 }}>
                    CyberSecurity
                  </ListItemText>
                </ListItem>
              </Link>
            </List>
          </div>
        ) : null}

        <Divider style={{ color: "white" }} />
      </div>
      {/* 2 */}
      <div>
        <button
          onClick={() => setShowEntertainment(!showEntertainment)}
          style={{
            width: 250,
            border: "none",
            justifyContent: "space-between",
            borderBottom: "1px solid rgb(20,20,20)",
            display: "flex",
            alignItems: "center",
            background: "black",
            outline: "none",
          }}
        >
          <div
            style={{
              height: 50,
              background: "black",
              outline: "none",
              alignItems: "center",
              display: "flex",
              direction: "column",
            }}
          >
            <h3 style={{ textAlign: "start", color: "white", marginLeft: 15 }}>
              Entertainment
            </h3>
          </div>
          <div>
            {showEntertainment ? (
              <div>
                <ExpandMoreIcon
                  className="icon"
                  style={{ color: "red", marginRight: 30 }}
                ></ExpandMoreIcon>
              </div>
            ) : (
              <ExpandMoreIcon
                className="icon_rev"
                style={{ color: "white", marginRight: 30 }}
              ></ExpandMoreIcon>
            )}
          </div>
        </button>

        {showEntertainment ? (
          <div>
            <List>
              <Link
                to="/netflix"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <img
                    src="http://pngimg.com/uploads/netflix/small/netflix_PNG15.png"
                    style={{ width: 15, height: 25, marginLeft: 5 }}
                  ></img>
                  <ListItemText style={{ marginLeft: 30 }}>
                    <h4 style={{ fontWeight: 300 }}> Netflix</h4>
                  </ListItemText>
                </ListItem>
              </Link>

              <Link
                to="/sports"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <SportsBasketballIcon
                    style={{ color: "ff4500" }}
                  ></SportsBasketballIcon>
                  <ListItemText style={{ marginLeft: 25 }}>
                    <h4 style={{ fontWeight: 300 }}>Sports</h4>
                  </ListItemText>
                </ListItem>
              </Link>

              <Link
                to="/television"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <LiveTvIcon style={{ color: "white" }}></LiveTvIcon>
                  {/* <img
                    src=" http://pngimg.com/uploads/apple_logo/small/apple_logo_PNG19695.png"
                    style={{ width: 25, height: 30 }}
                  ></img> */}
                  <ListItemText style={{ marginLeft: 25 }}>
                    Television
                  </ListItemText>
                </ListItem>
              </Link>

              <Link
                to="/films"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <MovieIcon style={{ color: "red" }}></MovieIcon>
                  <ListItemText style={{ marginLeft: 27 }}>Films</ListItemText>
                </ListItem>
              </Link>

              <Link
                to="/gaming"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem button key={"Apple"}>
                  <SportsEsportsIcon
                    style={{ color: "greenyellow" }}
                  ></SportsEsportsIcon>
                  <ListItemText style={{ marginLeft: 25 }}>Gaming</ListItemText>
                </ListItem>
              </Link>
            </List>
          </div>
        ) : null}

        <Divider style={{ color: "white" }} />
      </div>

      <div>
        {/* <div className={classes.toolbar}>
          <h3>Tech Robot</h3>
        </div> */}
        <button
          onClick={() => setShowReview(!showReview)}
          style={{
            width: 250,
            border: "none",
            borderBottom: "1px solid rgb(20,20,20)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "black",
            outline: "none",
          }}
        >
          <div
            style={{
              height: 50,
              background: "black",
              alignItems: "center",
              display: "flex",
              direction: "column",
            }}
          >
            <h3 style={{ textAlign: "start", color: "white", marginLeft: 15 }}>
              Review
            </h3>
          </div>
          <div>
            {showReview ? (
              <div>
                <ExpandMoreIcon
                  className="icon"
                  style={{ color: "red", marginRight: 30 }}
                ></ExpandMoreIcon>
              </div>
            ) : (
              <ExpandMoreIcon
                className="icon_rev"
                style={{ color: "white", marginRight: 30 }}
              ></ExpandMoreIcon>
            )}
          </div>
        </button>

        {showReview ? (
          <List>
            <Link
              to="/phones"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <ListItemText style={{ marginLeft: 15 }}>Phones</ListItemText>
              </ListItem>
            </Link>

            <Link
              to="/laptops"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <ListItemText style={{ marginLeft: 15 }}>Laptops</ListItemText>
              </ListItem>
            </Link>

            <Link
              to="/cameras"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <ListItemText style={{ marginLeft: 15 }}>Cameras</ListItemText>
              </ListItem>
            </Link>

            <Link
              to="/speakers"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <ListItemText style={{ marginLeft: 15 }}>Speakers</ListItemText>
              </ListItem>
            </Link>

            <Link
              to="/headphones"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <ListItemText style={{ marginLeft: 15 }}>
                  Headphones
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        ) : null}

        <Divider style={{ color: "white" }} />
      </div>

      {/* Science */}

      <div>
        <button
          onClick={() => setShowScience(!showScience)}
          style={{
            width: 250,
            border: "none",
            borderBottom: "1px solid rgb(20,20,20)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "black",
            outline: "none",
          }}
        >
          <div
            style={{
              height: 50,
              background: "black",
              alignItems: "center",
              display: "flex",
              direction: "column",
            }}
          >
            <h3 style={{ textAlign: "start", color: "white", marginLeft: 15 }}>
              Science
            </h3>
          </div>
          <div>
            {showScience ? (
              <div>
                <ExpandMoreIcon
                  className="icon"
                  style={{ color: "red", marginRight: 30 }}
                ></ExpandMoreIcon>
              </div>
            ) : (
              <ExpandMoreIcon
                className="icon_rev"
                style={{ color: "white", marginRight: 30 }}
              ></ExpandMoreIcon>
            )}
          </div>
        </button>

        {showScience ? (
          <List>
            <Link to="/nasa" style={{ color: "white", textDecoration: "none" }}>
              <ListItem button key={"Apple"}>
                {/* <img
                  src="http://pngimg.com/uploads/amazon/small/amazon_PNG23.png"
                  style={{ width: 25, height: 25 }}
                ></img> */}
                <ListItemText style={{ marginLeft: 15 }}>Nasa</ListItemText>
              </ListItem>
            </Link>

            <Link
              to="/spaceX"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <ListItemText style={{ marginLeft: 15 }}>SpaceX</ListItemText>
              </ListItem>
            </Link>

            <Link
              to="/health"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                {/* <img
                  src="http://pngimg.com/uploads/camera_lens/small/camera_lens_PNG95.png"
                  style={{ width: 25, height: 25 }}
                ></img> */}
                <ListItemText style={{ marginLeft: 15 }}>Health</ListItemText>
              </ListItem>
            </Link>

            <Link
              to="/energy"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                {/* <img
                  src="http://pngimg.com/uploads/audio_speakers/small/audio_speakers_PNG11165.png"
                  style={{ width: 25, height: 30 }}
                ></img> */}
                <ListItemText style={{ marginLeft: 15 }}>Energy</ListItemText>
              </ListItem>
            </Link>

            <Link
              to="/environment"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                {/* <img
                  src="http://pngimg.com/uploads/headphones/small/headphones_PNG7656.png"
                  style={{ width: 25, height: 25 }}
                ></img> */}
                <ListItemText style={{ marginLeft: 15 }}>
                  Environment
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        ) : null}

        <Divider style={{ color: "white" }} />
      </div>

      {/* Social */}

      <button
        onClick={() => setShowSocial(!showSocial)}
        style={{
          width: 250,
          border: "none",

          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid rgb(20,20,20)",

          alignItems: "center",
          background: "black",
          outline: "none",
        }}
      >
        <div
          style={{
            height: 50,
            background: "black",
            outline: "none",
            alignItems: "center",
            display: "flex",

            direction: "row",
          }}
        >
          <div>
            <h3
              style={{
                textAlign: "start",
                color: "white",
                marginLeft: 15,
              }}
            >
              Social
            </h3>
          </div>
        </div>
        <div>
          {showSocial ? (
            <div>
              <ExpandMoreIcon
                className="icon"
                style={{ color: "red", marginRight: 30 }}
              ></ExpandMoreIcon>
            </div>
          ) : (
            <ExpandMoreIcon
              className="icon_rev"
              style={{ color: "white", marginRight: 30 }}
            ></ExpandMoreIcon>
          )}
        </div>
      </button>

      {showSocial ? (
        <div>
          <List>
            <Link
              to="/youtube"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <YouTubeIcon
                  style={{
                    color: "red",
                    background: "white",
                    borderRadius: "50%",
                  }}
                ></YouTubeIcon>
                <ListItemText style={{ marginLeft: 25, fontSize: 30 }}>
                  Youtube
                </ListItemText>
              </ListItem>
            </Link>

            <Link
              to="/instagram"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <InstagramIcon style={{ color: "#fbad50" }}></InstagramIcon>
                <ListItemText style={{ marginLeft: 25 }}>
                  Instagram
                </ListItemText>
              </ListItem>
            </Link>

            {/* <Link
              to="/whatsapp"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <img
                  src="http://pngimg.com/uploads/whatsapp/small/whatsapp_PNG95167.png"
                  style={{ width: 25, height: 25 }}
                ></img>{" "}
                <ListItemText style={{ marginLeft: 25 }}>Whatsapp</ListItemText>
              </ListItem>
            </Link> */}

            <Link
              to="/linkedin"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <LinkedInIcon style={{ color: "#0077B5" }}></LinkedInIcon>
                <ListItemText style={{ marginLeft: 25 }}>LinkedIn</ListItemText>
              </ListItem>
            </Link>

            <Link
              to="/twitter"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <TwitterIcon style={{ color: "#00acee" }}></TwitterIcon>
                <ListItemText style={{ marginLeft: 25 }}>Twitter</ListItemText>
              </ListItem>
            </Link>
          </List>
        </div>
      ) : null}

      <Divider style={{ color: "white" }} />

      {/* More */}

      <button
        onClick={() => setShowMore(!showMore)}
        style={{
          width: 250,
          border: "none",

          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid rgb(20,20,20)",

          alignItems: "center",
          background: "black",
          outline: "none",
        }}
      >
        <div
          style={{
            height: 50,
            background: "black",
            outline: "none",
            alignItems: "center",
            display: "flex",

            direction: "row",
          }}
        >
          <div>
            <h3
              style={{
                textAlign: "start",
                color: "white",
                marginLeft: 15,
              }}
            >
              More
            </h3>
          </div>
        </div>
        <div>
          {showMore ? (
            <div>
              <ExpandMoreIcon
                className="icon"
                style={{ color: "red", marginRight: 30 }}
              ></ExpandMoreIcon>
            </div>
          ) : (
            <ExpandMoreIcon
              className="icon_rev"
              style={{ color: "white", marginRight: 30 }}
            ></ExpandMoreIcon>
          )}
        </div>
      </button>

      {showMore ? (
        <div>
          <List>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <InfoIcon></InfoIcon>
                <ListItemText style={{ marginLeft: 25, fontSize: 30 }}>
                  About
                </ListItemText>
              </ListItem>
            </Link>

            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              <ListItem button key={"Apple"}>
                <ContactMailIcon></ContactMailIcon>
                <ListItemText style={{ marginLeft: 25 }}>Contact</ListItemText>
              </ListItem>
            </Link>
          </List>
        </div>
      ) : null}

      <Divider style={{ color: "white" }} />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        // position="fixed"

        className={classes.appBar}
        style={{
          background: "black",
          height: 43,
          justifyContent: "center",
          // position: "unset",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <div className="nav_setting">
              <Link to="/" style={{ color: "white" }}>
                <h4>TechXios</h4>
              </Link>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        {/* <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden> */}
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
