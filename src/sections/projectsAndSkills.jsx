import "./sectionStyle/projectsAndSkills.css"
import ProjectCard from "./components/projectCard";
import Skills from "./components/skills";
// data dependencies
import projectArrayFirst from "../data/projectArrayFirst.json";
import projectArrayLast from "../data/projectArraySecond.json";

import shuffleArray from '../utils/shuffleArray';
import { useState } from "react";



export default function ProjectsAndSkills() {

  const projectArray = [...shuffleArray(projectArrayFirst), ...shuffleArray(projectArrayLast)];
  const [activeTab, setActiveTab] = useState("projects");
  return (
      <main>
          
      <div className="filters" >
        <div className="filters__content flex justify-between" >
          <button
            className={`filters__button ${activeTab === "projects" ? "filter-tab-active" : ""} `}
            onClick={()=>setActiveTab("projects")}
            >
            Projects
          </button>
          <button className={`filters__button ${activeTab === "skills" ? "filter-tab-active" : ""} `}
            onClick={()=>setActiveTab("skills")}
            >
            Skills
          </button>
        </div>
        
        <div className="filters__sections">

        {activeTab === "projects" && (
            <div className="w-full flex justify-center">   
              <div className="w-full projectContainerParent">
                  <div className="projectContainer">
                  {projectArray.map((element, index)=>(
                    <ProjectCard key={"projectCard"+index} projectData={element} />
                  ))}
                  </div> 
              </div>
          </div>
        )}
          
  

          {activeTab === "skills" && (
            <Skills/>
          )}
        </div>
      </div>
    </main>
  );
}
