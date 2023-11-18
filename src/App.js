import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import './index.css'
import Home from './Home';
import About from "./About";
import Service from './Service';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom'; // Import both Switch and Route from 'react-router-dom'

function App() {
  return (

    <> 
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home} /> {/* Use component instead of Component */}
      <Route exact path='/about' component={About} /> {/* Correct the path */}
      <Route exact path='/service' component={Service} /> {/* Correct the path */}
      <Route exact path='/contact' component={Contact} /> {/* Correct the path */}
      <Route exact path='/home' component={Home} /> {/* Correct the path */}
    </Switch>

    </>
  ); 
}

export default App;
