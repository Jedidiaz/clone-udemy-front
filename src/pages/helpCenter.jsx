import React from "react";
import '../styles/helpCenter.css'
//header and footer
import Header from "./shared/headerStudent";
import Footer from "./shared/footerTeach";

//images
import help from "../assets/helpCenter.png";

import Imagetest1 from "../assets/Imagetest1.svg";
import profile from "../assets/profileTeacher.svg";

const HelpCenter = () => {
  let topic = [];
  for (let i = 0; i < 12; i++) {
    topic.push({
      image: Imagetest1,
      title: "Lorem ipsum dolor sit amet...",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci...",
      imageP: profile,
    });
  }

  //style
  const styles = {
    styleProfileCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px'
    },
    styleButtom: {
        backgroundColor: '#232323',
        border: '0',
        borderRadius: '10px',
        padding: '10px',
        fontSize: '18px'
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <section className="description-helpCenter">
          <div className="contentet-heelp">
            <h1 style={{fontWeight: '700'}}>Help Center</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.{" "}
            </p>
          </div>
          <img src={help} style={{width: '100%'}} />
        </section>
        <br />
        <br />
        <section className="topics-helpCenter">
            <h1 style={{fontWeight: '700'}}>Topics</h1>
            <br />
          <div className="content-topics-help">
            {topic.map((item) => (
              <article className="topic">
                <img key={item.image} src={item.image} style={{width: '100%'}} id='imageHelp' />
                <div className="description-topic" style={{padding: '0 10px'}}>
                  <h5 key={item.title} style={{fontWeight: '700'}}>{item.title}</h5>
                  <p key={item.description}>{item.description}</p>
                </div>
                <div style={styles.styleProfileCard}>
                  <div className="teacher-profile-topic">
                    <img key={item.imageP} src={item.imageP} style={{width: '60px'}} />
                    <div>
                      <h5 style={{fontSize: '18px'}}>Jose Lopez</h5>
                      <span style={{color: '#909090'}}>IT manager</span>
                    </div>
                  </div>
                  <button type="button" className="btn btn-secondary" style={styles.styleButtom}>Read more</button>
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

export default HelpCenter;
