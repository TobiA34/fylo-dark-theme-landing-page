import React from 'react'
import securityImg from "../images/icon-security.svg";
import phoneImg from "../images/icon-phone.svg";
import collabImg from "../images/icon-collaboration.svg";
import fileImg from "../images/icon-any-file.svg";
import accessAnyWhereImg from "../images/icon-access-anywhere.svg";

function Info() {
  return (
    <div className="text-info reset">
      <div class="container mt-120 text-center text-light">
        <div className="row d-flex align-items-center justify-items-center">
          <div class="col-sm-12 col-md-6">
            <img src={accessAnyWhereImg} alt="" className="icon" />
            <h1 className="fs-4">Access your files, anywhere</h1>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div class="col-sm-12 col-md-6">
            <img src={securityImg} alt="" className="icon" />
            <h1 className="fs-4">Security you can trust</h1>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div class="col-sm-12 col-md-6 mt-4">
            <img src={collabImg} alt="" className="icon" />
            <h1 className="fs-4">Real-time collaboration</h1>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div class="col-sm-12 col-md-6 mt-4">
            <img src={fileImg} alt="" className="icon" />
            <h1 className="fs-4">Store any type of file</h1>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info
