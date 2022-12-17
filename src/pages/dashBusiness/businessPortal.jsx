import React from "react";
import { Form } from "react-bootstrap";
import "../../styles/businessProtal.css";

import businessLogo from "../../assets/businessLogo.svg";
import imageProfile from "../../assets/imageProfile.svg";

const BusinessPortal = () => {
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
        </div>
      </div>
    </>
  );
};

export default BusinessPortal;
