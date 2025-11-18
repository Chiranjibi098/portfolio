import React, { useState, useEffect } from "react";
import "../assets/CSS/Landing.css";
import SkillSet from "../Component/SkillSet";
import PrototypeSection from "../Component/PrototypeSection";
import Nextprototype from "../Component/Nextprototype";
import "../assets/CSS/Preloader.css";
import profile from "../assets/Images/Profile_pics.png";
import TypewriterText from "../Component/TypewriterText";
import { svgs } from "../assets/svgIcons";
import WebProjectSection from "../Component/Webprototype";
import CodersHeartSection from "../Component/CodersHeartSection";

function Landing() {
  const [showPreloader, setShowPreloader] = useState(true);

  const scrollNext = () => {
    const container = document.getElementById("protoScroll");
    container.scrollBy({ left: 600, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const container = document.getElementById("protoScroll");
    container.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollNextWeb = () => {
    const container = document.getElementById("webScroll");
    container.scrollBy({ left: 600, behavior: "smooth" });
  };

  const scrollPrevWeb = () => {
    const container = document.getElementById("webScroll");
    container.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollNextMobile = () => {
    const container = document.getElementById("mobileScroll");
    container.scrollBy({ left: 600, behavior: "smooth" });
  };

  const scrollPrevMobile = () => {
    const container = document.getElementById("mobileScroll");
    container.scrollBy({ left: -600, behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showPreloader ? (
        <div className="PreloaderBody">
          <div className="loader">
            <div className="loader-inner"></div>
          </div>
          <div className="typingg">Loading portfolio....</div>
        </div>
      ) : (
        <div className="LandingBody">
          <div className="upper-name-section">
            <div className="profile-pic-wrapper">
              <img
                src={profile}
                alt="Chiranjibi Sahu"
                className="profile-pic"
              />
            </div>
            <span className="Title" style={{ textAlign: "center" }}>
              <TypewriterText
                texts={[
                  "Hi, I’m Chiranjibi Sahu ✌️",
                  "UI/UX Designer | Frontend Developer",
                ]}
              />
            </span>
            <div className="button-resume">
              <button className="ui-btn">
                <span>
                  <a
                    href="https://drive.google.com/file/d/1r6W-Y7NDJnRpI5RlBn2LB6dBzs4Efe0j/view?usp=sharing"
                    target="_blank"
                  >
                    View resume
                  </a>
                </span>
              </button>
            </div>
            <span className="Description">
              UI/UX designers are digital architects, crafting seamless
              experiences where aesthetics meet functionality, painting worlds
              users love to explore. With pixels as their paintbrush, they blend
              creativity and empathy to shape the way we interact with
              technology.
            </span>
          </div>
          <div className="Skill-Section">
            <span className="Skill-Title">Skill sets</span>
            <div className="logo-wrap">
              <SkillSet svg={svgs.figma} title="Figma" />
              <SkillSet svg={svgs.wordpress} title="WordPress" />
              <SkillSet svg={svgs.Angular} title="Angular" />
              <SkillSet svg={svgs.React} title="React" />
              <SkillSet svg={svgs.Kotlin} title="Kotlin" />
              <SkillSet svg={svgs.Flutter} title="Flutter" />
              <SkillSet svg={svgs.astro} title="Astro" />
            </div>
          </div>
          <div className="Skill-Section">
            <span className="Skill-Title">Having Knowledge On</span>
            <div className="logo-wrap">
              <SkillSet svg={svgs.Java} title="Java" />
              <SkillSet svg={svgs.mySql} title="MySQL" />
              <SkillSet svg={svgs.sanity} title="Sanity" />
              <SkillSet svg={svgs.Docker} title="Docker" />
              <SkillSet svg={svgs.aws} title="AWS" />
            </div>
          </div>
          <div className="prototype-section">
            <div className="prototype-header">
              <h5 className="prototype-section-heading">Prototypes</h5>

              <div className="prototype-controls">
                <button className="prev-prototype" onClick={scrollPrev}>
                  ‹<span className="btn-label">Prev</span>
                </button>

                <button className="next-prototype" onClick={scrollNext}>
                  ›<span className="btn-label">Next</span>
                </button>
              </div>
            </div>

            <div className="prototype-scroll" id="protoScroll">
              <PrototypeSection
                svg={svgs.Ezpos}
                title="EZ-Manager"
                subtitle="Ez-pos Dashboard"
                className="first-prototype"
              />
              <Nextprototype
                svg={svgs.p}
                title="Pelliccis"
                subtitle="Pelliccis Ordering"
                className="second-prototype"
              />
            </div>
          </div>
          <div className="prototype-section">
            <div className="prototype-header">
              <h5 className="prototype-section-heading">Web Applications</h5>

              <div className="prototype-controls">
                <button className="prev-prototype" onClick={scrollPrevWeb}>
                  ‹<span className="btn-label">Prev</span>
                </button>

                <button className="next-prototype" onClick={scrollNextWeb}>
                  ›<span className="btn-label">Next</span>
                </button>
              </div>
            </div>

            <div className="prototype-scroll" id="webScroll">
              <WebProjectSection
                svg={svgs.React}
                title="React Dashboard"
                subtitle="Web Application"
                slides={[
                  { image: "https://i.imgur.com/NBvMH7H.png" },
                  { image: "https://i.imgur.com/dXBbCXR.png" },
                  { image: "https://i.imgur.com/qcOXwPo.png" },
                  { image: "https://i.imgur.com/SSVVeuG.png" },
                ]}
              />
              <WebProjectSection
                svg={svgs.Angular}
                title="Angular Dashboard"
                subtitle="Web Application"
                slides={[
                  { image: "https://i.imgur.com/NBvMH7H.png" },
                  { image: "https://i.imgur.com/dXBbCXR.png" },
                  { image: "https://i.imgur.com/qcOXwPo.png" },
                  { image: "https://i.imgur.com/SSVVeuG.png" },
                ]}
              />
            </div>
          </div>
          <div className="prototype-section">
            <div className="prototype-header">
              <h5 className="prototype-section-heading">Mobile Applications</h5>

              <div className="prototype-controls">
                <button className="prev-prototype" onClick={scrollPrevMobile}>
                  ‹<span className="btn-label">Prev</span>
                </button>

                <button className="next-prototype" onClick={scrollNextMobile}>
                  ›<span className="btn-label">Next</span>
                </button>
              </div>
            </div>

            <div className="prototype-scroll" id="mobileScroll">
              <PrototypeSection
                svg={svgs.Flutter}
                title="Flutter App"
                subtitle="Modern Mobile UI"
              />
              <Nextprototype
                svg={svgs.Flutter}
                title="Kotlin App"
                subtitle="Android App UI"
              />
            </div>
          </div>
          <CodersHeartSection />
          <div className="Resume">
            <div className="socialmedia-icons">
              <div className="social-buttons">
                <a
                  href="https://github.com/Chiranjibi098"
                  className="social-button github"
                >
                  {svgs.github}
                </a>
                <a
                  href="https://www.linkedin.com/in/chiranjibi-sahu-2b1a721b8/"
                  className="social-button linkedin"
                >
                  {svgs.linkedin}
                </a>
                <a
                  href="https://dribbble.com/Chiranjibi_Sahu"
                  className="social-button facebook"
                >
                  {svgs.dribble}
                </a>
                <a
                  href="https://www.instagram.com/chiranjibi_sahu/"
                  className="social-button instagram"
                >
                  {svgs.instagram}
                </a>
              </div>
            </div>
            <div className="footer">
              <span>
                2024 © Chiranjibi Sahu. This is just my portfolio site
                showcasing my journey. Let's create something amazing together!
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Landing;
