import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//componets
import logo from "../../assets/logoWhite.svg";
import heart from '../../assets/heart.svg'
import leave from '../../assets/leave.svg'
import player from '../../assets/playerHeader.svg'

import "../../styles/header.css";
import imageProfile from '../../assets/imageProfile.svg'
import headerImage from '../../assets/headerStudent.svg'
import cart from '../../assets/cart.svg'
import notification from '../../assets/notification.svg'
//bootstrap modules
import Offcanvas from "react-bootstrap/Offcanvas";

const HeaderPlayer = () => {

//variables navigates
  const history = useNavigate();
  const redirect = (uno) => {
    switch (uno) {
      case 1:
        history("/register");
        break;
      case 2:
        history("/login");
        break;
    }
  };
  //variables sideBar
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header style={{backgroundColor: '#2F2F2F'}}>
      <nav>
        <div className="logo-img">
          <img src={logo} alt="img" />
        </div>
        <div className="navigator">
            <h2 style={{color: '#fff'}}>Machine Learning and Data Science with Python</h2>
        </div>
        <div className="buttons-student">
          <span style={{width: '55px'}}><img src={player} /></span>
          <span><img src={heart} /></span>
          <span><img src={leave} /></span>
          <span><img src={imageProfile} /></span>
        </div>
        {/* sidebar ** -------------------- ** -------------------- ** -------------- */}
        <div className="responsive-menu">
          <button className="btn btn-primary" onClick={handleShow}>
            <i className="bi bi-list"></i>
          </button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="navigator-menu">
                <ul>
                  <li>
                    <Link to={""}> Conference </Link>
                    <Link to={""}> Courses </Link>
                    <Link to={""}> Business </Link>
                    <Link to={""}> Teach </Link>
                  </li>
                </ul>
              </div>
              <div className="buttons-menu">
                <div className="link"> 
                  <Link to={"/login"}> Sign Up </Link>
                </div>
                <button className="btn btn-primary" onClick={() => redirect(1)}>
                  Create Account
                </button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </header>
  )
}

export default HeaderPlayer