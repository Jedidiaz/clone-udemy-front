import React from "react";
import '../styles/cart.css'

//import header and footer
import Header from "./shared/headerStudent";
import Footer from "./shared/footerBusiness";

//import images
import Imagetest1 from "../assets/Imagetest1.svg";
import HomestProfile from "../assets/HometestProfile.svg";
//import images cards
import visa from "../assets/visa.png";
import masterCard from "../assets/mastercard.svg";
import americaE from "../assets/american-express.png";
import paypal from "../assets/paypal.png";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate()

  let card = [];
  for (let i = 0; i < 4; i++) {
    card.push({
      image: Imagetest1,
      title: "Machine Learning and Data Science with Python",
      imageP: HomestProfile,
      name: "Ana Maria Diaz",
      role: "Engineer",
      price: "60.99",
      sub: "Subtitle (Espanish, English,Italian)",
      audio: "English (original)",
    });
  }


  const titleStyle = {
    display: 'flex',
    gap: '10px',
    allignItem: 'center',
    justifyContent: 'space-between',
  }

  const statsStyke = {
    display: 'flex',
    gap: '10px',
    allignItem: 'center',
    justifyContent: 'space-between'
  }

  const imageStyle = {
    width: '100%',
    borderRadius: '20px'
  }

  const styles = {
    styleP: {
      fontSize: '14px', 
      margin: '0',
      fontWeight: '600'
    },
    styleCards:{
      display: 'flex',
      gap: '10px'
    }
  }
  return (
    <>
      <Header />
      <div className="container contenedorCart" style={{paddingTop: '3%'}}>
        <div className="info-cart">
          <h2>
            Carrito (<span>5</span> cursos)
          </h2>
          <button type="button" className="btn btn-secondary" onClick={()=> navigate('/categories')}>
            Continuar comprando <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="content-cart">
          {card.map((item) => (
            <article className="cart-card">
                <div className="image1-card-cart" >
                <img key={item.image} src={item.image} style={imageStyle}/>
                </div>
              <div className="description-card-cart">
                <div style={titleStyle} className="title-description-cart">
                  <h2 style={{fontSize: '18px'}}>Machine Learning and Data Science with Python</h2>
                  <p style={{fontSize: '24px', cursor: 'pointer'}}><i className="bi bi-trash3"></i></p>
                </div>
                <div className="prifile-teacher-cart" style={{width: '100%'}}>
                  <img key={item.imageP} src={item.imageP} style={{width: '50px'}} id="image1" />
                  <div>
                    <span key={item.name}>{item.name}</span>
                    <p key={item.role}>{item.role}</p>
                  </div>
                </div>
                <h3 key={item.price} style={{color: '#898989'}} >${item.price}USD</h3>
                <div style={statsStyke}>
                  <div>
                    <p key={item.sub} style={styles.styleP} >
                      <i className="bi bi-badge-cc"></i> {item.sub}
                    </p>
                    <p key={item.audio} style={styles.styleP}>
                      <i className="bi bi-volume-up-fill"></i> {item.audio}
                    </p>
                  </div>
                  <p style={{fontWeight: '700'}} id="star" >
                    <i className="bi bi-star-fill" style={{color: '#F3B601'}} ></i> 5.0
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="info-cart">
          <h2>Total</h2>
          <h3 style={{fontWeigth: '400'}}>$210.00 USD</h3>
        </div>
        <div className="buttons-credit-cards">
            <div style={styles.styleCards}>
                <input type="radio" id="visa" name="credit-card"/>
                <label htmlFor="visa"><img src={visa} /></label>
            </div>
            <div style={styles.styleCards}>
                <input type="radio" id="mastercard" name="credit-card"/>
                <label htmlFor="mastercard"><img src={masterCard} /></label>
            </div>
            <div style={styles.styleCards}>
                <input type="radio" id="american" name="credit-card"/>
                <label htmlFor="american"><img src={americaE} /></label>
            </div>
            <div style={styles.styleCards}>
                <input type="radio" id="paypal" name="credit-card"/>
                <label htmlFor="paypal"><img src={paypal} /></label>
            </div>
        </div>
        <div className="tramitar-cart">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit</p>
            <br />
            <a href={"/payment-method"}>
              <button type="button" className="btn btn-secondary" ><i className="bi bi-cart3"></i> Tramitar pedido</button>
            </a>
            
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
