import React from "react";
import productiveImg from "../images/illustration-stay-productive.png";

function Productive() {
  return (
    <div className="text-light mt-120 reset overflow-hidden p-5">
      {" "}
      {/* Added overflow-hidden */}
      <div className="row d-flex align-items-center">
        <div className="col-sm-12 col-md-6 mt-4">
          <img src={productiveImg} alt="" className="img-fluid" />{" "}
          {/* Added img-fluid */}
        </div>
        <div className="col-sm-12 col-md-6 mt-4">
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a className="text-underline" href="">
            <u>See how Fylo works</u>
          </a>
          <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default Productive;
