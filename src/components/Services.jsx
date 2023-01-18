import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    
    {
      name: "App Design & Develop",
      desc: "Swift | Kotlin | React-native",
      icon: "fas fa-dice-d6",
    },
    {
      name: "Web Development",
      desc: "Angular | React | HTML | CSS | SCSS | TS",
      icon: "fab fa-connectdevelop",
    }, {
      name: "Enterprise Development",
      desc: "Java | C# | C++ | Python | Azure | Cloud Computing | PowerShell | VBA | Firebase | Unit Testing | OOP | CI/CD",
      icon: "fas fa-chart-area",
    },
    {
      name: "UI/UX Design",
      desc: "The focus on problem-solving conveys an essential UI/UX trait: empathy for user needs.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Software Engineering",
      desc: "Microservices | Distributed Systems | Frontend | Backend | Full-Stack",
      icon: "fas fa-palette",
    },
    {
      name: "SEO Marketing",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fas fa-bullhorn",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
