import React, { useEffect, useMemo } from "react";
import { Form, Table } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "../../styles/businessProtal.css";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Footers from "../shared/footerBusiness";

import businessLogo from "../../assets/businessLogo.svg";
import imageProfile from "../../assets/imageProfile.svg";

import Imagetest1 from "../../assets/Imagetest1.svg";
import HomestProfile from "../../assets/HometestProfile.svg";

import carouselImage from "../../assets/CarouselImagegomeS.svg";
//card
import cardimage1 from "../../assets/cardBusinessimage1.svg";
import cardimage2 from "../../assets/cardBusinessimage2.svg";




import graph from "../../assets/graphBusiness.svg";


import faq from "../../assets/business-faq.svg";
import { useNavigate } from "react-router";

ChartJS.register(ArcElement, Tooltip, Legend);

const BusinessPortal = () => {
  useEffect(() => {
    viewDash();
  });

  let tableDash = [];
  for (let i = 0; i < 10; i++) {
    tableDash.push({
      name: "Luis Gomez",
      rate: "15",
      activity_rate: 2,
    });
  }

  let tableReport = [];
  for (let i = 0; i < 10; i++) {
    tableReport.push({
      date: "09/01/2022",
      courses: "Python Django...",
      activity_rate: 2,
    });
  }

  let tableHistory = [];
  for (let i = 0; i < 10; i++) {
    tableHistory.push({
      date: "sep-27-2022",
      description: "Membership plan",
      amount: "24.90",
    });
  }

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

  let carousel = [];

  for (let i = 0; i < 5; i++) {
    carousel.push(carouselImage);
  }

  const data = {
    labels: ["yes", "No"],
    datasets: [
      {
        label: "poll",
        data: [3, 6],
        backgroundColor: ["black", "red"],
        borderColor: ["black", "red"],
      },
    ],
  };

  const options = {};
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

  const styles = {
    styleDivIcon: {
      width: "100%",
      height: "50px",
      display: "flex",
    },
    styleInput: {
      border: "none",
      borderRadius: "50px",
      padding: "10px 15px",
      width: "100%",
      boxShadow: '0px 4px 11.83px rgba(0, 0, 0, 0.25)',
    },
    styleTextArea: {
      border: "none",
      borderRadius: "20px",
      padding: "10px 15px",
      width: "100%",
      boxShadow: '0px 4px 11.83px rgba(0, 0, 0, 0.25)',
    },
    styleButtonS5: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      border: "1px solid #545353",
      borderRadius: "20px",
      width: "200px",
      height: "300px",
      padding: "40px 50px",
      fontSize: "20px",
      color: "#B6B6B6",
      backgroundColor: "transparent",
      boxShadow: "0px 4px 11.83px rgba(0, 0, 0, 0.15)",
    },
  };

  const navigate = useNavigate();
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
      <div className="contenedor-business">
        <div className="bar-business">
          <div className="logo-business">
            <img src={businessLogo} />
          </div>
          <div className="buttons-bar-business">
            <Form>
              <div className="mb-3">
                <Form.Check
                  label={<i className="bi bi-pie-chart-fill"></i>}
                  name="group4"
                  type="radio"
                  id="dash"
                  onChange={() => viewDash()}
                  defaultChecked
                />
                <Form.Check
                  label={<i className="bi bi-file-earmark"></i>}
                  name="group4"
                  type="radio"
                  id="reports"
                  onChange={() => viewReport()}
                />
                <Form.Check
                  label={<i className="bi bi-journal-bookmark"></i>}
                  name="group4"
                  type="radio"
                  id="record"
                  onChange={() => viewHistory()}
                />
                <Form.Check
                  label={<i className="bi bi-shop-window"></i>}
                  name="group4"
                  type="radio"
                  id="shop"
                  onChange={() => viewShop()}
                />
                <Form.Check
                  label={<i className="bi bi-question-circle"></i>}
                  name="group4"
                  type="radio"
                  id="faq"
                  onChange={() => viewFaq()}
                />
              </div>
            </Form>
          </div>
        </div>
        <div className="views-business">
          <div className="header-business">
            <div>
              <span
                onClick={() => viewNotifications()}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-bell"></i>
              </span>
              <img src={imageProfile} />
            </div>
          </div>
          {/* dash Business */}
          <div className="dash-business" id="dash-business">
            <div className="buttons-business-dash">
              <button type="button" className="btn btn-primary">
                Course <i className="bi bi-caret-down-fill"></i>
              </button>
              <button type="button" className="btn btn-primary">
                CourseFilter by date <i className="bi bi-calendar-plus"></i>
              </button>
            </div>
            <div className="table-info-business">
              <Table striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Rate of progress</th>
                    <th>activity rate</th>
                  </tr>
                </thead>
                <tbody>
                  {tableDash.map((el) => (
                    <tr>
                      <td key={el.name}>{el.name}</td>
                      <td key={el.rate}>{el.rate}%</td>
                      <td key={el.activity_rate}>{el.activity_rate}hrs</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="chart-business">
                <h4 style={{textAlign: 'center'}}>Rate of progress of the course</h4>
                <img src={graph} style={{width: '100%'}} />
              </div>
            </div>
          </div>
          {/* Report business */}
          <div className="report-business" id="report-business">
            <div className="buttons-business-dash">
              <button type="button" className="btn btn-primary">
                Course <i className="bi bi-caret-down-fill"></i>
              </button>
              <button type="button" className="btn btn-primary">
                CourseFilter by date <i className="bi bi-calendar-plus"></i>
              </button>
              <button type="button" className="btn btn-primary">
                Download report
              </button>
            </div>
            <div className="table-info-business">
              <Table striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Rate of progress</th>
                    <th>activity rate</th>
                  </tr>
                </thead>
                <tbody>
                  {tableReport.map((el) => (
                    <tr>
                      <td key={el.date}>{el.date}</td>
                      <td key={el.courses}>{el.courses}</td>
                      <td key={el.activity_rate}>{el.activity_rate}hrs</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
          {/* History */}
          <div className="history-business" id="history-business">
            <div className="filter">
              <h5>Date</h5>
              <div className="date">
                <input
                  type="date"
                  name="date"
                  id="datefirst"
                  placeholder="from this date"
                  className="form-control"
                />

                <input
                  type="date"
                  name="date"
                  id="dateend"
                  placeholder="to this date"
                  className="form-control"
                />
              </div>
              <h5>Last</h5>
              <div className="last">
                <button type="button" className="btn btn-primary">
                  7 days
                </button>
                <button type="button" className="btn btn-primary">
                  15 days
                </button>
                <button type="button" className="btn btn-primary">
                  30 days
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-primary" id="clear">
                  Clear
                </button>
              </div>
            </div>
            <div className="history-info">
              <Table striped>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {tableHistory.map((el) => (
                    <tr>
                      <td key={el.date}>{el.date}</td>
                      <td key={el.description}>{el.description}</td>
                      <td key={el.amount} style={{ color: "#FF689D" }}>
                        -USD {el.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
          {/* Shop */}
          <div className="shop-business" id="shop-business">
            <div className="header-shop">
              <span>
                <label htmlFor="search">
                  <i className="bi bi-search"></i>
                </label>
                <input type="text" className="form-control" />
              </span>
              <button type="button" className="btn btn-primary">
                Courses <i className="bi bi-chevron-down"></i>
              </button>
            </div>
            <div className="body-shop">
              <section className="Most-popular-homeStudends">
                <div className="card-contenedor-homeStudends">
                  {cards?.map((el) => (
                    <article className="card-Home">
                      <img src={el.image} className="image-card-home" />
                      <h4 key={el.title}>{el.title}</h4>
                      <div className="profile-hoe-card">
                        <img src={el.imageP} alt="" />
                        <div>
                          <h5 key={el.name}>{el.name}</h5>
                          <p key={el.role}>{el.role}</p>
                        </div>
                      </div>
                      <div className="info-card-home">
                        <p key={el.clases}>
                          <i className="bi bi-folder2-open"></i> {el.clases}
                          Clases
                        </p>
                        <p key={el.folowers}>
                          <i className="bi bi-person"></i> {el.folowers}
                        </p>
                        <p>
                          <i className="bi bi-star-fill"></i> 5.0
                        </p>
                      </div>
                      <div className="footer-card-home">
                        <button
                          type="button"
                          className="btn btn-ptimary"
                          onClick={() => navigate("/confirm")}
                        >
                          Buy Now
                        </button>
                        <span key="{el.price}">${el.price}USD</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
              <section className="Recomended-for-you-homeStudends bsrfy container">
                <h1>
                  Conferences <span> recommended</span> for <span>you</span>
                </h1>

                <div className="scroll-images-homeStudents bic">
                  <button
                    className="btn btn-secondary left"
                    type="button"
                    onClick={() => leftScroll()}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <div className="content-images-homeStudent">
                    {carousel.map((el) => (
                      <div className="image-carousel-homeStudet">
                        <img key={el} src={el} style={{ width: "290px" }} />
                      </div>
                    ))}
                  </div>
                  <button
                    className="btn btn-secondary right"
                    type="button"
                    onClick={() => rightScroll()}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
                {/* <Carousel variant="dark">
                  {carousel.map((el) => (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={el}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel> */}
              </section>
              <section className="need-help-homeStudends container">
                <div className="help-homeStudends">
                  <img src={cardimage1} className="imagescardBusinesss3" style={{width: ' 100%'}}/>
                  <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <h1>Need help?</h1>
                    <p style={{ maxWidth: "400px", fontWeight: "700" }}>
                      We are here to help you! Choose the type of support
                      according to what you need to solve.
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        fontSize: "20px",
                      }}
                    >
                      frequent questions
                    </button>
                    <p style={{ maxWidth: "600px", fontWeight: "700" }}>
                      Check if your question is solved in frequently asked
                      questions.
                    </p>
                  </div>
                  <div className="imagescardBusinesss3" style={{height: '100%'}}>
                    <img src={cardimage2} />
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* faq */}
          <div className="faq-business" id="faq-business">
            <div className="contenedor-faq" id="faq-business-low" style={{display: 'flex'}}>
              <div className="contenedor-faq1">
                <div className="questions-business">
                  <h2>Frequently Asked Questions</h2>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Titulo de duda frecuente
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Titulo de duda frecuente
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Titulo de duda frecuente
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Titulo de duda frecuente
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Titulo de duda frecuente
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Titulo de duda frecuente
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="image-faq-business">
                  <img src={faq} />
                </div>
              </div>
              <div className="card-faq">
                <h2>Can't find answers to your questions?</h2>
                <p style={{maxWidth: '400px'}}>
                  We are here to help you! Choose the type of support according to
                  what you need to solve.
                </p>
                <button type="button" className="btn btn-primary" onClick={()=> contactNext()}>
                  contact us
                </button>
              </div>
            </div>
            <div className="contenedor-faq" id="contactUs" style={{display: 'none'}}>
              <div className="contenedor-faq1" >
              <div
                className="InputsSection3HomeBusiness"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <h1 style={{ color: "#F3B601", fontWeight: "bold" }}>
                Tell us about your question
                </h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "20px",
                    width: "100%",
                    maxWidth: "500px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Work Email"
                    style={styles.styleInput}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    style={styles.styleInput}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    style={styles.styleInput}
                  />
                  <textarea
                    className="form-control"
                    placeholder="Tell us about your question"
                    style={styles.styleTextArea}
                    rows="3"
                  />
                  <button
                    type="button"
                    className="btn btn-warning"
                    style={{ width: "100%" }}
                  >
                    Get in touch
                  </button>
                </div>
              </div>
              {/* iamge */}
              <div className="imageSection3HomeBusiness">
                <img src={faq} style={{ width: "100%" }} />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );

  function viewDash() {
    document.getElementById("dash-business").style.display = "flex";
    document.getElementById("report-business").style.display = "none";
    document.getElementById("history-business").style.display = "none";
    document.getElementById("shop-business").style.display = "none";
    document.getElementById("faq-business").style.display = "none";
  }

  function viewReport() {
    document.getElementById("dash-business").style.display = "none";
    document.getElementById("report-business").style.display = "flex";
    document.getElementById("history-business").style.display = "none";
    document.getElementById("shop-business").style.display = "none";
    document.getElementById("faq-business").style.display = "none";
  }

  function viewHistory() {
    document.getElementById("dash-business").style.display = "none";
    document.getElementById("report-business").style.display = "none";
    document.getElementById("history-business").style.display = "flex";
    document.getElementById("shop-business").style.display = "none";
    document.getElementById("faq-business").style.display = "none";
  }

  function viewShop() {
    document.getElementById("dash-business").style.display = "none";
    document.getElementById("report-business").style.display = "none";
    document.getElementById("history-business").style.display = "none";
    document.getElementById("shop-business").style.display = "flex";
    document.getElementById("faq-business").style.display = "none";
  }

  function viewFaq() {
    document.getElementById("dash-business").style.display = "none";
    document.getElementById("report-business").style.display = "none";
    document.getElementById("history-business").style.display = "none";
    document.getElementById("shop-business").style.display = "none";
    document.getElementById("faq-business").style.display = "flex";
  }

  function viewNotifications() {
    document.getElementById("overlay").style.display = "block";
  }
  function notificationHide() {
    document.getElementById("overlay").style.display = "none";
  }

  function leftScroll() {
    const left = document.querySelector(".content-images-homeStudent");
    left.scrollBy(-200, 0);
  }

  function rightScroll() {
    const right = document.querySelector(".content-images-homeStudent");
    right.scrollBy(200, 0);
  }

  function contactNext(){
    document.getElementById('faq-business-low').style.display = 'none'
    document.getElementById('contactUs').style.display = 'flex'
  }
};

export default BusinessPortal;
