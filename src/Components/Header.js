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
                  <h1 className="display-6 text-white mb-0 username">
                    Mobile Software Engineer Based in India.
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
                        src="img/about_raj_profile.jpg"
                        className="img-fluid w-100"
                        style={{
                          borderRadius: "68% 32% 100% 0% / 0% 75% 25% 100%",
                        }}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h4 className="display-6 mb-4">Mobile Software Engineer</h4>
                    <p className="mb-4">
                      I'm an experienced Software Engineer with over 3 years of expertise in Native Android app development, specializing in Java, Kotlin, and Android SDK.
                    </p>

                    <p className="mb-4">
                      I’m proficient in MVVM architecture, Android ViewModels, Kotlin coroutines, LiveData, Jetpack Compose, and Retrofit, with a proven track record of delivering high-quality solutions that align with customer requirements.
                    </p>

                    <p className="mb-4">
                      Skilled in optimizing app performance, enhancing user experience, and driving project success, I am eager to leverage my skills and contribute to the growth and success of your team.
                    </p>
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
                      <p className="text-dark mb-0">https://github.com/ChaudharyRaj</p>
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
                        href="#"
                      >
                        <i className="fab fa-facebook-f text-white"></i>
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square me-3"
                        href="#"
                      >
                        <i className="fab fa-twitter text-white"></i>
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square me-3"
                        href="#"
                      >
                        <i className="fab fa-instagram text-white"></i>
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square me-0"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in text-white"></i>
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
