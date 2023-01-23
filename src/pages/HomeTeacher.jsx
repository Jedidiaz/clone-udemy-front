import React from "react";
import "../styles/homeTeacher.css";
//header and footer
import Header from "../pages/shared/header";
import Footer from "../pages/shared/footer";
//images
import home1 from "../assets/homeTeacher1.svg";
import home2 from "../assets/homeTeacher2.svg";
import home3 from "../assets/hometeacher3.svg";

const HomeTeacher = () => {
  const styles = {
    styleDivwhawedo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "30px",
      marginTop: "30px",
      width: "100%",
      maxWidth: '500px',
      textAlign: 'end'
    },
    styleDivFooter: {
      display: "flex",
      gap: "10px",
      padding: "10px",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "#2F2F2F",
    },
    styleSpan: {
      textAlign: "center",
      color: "#F3B601",
    },
    styleDivS3: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
    }
  };

  return (
    <>
      <Header />
      <div className="content-HomeBusiness">
        {/* section 1 */}
        <section className="section1HomeTeacher">
          <div className="descriptionSection1HomeTeacher">
            <div className="container s1ht">
              <h1 style={{ color: "#F3B601", fontWeight: "700" }}>
                Teach and profit from it
              </h1>
              <p style={{ color: "#959595" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                lacus vel facilisis.
              </p>
              <br />
              <br />
              <button
                className="btn btn-warning"
                type="button"
                style={{
                  color: "#545353",
                  padding: "15px 50px",
                  fontSize: "20px",
                }}
              >
                learn more
              </button>
            </div>
            <div className="imageHomeTeacher1">
              <img src={home1} className="imageSectionUnoTeacher" style={{width: '100%'}}/>
            </div>
          </div>
          <div style={{backgroundColor: '#2F2F2F'}}>
          <div style={styles.styleDivFooter} className="barSection1 container">
            <span style={styles.styleSpan}>
              <h3>50</h3>
              <p>available countries</p>
            </span>
            <span style={styles.styleSpan}>
              <h3>50</h3>
              <p>languages</p>
            </span>
            <span style={styles.styleSpan}>
              <h3>50</h3>
              <p>corporate customers</p>
            </span>
            <span style={styles.styleSpan}>
              <h3>50</h3>
              <p>payment methods</p>
            </span>
          </div>
          </div>
        </section>
        {/* section 2 */}
        <section style={{ margin: "50px 0" }} id="ww">
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
            How to begin
          </h1>
          {/* content */}
          <div className="container section4HomeBusiness">
            <div style={styles.styleDivwhawedo} className="desSection4HomeT">
              <h2 style={{ color: "#F3B601", fontWeight: "bold" }}>
                Design a program
              </h2>
              <br />
              <div style={{width: '100%', display: 'flex', justifyContent: 'end'}}>
              <p style={{ color: "#959595", width: "180px" }}>
                Enterprise-Wide Training Small Team Training Tech Team Training
                Leadership Development Dedicated Customer Success Team Remote &
                Hybrid Team Training
              </p>
              </div>
            </div>
            <div className="imageSection4HomeBusiness" style={{width: '300px'}}>
              <img src={home2} style={{ width: "100%" }} />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        {/* section 3 */}
        <section
          className="section3HomeTeacher"
          style={{marginBottom: '50px'}}
        >
          <div style={styles.styleDivS3} className="divS3ht">
            <h1 style={{ color: "#F3B601", fontWeight: "700" }}>Become an instructor today</h1>
            <p style={{ color: "#959595", fontSize: '18px', maxWidth: '400px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lacus
              vel facilisis.
            </p>
            <button
              className="btn btn-warning"
              type="button"
              style={{
                color: "#545353",
                padding: "15px 50px",
                fontSize: "20px",
              }}
            >
              learn more
            </button>
          </div>
          <br />
          <img src={home3} className="image2Hometeacher" style={{marginTop: '-20%'}}/>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomeTeacher;
