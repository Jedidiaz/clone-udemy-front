import React, { Component } from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";
//import images
import home1 from "../assets/Homes1.png";
import home2 from "../assets/Group 1HomeS2.png";
import home41 from "../assets/Home4-1.png";
import home42 from "../assets/Home4-2.svg";
import icon1 from "../assets//1a.svg";
import icon2 from "../assets/2a.svg";
import icon3 from "../assets/3a.svg";
import icon4 from "../assets/4a.svg";
import HomeSse from "../assets/HomeSse.svg";
import HomeSse2 from "../assets/HomesSse2.svg";
import comillas from "../assets/comillasHome.svg";
import google from "../assets/google-play.png";
import circle from "../assets/circle.svg";
import circleCard from "../assets/circleCard.svg";
import puntos from "../assets/puntos.svg";
import puntosCard from "../assets/puntosCardHome.svg";

import Imagetest1 from '../assets/Imagetest1.svg'
import HomestProfile from '../assets/HometestProfile.svg'

import bgHome from '../assets/bghome.png'

import { Link } from "react-router-dom";
import "../styles/home.css";

export default class home extends Component {
  render() {
    let cards = [];
    for (let i = 0; i < 6; i++) {
      cards.push({
        image: Imagetest1,
        title: "Machine Learning and Data Science with Python",
        imageP: HomestProfile,
        name: "Ana Maria Diaz",
        role: "Engineer",
        clases: 12,
        folowers: 865562,
        price: "60.99",
      });
    }
    console.log(cards);
    return (
      <>
      <Header />
        <div className="contenedor-home">
          <section className="section-home-one">
            <div className="home-section-1-pesent">
              <img src={home1} />
              <div className="buttons-section-home-pesent">
                <button type="button" className="btn btn-primary">
                  Read More
                </button>
                <button type="button" className="btn btn-primary">
                  Start Today
                </button>
              </div>
            </div>
          </section>
          <section className="section-home-two">
            <div className="image-home">
              <img src={home2} />
            </div>
            <div className="description-home-two">
              <h5>ABOUT US</h5>
              <h1>Lest talk about the course and certificates</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
          </section>
          <section className="section-home-three">
            <h1>Explore All Courses</h1>
            <ul>
              <li>
                <Link to={""}>All</Link>
                <Link to={""}>Design</Link>
                <Link to={""}>Technology</Link>
                <Link to={""}>Video</Link>
              </li>
            </ul>
            <div className="card-contenedor-home">
              {cards?.map((el) => (
                <article className="card-Home">
                  <img src={el.image} className="image-card-home"/>
                    <h4 key="{el.title}">{el.title}</h4>
                  <div className="profile-hoe-card">
                    <img src={el.imageP} alt="" />
                    <div>
                      <h5 key="{el.name}">{el.name}</h5>
                      <p key="{el.role}">{el.role}</p>
                    </div>
                  </div>
                    <div className="info-card-home">
                      <p key="{el.clases}">
                        <i className="bi bi-folder2-open"></i> {el.clases}
                        Clases
                      </p>
                      <p key="{el.folowers}">
                        <i className="bi bi-person"></i> {el.folowers}
                      </p>
                      <p>
                        <i className="bi bi-star"></i> 5.0
                      </p>
                    </div>
                    <div className="footer-card-home">
                      <button type="button" className="btn btn-ptimary">
                        Buy Now
                      </button>
                      <span key="{el.price}">${el.price}USD</span>
                    </div>
                </article>
              ))}
            </div>
          </section>
          <section className="section-home-four">
          <img src={circle} className="circleHome" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#F1F1F1"
                fillOpacity="1"
                d="M0,64L120,58.7C240,53,480,43,720,53.3C960,64,1200,96,1320,112L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
            <div className="content-section-four" >
              <div className="content-wave-home">
                <img src={home41} alt="" />
                <div>
                  <h3>Teach today</h3>
                  <p>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in <br />
                    <br /> eprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium, totam
                  </p>
                  <button type="button" className="btn btn-primary">
                    Know More
                  </button>
                </div>
              </div>
              <div className="content-wave-home">
                <div>
                  <h3>Explore new learning</h3>
                  <p>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in. <br />
                    <br /> reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam .
                  </p>
                  <button type="button" className="btn btn-primary">
                    Know More
                  </button>
                </div>
                <img src={home42} alt="" />
              </div>
            </div>
            <svg
              width="100%"
              height="100%"
              id="svg"
              viewBox="0 0 1440 600"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-300 ease-in-out delay-150"
            >
              <path
                d="M 0,600 C 0,600 0,300 0,300 C 130,304.1333333333333 260,308.2666666666667 423,328 C 586,347.7333333333333 782,383.06666666666666 957,381 C 1132,378.93333333333334 1286,339.4666666666667 1440,300 C 1440,300 1440,600 1440,600 Z"
                stroke="none"
                strokeWidth="0"
                fill="#f1f1f1"
                fillOpacity="1"
                className="transition-all duration-300 ease-in-out delay-150 path-0"
                transform="rotate(-180 720 300)"
              ></path>
            </svg>
          </section>
          <section className="content-section-five">
            <h1>Our services</h1>
            <div className="buttons-section-five">
              <button type="button" className="btn btn-primary">
                <img src={icon1} className="iconsHome" /> Special Planes
              </button>
              <button type="button" className="btn btn-primary">
                <img src={icon2} className="iconsHome" /> Conferences
              </button>
              <button type="button" className="btn btn-primary">
                <img src={icon3} className="iconsHome" /> Courses
              </button>
              <button type="button" className="btn btn-primary">
                <img src={icon4} className="iconsHome" /> Remote Friendly
              </button>
             
            </div>
          </section>
          <section className="content-section-six">
            <h1>From Our Comunity</h1>
            <div className="subcontent-section-six">
              <img src={HomeSse} alt="" />
              <img src={puntos} className="iconPuntosHome" />
              <div style={{ backgroundImage: comillas }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor in cididunt ut labore et dolore magna
                  aliqua. Quis ipsum suspendisse ultrices gravida.
                </p>
              </div>
              <img src={HomeSse2} alt="" />
              <img src={comillas} className="iconComillasHome" />
            </div>
          </section>
          <section className="content-section-seven">
            <div className="card-section-sev-home">
            <img src={circleCard} className="circleCard" />
            <img src={puntosCard} className="puntosCard" />
            <img src={puntosCard} className="puntosCard2" />
              <button type="button" className="btn btn-primary">
                Sign Up
              </button>
              <h1>Let’s Get Started</h1>
              <h2>Your Education</h2>
              <div className="card-buttons-home-section-sev">
                <button type="button" className="btn btn-primary">
                  Download Now! <p><img src={google} alt="" /> Google Play</p>
                </button>
                <button type="button" className="btn btn-primary">
                  Download Now! <p><i className="bi bi-apple"></i> App Store</p>
                </button>
              </div>
            </div>
          </section>
        </div>
      <Footer />  
      </>
    );
  }
}
