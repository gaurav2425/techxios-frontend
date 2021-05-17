import "./App.css";
import "../src/components/BlogBanner";
import BlogBanner from "../src/components/BlogBanner";
import Navbar from "../src/components/Navbar";
import Nav from "../src/components/Nav";
import { Helmet } from "react-helmet";
import Terms from "../src/components/Terms";
import About from "../src/components/About";
import Articles from "../src/components/Articles";
import Article_large from "../src/components/Article_large";
import ArticleMedium from "./components/ArticleMedium";
import Footer from "./components/Footer";
import ShowMore from "./components/ShowMore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleDetail from "../src/components/ArticleDetail";
import ArticleForPage from "../src/components/ArticleForPage";
import requests from "./requests";
import Contact from "../src/components/Contact";
import { Link } from "react-router-dom";
import ScrollToTop from "../src/components/ScrollToTop";
import Privacy from "../src/components/Privacy";

function App() {
  return (
    <div className="App">
      <Router>
        <Helmet>
          <img typeof="icon" src="logo.png"></img>
          <title>Techxios</title>
        </Helmet>
        <ScrollToTop></ScrollToTop>
        <Switch>
          <Route path="/:name/:id" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
                <br></br>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              {/* <h3>Google Details</h3> */}
              <ArticleDetail></ArticleDetail>
            </div>
          </Route>

          <Route path="/:name/:id" exact>
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
            <div className="page_info">
              {/* <h3>Google Details</h3> */}
              <ArticleDetail></ArticleDetail>
            </div>
          </Route>

          <Route path="/help" exact>
            <h1>Help</h1>
          </Route>
          <Route path="/contact" exact>
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
            <Contact></Contact>
            {/* <h1>contact</h1> */}
          </Route>

          <Route path="/about" exact>
            <About></About>
          </Route>

          <Route path="/terms" exact>
            <Terms></Terms>
          </Route>
          <Route path="/privacy-policy" exact>
            <Privacy></Privacy>
          </Route>

          <Route path="/headphones" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
                <br></br>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Headphones</h3>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.HeadphonesList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/speakers" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
                <br></br>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Speakers</h3>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.SpeakersList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/cameras" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
                <br></br>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Cameras</h3>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.CamerasList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/laptops" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
                <br></br>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Laptops</h3>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.LaptopsList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/phones" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
                <br></br>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Phones</h3>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.PhonesList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/nasa" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Nasa</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.NasaList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/spaceX" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>SpaceX</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.Spacex}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/health" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Health</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.Health}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/environment" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Environment</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.Environment}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/energy" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Energy</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.Energy}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/space" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Space</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.fetchAmazonList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/gaming" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Gaming</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its as a video producer, the popular Prime
                service, as well as its own hardware, which includes the Amazon
                Kindle e-reader, Amazon Kindle Fire tablets, and Amazon Fire TV
                streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.fetchGamingList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/films" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Films - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Films</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.fetchFilmsList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/television" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Television - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Television</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.fetchTelevisionList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/sports" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Sports - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Sports</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.fetchSportsList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/netflix" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Netflix - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Netflix</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.fetchNetflixList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/twitter" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Twitter - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Twitter</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>

            <div style={{ color: "red" }}>
              <div className="page_body">
                <ArticleForPage
                  title="Google"
                  fetchUrl={requests.TwitterList}
                ></ArticleForPage>
              </div>
            </div>
          </Route>

          <Route path="/linkedin" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Linkedin - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>LinkedIn</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>

            <div style={{ color: "red" }}>
              <div className="page_body">
                <ArticleForPage
                  title="Google"
                  fetchUrl={requests.LinkedinList}
                ></ArticleForPage>
              </div>
            </div>
          </Route>

          <Route path="/whatsapp" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Whatsapp - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Whatsapp</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>

            <div style={{ color: "red" }}>
              <div className="page_body">
                <ArticleForPage
                  title="Google"
                  fetchUrl={requests.fetchGoogleList}
                ></ArticleForPage>
              </div>
            </div>
          </Route>

          <Route path="/instagram" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Instagram - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Instagram</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>

            <div style={{ color: "red" }}>
              <div className="page_body">
                <ArticleForPage
                  title="Google"
                  fetchUrl={requests.InstagramList}
                ></ArticleForPage>
              </div>
            </div>
          </Route>

          <Route path="/youtube" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Youtube - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Youtube</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>

            <div style={{ color: "red" }}>
              <div className="page_body">
                <ArticleForPage
                  title="Google"
                  fetchUrl={requests.YoutubeList}
                ></ArticleForPage>
              </div>
            </div>
          </Route>

          <Route path="/privacy" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Privacy - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Privacy</h3>
              <h5>
                Data privacy is challenging since it attempts to use data while
                protecting an individual's privacy preferences and personally
                identifiable information.The fields of computer security, data
                security, and information security all design and use software,
                hardware, and human resources to address this issue.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.fetchPrivacyList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/facebook" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Facebook - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Facebook</h3>
              <h5>
                Facebook is an American online social media and social
                networking service based in Menlo Park, California, and a
                flagship service of the namesake company Facebook, Inc. It was
                founded by Mark Zuckerberg, along with fellow Harvard College
                students and roommates Eduardo Saverin, Andrew McCollum, Dustin
                Moskovitz, and Chris Hughes
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.fetchFacebookList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/apple" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Apple - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Apple</h3>
              <h5>
                Apple is an American multinational technology company
                headquartered in Cupertino, California, that designs, develops,
                and sells consumer electronics, computer software, and online
                services. It is considered one of the Big Five companies in the
                U.S. information technology industry, along with Amazon, Google,
                Microsoft, and Facebook.It is one of the most popular smartphone
                and tablet companies in the world.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.fetchAppleList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/tesla" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Tesla - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Tesla</h3>
              <h5>
                Tesla is an American electric vehicle and clean energy company
                based in Palo Alto, California. Tesla's current products include
                electric cars, battery energy storage from home to grid-scale,
                solar panels and solar roof tiles, as well as other related
                products and services. Tesla is ranked as the world's
                best-selling plug-in and battery electric passenger car
                manufacturer
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Tesla"
                fetchUrl={requests.fetchTeslaList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/cybersecurity" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Cybersecurity - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Cybersecurity</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.fetchCyberSecurityList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/microsoft" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Microsoft - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Microsoft</h3>
              <h5>
                Microsoft Corporation is an American multinational technology
                company with headquarters in Redmond, Washington. It develops,
                manufactures, licenses, supports, and sells computer software,
                consumer electronics, personal computers, and related services.
                Its best known software products are the Microsoft Windows line
                of operating systems, the Microsoft Office suite, and the
                Internet Explorer and Edge web browsers.
              </h5>
            </div>

            <div className="page_body">
              <ArticleForPage
                title="Microsoft"
                fetchUrl={requests.fetchMicrosoftList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/google" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>

            <Helmet>
              <title>Google - Techxios</title>
            </Helmet>

            <div className="page_info">
              <h3>Google</h3>
              <h5>
                Google is an American multinational technology company that
                specializes in Internet-related services and products, which
                include online advertising technologies, a search engine, cloud
                computing, software, and hardware. It is considered one of the
                five Big Tech companies in the world.
              </h5>
            </div>

            <div style={{ color: "red" }}>
              <div className="page_body">
                <ArticleForPage
                  title="Google"
                  fetchUrl={requests.fetchGoogleList}
                ></ArticleForPage>
              </div>
            </div>
          </Route>
          <Route path="/amazon" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>
              <Helmet>
                <title>Amazon - Techxios</title>
              </Helmet>
              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Amazon</h3>
              <h5>
                Once a modest online seller of books, Amazon is now one of the
                largest companies in the world, and its CEO, Jeff Bezos, is the
                world’s most wealthy person. We track developments, both of
                Bezos and Amazon, its growth as a video producer, the popular
                Prime service, as well as its own hardware, which includes the
                Amazon Kindle e-reader, Amazon Kindle Fire tablets, and Amazon
                Fire TV streaming boxes.
              </h5>
            </div>
            <div className="page_body">
              <ArticleForPage
                title="Amazon"
                fetchUrl={requests.fetchAmazonList}
              ></ArticleForPage>
            </div>
          </Route>

          <Route path="/archives" exact>
            <div style={{ color: "white", background: "grey" }}>
              <div className="navbar2">
                <Nav></Nav>
              </div>

              <div className="navbar1">
                <Navbar></Navbar>
              </div>
            </div>
            <div className="page_info">
              <h3>Archives</h3>
            </div>

            <div className="archives_body">
              <div className="archives_body_card">
                <ArticleForPage
                  className="archives_article"
                  title="Microsoft"
                  fetchUrl={requests.TrendingList}
                ></ArticleForPage>
              </div>
            </div>
          </Route>

          <Route path="/">
            <div className="blog_banner">
              <BlogBanner></BlogBanner>
            </div>
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

            <div className="blog_body_main">
              <div className="blog_body">
                <div className="blog_body_articles">
                  <div className="articles_main">
                    <div className="articles_left">
                      <div
                        className="small_articles"
                        style={{
                          background: "black",
                          objectFit: "cover",
                        }}
                      >
                        <Articles fetchUrl={requests.TrendingList}></Articles>
                      </div>
                    </div>

                    <div className="articles_middle">
                      <Article_large
                        fetchUrl={requests.HotList}
                      ></Article_large>
                    </div>
                  </div>

                  <div className="articles_right">
                    {/* <ArticleMedium fetchUrl={requests.NewList}></ArticleMedium> */}

                    <ArticleMedium fetchUrl={requests.NewList}></ArticleMedium>
                  </div>
                </div>
              </div>
            </div>

            <div className="showmore_container">
              <Link to="/archives" style={{ textDecoration: "none" }}>
                <ShowMore></ShowMore>
              </Link>
            </div>
          </Route>
        </Switch>
        <div className="footer_main">
          <div className="footer_logo">
            <h1>Techxios</h1>
          </div>
          <div>
            <Footer></Footer>
          </div>
          <div className="copyright">
            <h3>© 2021 Techxios | All Rights Reserved</h3>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
