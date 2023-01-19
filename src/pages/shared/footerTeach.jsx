import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import '../../styles/footer.css'

const FooterStudent = () => {
  return (
    <>
      <footer style={{backgroundColor: '#F3B601'}}>
        <div className="contenedor-footer">
          <div className="section-one">
            <img src={logo} alt="img" />
            <h3 style={{color: '#fff'}}>Pages</h3>
            <br />
            <ul>
              <li>
              <Link to={'/'} style={{color: '#fff'}} >Home</Link>
              <Link to={''} style={{color: '#fff'}}>Our App</Link>
              <Link to={'/categories'} style={{color: '#fff'}}>Courses</Link>
              <Link to={'/homeTeacher'} style={{color: '#fff'}}>Teach</Link>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3 style={{color: '#fff'}}>Links</h3>
            <ul>
              <li>
                <Link to={""} style={{color: '#fff'}}>Blogs</Link>
                <a href="/help" style={{color: '#fff'}}>Support</a>
              </li>
            </ul>
          </div>
          <div className="privacity">
            <h3 style={{color: '#fff'}}>Conditions</h3>
            <ul>
              <li >
                <Link to={""} style={{color: '#fff'}}>Privacy Plicy</Link>
                <Link to={""} style={{color: '#fff'}}>Side Configuration</Link>
                <Link to={""} style={{color: '#fff'}}>Cookie map</Link>
              </li>
            </ul>
          </div>
          <div className="regist" >
            <h3 style={{color: '#fff'}}>Do you want to be the first?</h3>
            <p style={{color: '#fff'}}>Register and do not miss the news</p>
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
