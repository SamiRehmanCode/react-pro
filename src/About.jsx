import React from "react";
import web from '../src/images/img1.jpg'
import Common from "./Common";

function About() {
  return (
    <>
      <Common name='welcome to about page 
      ' imgsrc={web} 
      visit='/contact' 
      btname='Contact Now' />
    </>
  );
}

export default About;
