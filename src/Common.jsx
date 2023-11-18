import React from "react";

import    {NavLink} from 'react-router-dom'
function Common(props) {
  return (
    <section id="header" className="bg-light py-5 d-flex align-items-center" >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 order-2 order-md-1 d-flex justify-content-center flex-column">
            <h1 className="display-4">
              {props.name} <strong className="brand-name">Sam</strong>
            </h1>
            <h2 className="lead my-4">
              We are a team of talented developers creating beautiful and
              functional websites for your business.
            </h2>
            <div className="mt-4">
              <NavLink to={props.visit} className="btn btn-primary btn-lg">
               {props.btname}
              </NavLink>
            </div> 
          </div>

          <div className="col-lg-6 order-1 order-md-2 header-img">
            <img
              src={props.imgsrc}  // Replace with your image URL
              alt="Professional Graphic"
              className="img-fluid animated "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Common ;
