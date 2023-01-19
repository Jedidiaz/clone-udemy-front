//react library
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//componets
import logo from "../../assets/logo.svg";
import "../../styles/header.css";
//bootstrap modules
import Offcanvas from "react-bootstrap/Offcanvas";

const HeaderBusiness = () => {
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
    <header>
      <nav>
        <div className="logo-img">
          <Link to={"/"}>
            <img src={logo} alt="img" />
          </Link>
        </div>
        <div className="navigator">
          <ul>
            <li>
              <a href="#ww"> What we do </a>
              <a href="#hw"> How we do it </a>
              <a href="#plans"> Plans </a>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <div className="link">
            <Link to={"/loginB"}> Sign Up </Link>
          </div>
          <button className="btn btn-primary" style={{borderRadius: '50px'}} onClick={() => redirect(1)}>
            Create Account
          </button>
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
                    <Link to={"/conference"}>Conference</Link>
                    <Link to={"/categories"}>Courses</Link>
                    <Link to={"/homeBusiness"}>Business</Link>
                    <Link to={"/teacher"}>Teach</Link>
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
  );
};

export default HeaderBusiness;

//rafce
