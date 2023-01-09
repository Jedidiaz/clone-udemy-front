import React from "react";
import "../styles/payM.css";
//import header and footer
import Header from "./shared/headerStudent";
import Footer from "./shared/footerBusiness";

import Imagetest1 from "../assets/Imagetest1.svg";
import HomestProfile from "../assets/HometestProfile.svg";

//import images cards
import visa from "../assets/visa.svg";
import masterCard from "../assets/mastercard.svg";
import americaE from "../assets/americanExpress.svg";
import paypal from "../assets/paypallow.svg";
import paypalH from "../assets/paypal.svg";
import { Link } from "react-router-dom";

const PaymentMethod = () => {
  const styleContainer = {
    display: "flex",
    justifyContent: "center",
  };

  const dateStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    alignItems: "center",
  };

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
  return (
    <>
      <Header />
      <div className="container payMcontainer" style={styleContainer}>
        <div className="content mt-5">
          <h2 style={{ fontWeight: "700" }}>Confirma compra</h2>
          <br />
          <div className="card-payM">
            <div className="header-card-payM">
              <div>
                <input type="radio" id="cardP" name="PayM" />
                <label htmlFor="cardP" style={{marginLeft: '10px'}}>Pagar con tarjeta</label>
              </div>
              <div>
                <img src={visa} style={{ width: "50px" }} />
                <img src={masterCard} style={{ width: "50px" }} />
              </div>
            </div>
            <div className="body-card-payM">
              <div className="mb-3">
                <label htmlFor="number-card">Número de tarjeta</label>
                <input
                  type="text"
                  id="number-card"
                  className="form-control"
                  style={{ width: "70%" }}
                  placeholder="●●●●●●●●●●●●●●●●●●●●"
                />
              </div>
              <div style={dateStyle}>
                <label htmlFor="date-card">Fecha de expiración</label>
                <label htmlFor="cvv" style={{ marginRight: "10px" }}>
                  CVV
                </label>
              </div>
              <div style={dateStyle}>
                <div className="mb-3">
                  <input type="text" id="date-card" className="form-control" placeholder="Mes" />
                </div>
                <div className="mb-3">
                  <input type="text" id="date-card" className="form-control" placeholder="Mes" />
                </div>
                <div className="mb-3">
                  <input type="text" id="cvv" className="form-control" />
                </div>
              </div>
              <div>
                <div className="button-credit-card">
                  <button type="button" className="btn btn-secondary">
                    Completar Pago
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="paypal-payM">
            <div>
              <input type="radio" id="paypalP" name="PayM" />
              <label htmlFor="paypalP">Pagar con PayPal</label>
            </div>
            <img src={paypalH} />
          </div>
          <div className="coments-card-payM">
            <h2>Pago 100% seguro</h2>
            <p>
              Este certificado garantiza la seguridad de todas tus conexiones
              mediante cifrado.
            </p>
          </div>
          <div className="buttons-credit-cards">
            <div>
              <input type="radio" id="visa" name="credit-card" />
              <label htmlFor="visa">
                <img src={visa} />
              </label>
            </div>
            <div>
              <input type="radio" id="mastercard" name="credit-card" />
              <label htmlFor="mastercard">
                <img src={masterCard} />
              </label>
            </div>
            <div>
              <input type="radio" id="american" name="credit-card" />
              <label htmlFor="american">
                <img src={americaE} />
              </label>
            </div>
            <div>
              <input type="radio" id="paypal" name="credit-card" />
              <label htmlFor="paypal">
                <img src={paypal} />
              </label>
            </div>
          </div>
          <div className="tramitar-cart">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit
            </p>
            <br />
            <Link to={'/cart'}>
              <button type="button" className="btn btn-secondary">
                <i className="bi bi-cart3" style={{ color: "#000" }}></i> Ver
                carrito
              </button>
            </Link>
          </div>
        </div>
        <section className="also-be-interested">
           <h2 className="mb-5" style={{fontWeight: '700'}}>También puede interesarte</h2>
           <div className="card-contenedor-homeStudends" style={{gap: '30px'}}>
            {cards?.map((el) => (
              <article className="card-Home" style={{width: '350px'}}>
                <img key={el.image} src={el.image} className="image-card-home" />
                <h4 key={el.title} style={{fontWeight: '700'}}>{el.title}</h4>
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
                  <button type="button" className="btn btn-ptimary">
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

export default PaymentMethod;
