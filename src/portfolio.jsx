import { useEffect } from "react";
import axios from "axios";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import SkillsSection from "./components/skillsSection";

// Components
import Header from "./components/header";
import ProfileBanner from "./components/profileBanner";
import TimeLineSection from "./components/timeLineSection";
import ProjectSection from "./components/projectSection";

import Contact from "./components/contactSection";

import AdditionalInformationSection from "./components/additionalInfoSection";

function App() {
  useEffect(() => {
    let baseUri = process.env.REACT_APP_BASE_URI;

    axios
      .get(baseUri + "/handShake")
      .then(() => {
        console.log("backend server connection established successfully.");
      })
      .catch((error) => {
        console.log(error)
        console.error("Some error connecting to the backend server.");
      });
  }, []);

  return (
    <div className="container-fluid main_container" id="pageTop">
      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        draggablePercent={20}
        pauseOnHover
      />

      <Header key="headerComponent" />

      <ProfileBanner />

      <TimeLineSection />

      <ProjectSection />

      <AdditionalInformationSection
        heading="Why Am I A Developer You Ask?"
        subHeading="I'm a problem-solver at heart, and I love finding creative solutions to everyday challenges."
        discription="By learning to code, I can create my own small software solutions that make my life easier and it's kind of cheap when you know how to code. It's a win-win!"
      />

      <SkillsSection/>

      <Contact />
    </div>
  );
}

export default App;
