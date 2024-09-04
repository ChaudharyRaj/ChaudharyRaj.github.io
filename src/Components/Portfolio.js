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
                class="portfolio-item py-5 border-bottom wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div class="row g-4 align-items-center">
                  <div class="col-xl-6">
                    <h4 class="text-body">Time Intelligence App</h4>
                    <h2 class="display-6 mb-0">
                    Replicon Time Tracking App – Mobile Timesheets
                    </h2>
                  </div>
                  <div class="col-9 col-xl-4">
                    <div class="portfolio-img">
                      <div class="portfolio-img-inner">
                        <img
                          src="img/mobile-time-tracking.webp"
                          class="img-fluid"
                          alt="portfolio"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-3 col-xl-2">
                    <div class="view-img">
                      <a
                        href=""
                        class="btn btn-primary btn-lg-square"
                        data-lightbox="Portfolio-1"
                      >
                        <i class="fas fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="portfolio-item py-5 border-bottom wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div class="row g-4 align-items-center">
                  <div class="col-xl-6">
                    <h4 class="text-body">Web Development</h4>
                    <h1 class="display-6 mb-0">
                      Website Development for ABC Corporation
                    </h1>
                  </div>
                  <div class="col-9 col-xl-4">
                    <div class="portfolio-img">
                      <div class="portfolio-img-inner">
                        <img
                          src="img/portfolio-2.jpg"
                          class="img-fluid"
                          alt="portfolio-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-3 col-xl-2">
                    <div class="view-img">
                      <a
                        href="img/portfolio-2.jpg"
                        class="btn btn-primary btn-lg-square"
                        data-lightbox="portfolio-2"
                      >
                        <i class="fas fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="portfolio-item py-5 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div class="row g-4 align-items-center">
                  <div class="col-xl-6">
                    <h4 class="text-body">Photography</h4>
                    <h1 class="display-6 mb-0">
                      Security Analysis for ABC Corporation
                    </h1>
                  </div>
                  <div class="col-9 col-xl-4">
                    <div class="portfolio-img">
                      <div class="portfolio-img-inner">
                        <img
                          src="img/portfolio-3.jpg"
                          class="img-fluid"
                          alt="portfolio-3"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-3 col-xl-2">
                    <div class="view-img">
                      <a
                        href="img/portfolio-3.jpg"
                        class="btn btn-primary btn-lg-square"
                        data-lightbox="portfolio-3"
                      >
                        <i class="fas fa-plus"></i>
                      </a>
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
