import React, { useEffect } from "react";
import Benefit from "./sub-components/Benefit";
import SubHeading from "./sub-components/SubHeading";

const About = () => {
  return (
    <>
      <div className="about-container w-full py-4 px-20" id="about">
        <SubHeading title={"About Us"} />
        <div className="content py-10 px-20 border-y-2 flex flex-row border-slate-200">
          <div className="about-img relative w-1/2 border-r-2 border-slate-200">
            <img
              src="../src/assets/wp883347-grand-theft-auto-v-wallpapers.jpg"
              className="img1 rounded-lg w-11/12"
              alt="About"
            />
            <img
              src="../src/assets/wp883347-grand-theft-auto-v-wallpapers.jpg"
              className="img2 rounded-lg w-2/5 absolute -bottom-5 right-8 shadow-img-shadow"
              alt="About"
            />
          </div>
          <div className="about-benefits w-1/2 pl-12 flex flex-col justify-between">
            <Benefit
              icon="bi bi-person-fill"
              heading="Introduction"
              content='Welcome to Hackathon and Coding Club, where alumni come together to create meaningful change. Our alumni community is a force for positive transformation."'
            />
            <Benefit
              icon="bi bi-check-circle-fill"
              heading="Benefits"
              content="Your donations drive our mission to empower future generations through events and programs. Every contribution makes a difference."
            />
            <Benefit
              icon="bi bi-person-fill"
              heading="Recognition"
              content="As a gesture of gratitude, we proudly showcase our generous alumni donors on our website."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
/* bi bi-person-fill */
/* bi bi-check-circle-fill */
/* "bi bi-star-fill */
