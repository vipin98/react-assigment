import React from 'react';
import classes from "./middleSection.module.css"
import ArrowDown from "../images/arrow-down.png";
import ArrowUp from "../images/arrow-up.png";
import LandingImage from "../images/landing-section-image.png";

function middlesection () {
  return (
<div className={classes.middelSection}> 
 
       <div className={classes.discription}>
        <h1>Stunning <br/>Workplace.</h1>
        <p>with stunning, remote teams can organize projects, manage sgifting priorities, and get work done.</p>
        <div className={classes.btnImageSection}> 
        <button className={classes.btn}>New Account</button>
        <img  className={classes.image} src={ArrowUp} alt="arrow-up"/>
      <img  className={classes.image} src={ArrowDown} alt="arrow-down"/>
      </div>
      </div>
      <div className={classes.landingImage} > 
        <img src={LandingImage} alt="landing image"/>
      </div>
      </div>
      );
}
      export default middlesection