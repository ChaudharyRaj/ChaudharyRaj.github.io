import React from "react";

function Portfolio() {
  return (
    <div class="container-fluid">
      <div class="container">
        <div class="row g-0">
          <div class="col-lg-3">
            <div class="portfolio-header h-100 bg-dark pt-6 pe-6 pb-6">
              <div
                class="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <p class="text-white sub-title">Portfolio</p>
                <h1 class="display-6 text-white mb-0">My Recent Works</h1>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="portfolio-content h-100 pt-6 ps-6 pb-6">
              <div
                class="py-5 border-bottom wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div class="row g-4 align-items-center">
                  <div class="col-xl-6">
                    <h4 class="text-body">Point of Sale (POS) App</h4>
                    <h2 class="display-6 mb-0">
                      Universal downloader 
                      by Global Payments
                    </h2>
                  </div>
                  <div class="col-12 col-xl-6">
                    <div class="portfolio-img">
                      <div class="portfolio-img-inner">
                        <img
                          src="img/24-mobile-730x580_2209.webp"
                          class="img-fluid"
                          alt="portfolio"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="py-5 border-bottom wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div class="row g-4 align-items-center">
                <div class="col-xl-6">
                  <div>
                    <h4 class="text-body">Time Intelligence Mobile App</h4>
                    <h1 class="display-6 mb-0">
                      Replicon Timesheets - Time Tracking App
                    </h1>
                  </div>
                  <br></br>
                  <h5  class="text-body">
                      <a href="https://play.google.com/store/apps/details?id=com.repliconandroid&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}>
                         <img
                          src="img/google-play-icon.png"
                          alt="Google Play Store"
                          style={{ width: "150px", height: "auto" }} // Adjust size as needed
                        />
                    </a>
                  </h5>
                </div>
                  <div class="col-12 col-xl-6">
                    <div class="portfolio-img">
                      <div class="portfolio-img-inner">
                        <img
                          src="img/mobile-time-tracking.webp"
                          class="img-fluid"
                          alt="portfolio-2"
                        />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

               <div
                class="py-5 border-bottom wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div class="row g-4 align-items-center">
                  <div class="col-xl-6">
                    <h4 class="text-body">Digital Classroom - Mobile App</h4>
                    <h2 class="display-6 mb-0">
                      A smart learning app designed to simplify education <br></br>
                      by 3RI Technologies
                    </h2>
                    <br></br>
                    <h5  class="text-body">
                      <a href="https://play.google.com/store/apps/details?id=in.testpress.Threeritechnologies&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}>
                         <img
                          src="img/google-play-icon.png"
                          alt="Google Play Store"
                          style={{ width: "150px", height: "auto" }} // Adjust size as needed
                        />
                    </a>
                  </h5>
                  </div>
                  <div class="col-12 col-xl-6">
                    <div class="portfolio-img">
                      <div class="portfolio-img-inner">
                        <img
                          src="img/3ritechnologiesapp-preview (1).png"
                          class="img-fluid"
                          alt="portfolio-2"
                        />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
