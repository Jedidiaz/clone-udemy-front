import React from "react";
import "../styles/HomeBusiness.css";

//header and footer
import Header from "../pages/shared/headerBusiness";
import Footer from "../pages/shared/footer";

import mainImg from "../assets/HomeBusiness1.png";

import secondImg from "../assets/imageHomeBusiness2.svg";

import image3 from "../assets/HomeBusiness3.svg";

//imagenes icons
import icon1 from "../assets/GlobalHomeBusiness.svg";
import icon2 from "../assets/adminHomeBusiness.svg";
import icon3 from "../assets/screenHomeBusiness.svg";

//imagesicons
import iconHome1 from "../assets/1b.svg";
import iconHome2 from "../assets/2b.svg";
import iconHome3 from "../assets/3b.svg";
import iconHome4 from "../assets/4b.svg";

const HomeBusiness = () => {
  //var styles
  const styles = {
    styleCardButton: {
      display: "flex",
      textAlign: "center",
      gap: "20px",
      flexDirection: "column",
      width: "200px",
      height: "300px",
      backgroundColor: "#fff",
      borderRadius: "20px",
      padding: "10px",
      boxShadow: "0px 4px 11.83px rgba(0, 0, 0, 0.15)",
    },
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
    },
    styleTextArea: {
      border: "none",
      borderRadius: "20px",
      padding: "10px 15px",
      width: "100%",
    },
    styleDivwhawedo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "30px",
      marginTop: "30px",
      width: "100%",
    },
    styleButtonS5: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      border: "1px solid #2B2B2B",
      borderRadius: "20px",
      width: "200px",
      height: "300px",
      padding: "40px 50px",
      fontSize: "20px",
      color: "#B6B6B6",
      backgroundColor: "transparent",
      boxShadow: "0px 4px 11.83px rgba(0, 0, 0, 0.15)",
    },
    stylePLans: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "70px",
      boxShadow: "0px 4px 11.83px rgba(0, 0, 0, 0.15)",
      padding: "100px 20px",
      gap: "20px",
    },
  };

  return (
    <>
      <Header />
      <div className="contenedor-HomeBusiness">
        {/* section 1 */}
        <section className="container section-one-HomeBusiness">
          {/* description one */}
          <div>
            <h1
              style={{
                color: "#F3B601",
                fontWeight: "bold",
                fontSize: "calc(1.875rem + 1.5vw)",
              }}
            >
              Get your demo
            </h1>
            <p style={{ color: "#959595" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lacus
              vel facilisis.
            </p>
            <button className="btn btn-warning" type="button">
              Get demo
            </button>
          </div>
          <img src={mainImg} style={{ width: "100%" }} />
        </section>
        {/* section 2 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            fill="#F1F1F1"
            fill-opacity="1"
            d="M0,192L120,160C240,128,480,64,720,58.7C960,53,1200,107,1320,133.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <section style={{ backgroundColor: "#F1F1F1", margin: "0" }}>
          <div className="container section-two-HomeBusiness">
            <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
              In your demo, learn more about
            </h1>
            {/* content two */}
            <div className="ContentCardsGlobalHomeBusiness">
              {/* cards */}
              <div style={styles.styleCardButton}>
                <div style={styles.styleDivIcon}>
                  <img src={icon1} style={{ width: "100%" }} />
                </div>
                <h4 style={{ marginTop: "50px" }}>Global instructors</h4>
              </div>
              <div style={styles.styleCardButton}>
                <div style={styles.styleDivIcon}>
                  {" "}
                  <img src={icon2} style={{ width: "100%" }} />
                </div>
                <h4 style={{ marginTop: "50px" }}>Admin functionality</h4>
              </div>
              <div style={styles.styleCardButton}>
                <div style={styles.styleDivIcon}>
                  <img src={icon3} style={{ width: "100%" }} />
                </div>
                <h4 style={{ marginTop: "50px" }}>17,000+ top courses</h4>
              </div>
            </div>
          </div>
        </section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ backgroundColor: "#2F2F2F" }}
        >
          <path
            fill="#F1F1F1"
            fill-opacity="1"
            d="M0,192L120,160C240,128,480,64,720,58.7C960,53,1200,107,1320,133.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        {/* section 3 */}
        <section className="section-3-Homebusiness">
          <div className="container section3HomeBusiness">
            {/* inputs */}
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
                Get your demo
              </h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "20px",
                  width: "100%",
                  maxWidth: '500px'
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
                  placeholder="What are your training needs?"
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
              <img src={secondImg} style={{ width: "100%" }} />
            </div>
          </div>
        </section>
        {/* section 4 */}
        <section style={{ margin: "50px 0" }}>
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
            What we do
          </h1>
          {/* content */}
          <div className="container section4HomeBusiness">
            <div style={styles.styleDivwhawedo}>
              <h2 style={{ color: "#F3B601", fontWeight: "bold" }}>By need</h2>
              <p style={{ color: "#959595", width: "180px" }}>
                Enterprise-Wide Training Small Team Training Tech Team Training
                Leadership Development Dedicated Customer Success Team Remote &
                Hybrid Team Training
              </p>
            </div>
            <div className="imageSection4HomeBusiness">
              <img src={image3} style={{ width: "100%" }} />
            </div>
          </div>
        </section>
        {/* section 5 */}
        <section style={{ margin: "50px 0" }}>
          {/* How we do it */}
          <div className="container section5HomeBusiness">
            <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
              How we do it
            </h1>
            <div className="buttonsSection5HomeBusiness">
              <button
                type="button"
                // style={styles.styleButtonS5}
                className="btn btn-secondary"
                id="iconHomeBusinesss5"
              >
                <img src={iconHome1} style={{ width: "100%" }} />
                Integrated Solutions
              </button>
              <button
                type="button"
                // style={styles.styleButtonS5}
                className="btn btn-secondary"
                id="iconHomeBusinesss5"
              >
                <img src={iconHome2} style={{ width: "100%" }} />
                Overview On-Demand
              </button>
              <button
                type="button"
                // style={styles.styleButtonS5}
                className="btn btn-secondary"
                id="iconHomeBusinesss5"
              >
                <img src={iconHome3} style={{ width: "100%" }} />
                Learning Immersive
              </button>
              <button
                type="button"
                // style={styles.styleButtonS5}
                className="btn btn-secondary"
                id="iconHomeBusinesss5"
              >
                <img src={iconHome4} style={{ width: "100%" }} />
                Learning Cohort Learnings
              </button>
            </div>
          </div>
        </section>
        {/* section 6 */}
        <section className="container">
          <h1 style={{ fontWeight: "bold", textAlign: "center", margin: '50px 0' }}>Plans</h1>
          {/* planes */}
          <div className="contentsection6HomeBusiness">
            <div style={styles.stylePLans}>
              <div>
                <h3>Enterprise</h3>
                <span>21 or more users</span>
              </div>
              <h4>Contact sales for pricing</h4>
              <button type="button" className="btn btn-warning" style={{color: '#fff'}}>
                Request a demo
              </button>
              <div>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Access to 17,000+
                  courses*
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Custom logo & URL
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Create learning paths
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Create and host
                  proprietary courses
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Create user groups
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Custom topics
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Advanced insights and
                  analytics
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> International collection
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Mobile app access
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Eligible for Udemy
                  Business Pro add-on*
                </p>
              </div>
            </div>
            <div style={styles.stylePLans}>
            <div>
                <h3>Enterprise</h3>
                <span>21 or more users</span>
              </div>
              <h4>Contact sales for pricing</h4>
              <button type="button" className="btn btn-warning" style={{color: '#fff'}}>
                Request a demo
              </button>
              <div>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Access to 17,000+
                  courses*
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Custom logo & URL
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Create learning paths
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Create and host
                  proprietary courses
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Create user groups
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Custom topics
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Advanced insights and
                  analytics
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> International collection
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Mobile app access
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Eligible for Udemy
                  Business Pro add-on*
                </p>
              </div>
            </div>
            <div style={styles.stylePLans}>
            <div>
                <h3>Enterprise</h3>
                <span>21 or more users</span>
              </div>
              <h4>Contact sales for pricing</h4>
              <button type="button" className="btn btn-warning" style={{color: '#fff'}}>
                Request a demo
              </button>
              <div>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Access to 17,000+
                  courses*
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Custom logo & URL
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Create learning paths
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Create and host
                  proprietary courses
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Create user groups
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Custom topics
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Advanced insights and
                  analytics
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> International collection
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Mobile app access
                </p>
                <p>
                  <i className="bi bi-check-circle iconHomeBusiness11"></i> Eligible for Udemy
                  Business Pro add-on*
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomeBusiness;
