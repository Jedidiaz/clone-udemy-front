import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { Form } from "react-bootstrap";
import "../styles/caregories.css";
import Header from './shared/headerStudent'
import Footer from './shared/footer'

import Imagetest1 from "../assets/Imagetest1.svg";
import HomestProfile from "../assets/HometestProfile.svg";

import cardMain from "../assets/conference.svg";
import imageProfile from "../assets/HometestProfile.svg";

import google from "../assets/google-play.png";

const Conference = () => {

    let cardsInstructors = [];
  for (let i = 0; i < 4; i++) {
    cardsInstructors.push({
      image: imageProfile,
      name: "Alisson Gimenez",
      role: "IT manager",
      followers: "13200",
      star: "13200",
      courses: "12",
    });
  }

  let cardsCourses = [];
  for (let i = 0; i < 6; i++) {
    cardsCourses.push({
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

  const ratings = ["+4.0", "4.0", "+3.0", "3.0"];
  const category = [
    "Web development",
    "React js",
    "React Native",
    ".net",
    "Node JS",
    "Net core",
  ];
  const level = ["All levels", "Junior", "Middel", "Senior", "Expert"];
  const lenguaje = ["English", "Spanish", "Portugues", "Italiano", "Polski"];
  const price = ["Paid", "Free"];

  return (
    <>
    <Header />
      <div className="container-categories">
        {/* section 1 */}
        <section className="featured-course-categories">
          <div className="title-featrued-categories">
            <h1>Featured conference</h1>
          </div>
          <div className="card-main-categories" style={{width: '80%'}}>
            <img src={cardMain} className="img-main-card" />
            <div className="content-card-main">
              <div>
                <h2>
                  Python Django 4 Masterclass | Build a Real World Project
                </h2>
                <p>
                  Become an Expert Django Web Developer and Dramatically
                  Increase Your Career Potential
                </p>
              </div>
              <div className="profile-card-categories">
                <span>
                  <img src={imageProfile} />
                  <span>
                    <h4>Alisson Gimenez</h4>
                    <p>Engineer</p>
                  </span>
                </span>
                <button type="button" className="btn btn-primary">
                  Buy Now
                </button>
              </div>
              <div className="stats">
                <span>
                  <i className="bi bi-folder2"></i>10 class
                </span>
                <span>
                  <i className="bi bi-person"></i> 13200
                </span>
                <span>
                  <i className="bi bi-star-fill"></i> 4.0
                </span>
                <p>$60.99USD</p>
              </div>
            </div>
          </div>
        </section>
        {/* section 2 */}
        {/* <section className="popular-instructors">
          <div className="title-popular-categories">
            <h1>Popular Instructors</h1>
          </div>
          <div className="content-cards-categories">
            {cardsInstructors.map((el) => (
              <div className="card-categories">
                <div>
                  <img src={el.image} />
                  <span>
                    <i className="bi bi-star-fill"></i> {el.star}
                  </span>
                </div>
                <div>
                  <span>
                    <h5 key={el.name}>{el.name}</h5>
                    <p key={el.role}>{el.role}</p>
                  </span>
                  <span key={el.followers}>
                    <i className="bi bi-person"></i> {el.followers}
                  </span>
                  <span key={el.courses}>
                    <i className="bi bi-folder2-open"></i> {el.courses}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section> */}
        {/* section 3 */}
        <section className="development-courses">
          <div className="title-development-categories">
            <h1>Web Development Courses</h1>
            <h3>for all levels</h3>
          </div>
          <div className="courses-categories">
            {/* responsive only */}
            <div className="filter-responsive-categories">
              {/* Ratings */}
              <Dropdown className="Ratings-categories">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Ratings
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {ratings.map((el) => (
                    <Dropdown.Item key={el}>{el}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {/* Category */}
              <Dropdown className="category-categories">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Category
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {category.map((el) => (
                    <Dropdown.Item key={el}>{el}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {/* Level */}
              <Dropdown className="level-categories">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Level
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {level.map((el) => (
                    <Dropdown.Item key={el}>{el}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {/* Lenguaje */}
              <Dropdown className="lenguaje-categories">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Lenguaje
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {lenguaje.map((el) => (
                    <Dropdown.Item key={el}>{el}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {/* Price */}
              <Dropdown className="price-categories">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Price
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {price.map((el) => (
                    <Dropdown.Item key={el}>{el}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {/* Subtitles */}
              <Dropdown className="subtitles-categories">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Subtitles
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {lenguaje.map((el) => (
                    <Dropdown.Item key={el}>{el}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* Filter normal */}
            <div className="filter-categories">
              <Form>
                <div className="Ratings">
                  <h3>Ratings</h3>
                  {ratings.map((el) => (
                    <Form.Check label={<span><i className="bi bi-star-fill"></i> {el}</span>  } name="group8" type="radio" id={el} />
                  ))}
                </div>
                <div className="Category">
                  <h3>Category</h3>
                  {category.map((el) => (
                    <Form.Check label={el} name="group9" type="radio" id={el} />
                  ))}
                </div>
                <div className="Level">
                  <h3>Level</h3>
                  {level.map((el) => (
                    <Form.Check
                      label={el}
                      name="group10"
                      type="radio"
                      id={el}
                    />
                  ))}
                </div>
                <div className="Lenguaje">
                  <h3>Lenguaje</h3>
                  {lenguaje.map((el) => (
                    <Form.Check
                      label={el}
                      name="group11"
                      type="radio"
                      id={el}
                    />
                  ))}
                </div>
                <div className="Price">
                  <h3>Price</h3>
                  {price.map((el) => (
                    <Form.Check
                      label={el}
                      name="group12"
                      type="radio"
                      id={el}
                    />
                  ))}
                </div>
                <div className="Subtitles">
                  <h3>Subtitles</h3>
                  {lenguaje.map((el) => (
                    <Form.Check
                      label={el}
                      name="group13"
                      type="radio"
                      id={el}
                    />
                  ))}
                </div>
              </Form>
            </div>
            {/* cards categories courses */}
            <div className="content-cards-courses-categories">
              {cardsCourses?.map((el) => (
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
                      Class
                    </p>
                    <p key="{el.folowers}">
                      <i className="bi bi-person"></i> {el.folowers}
                    </p>
                    <p>
                      <i className="bi bi-star-fill"></i> 5.0
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
          </div>
        </section>
        {/* section 4 */}
        <section className="download">
          <div className="card-section-sev-home">
            <h1>Download the app </h1>
            <h2>and learn at your own pace</h2>
            <div className="crad-buttons-home-section-sev">
              <button type="button" className="btn btn-primary">
                Download Now!{" "}
                <p>
                  <img src={google} alt="" /> Google Play
                </p>
              </button>
              <button type="button" className="btn btn-primary">
                Download Now!{" "}
                <p>
                  <i className="bi bi-apple"></i> App Store
                </p>
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Conference