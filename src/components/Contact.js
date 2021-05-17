import React, { Component } from "react";
import axios from "axios";
import "../css/Contact.css";

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      message: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://www.techxios.tk/api/contact/contact-create/", this.state)
      .then((response) => {
        console.log(response);
        alert("You Successfully Submitted Your Response");
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      fullname: "",
      email: "",
      message: "",
    });
  };

  render() {
    const { email, fullname, message } = this.state;
    return (
      <div className="contact_main">
        <div className="contact_header">
          <br></br>

          <h1>Contact Techxios</h1>
          <br></br>
        </div>
        <form onSubmit={this.submitHandler}>
          <div className="form_main">
            <div className="form_sub">
              <h1>TELL US ABOUT YOU:</h1>
              <br></br>
              <h3>
                Name<span style={{ color: "rgb(219, 6, 130)" }}>*</span>:
              </h3>
              <input
                type="text"
                //   placeholder="Enter Your Full Name"
                name="fullname"
                value={fullname}
                onChange={this.changeHandler}
                required
              ></input>
            </div>
            <br></br>
            <div>
              <h3>
                Email<span style={{ color: "rgb(219, 6, 130)" }}>*</span>:
              </h3>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.changeHandler}
                required
              ></input>
            </div>
            <br></br>

            <div className="message">
              <h3>
                Message<span style={{ color: "rgb(219, 6, 130)" }}>*</span>:
              </h3>
              <textarea
                type="text"
                name="message"
                value={message}
                rows="8"
                onChange={this.changeHandler}
                required
              ></textarea>
            </div>
            <br></br>
            <div>
              <button type="submit" className="btn_contact">
                <h3>Submit</h3>
              </button>
              <h3>
                (<span style={{ color: "rgb(219, 6, 130)" }}>*</span>required)
              </h3>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
