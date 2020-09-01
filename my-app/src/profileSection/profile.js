import React from 'react';
import classes from "./profile.module.css"
import Tickgrey from "../images/tick-gray.png";
import Tickblue from "../images/tick-blue.png";
import UserPink from "../images/user-pink.png";
import UserOrange from "../images/user-orange.png";
import UserBlue from "../images/user-blue.png";
import UserRed from "../images/user-red.png";

function profileSection(){
    return(
        <div className={classes.profileSection}> 
        <div className={classes.profile}>
          <img src={Tickgrey} alt=""/>
          <h1>Dmm design</h1>
          <img className={classes.profileImage} src={UserPink} alt=""/>
          <p>20Dec</p>
          <button className={classes.btn1}></button>
        </div>  
        <div className={classes.profileBlue}> 
        <div className={classes.profile}>
          <img src={Tickblue} alt=""/>
          <h1>Blurr animation</h1>
          <img  className={classes.profileImage} src={UserOrange} alt=""/>
          <p>22Dec</p>
          <button className={classes.btn2}></button>
        </div>
        </div>
  
        <div className={classes.profile}>
          <img src={Tickgrey} alt=""/>
          <h1>illustration</h1>
          <img  className={classes.profileImage} src={UserBlue} alt=""/>
          <p>26Dec</p>
          <button className={classes.btn3}></button>
        </div>
  
        <div className={classes.profile}>
          <img src={Tickgrey} alt=""/>
          <h1>Refunds</h1>
          <img  className={classes.profileImage} src={UserRed} alt=""/>
          <p>28Dec</p>
          <button className={classes.btn4}></button>
        </div>
        </div>
  
    )
}
 
      export default profileSection