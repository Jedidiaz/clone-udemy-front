import React from "react";
import { Form, Table } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import "../../styles/businessProtal.css";

import businessLogo from "../../assets/businessLogo.svg";
import imageProfile from "../../assets/imageProfile.svg";

const BusinessPortal = () => {
  let tableDash = [];
  for (let i = 0; i < 10; i++) {
    tableDash.push({
      name: "Luis Gomez",
      rate: "15",
      activity_rate: 2,
    });
  }
  return (
    <>
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
                />
                <Form.Check
                  label={<i className="bi bi-file-earmark"></i>}
                  name="group4"
                  type="radio"
                  id="reports"
                />
                <Form.Check
                  label={<i className="bi bi-journal-bookmark"></i>}
                  name="group4"
                  type="radio"
                  id="record"
                />
                <Form.Check
                  label={<i className="bi bi-shop-window"></i>}
                  name="group4"
                  type="radio"
                  id="shop"
                />
                <Form.Check
                  label={<i className="bi bi-question-circle"></i>}
                  name="group4"
                  type="radio"
                  id="faq"
                />
              </div>
            </Form>
          </div>
        </div>
        <div className="views-business">
          <div className="header-business">
            <div>
              <span>
                <i className="bi bi-bell"></i>
              </span>
              <img src={imageProfile} />
            </div>
          </div>
          {/* dash Business */}
          <div className="dash-business">
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
              <div className="chart-business"></div>
            </div>
          </div>
          {/* Report business */}
          <div className="report-business">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessPortal;
