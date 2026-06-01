/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Header() {
  return (
    <>
      <div className="container-fluid" id="pigraHome">
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-lg-3">
              <div className="header-content bg-dark h-100 pt-6 pe-6 pb-6">
                <a
                  href="index.html"
                  className="navbar-brand d-inline-flex pb-5 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  {/* <h1 className="display-6 text-white mb-0">Pigra</h1> */}
                </a>
                <div
                  className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <p className="text-white sub-title">
                    👋 Hello I'm Raj Chaudhary
                  </p>
                  <h1 className="display-6 text-white  mb-0 username">
                    Mobile Software Engineer - Based in India
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div className="header-img d-flex h-100 pt-6 ps-6 pb-6">
                <div className="row g-5">
                  <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div
                      className="bg-light p-4"
                      style={{
                        borderRadius: "68% 32% 100% 0% / 0% 75% 25% 100%",
                      }}
                    >
                      <img
                        src="img/my-photo-new.jpg"
                        className="img-fluid w-100"
                        style={{
                          borderRadius: "68% 32% 100% 0% / 0% 75% 25% 100%",
                        }}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h4 className="display-6 mb-4">Associate Senior Software Engineer</h4>
                    <p className="mb-4"> I’m an Associate Senior Software Engineer with 5+ years of experience in Android application development, specializing in building scalable, secure, and high-performance Android applications and payment solutions.</p>
                    <p className="mb-4" > My expertise includes Kotlin, Java, Android SDK, MVVM, Jetpack, Coroutines, REST APIs, and Firebase, with hands-on experience in POS systems, payment solutions, and enterprise applications. I have contributed to products supporting payment processing, application distribution, and multi-vendor device ecosystems.</p>
                    <p className="mb-4">Passionate about solving complex engineering challenges, improving software quality, and delivering reliable user experiences, I continuously strive to build impactful products that create real business value.</p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-map-marker-alt text-primary me-3"></i>
                      <p className="text-dark mb-0">Pune INDIA</p>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-envelope text-primary me-3"></i>
                      <p className="text-dark mb-0">chaudharyrajkumar173@gmail.com</p>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                    <i className="fab fa-github text-primary me-3"></i>
                        <a href="https://github.com/ChaudharyRaj" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
                      <p className="text-dark mb-0">https://github.com/ChaudharyRaj</p>
                      </a>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fa fa-phone-alt text-primary me-3"></i>
                      <p className="text-dark mb-0">(+91) 9110910890</p>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <i className="fab fa-firefox-browser text-primary me-3"></i>
                      <p className="text-dark mb-0">rajchaudhary.com</p>
                    </div>
                    <div className="d-flex">
                      
                      <a
                        className="btn btn-primary btn-sm-square me-3"
                        href="https://www.linkedin.com/in/raj-chaudhary-582861159/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in text-white"></i>
                       
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square me-3"
                        href="https://x.com/Im_RajChaudhary"
                        target="_blank"
                      >
                        <i className="fab fa-twitter text-white"></i>
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square me-3"
                        href="https://www.instagram.com/the.rkch/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram text-white"></i>
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square me-0"
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=100010734795804"
                      >
                        <i className="fab fa-facebook-f text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
