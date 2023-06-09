import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../styles/footer.css";

const Footer = () => {

  return (
    <footer>
      <div className="contenedor-footer">
        <div className="section-one">
          <img src={logo} alt="img" />
          <h3>Pages</h3>
          <br />
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
              <Link to={""}>Our App</Link>
              <Link to={"/categories"}>Courses</Link>
              <Link to={"/homeTeacher"}>Teach</Link>
            </li>
          </ul>
        </div>
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to={""}>Blogs</Link>
              <a href="/help">Support</a>
            </li>
          </ul>
        </div>
        <div className="privacity">
          <h3>Privacy</h3>
          <ul>
            <li>
              <Link to={""}>Conditions</Link>
              <Link to={""}>Privacy Policy</Link>
              <Link to={""}>Side Configuration</Link>
              <Link to={""}>Cookie map</Link>
            </li>
          </ul>
        </div>
        <div className="regist">
          <h3>Do you want to be the first?</h3>
          <p>Register and do not miss the news</p>
          <div className="inputs">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your name"
            />
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your email"
            />
          </div>
          <button type="button" className="btn btn-primary">
            Send Now
          </button>
        </div>
      </div>
      <a href="http://miamisignaturedesigns.com/" style={{color: '#A7A7A7', textDecoration: 'none'}}>Copyright © 2022 Developed by MSD Soft</a>
    </footer>
  );
};

export default Footer;
