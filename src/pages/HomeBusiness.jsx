import React from "react";

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
  return (
    <>
      <Header />
      <div className="contenedor-HomeBusiness">
        {/* section 1 */}
        <section className="container section-one-HomeBusiness">
          {/* description one */}
          <div>
            <h1>Get your demo</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lacus
              vel facilisis.
            </p>
            <button className="btn btn-warning" type="button">
              Get demo
            </button>
          </div>
          <img src={mainImg} />
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
        <section>
          <div className="container section-two-HomeBusiness">
            <h1>In your demo, learn more about</h1>
            {/* content two */}
            <div>
              {/* cards */}
              <div>
                <img src={icon1} />
                <h4>Global instructors</h4>
              </div>
              <div>
                <img src={icon2} />
                <h4>Admin functionality</h4>
              </div>
              <div>
                <img src={icon3} />
                <h4>17,000+ top courses</h4>
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
        <section>
          <div className="container">
            {/* inputs */}
            <div>
              <h1>Get your demo</h1>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Work Email"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
                <textarea
                  className="form-control"
                  placeholder="What are your training needs?"
                />
              </div>
            </div>
            {/* iamge */}
            <img src={secondImg} />
          </div>
        </section>
        {/* section 4 */}
        <section>
          <h1>What we do</h1>
          {/* content */}
          <div className="container">
            <div>
              <h2>By need</h2>
              <p>
                Enterprise-Wide Training Small Team Training Tech Team Training
                Leadership Development Dedicated Customer Success Team Remote &
                Hybrid Team Training
              </p>
            </div>
            <img src={image3} />
          </div>
        </section>
        {/* section 5 */}
        <section>
          {/* How we do it */}
          <div className="container">
            <h1>How we do it</h1>
            <div>
              <button type="button" className="btn btn-secondary btnIconHomeBusiness">
                <img src={iconHome1} />
                Integrated Solutions
              </button>
              <button type="button" className="btn btn-secondary btnIconHomeBusiness">
                <img src={iconHome2} />
                Overview On-Demand
              </button>
              <button type="button" className="btn btn-secondary btnIconHomeBusiness">
                <img src={iconHome3} />
                Learning Immersive
              </button>
              <button type="button" className="btn btn-secondary btnIconHomeBusiness">
                <img src={iconHome4} />
                Learning Cohort Learnings
              </button>
            </div>
          </div>
        </section>
        {/* section 6 */}
        <section className="container">
          <h1>Plans</h1>
          {/* planes */}
          <div>
            <div>
                <h3>Enterprise</h3>
                <span>21 or more users</span>
                <h4>Contact sales for pricing</h4>
                <button type="button" className="btn btn-warning">Request a demo</button>
                <div>
                    <p><i className="bi bi-check-circle"></i>Access to 17,000+ courses*</p>
                    <p><i className="bi bi-check-circle"></i>Custom logo & URL</p>
                    <p><i className="bi bi-check-circle"></i>Create learning paths</p>
                    <p><i className="bi bi-check-circle"></i>Create and host proprietary courses</p>
                    <p><i className="bi bi-check-circle"></i>Create user groups</p>
                    <p><i className="bi bi-check-circle"></i>Custom topics</p>
                    <p><i className="bi bi-check-circle"></i>Advanced insights and analytics</p>
                    <p><i className="bi bi-check-circle"></i>International collection</p>
                    <p><i className="bi bi-check-circle"></i>Mobile app access</p>
                    <p><i className="bi bi-check-circle"></i>Eligible for Udemy Business Pro add-on*</p>
                </div>
            </div>
            <div>
                <h3>Enterprise</h3>
                <span>21 or more users</span>
                <h4>Contact sales for pricing</h4>
                <button type="button" className="btn btn-warning">Request a demo</button>
                <div>
                    <p><i className="bi bi-check-circle"></i>Access to 17,000+ courses*</p>
                    <p><i className="bi bi-check-circle"></i>Custom logo & URL</p>
                    <p><i className="bi bi-check-circle"></i>Create learning paths</p>
                    <p><i className="bi bi-check-circle"></i>Create and host proprietary courses</p>
                    <p><i className="bi bi-check-circle"></i>Create user groups</p>
                    <p><i className="bi bi-check-circle"></i>Custom topics</p>
                    <p><i className="bi bi-check-circle"></i>Advanced insights and analytics</p>
                    <p><i className="bi bi-check-circle"></i>International collection</p>
                    <p><i className="bi bi-check-circle"></i>Mobile app access</p>
                    <p><i className="bi bi-check-circle"></i>Eligible for Udemy Business Pro add-on*</p>
                </div>
            </div>
            <div>
                <h3>Enterprise</h3>
                <span>21 or more users</span>
                <h4>Contact sales for pricing</h4>
                <button type="button" className="btn btn-warning">Request a demo</button>
                <div>
                    <p><i className="bi bi-check-circle"></i>Access to 17,000+ courses*</p>
                    <p><i className="bi bi-check-circle"></i>Custom logo & URL</p>
                    <p><i className="bi bi-check-circle"></i>Create learning paths</p>
                    <p><i className="bi bi-check-circle"></i>Create and host proprietary courses</p>
                    <p><i className="bi bi-check-circle"></i>Create user groups</p>
                    <p><i className="bi bi-check-circle"></i>Custom topics</p>
                    <p><i className="bi bi-check-circle"></i>Advanced insights and analytics</p>
                    <p><i className="bi bi-check-circle"></i>International collection</p>
                    <p><i className="bi bi-check-circle"></i>Mobile app access</p>
                    <p><i className="bi bi-check-circle"></i>Eligible for Udemy Business Pro add-on*</p>
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
