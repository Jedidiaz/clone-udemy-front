import React from "react";
import '../styles/confirm.css'
//header and footer
import Header from "./shared/headerStudent";
import Footer from "./shared/footerBusiness";
//images
import cardMain from "../assets/image-categories.svg";
import profile from "../assets/HometestProfile.svg";

import Imagetest1 from "../assets/Imagetest1.svg";
import HomestProfile from "../assets/HometestProfile.svg";
import { useNavigate } from "react-router";

const ConfirmBuy = () => {

    const navigate = useNavigate()

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

  const styleColor = {
    color: '#fff'
  }


  const priceStyle = {
    fontWeight: '700',
    fontSize: '35px'
  }

  const stylePrice = {
    textDecoration: 'line-through',
    color: '#B6B6B6',
    marginBottom: '10px'
  }

  const chevron = {
    color: '#000',
    display: 'flex',
    position: 'absolute',
    height: '50px',
    alignItems: 'center',
    justifyContent: 'end',
    width: '300px',
    fontSize: '30px',
    paddingRight: '20px'
  }



  return (
    <>
      <Header />
      <div className="container">
        <section className="confirm-pay">
            {/* card buy */}
          <div className="card-confirm-course">
            <div className="first-part-card">
              <img src={cardMain} />
              <div className="stats-confirm" style={styleColor}>
                <p>
                  <i className="bi bi-folder2-open"></i> 10 clases
                </p>
                <p>
                  <i className="bi bi-person"></i> 13200
                </p>
                <p>
                  <i className="bi bi-star-fill" style={{color: '#F3B601'}}></i> 4.0
                </p>
              </div>
              <p>
                <i className="bi bi-badge-cc"></i> Subtitle (Espanish,
                English,Italian)
              </p>
              <p>
                <i className="bi bi-person-fill"></i> 2.4K Students
              </p>
              <p>
                <i className="bi bi-volume-up-fill"></i> English (original)
              </p>
              <p>
                <i className="bi bi-star-fill"></i> 4.6 (455 ratings)
              </p>
            </div>
            {/* description card */}
            <div className="description-card-confirm" style={styleColor}>
              <h3>Python Django 4 Masterclass | Build a Real World Project</h3>
              <br />
              <p>
                Become an Expert Django Web Developer and Dramatically Increase
                Your Career Potential
              </p>
              <br />
              <div className="profile-teacher-comfirm">
                <img src={profile}  style={{width: '70px'}} />
                <div>
                  <p style={{marginBottom: '2px'}}>Alisson Gimenez</p>
                  <span>Engineer</span>
                </div>
              </div>
              <br/>
              <div className="price-confirm">
                <h5 style={{textDecoration: 'line-through', fontWeight: '400'}}>$76.99USD</h5>
                <button type="button" className="btn btn-secondary" style={{borderRadius: '15px'}}>
                  $60.99USD
                </button>
              </div>
            </div>
          </div>
          {/* description 2 */}
          <div className="description-confirm" style={{color: '#494949'}}>
            <h4 style={{fontWeight: '700'}} >Tu compra</h4>
            <h1 style={priceStyle} id="price">$80.00</h1>
            <p style={stylePrice}>$95.00</p>
            <span>75% de descuento</span>
            <br />
            <button type="button" className="btn btn-secondary"><i className="bi bi-cart3"></i> PAGAR PEDIDO</button>
            <h5>Aplica un código de promoción para obtener un descuento</h5>
            <div>
                <label htmlFor="cupon" style={chevron}><i className="bi bi-chevron-right"></i></label>
                <input type="text" className="form-control" id="cupon" placeholder="Introducir cupón"/>
            </div>
          </div>
        </section>
        <button type="button" className="btn btn-secondary"  id="continue"> Continuar comprando <i className="bi bi-chevron-right"></i></button>
        <section className="also-be-interested">
           <h2 className="mb-5" style={{fontWeight: '700', width: '100%', textAlign: 'start'}}>También puede interesarte</h2>
           <div className="card-contenedor-homeStudends" style={{gap: '30px'}}>
            {cards?.map((el) => (
              <article className="card-Home" style={{width: '350px'}}>
                <img key={el.image} src={el.image} className="image-card-home" />
                <h4 key={el.title}>{el.title}</h4>
                <div className="profile-hoe-card">
                  <img key={el.imageP} src={el.imageP} alt="" />
                  <div>
                    <h5 key={el.name}>{el.name}</h5>
                    <p key={el.role}>{el.role}</p>
                  </div>
                </div>
                <div className="info-card-home">
                  <p key={el.clases}>
                    <i className="bi bi-folder2-open"></i> {el.clases}
                    Clases
                  </p>
                  <p key={el.folowers}>
                    <i className="bi bi-person"></i> {el.folowers}
                  </p>
                  <p>
                    <i className="bi bi-star"></i> 5.0
                  </p>
                </div>
                <div className="footer-card-home">
                  <button type="button" className="btn btn-ptimary" onClick={()=> navigate('/confirm')}>
                    Buy Now
                  </button>
                  <span key={el.price}>${el.price}USD</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmBuy;
