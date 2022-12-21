import React from "react";
import Form from "react-bootstrap/Form";
import Header from '../pages/shared/headerPlayer'
import Footer from '../pages/shared/footer'
import "../styles/player.css";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import player from "../assets/player.svg";

const Player = () => {
  let clases = [];
  for (let i = 0; i < 10; i++) {
    clases.push({
      name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
      completed: false,
    });
  }

  const styleH2 = {
    fontSize: '20px',
    textAlign: 'center'
  }

  //steper
  const [activeStep, setActiveStep] = React.useState(1);
  return (
    <>
    <Header />
      <div className="contenedor-player">
        <div className="player-player">
          <div className="video-player">
            <img src={player} />
          </div>
          <div className="info-player">
            <div className="selectors">
              <Form>
                <div className="mb-3">
                  <Form.Check
                    label="Description"
                    name="group3"
                    type="radio"
                    id="Description"
                  />
                  <Form.Check
                    label="Reviews"
                    name="group3"
                    type="radio"
                    id="Reviews"
                  />
                  <Form.Check
                    label="learning tools"
                    name="group3"
                    type="radio"
                    id="learning-tools"
                  />
                </div>
              </Form>
            </div>
            <div className="description">
              <p>
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
                dolore te feugait nulla facilisi. <br />
                <br /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
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
                tincidunt ut laoreet dolore magna aliquam erat volutpat. <br />
                <br /> Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat
              </p>
            </div>
          </div>
        </div>
        <div className="follow-class-player">
          <div className="reports-player">
            <h2 style={styleH2}>Course content</h2>
            <div>
              <button type="button" className="btn btn-primary">
                <i className="bi bi-person-fill"></i> instructor
              </button>
              <button type="button" className="btn btn-primary">
                <i className="bi bi-exclamation-circle"></i> Report a problem
              </button>
            </div>
          </div>
          <div className="clases-player">
            <div className="info-clases">
              {clases.map((el) => (
                <p>
                  <span key={el.name}>{el.name}</span>
                </p>
              ))}
            </div>
            <div className="stepper-clases">
              <Stepper activeStep={activeStep} orientation="vertical">
                {clases.map(() => (
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
          </div>
        </div>
      </div>
    <Footer />  
    </>
  );
};

export default Player;
