/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <div className="container-fluid footer bg-dark border-bottom-0">
      <div className="container wow fadeIn" data-wow-delay="0.1s">
        <div className="row g-0">
          <div className="col-12">
            <div className="footer-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-4 align-items-center">
                <div className="col-12 text-center">
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-light btn-md-square me-3"
                    href="https://www.linkedin.com/in/raj-chaudhary-582861159/"
                    target="_blank">
                     <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-light btn-md-square me-3"
                    href="https://x.com/Im_RajChaudhary"
                    target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-light btn-md-square me-3"
                    href="https://www.instagram.com/the.rkch/"
                    target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-light btn-md-square me-0"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100010734795804">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <span className="text-body">
                    All right reserved.
                  </span>
                </div>
                <div className="col-12 text-center text-body">
                  Designed By{" "}
                  <a
                    className="border-bottom text-white"
                    href="#"
                  >
                    @Raj Chaudhary
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
