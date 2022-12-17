import React from "react";
import Form from "react-bootstrap/Form";
import Stepper from '@mui/material/Stepper';

import player from "../assets/player.svg";

const Player = () => {
    let clases = []
    for (let i = 0; i < 10; i++){
        clases.push({
            name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit,',
            completed: false
        })
    }
  return (
    <>
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
                    label="Payment methods"
                    name="group1"
                    type="radio"
                    id="Payment-methods"
                  />
                  <Form.Check
                    label="Purchase history"
                    name="group1"
                    type="radio"
                    id="Purchase-history"
                  />
                  <Form.Check
                    label="U credits"
                    name="group1"
                    type="radio"
                    id="U-credits"
                  />
                </div>
              </Form>
            </div>
            <div className="description">
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
              facilisi. <br />
              <br /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
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
              facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. <br />
              <br /> Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat
            </div>
          </div>
        </div>
        <div className="flow-class-player">
          <div className="reports-payer">
            <h2>Course content</h2>
            <div>
            <button type="button" className="btn btn-primary"><i className="bi bi-person-fill"></i> instrictor</button>
            <button type="button" className="btn btn-primary"><i classname="bi bi-exclamation-circle"></i> instrictor</button>
            </div>
          </div>
          <div className="clases-player">
            <div className="info-clases">
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
