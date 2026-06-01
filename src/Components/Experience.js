import React from "react";

function Experience() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-3">
            <div className="experience-header bg-dark h-100 pt-6 pe-6 pb-6">
              <div
                className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <p className="text-white sub-title">Experience</p>
                <h1 className="display-6 text-white mb-0">
                  My real work experience
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="experience-content h-100 pt-6 ps-6 pb-6">
              <div className="row g-4">
              <div className="col-12">
                  <div
                    className="experience-item rounded p-4 h-100 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="d-lg-flex align-items-center mb-3">
                      <p className="fs-5 mb-0 me-4">Global Payments Inc</p>
                      <div>
                        <span className="fa fa-calendar me-1"></span>Jun 2026 - Present
                      </div>
                    </div>
                    <p>Pune, Maharashtra, India</p>
                    <h4 className="mb-3">Associate Senior Software Engineer</h4>
                    <p className="mb-0">
                    Working on enterprise-grade Android POS and payment solutions at  Global Payments￼. Currently contributing to the Genius POS platform, focusing on payment workflows, code modernization, Java-to-Kotlin migration, and application reliability. 
                    Previously contributed to Universal Download Manager, supporting scalable application distribution across multi-vendor Android POS devices and region-specific deployments. 
                    Passionate about building secure, high-performance solutions that power real-world payment experiences.
                    </p>
                  </div>
                </div>
                <div className="col-12">
                  <div
                    className="experience-item rounded p-4 h-100 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="d-lg-flex align-items-center mb-3">
                      <p className="fs-5 mb-0 me-4">Global Payments Inc</p>
                      <div>
                        <span className="fa fa-calendar me-1"></span>Jul 2024 - June 2026
                      </div>
                    </div>
                    <p>Pune, Maharashtra, India</p>
                    <h4 className="mb-3">Software Engineer II - Android</h4>
                    <p className="mb-0">
                      As a Software Engineer II at Global Payments, I contributed to the Universal Download Manager, a solution responsible for application distribution and updates across Android POS devices. 
                      My work included supporting the migration to a CDN-based architecture, implementing chunk-based APK downloads, integrating centralized logging using Firebase Crashlytics and Firestore, 
                      and improving application reliability across multi-vendor and region-specific device deployments.
                    </p>
                  </div>
                </div>
                <div className="col-12">
                  <div
                    className="experience-item rounded p-4 h-100 wow fadeInUp"
                    data-wow-delay="0.3s">

                    <div className="d-lg-flex align-items-center mb-3">
                      <p className="fs-5 mb-0 me-4">Deltek | Replicon Inc</p>
                      <div>
                        <span className="fa fa-calendar me-1"></span>Oct 2021 - May 2024
                      </div>
                    </div>
                    <p>Bengaluru, Karnataka, India</p>

                    <h4 className="mb-3">Software Engineer II - Android</h4>
                    <p className="mb-0"> Contributed significantly to Replicon’s renowned Time Tracking & Timesheet Software, enhancing the Replicon Time Tracking App – Mobile Timesheets. Employed state-of-the-art technologies including Kotlin, Retrofit, Android ViewModels, and Kotlin coroutines within an MVVM architecture to elevate the application’s performance and user experience.</p>
                    <br></br>
                    <p><b>Key Responsibilities:</b></p>
                    <p><b>Feature Innovation: </b>Developed and optimized features such as real-time GPS tracking and geofencing, enriching the app's functionality for effective remote workforce management.</p>
                    <p><b>Architectural Design: </b>Applied MVVM architecture to ensure clean, scalable, and maintainable code, enhancing the app’s reliability and efficiency.</p>
                    <p><b>Seamless Integration: </b>Implemented Firebase for real-time data updates and handled advanced features like attachments and comments, integrating them smoothly into the application.</p>
                  </div>
                </div>
        
                <div className="col-12">
                  <div
                    className="experience-item rounded p-4 h-100 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="d-lg-flex align-items-center mb-3">
                      <p className="fs-5 mb-0 me-4">3RI Technologies Pvt, INDIA</p>
                      <div>
                        <span className="fa fa-calendar me-1"></span> Jul 2017 - Aug 2018
                      </div>
                    </div>
                    <p>Pune, Maharashtra India</p>
                    <h4 className="mb-3">Software Engineer</h4>
                    <p className="mb-0">Gained extensive industry experience as a Software Developer at 3RI Technologies, where I worked across a diverse set of technologies and projects. Contributed to various initiatives using Android, PHP, Angular, Python, Django, Flask, and Payment Gateway integrations.</p>
                  </div>
                </div>

                <div className="col-12">
                  <div
                    className="experience-item rounded p-4 h-100 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="d-lg-flex align-items-center mb-3">
                      <p className="fs-5 mb-0 me-4">3RI Technologies Pvt</p>
                      <div>
                        <span className="fa fa-calendar me-1"></span> Jan 2017 - Jul 2017
                      </div>
                    </div>
                    <p>Pune, Maharashtra India</p>
                    <h4 className="mb-3">Software Engineer - Intern</h4>
                    <p className="mb-0">During my internship at 3RI Technologies, 
                      I gained hands-on experience in Android app development and backend technologies.
                      This role provided a solid foundation in building mobile applications and understanding server-side integration.</p>
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

export default Experience;
