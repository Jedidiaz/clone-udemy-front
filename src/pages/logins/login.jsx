import React from "react";
import Header from "../shared/header";
import Footer from "../shared/footer";

import "../../styles/login.css";
import { Link } from "react-router-dom";
import backGround from "../../assets/login.png";
import login from "../../assets/login1.png";
import google from "../../assets/google.png";
import Carousel from "react-bootstrap/Carousel";

const Login = () => {
  const carousel = [backGround, backGround, backGround];
  return (
    <>
    <Header />
      <div className="contenedor">
        <div className="card-login">
          <div className="buttons-log">
            <button className="btn btn-primary" type="button">
              <img src={google} /> Continue with google
            </button>
            <button className="btn btn-primary" type="button">
              <i className="bi bi-apple"></i> Continue with Apple{" "}
            </button>
            <button className="btn btn-primary" type="button">
              <i className="bi bi-facebook"></i> Continue with facebook
            </button>
          </div>
          <div className="separador">
            <div></div>
            or
            <div></div>
          </div>
          <div className="formulario">
            <div>
              <i className="bi bi-envelope"></i>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="email"
              />
            </div>
            <div>
              <i className="bi bi-key"></i>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="password"
              />
            </div>
            <div className="buttons-login">
              <button type="button" className="btn btn-primary">
                Login
              </button>
              <p>
                First time here? <Link to={"/register"}>sign up</Link>
              </p>
              <button type="button" className="btn btn-primary">
                Login with your organization
              </button>
            </div>
          </div>
        </div>
        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={login} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={login} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={login} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <img src={backGround} className="ImageBackRegistros"/>
      </div>
    <Footer />  
    </>
  );
};

export default Login;
