import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaReact, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const personalDetails = [
  {
    label: "Name",
    value: "Vishal Pawar",
  },
  {
    label: "Age",
    value: "25",
  },
  {
    label: "Address",
    value: "Pune",
  },
  {
    label: "Email",
    value: "pawarvvishal201@gmail.com",
  },
  {
    label: "Contact No.",
    value: "+91 9764860148",
  },
];

const jobSummary =
  "I’m an enthusiastic and detail-focused Front-End Developer with a good understanding of modern web development, especially using React.js. I enjoy building clean, responsive, and user-friendly websites. As a fresher, I’ve completed several personal and academic projects using React, JavaScript, HTML, and CSS, which have helped me learn key concepts like components, state management, and dynamic UI updates.I’m comfortable using tools like Git, npm, and VS Code, and I have basic experience with Bootstrap.I’m always eager to learn new technologies, improve my skills, and contribute to real-world projects as part of a team.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          {" "}
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <SiJavascript
                  size={50}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
              <div>
                <FaHtml5 size={50} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaCss3Alt size={50} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={50} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaReact
                  size={60}
                  color="var(--yellow-theme-background-color)"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
