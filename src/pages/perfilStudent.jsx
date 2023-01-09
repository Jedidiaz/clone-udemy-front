import React, { useEffect } from "react";
import Header from "./shared/headerStudent";
import Footer from "./shared/footer";

import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import '../styles/perfilStudet.css'

import imageport from "../assets/imagePortada.svg";
import imageprofile from "../assets/imageProfile.svg";

import imageTest from "../assets/videoTestStudend.svg";
import video from "../assets/videoHomeStudend.svg";

import paypal from "../assets/paypal.svg";
import stripe from "../assets/stripe.svg";
import { Link } from "react-router-dom";

const PerfilStudent = () => {

  useEffect(() => {
    checkedpaymethod();
  });

  let videos = [];
  for (let i = 0; i < 8; i++) {
    videos.push({
      image: video,
      name: "Creating and editing content for Instagram Stories",
      Progress: 100,
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

  return (
    <>
    <Header />
      <div className="contenedor-perfilStudent">
        <div className="description-perfilStudent">
          <div className="image-portada-perfilStudent">
          <button type="button" className="btn btn-primary">
              Close account
            </button>
            <img src={imageport} />
          </div>
          <div className="image-profile-perfilStudent">
            <img src={imageprofile} />
          </div>
          <div className="description-profile-perfilStudent">
            <div className="info-student">
              <h2>
                Usuario Prueba <i className="bi bi-pencil-square"></i>
              </h2>
              <h3>
                Email: <span>prueba@gmail.com</span>
              </h3>
              <h3>
                Password: <span>******</span>
              </h3>
            </div>
            <div className="options-perfilStudends">
              <div className="form-check form-switch">
                <Form>
                  <Form.Check
                    reverse
                    type="switch"
                    id="custom-switch"
                    label="Direct messaging"
                  />
                  <Form.Check
                    reverse
                    type="switch"
                    label="Promotion"
                    id="custom-switch"
                  />
                  <Form.Check
                    reverse
                    type="switch"
                    label="Announcement from instructors"
                    id="custom-switch"
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="info-classes-perfilStudent">
          <div className="info1">
            <div className="controllers">
              <div className="enrolled-courses">
                <span>04</span>
                <h4>Enrolled courses</h4>
              </div>
              <div className="courses-completed">
                <span>04</span>
                <h4>Courses completed</h4>
              </div>
              <div className="certificates-earned">
                <span>04</span>
                <h4>Certificates earned</h4>
              </div>
            </div>
            <div className="continue-watching-perfilStudent">
              <img src={imageTest} />
            </div>
          </div>
          <div className="list-video-perfilStudet">
            {videos.map((el) => (
              <article className="card-video-homeStudends">
                <div>
                  <img src={el.image} />
                  <div className="info-video-homeStudends">
                    <h4>Creating and editing content for Instagram Stories</h4>
                    <p>
                      <span>{el.Progress}</span>% completed
                    </p>
                  </div>
                </div>
                <ProgressBar now={el.Progress} />
              </article>
            ))}
          </div>
        </div>
        <div className="multiMenu-perfilStudent">
          <div className="selectors">
            <Form>
              <div className="mb-3">
                <Form.Check
                  label="Payment methods"
                  name="group1"
                  type="radio"
                  id="Payment-methods"
                  onChange= {(el) => checkedpaymethod(el)}
                />
                <Form.Check
                  label="Purchase history"
                  name="group1"
                  type="radio"
                  id="Purchase-history"
                  onChange={() => checkedHistory()}
                />
                <Form.Check
                  label="U credits"
                  name="group1"
                  type="radio"
                  id="U-credits"
                  onChange={() => checkedCredits()}
                />
              </div>
            </Form>
          </div>
          {/* payment-methods */}
          <div className="payment-methods" id="payment-methods">
            <div className="metoh">
              <Form>
                <div className="mb-3">
                  <div className="paypal">
                    <div>
                      <Form.Check
                        label={<img src={paypal} />}
                        name="group2"
                        type="radio"
                        id="paypal"
                      />
                      
                    </div>
                    <p>
                      Acoount: <span>prueba@gmail.com</span>
                    </p>
                  </div>
                  <div className="stripe">
                    <Form.Check
                      label={<img src={stripe} />}
                      name="group2"
                      type="radio"
                      id="stripe"
                    />
                    <p>
                      Acoount: <span>prueba@gmail.com</span>
                    </p>
                    <div className="credidcard-data">
                      <form>
                        <div>
                          <i className="bi bi-credit-card"></i>
                          <input
                            type="number"
                            name="number-card"
                            id="number-card"
                            placeholder="Number"
                            className="form-control"
                          />
                        </div>
                        <div>
                          <label htmlFor="CVC">CVC</label>
                          <input
                            type="number"
                            name="CVC"
                            id="CVC"
                            placeholder="__  __  __"
                            className="form-control"
                          />

                          <label htmlFor="Expiry">Expiry MM/YY</label>
                          <input
                            type="text"
                            id="Expiry"
                            name="Expiry"
                            placeholder="MM/YY"
                            className="form-control"
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Pay
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
          {/* purchase-history */}
          <div className="purchase-history" id="purchase-history">
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
          {/* U credits */}
          <div className="u-credits" id="u-credits">
            <h2>66</h2>
            <h3>Available balance</h3>
            <Link to={""}>Learn more about credits</Link>
          </div>
        </div>
      </div>

     <Footer /> 
    </>
  );

  function checkedpaymethod(){
    document.getElementById('payment-methods').style.display = 'flex'
    document.getElementById('u-credits').style.display = 'none'
    document.getElementById('purchase-history').style.display = 'none'
  }

  function checkedHistory(){
    document.getElementById('purchase-history').style.display = 'flex'
    document.getElementById('payment-methods').style.display = 'none'
    document.getElementById('u-credits').style.display = 'none'
  }

  function checkedCredits(){
    document.getElementById('u-credits').style.display = 'flex'
    document.getElementById('payment-methods').style.display = 'none'
    document.getElementById('purchase-history').style.display = 'none'
  }
};

export default PerfilStudent;
