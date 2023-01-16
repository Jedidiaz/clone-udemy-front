import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Form } from "react-bootstrap";
import "../styles/caregories.css";
import Header from "./shared/headerStudent";
import Footer from "./shared/footer";

import Imagetest1 from "../assets/Imagetest1.svg";
import HomestProfile from "../assets/HometestProfile.svg";

import cardMain from "../assets/image-categories.svg";
import imageProfile from "../assets/HometestProfile.svg";
import bgcard from "../assets/bgHomeCard2.svg";
import apple from "../assets/apple.svg";

import google from "../assets/google-play.svg";

const Categories = () => {
  let cardsInstructors = [];
  for (let i = 0; i < 4; i++) {
    cardsInstructors.push({
      image: imageProfile,
      name: "Alisson Gimenez",
      role: "IT manager",
      followers: "13200",
      star: "4.0",
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

  let cardsCart = [];
  for (let i = 0; i < 3; i++) {
    cardsCart.push({
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

  const titles = [
    "Design",
    "Cake shop",
    "Programming",
    "Marketing",
    "Finance",
    "Languages",
    "Architecture",
    "Oratory",
    "Attendance",
  ];

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

  const backOverlayStyle = {
    width: "100%",
    height: "100%",
  };

    const styles = {
      styleIcons: {
        fontSize: '20px'
      }
    }
  return (
    <>
      <div className="overlay-store" id="overlayShop">
        <div className="add-to-cart">
          <h2>Añadido a la cesta</h2>
          <img src={Imagetest1} />
          <div className="description-add-cart">
            <div>
              <h3>Branding from zero to expert, grow your brand</h3>
              <div>
                <p>
                  Learn in the most creative and modern way with the best
                  shortcuts and methods
                </p>
                <div className="button-añadir">
                  <button type="button" className="btn btn-primary">
                    AÑADIR
                  </button>
                </div>
              </div>
              <div className="profile-teacher-add-cart">
                <img src={imageProfile} />
                <div>
                  <h5>De Anabella Ortiz</h5>
                  <p>Graphic Design</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-cards-cart">
            {cardsCart?.map((el) => (
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
                    Class
                  </p>
                  <p key={el.folowers}>
                    <i className="bi bi-person"></i> {el.folowers}
                  </p>
                  <p>
                    <i className="bi bi-star-fill"></i> 5.0
                  </p>
                </div>
                <div className="footer-card-home">
                  <button type="button" className="btn btn-ptimary">
                    <i className="bi bi-plus-lg"></i>
                  </button>
                  <span key="{el.price}">${el.price}USD</span>
                </div>
              </article>
            ))}
          </div>
          <br />
          <br />
          <div className="interesting-tag">
            <h2>Tambien te podria interesar</h2>
            <br />
            <div className="content-tags-cart">
              {titles.map((item) => (
                <div className="tag-cart">
                  <input type="checkbox" id={item} />
                  <label htmlFor={item} key={item}>
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={backOverlayStyle} onClick={() => back()}></div>
      </div>
      <Header />
      <div className="container container-categories">
        {/* section 1 */}
        <section className="featured-course-categories">
          <div className="title-featrued-categories">
            <h1>Featured course</h1>
          </div>
          <div className="card-main-categories">
            <img src={cardMain} className="img-main-card" />
            <div className="content-card-main">
              <div>
                <h2 style={{fontSize: '34px'}}>
                  Python Django 4 Masterclass | Build a Real World Project
                </h2>
                <p>
                  Become an Expert Django Web Developer and Dramatically
                  Increase Your Career Potential
                </p>
              </div>
              <div className="profile-card-categories">
                <span style={{ marginTop: "10px" }}>
                  <img src={imageProfile} />
                  <span style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h4 style={{fontSize: '14px', margin: '0', fontWeight: '600'}}>Alisson Gimenez</h4>
                    <p style={{fontSize: '14px', color: '#909090'}}>Engineer</p>
                  </span>
                </span>
                <button type="button" className="btn btn-primary">
                  Buy Now
                </button>
              </div>
              <div className="stats">
                <span>
                  <i className="bi bi-folder2" style={styles.styleIcons}></i>10 class
                </span>
                <span>
                  <i className="bi bi-person" style={styles.styleIcons}></i> 13200
                </span>
                <span>
                  <i className="bi bi-star-fill" style={styles.styleIcons}></i> 4.0
                </span>
                <p>$60.99USD</p>
              </div>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section className="popular-instructors">
          <div className="title-popular-categories">
            <h1>Popular Instructors</h1>
          </div>
          <div className="content-cards-categories">
            {cardsInstructors.map((el) => (
              <div className="card-categories">
                <div>
                  <img src={el.image} />
                  <span>
                    <i className="bi bi-star-fill" style={styles.styleIcons}></i> {el.star}
                  </span>
                </div>
                <div>
                  <span>
                    <h5 key={el.name} style={{ fontSize: "14px", margin: '0' }}>
                      {el.name}
                    </h5>
                    <p
                      key={el.role}
                      style={{
                        marginBottom: "8px",
                        fontSize: "14px",
                        color: "#909090",
                        fontWeight: "400",
                      }}
                    >
                      {el.role}
                    </p>
                  </span>
                  <span key={el.followers}>
                    <i className="bi bi-person" style={styles.styleIcons}></i> {el.followers}
                  </span>
                  <span key={el.courses}>
                    <i className="bi bi-folder2-open" style={{fontSize: '20px'}}></i> {el.courses} Courses
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
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
                    <Form.Check
                      label={
                        <span>
                          <i className="bi bi-star-fill"></i> {el}
                        </span>
                      }
                      name="group8"
                      type="radio"
                      id={el}
                    />
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
                <article className="card-Home" onClick={() => addCart()}>
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
                      Class
                    </p>
                    <p key={el.folowers}>
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
                    <span key={el.price}>${el.price}USD</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* section 4 */}
      </div>
      <section className="container content-section-seven">
        <div
          className="card-section-sev-home cardDowndload"
          style={{
            backgroundImage: `url(${bgcard})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1>Download the app</h1>
          <h2
            style={{
              marginBottom: "50px",
              color: "#fff",
              fontWeight: "400",
              fontSize: "30px",
            }}
          >
            and learn at your own pace
          </h2>
          <div className="card-buttons-home-section-sev buttonscarddown">
            <button type="button" className="btn btn-primary">
              Download Now!
              <img src={google} className="googleImage" />
            </button>
            <button type="button" className="btn btn-primary">
              Download Now!
              <img src={apple} className="appleImage" />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );

  function addCart() {
    document.getElementById("overlayShop").style.display = "flex";
  }

  function back() {
    document.getElementById("overlayShop").style.display = "none";
  }
};

export default Categories;
