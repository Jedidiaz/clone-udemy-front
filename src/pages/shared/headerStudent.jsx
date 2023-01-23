import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//componets
import logo from "../../assets/logo.svg";
import "../../styles/header.css";
import imageProfile from "../../assets/imageProfile.svg";
import headerImage from "../../assets/headerStudent.svg";
import cart from "../../assets/cart.svg";
import notification from "../../assets/notification.svg";
//bootstrap modules
import Offcanvas from "react-bootstrap/Offcanvas";
import { Form } from "react-bootstrap";
import { style } from "@mui/system/Stack/createStack";

const HeaderStudent = () => {
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
  //variables estilos
  const styleOverlay = {
    position: "fixed",
    display: "none",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: "100",
  };

  const styleNotifications = {
    width: "300px",
    height: "250px",
    backgroundColor: "#fff",
    position: "absolute",
    top: "calc(0% + 70px)",
    right: "calc(0% + 20px)",
    borderRadius: "20px",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const styleBack = {
    width: "100%",
    height: "100%",
  };

  const styleOptions = {
    width: "100%",
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    alignItems: "center",
  };
  const styleLabel = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      <div id="overlay" style={styleOverlay}>
        <div onClick={() => notificationHide()} style={styleBack}></div>
        <div className="notifications" style={styleNotifications}>
          <div className="buttons-select-notifications">
            <Form>
              <div className="mb-3" style={styleOptions}>
                <Form.Check
                  label={
                    <span style={styleLabel}>
                      Student<div className="barra"></div>
                    </span>
                  }
                  name="group11"
                  type="radio"
                  id="Student"
                  checked
                />
                <Form.Check
                  label={
                    <span>
                      Instructor<div className="barra"></div>
                    </span>
                  }
                  name="group11"
                  type="radio"
                  id="Instructor"
                />
              </div>
            </Form>
          </div>
          <div className="content-notifications">
            <p>not notifications</p>
          </div>
        </div>
      </div>
      <header id="header">
        <nav>
          <div className="logo-img">
            <Link to={"/"}>
              <img src={logo} alt="img" />
            </Link>
          </div>
          <div className="navigator">
            <span>
              <label htmlFor="search-header" style={{cursor: 'pointer'}} onClick={()=> history('/categories')} >Categories</label>
              <i className="bi bi-search"></i>
              <input type="text" className="form-control" />
            </span>
            <ul>
              <li>
                <Link to={"/conference"}> Conference </Link>
                <Link to={"/homeBusiness"}> Business </Link>
                <Link to={"/homeTeacher"}> Teach </Link>
              </li>
            </ul>
          </div>
          <div className="buttons-student">
            <span>
              <img src={headerImage} onClick={() => viewNotifications()}/>
            </span>
            <span>
              <Link to={"/cart"}>
                <img src={cart} />
              </Link>
            </span>
            <span onClick={() => viewNotifications()}>
              <img src={notification} />
            </span>
            <span onClick={()=> history('/profile')} style={{cursor: 'pointer'}}>
              <img src={imageProfile} />
            </span>
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
                      <Link to={"/conferences"}> Conference </Link>
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
                  <button
                    className="btn btn-primary"
                    onClick={() => redirect(1)}
                  >
                    Create Account
                  </button>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </nav>
      </header>
    </>
  );
  function viewNotifications() {
    document.getElementById("overlay").style.display = "block";
  }
  function notificationHide() {
    document.getElementById("overlay").style.display = "none";
  }
};

export default HeaderStudent;
