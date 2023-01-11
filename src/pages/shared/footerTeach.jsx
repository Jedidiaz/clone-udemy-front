import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/footer.css'

const FooterStudent = () => {
  return (
    <>
      <footer style={{backgroundColor: '#F3B601'}}>
        <div className="contenedor-footer">
          <div className="section-one">
            <img src={logo} alt="img" />
            <h3>Pages</h3>
            <br />
            <ul>
              <li>
              <Link to={'/'} >Home</Link>
              <Link to={''} >Our App</Link>
              <Link to={'/categories'} >Courses</Link>
              <Link to={'/teacher'} >Teach</Link>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <Link to={""}>Blogs</Link>
                <Link to={""}>Support</Link>
              </li>
            </ul>
          </div>
          <div className="privacity">
            <h3>Conditions</h3>
            <ul>
              <li>
                <Link to={""}>Privacy Plicy</Link>
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
        <a href="http://miamisignaturedesigns.com/" style={{color: '#fff', textDecoration: 'none'}}>Copyright © 2022 Developed by MSD Soft</a>
      </footer>
    </>
  );
};

export default FooterStudent;
