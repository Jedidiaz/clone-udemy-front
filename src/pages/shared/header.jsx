//react library
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//componets
import logo from "../../assets/logo.svg";
import "../../styles/header.css";
//bootstrap modules
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
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

  //var styles
  const styles = {
    style: {
      fontWeight: "500",
      fontSize: "18px",
    },
  };
  return (
    <header>
      <nav className="container">
        <div className="logo-img">
            <img src={logo} alt="img" onClick={()=> history('/')}/>
        </div>
        <div className="navigator">
          <ul>
            <li>
              <Link to={"/conference"} style={styles.style}>
                Conference
              </Link>
              <Link to={"/categories"} style={styles.style}>
                Courses
              </Link>
              <Link to={"/homeBusiness"} style={styles.style}>
                Business
              </Link>
              <Link to={"/homeTeacher"} style={styles.style}>
                Teach
              </Link>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <div className="link">
            <Link to={"/login"}> Sign Up </Link>
          </div>
          <button
            className="btn btn-primary"
            style={{
              borderRadius: "50px",
              padding: "3px 30px",
              fontWeight: "500",
            }}
            onClick={() => redirect(1)}
          >
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
                    <Link to={"/conference"}> Conference </Link>
                    <Link to={"/categories"}> Courses </Link>
                    <Link to={"/homeBusiness"}> Business </Link>
                    <Link to={"/homeTeacher"}> Teach </Link>
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

export default Header;

//rafce
