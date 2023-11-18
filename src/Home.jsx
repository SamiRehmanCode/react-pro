import React from "react";
import web from '../src//images/img1.jpg'

import Common from './Common'
function Home() {
  return (
    <Common 
    name='Grow your business with '
     imgsrc={web} 
     visit='/contact'
     btname='Get Started'/>
  );
}

export default Home;
