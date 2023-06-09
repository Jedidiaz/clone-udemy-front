import React from "react";
import Header from "./shared/headerStudent";
import Footer from "./shared/footer";

import "../styles/homeStudends.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Carousel from "react-bootstrap/Carousel";

import video from "../assets/videoHomeStudend.svg";
import prevVideo from "../assets/videoTestStudend.svg";

import Imagetest1 from "../assets/Imagetest1.svg";
import HomestProfile from "../assets/HometestProfile.svg";

import carouselImage from "../assets/CarouselImagegomeS.svg";

//card
import cardimage1 from "../assets/cardBusinessimage1.svg";
import cardimage2 from "../assets/cardBusinessimage2.svg";

import { useNavigate } from "react-router";

const HomeStudents = () => {
  const navigate = useNavigate();

  let videos = [];
  for (let i = 0; i < 4; i++) {
    videos.push({
      image: video,
      name: "Creating and editing content for Instagram Stories",
      Progress: 100,
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

  return (
    <>
      <Header />
      <div className="contenedor-homeStudends">
        <section className="continue-watching container">
          <h1>
            Hola,<span> Usuario.</span>¡Qué bueno verte!
          </h1>
          <div className="videos-homeStudends">
            <div className="video-prev-homeStudends">
              <img src={prevVideo} />
            </div>
            <div className="list-video-homeStudends">
              {videos.map((el) => (
                <article
                  className="card-video-homeStudends"
                  onClick={() => navigate("/player")}
                >
                  <div>
                    <img src={el.image} />
                    <div className="info-video-homeStudends">
                      <h4>
                        Creating and editing content for Instagram Stories
                      </h4>
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
        </section>
        <section className="Most-popular-homeStudends container">
          <h1>
            Most <span>Popular</span>
          </h1>
          <div className="card-contenedor-homeStudends">
            {cards?.map((el) => (
              <article className="card-Home">
                <img src={el.image} className="image-card-home" />
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
                  <span key={el.price}>${el.price}USD</span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="Recomended-for-you-homeStudends bsrfy container"
          style={{ padding: "0" }}
        >
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
        </section>
        <section className="need-help-homeStudends container">
          <div className="help-homeStudends">
            <img
              src={cardimage1}
              className="imagescardBusinesss3"
              style={{ width: " 100%" }}
            />
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>Need help?</h1>
              <p style={{ maxWidth: "400px", fontWeight: "700" }}>
                We are here to help you! Choose the type of support according to
                what you need to solve.
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
                Check if your question is solved in frequently asked questions.
              </p>
            </div>
            <div className="imagescardBusinesss3" style={{ height: "100%" }}>
              <img src={cardimage2} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );

  function leftScroll() {
    const left = document.querySelector(".content-images-homeStudent");
    left.scrollBy(-200, 0);
  }

  function rightScroll() {
    const right = document.querySelector(".content-images-homeStudent");
    right.scrollBy(200, 0);
  }
};

export default HomeStudents;
