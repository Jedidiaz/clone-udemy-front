import React from "react";
import "../styles/teacherPortal.css";
import { Form } from "react-bootstrap";

import TeacherLogo from "../assets/TeacherLogo.svg";
import imageTest from "../assets/teacher-video.svg";
import imageProfile from "../assets/imageProfile.svg";
import imageProfileChat from "../assets/Profile-chat.svg";
import send from "../assets/send.svg";
import { Link } from "react-router-dom";

const TeacherPortal = () => {
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
                  //   onChange={() => viewDash()}
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
              <span className="Back">back to student mode</span>
              <span>
                <i className="bi bi-bell"></i>
              </span>
              <img src={imageProfile} />
            </div>
          </div>
          {/* views */}
          <div className="messagesPortalTeacher">
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
                    <i className="bi bi-arrow-left-short" onClick={() => chatHiden()}></i>
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
        </div>
      </div>
    </>
  );

  //menu
  function viewMessages() {
    document.getElementById("dash-business").style.display = "flex";
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
