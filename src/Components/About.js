/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function About() {
  return (
    <div className="container-fluid" id="pigraAbout">
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-lg-3">
            <div className="about-header bg-dark h-100 pt-6 pe-6 pb-6">
              <div
                className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <p className="text-white sub-title">About Me</p>
                <h1 className="display-6 text-white mb-0">
                  Mobile Software Engineer II - Android INDIA since 2021
                </h1>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="about-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-5">
                <div className="col-xl-5">
                  <div
                    className="about-img bg-light p-4 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <img
                      src="img/aboutme.jpg"
                      className="img-fluid w-100"
                      alt="about img"
                    />
                    <div className="sosial-icon">
                      <a
                        className="btn btn-primary btn-sm-square mb-3"
                        href="#"
                      >
                        <i className="fab fa-facebook-f text-white"></i>
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square mb-3"
                        href="#"
                      >
                        <i className="fab fa-twitter text-white"></i>
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square mb-3"
                        href="#"
                      >
                        <i className="fab fa-instagram text-white"></i>
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square mb-0"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 wow fadeInUp" data-wow-delay="0.3s">
                  <h4 className="mb-4">About me,</h4>
                  <p className="mb-4">I’m Raj Kumar Chaudhary, a Software Engineer with over 3 years of experience in Android app development. 
                  I specialize in Java, Kotlin, and the Android SDK, with a strong focus on MVVM architecture, Android ViewModels, Kotlin coroutines, Jetpack Compose, and Retrofit.
                  </p>
                  <p className="mb-4">
                    I have a proven track record of delivering high-quality mobile solutions that enhance user experience and meet customer needs. 
                    Currently, I’m part of the Android team at Global Payments Inc., working on secure and efficient payment apps.
                  </p>

                  <p className="mb-4">
                    Outside of work, I’m always exploring new tech trends and finding ways to innovate in mobile development.
                  </p>
                  <a href="https://drive.google.com/file/d/1LPnx-2hKHd3B-ttG0nB1q_Xmorr5yPed/view?usp=sharing"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary py-2 px-4"> {" "}
                    <i className="fas fa-download me-2"></i>Download My CV
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

export default About;
