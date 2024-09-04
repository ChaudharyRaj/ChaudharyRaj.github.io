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
                        <span className="fa fa-calendar me-1"></span>Jul 2024 - Present
                      </div>
                    </div>
                    <p>Pune, Maharashtra, India</p>
                    <h4 className="mb-3">Software Engineer II - Android</h4>
                    <p className="mb-0">
                    Currently, I’m part of the Android team at Global Payments Inc. where I work on payment apps, ensuring security and seamless end-to-end transactions. 
                    I’m excited about leveraging my expertise to contribute to innovative projects and drive the growth and success of the teams I work with.
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
                        <span className="fa fa-calendar me-1"></span>May 2023 - May 2024
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
                        <span className="fa fa-calendar me-1"></span> 2017 - 2019
                      </div>
                    </div>
                    <p>Pune, Maharashtra India</p>
                    <h4 className="mb-3">Software Engineer</h4>
                    <p className="mb-0">Gained extensive industry experience as a Software Developer at 3RI Technologies, where I worked across a diverse set of technologies and projects. Contributed to various initiatives using Android, PHP, Angular, Python, Django, Flask, and Payment Gateway integrations.</p>
                    <br></br>
                    <p><b>Key Responsibilities:</b></p>
                    <p> <b>Android Development:</b> Developed and maintained Android applications, focusing on delivering high-quality, user-centric mobile solutions.</p>
                    <p><b>Full-Stack Development:</b> Leveraged PHP and Angular for building dynamic web applications, while utilizing Python with Django and Flask for backend development, ensuring seamless integration across the tech stack.</p>
                    <p><b>Payment Integration:</b> Implemented and managed payment gateway solutions, enhancing transaction security and efficiency for web applications.</p>
                    <p><b>Collaborative Projects:</b> Worked on multiple projects simultaneously, contributing to both front-end and back-end development, and participating in project planning, design, and execution.</p>
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
                        <span className="fa fa-calendar me-1"></span> 2017 - 2019
                      </div>
                    </div>
                    <p>Pune, Maharashtra India</p>
                    <h4 className="mb-3">Software Engineer - Intern</h4>
                    <p className="mb-0">During my internship at 3RI Technologies, 
                      I gained hands-on experience in Android app development and backend technologies.
                      This role provided a solid foundation in building mobile applications and understanding server-side integration.</p>
                      <br></br>
                      <p><b>Key Responsibilities:</b></p>
                      <p><b>Android Development: </b>Developed Android applications using Java, focusing on core functionalities and user interface design.</p>
                      <p><b>Backend Integration: </b>Worked with Django and MongoDB to manage backend services, ensuring smooth data handling and integration with mobile applications.</p>
                      <p><b>Learning and Development: </b>Acquired practical skills in app development, including debugging, testing, and optimizing application performance.</p>
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
