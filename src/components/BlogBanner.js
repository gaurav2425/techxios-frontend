import React from "react";
import "../css/BlogBanner.css";
function BlogBanner() {
  const currDate = new Date().getDate();
  const currMonth = new Date().getMonth();
  const currDay = new Date().getDay();
  const currYear = new Date().getFullYear();
  const Day = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
  ];
  const Months = [
    "jan",
    "feb",
    "March",
    "april",
    "may",
    "jun",
    "jul",
    "aug",
    "sept",
    "oct",
    "nov",
    "dec",
  ];
  return (
    <div className="blog_banner">
      {/* <img src="https://wallpapercave.com/wp/wp6252097.jpg"></img> */}

      <div>
        <h1>Techxios</h1>
      </div>
      <div className="date_time">
        <h4>
          {Day[currDay]}, {Months[currMonth]} {currDate}, {currYear} | DIAMOND
          SKULLS
        </h4>
      </div>
    </div>
  );
}

export default BlogBanner;
