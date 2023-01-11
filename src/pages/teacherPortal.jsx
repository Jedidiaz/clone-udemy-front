import React, { useEffect } from "react";
import "../styles/teacherPortal.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../pages/shared/footerTeach";

import TeacherLogo from "../assets/TeacherLogo.svg";
import imageTest from "../assets/teacher-video.svg";
import imageProfile from "../assets/imageProfile.svg";
import imageProfileChat from "../assets/Profile-chat.svg";
import send from "../assets/send.svg";

import record from "../assets/record1.svg";
import record2 from "../assets/record2.svg";
import record3 from "../assets/record3.svg";

import instructor1 from "../assets/instructor1.svg";
import instructor2 from "../assets/instructor2.svg";
import instructor3 from "../assets/instructor3.svg";
import instructor4 from "../assets/instructor4.svg";
import instructor5 from "../assets/instructor5.svg";

const TeacherPortal = () => {
  
  useEffect(() => {
    viewHome();
  });
  const state1 = {
    messages: [
      {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit 1",
        time: "10:50 am",
      },
      {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ",
        time: "10:50 am",
      },
      {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ",
        time: "10:50 am",
      },
    ],
  };

  const state2 = {
    messages: [
      {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ",
        time: "10:50 am",
      },
    ],
  };

  let cardsChats = [];
  for (let i = 1; i <= 4; i++) {
    cardsChats.push({
      image: imageProfileChat,
      name: "Sue Lo",
      message: "Lorem ipsum dolor sit amet, consectetuer...",
      time: "10:00 am",
    });
  }

  return (
    <>
      <div className="contenedor-teacherPortal">
        <div className="bar-teacher">
          <div className="logo-business">
            <img src={TeacherLogo} />
          </div>
          <div className="buttons-bar-business">
            <Form>
              <div className="mb-3">
                <Form.Check
                  label={<i className="bi bi-collection-play"></i>}
                  name="group5"
                  type="radio"
                  id="dash"
                  onChange={() => viewHome()}

                />
                <Form.Check
                  label={<i className="bi bi-chat-left"></i>}
                  name="group5"
                  type="radio"
                  id="reports"
                  onChange={() => viewMessages()}
                />
                <Form.Check
                  label={<i className="bi bi-clipboard-data"></i>}
                  name="group5"
                  type="radio"
                  id="record"
                  //   onChange={() => viewHistory()}
                />
                <Form.Check
                  label={<i className="bi bi-archive"></i>}
                  name="group5"
                  type="radio"
                  id="shop"
                  //   onChange={() => viewShop()}
                />
                <Form.Check
                  label={<i className="bi bi-question-circle"></i>}
                  name="group5"
                  type="radio"
                  id="faq"
                  //   onChange={() => viewFaq()}
                />
              </div>
            </Form>
          </div>
        </div>
        <div className="views-teacher">
          <div className="header-business">
            <div>
              <Link to={'/homeStudents'}>
                <span className="Back" style={{color: '#232323'}}>back to student mode</span>
              </Link>
              <span>
                <i className="bi bi-bell"></i>
              </span>
              <img src={imageProfile} />
            </div>
          </div>
          {/* views */}
          {/* messages */}
          <div className="messagesPortalTeacher" id="messagesPortalTeacher">
            <div className="options-teacher-messages">
              <Form>
                <div className="mb-3">
                  <Form.Check
                    label="Q&A"
                    name="group6"
                    type="radio"
                    id="Q&A"
                    onChange={() => viewQA()}
                  />
                  <Form.Check
                    label="Messages"
                    name="group6"
                    type="radio"
                    id="Messages"
                    onChange={() => viewMessage()}
                  />
                  <Form.Check
                    label="Announcements"
                    name="group6"
                    type="radio"
                    id="Announcements"
                    onChange={() => viewAnnouncements()}
                  />
                </div>
              </Form>
            </div>
            {/* Q&A */}
            <div className="qya" id="qya">
              <div className="video-repro">
                <div className="image-img-teacher">
                  <img src={imageTest} />
                </div>
              </div>
              <div className="description-video-teacher">
                <h2>
                  All questions in this course <span>(99)</span>{" "}
                </h2>
                <div className="subDescription">
                  <img src={imageProfileChat} />
                  <div className="messages-video-teacher">
                    <h5>clase 25, versiones de sitio web</h5>
                    <p>
                      hola , en la nueva versión de serch console no se donde
                      agregar las otras versiones de mi sitio web.....
                    </p>
                    <p>
                      <Link to={""}>Reply to Cristhian Alejandro Torres</Link> ·
                      Lecture 27 · 2 years ago
                    </p>
                  </div>
                  <span>
                    7 <i className="bi bi-chat-right"></i>
                  </span>
                </div>
              </div>
            </div>
            {/* Messages */}
            <div className="messages-teacher" id="messages-teacher">
              <div className="Chat">
                <div className="contacts-chat">
                  <span>
                    <label htmlFor="search">
                      <i className="bi bi-search"></i>
                    </label>
                    <input type="text" className="form-control" id="search" />
                  </span>
                  <div className="content-cards-chat">
                    {cardsChats.map((el) => (
                      <div className="card-chat" onClick={() => chat()}>
                        <img src={el.image} />
                        <div className="description-card-chat">
                          <div>
                            <span key={el.name}>{el.name}</span>
                            <span key={el.time}>{el.time}</span>
                          </div>
                          <div>
                            <p key={el.message}>{el.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="divider"></div>
                <div className="view-chat" id="view-chat">
                  <div className="header-chat">
                    <i
                      className="bi bi-arrow-left-short"
                      onClick={() => chatHiden()}
                    ></i>
                    <div>
                      <img src={imageProfileChat} />
                    </div>
                    <div>
                      <h4>Tony Grey</h4>
                      <span>10:50 am</span>
                    </div>
                  </div>
                  <div className="body-chat">
                    <div className="message1">
                      {state1.messages.map((message) => (
                        <div className="message-cloud1">
                          <p key={message.text}>{message.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="message2">
                      {state2.messages.map((message) => (
                        <div className="message-cloud2">
                          <p key={message.text}>{message.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="footer-chat">
                    <input type="text" className="form-control" />
                    <i className="bi bi-paperclip"></i>
                    <img src={send} />
                  </div>
                </div>
              </div>
            </div>
            {/*  announcements */}
            <div className="announcements" id="announcements"></div>
          </div>
          {/* Home */}
          <div className="home-instructor" id="home-instructor">
            <div>
              <h1>
                Hola,<span style={{fontWeight: '700'}}> Usuario.</span>¡Qué bueno verte!
              </h1>
            </div>
            <div className="card-main-home-instructor">
              <h1>Jump Into Course Creation</h1>
              <p>start now and enjoy the moment</p>
              <button type="button" className="btn btn-primary">
                Create your course
              </button>
            </div>
            <section className="resources-instructor">
              <div>
                <h5>We think these resources will be helpful.</h5>
              </div>
              <div className="recording">
                <div className="buttons-recording">
                    <img src={record} />
                  <p>Go now{" "}</p> 
                </div>
                <div className="buttons-recording">
                    <img src={record2} />
                  <p>How to Build Your Audience{" "}</p> 
                </div>
                <div className="buttons-recording">
                    <img src={record3} />
                  <p>How to launch your first course faster!{" "}</p> 
                </div>
              </div>
            </section>
            <section>
              <div className="mb-5">
                <h5>
                  Have questions? Here are our most popular instructor
                  resources.
                </h5>
              </div>
              <div className="options-home-instructor">
                <div className="option-instructor">
                  <img src={instructor1} />
                  <span>Test video</span>
                  <p>Send us a sample video and get expert feedback.</p>
                </div>
                <div className="option-instructor">
                  <img src={instructor2} />
                  <span>Community</span>
                  <p>Connect with like-minded individuals to change lives through learning</p>
                </div>
                <div className="option-instructor">
                  <img src={instructor3} />
                  <span>Teaching center</span>
                  <p>Learn how to teach online with us.</p>
                </div>
              </div>
              <div className="options-home-instructor2">
                <div className="option-instructor">
                  <img src={instructor4} />
                  <span>Test video</span>
                  <p>Validate your course topic by exploring our marketplace supply and demand.</p>
                </div>
                <div className="option-instructor">
                  <img src={instructor5} />
                  <span>Test video</span>
                  <p>Browse our Help Center or contact our support team.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );

  //menu
  function viewMessages() {
    document.getElementById("messagesPortalTeacher").style.display = "block";
    document.getElementById("home-instructor").style.display = "none";
  }

  function viewHome() {
    document.getElementById("home-instructor").style.display = "block";
    document.getElementById("messagesPortalTeacher").style.display = "none";
  }

  

  //submenu
  function viewMessage() {
    document.getElementById("qya").style.display = "none";
    document.getElementById("messages-teacher").style.display = "flex";
    document.getElementById("announcements").style.display = "none";
  }

  function viewQA() {
    document.getElementById("qya").style.display = "flex";
    document.getElementById("messages-teacher").style.display = "none";
    document.getElementById("announcements").style.display = "none";
  }

  function viewAnnouncements() {
    document.getElementById("qya").style.display = "none";
    document.getElementById("messages-teacher").style.display = "none";
    document.getElementById("announcements").style.display = "flex";
  }

  //click card chat
  function chat() {
    document.getElementById("view-chat").style.left = "58.3px";
  }

  function chatHiden() {
    document.getElementById("view-chat").style.left = "100%";
  }
};

export default TeacherPortal;
