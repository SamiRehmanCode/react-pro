import React from "react";
import Cards from "./Cards";
import Picdata from "./Picdata";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center" style={{ textAlign: 'center' }}>Our Services</h1>
        <div className="container-fluid mb-5 d-fluid">
          <div className="row">
            <div className="col-5 mx-auto">
              <div className="row gy-4">
                {Picdata.map((val, index) => (
                  <Cards key={index} image={val.imgsrc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
