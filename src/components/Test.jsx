import React from "react";
import profile1Img from "../images/profile-1.jpg";
import profile2Img from "../images/profile-2.jpg";
import profile3Img from "../images/profile-3.jpg";
import quotes from "../images/bg-quotes.png";

function Test() {
  return (
    <div className="container-fluid position-relative py-4 p-3 mt-170">
      {/* Overlay image */}
      <div className="quotes-overlay">
        <img src={quotes} alt="Quotes Background" className="quotes"/>
      </div>

      {/* Cards Row */}
      <div className="row position-relative">
        {/* First Card */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card p-3 h-100 w-100">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="d-flex align-items-center gap-2">
              <div>
                <img src={profile1Img} alt="Satish Patel" className="avatar" />
              </div>
              <div>
                <h6>Satish Patel</h6>
                <h6>Founder & CEO, Huddle</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card p-3 h-100 w-100">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="d-flex align-items-center gap-2">
              <div>
                <img
                  src={profile2Img}
                  alt="Bruce McKenzie"
                  className="avatar"
                />
              </div>
              <div>
                <h6>Bruce McKenzie</h6>
                <h6>Founder & CEO, Huddle</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card p-3 h-100 w-100">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="d-flex align-items-center gap-2">
              <div>
                <img src={profile3Img} alt="Iva Boyd" className="avatar" />
              </div>
              <div>
                <h6>Iva Boyd</h6>
                <h6>Founder & CEO, Huddle</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
