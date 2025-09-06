import React from "react";

function Contact() {
  return (
    <div class="container-fluid" id="pigraContact">
      <div class="container">
        <div class="row g-0">
          <div class="col-lg-3">
            <div class="contact-header h-100 bg-dark pt-6 pe-6 pb-6">
              <div
                class="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <p class="text-white sub-title">Contact Me</p>
                <h1 class="display-6 text-white mb-0">
                  Let’s Start A New Project
                </h1>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="contact-content h-100 pt-6 ps-6 pb-6">
              <div class="bg-light p-4">
                <div class="row g-5">
                  <div class="col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
                   
                    <div class="d-flex mb-4">
                      <div class="btn-xl-square bg-primary text-white me-3">
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h4>Address</h4>
                        <p class="mb-0">Pune, India</p>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="btn-xl-square bg-primary text-white me-3">
                        <i class="fa fa-phone-alt"></i>
                      </div>
                      <div>
                        <h4>Phone Number</h4>
                        <p class="mb-0">(+91) 9110 910 890</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-7 wow fadeInUp" data-wow-delay="0.3s">
                    <div>
                      <form>
                        <div class="row g-3">
                          <div class="col-lg-12 col-xl-6">
                            <div class="form-floating">
                              <input
                                type="text"
                                class="form-control border-0"
                                id="name"
                                placeholder="Your Name"
                              />
                              <label for="name">Your Name</label>
                            </div>
                          </div>
                          <div class="col-lg-12 col-xl-6">
                            <div class="form-floating">
                              <input
                                type="email"
                                class="form-control border-0"
                                id="email"
                                placeholder="Your Email"
                              />
                              <label for="email">Your Email</label>
                            </div>
                          </div>
                          <div class="col-lg-12 col-xl-6">
                            <div class="form-floating">
                              <input
                                type="phone"
                                class="form-control border-0"
                                id="phone"
                                placeholder="Phone"
                              />
                              <label for="phone">Your Phone</label>
                            </div>
                          </div>
                          <div class="col-lg-12 col-xl-6">
                            <div class="form-floating">
                              <input
                                type="text"
                                class="form-control border-0"
                                id="project"
                                placeholder="Project"
                              />
                              <label for="project">Your Project</label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-floating">
                              <input
                                type="text"
                                class="form-control border-0"
                                id="subject"
                                placeholder="Subject"
                              />
                              <label for="subject">Subject</label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-floating">
                              <textarea
                                class="form-control border-0"
                                placeholder="Leave a message here"
                                id="message"
                                style={{ height: "120px" }}
                              ></textarea>
                              <label for="message">Message</label>
                            </div>
                          </div>
                          <div class="col-12">
                            <button class="btn btn-primary w-100 py-3">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
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

export default Contact;
