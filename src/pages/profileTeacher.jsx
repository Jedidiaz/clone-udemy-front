import React from "react";
import "../styles/helpCenter.css";

//header and footer
import Header from "./shared/headerStudent";
import Footer from "./shared/footerTeach";

//images
import help from "../assets/helpCenter.svg";

import Imagetest1 from "../assets/Imagetest1.svg";
import profile from "../assets/profileTeacher.svg";
import { display } from "@mui/system";

const ProfileTeacher = () => {
  let cards = [];
  for (let i = 0; i < 3; i++) {
    cards.push({
      image: Imagetest1,
      title: "Machine Learning and Data Science with Python",
      imageP: profile,
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
      <div className="container">
        <section className="description-helpCenter">
          <div className="contentet-heelp">
            <h1 style={{ fontWeight: "700" }}>Jose Lopez</h1>
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
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
              autem vel eum iriure dolor in hendrerit in vulputate velit esse
              molestie consequat, vel illum dolore eu feugiat nulla facilisis at
              vero eros et accumsan et iusto odio dignissim qui blandit praesent
              luptatum zzril delenit augue duis dolore te feugait nulla
              facilisi.
              <span id="more" style={{display: 'none'}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat. Duis autem vel eum iriure dolor in hendrerit
                in vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla facilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                autem vel eum iriure dolor in hendrerit in vulputate velit esse
                molestie consequat, vel illum dolore eu feugiat nulla facilisis
                at vero eros et accumsan et iusto odio dignissim qui blandit
                praesent luptatum zzril delenit augue duis dolore te feugait
                nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit
                lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                eum iriure dolor in hendrerit in vulputate velit esse molestie
                consequat, vel illum dolore eu feugiat nulla facilisis at vero
                eros et accumsan et iusto odio dignissim qui blandit praesent
                luptatum.
              </span>
            </p>
            <button
              id="btnReadMore"
              className="btn btn-secondaty"
              type="buttom"
              style={{textDecoration: 'underline'}}
              onClick={el => readMore()}
            >
              Show more
            </button>
          </div>
          <div className="profile-teacher-buttons">
            <img src={profile} style={{ width: "100%" }} />
            <button type="buttom" className="btn btn-secondary">
              Website
            </button>
            <button type="buttom" className="btn btn-secondary">
              Linked in
            </button>
            <button type="buttom" className="btn btn-secondary">
              Youtube
            </button>
          </div>
        </section>
        <br />
        <br />
        <section className="topics-profile">
          <h1 style={{ fontWeight: "700" }}>My courses</h1>
          <br />
          <div className="card-contenedor-homeStudends" >
            {cards?.map((el) => (
              <article className="card-Home" style={{ width: "auto" }}>
                <img
                  key={el.image}
                  src={el.image}
                  className="image-card-home"
                />
                <h4 key={el.title} style={{ fontWeight: "700" }}>
                  {el.title}
                </h4>
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
        </section>
      </div>
      <Footer />
    </>
  );
  function readMore(){
    const btn = document.getElementById('btnReadMore')
    const more = document.getElementById('more')
    if (more.style.display === 'none' ){
      btn.innerHTML = 'Show more'
      more.style.display = 'block'
    }else{
      btn.innerHTML = 'Show more'
      more.style.display = 'none'
    }
  }
};

export default ProfileTeacher;
