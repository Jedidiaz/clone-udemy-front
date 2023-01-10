//react library
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//componets
import logo from "../../assets/logo.png";
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
            <img src={logo} alt="img"/>
          </Link>
        </div>
        <div className="navigator">
          <ul>
            <li>
              <Link to={""}> What we do </Link>
              <Link to={""}> What we do </Link>
              <Link to={""}> Plans </Link>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <div className="link">
            <Link to={"/loginB"}> Sign Up </Link>
          </div>
          <button className="btn btn-primary" onClick={() => redirect(1)}>
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
  );
};

export default HeaderBusiness;

//rafce
