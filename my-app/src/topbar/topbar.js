import React from 'react';
import classes from "./topbar.module.css"
import StunningLogo from "../images/stunning-logo.png"

function topbar(){
    return(
        <div className={classes.Topbar}> 
        <div className={classes.logo}>
          <img src={StunningLogo} alt="logo"/>
        </div>
        <div className={classes.mainMenu}>
          <a className={classes.activeClass}>Home</a>
          <a className={classes.itmes}>About</a>
          <a className={classes.itmes}>Blog</a>
          <a className={classes.itmes}>Jobs</a>
        </div>
        <button>your Account</button>
        </div>
    );
}

export default topbar;