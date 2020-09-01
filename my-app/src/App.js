import React from 'react';
import Topbar from "./topbar/topbar";
import classes from './App.module.css';
import Middlesection from './middleSection/middelSection';
import ProfileSection from "./profileSection/profile"
 

function App() {
  return (
    <div className={classes.App}>
      <Topbar/>
      <Middlesection/>
      <ProfileSection/>
       
    </div>
  );
}

export default App;
