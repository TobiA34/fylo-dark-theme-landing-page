import React from "react";

function Contact() {
  return (
    <div className="container d-flex justify-content-center mt-170">
      <div className="card w-100 p-4">
        <h1 className="text-center">Get early access today</h1>
        <p className="text-center">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="form mt-4">
          <div className="row justify-content-center">
            {/* Form Column */}
            <div className="col-12 d-flex flex-column gap-2 mx-auto">
              <div className="row w-100">
                {/* Input takes 70% on md and 100% on smaller screens */}
                <div className="col-12 col-md-8 mb-2 mb-md-0">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="form-control w-100"
                  />
                </div>
                {/* Button takes 30% on md and 100% on smaller screens */}
                <div className="col-12 col-md-4">
                  <button className="btn btn-primary contact-btn w-100">
                    Get Started For Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
