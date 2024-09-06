// import {useState, useEffect, useRef} from 'react';

import './portfolio.css'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from "react-toastify";

// Components
import Header from './components/header';
import ProfileBanner from './components/profileBanner';
import TimeLineSection from './components/timeLineSection';
import ProjectSection from './components/projectSection';

import Contact from './components/contactSection';

import AdditionalInformationSection from './components/additionalInfoSection';


function Portfolio(){


return(
    <div className="container-fluid main_container" id='pageTop'>

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


<AdditionalInformationSection/>


<Contact/>




  </div>  
)

}

export default Portfolio;