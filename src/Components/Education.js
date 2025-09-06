import React from "react";

function Education() {
  return (
    <div className="container-fluid" id="pigraEducation">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-3">
            <div className="education-header bg-dark h-100 pt-6 pe-6 pb-6">
              <div
                className="text-start d-lg-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <p className="text-white sub-title">Education</p>
                <h1 className="display-6 text-white mb-0">
                  My education qualification
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="education-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-4">
                <div className="col-12">
                  <div
                    className="education-item rounded p-4 h-100 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="d-lg-flex  align-items-center mb-3">
                      <p className="fs-5 mb-0 me-4">University of Pune</p>
                      <div>
                        <span className="fa fa-calendar me-1"></span> 2018 -
                        2021
                      </div>
                    </div>
                    <h4 className="mb-3">Bachelor of Engineering (BE) in Computer Engineering</h4>
                    <p className="mb-0">
                      Graduated with a focus on software development, algorithms, data structures, and database management. 
                      Developed a strong foundation in computer science principles and practical problem-solving skills.
                    </p>
                  </div>
                </div>

                <div className="col-12">
                  <div
                    className="education-item rounded p-4 h-100 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="d-lg-flex  align-items-center mb-3">
                      <p className="fs-5 mb-0 me-4">Mewar University, India</p>
                      <div>
                        <span className="fa fa-calendar me-1"></span> 2014 -
                        2014
                      </div>
                    </div>
                    <h4 className="mb-3">Polytechnic in Computer Science & Engineering</h4>
                    <p className="mb-0">
                    Completed a Polytechnic diploma in Computer Science & Engineering, focusing on practical aspects of computer systems, programming, and software development. Gained hands-on experience in core areas such as programming languages, database management, and computer hardware. This program provided a solid technical foundation and prepared me for advanced studies and a career in software engineering.
                    </p>
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

export default Education;
