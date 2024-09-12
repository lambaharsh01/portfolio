import { useParams } from "react-router-dom";

import { VscGithub } from "react-icons/vsc";
import { MdDownloadForOffline } from "react-icons/md";
import { FaLink } from "react-icons/fa";

import isSmallScreen from './utils/isSmallScreen';

import projectArrayFirst from "./data/projectArrayFirst.json";
import projectArrayLast from "./data/projectArraySecond.json";
import { useCallback, useEffect, useMemo, useState } from "react";


export default function Project() {

  const params = useParams();

  const { projectId } = params;
  
  const smallScreen=isSmallScreen();

  const allProjects = useMemo(() => [...projectArrayFirst, ...projectArrayLast], []);


  const initialProjectSearch= useCallback(()=>{
    for(let poject of allProjects){
    
        if(poject.id=== Number(projectId) ){
            setProjectData(poject);
            break;
        };
      }
  }, [allProjects, projectId])


  const [projectData, setProjectData]= useState({});

  useEffect(()=>{
    initialProjectSearch();
  },[initialProjectSearch])

  return(
    <div>
    <div
    className="px-3 darkGreyText w-full h-full">

    <div className="flex justify-between border-bottom mb-3 bg-white p-2 sticky top-0 w-full">
        <h1 className={`${ smallScreen ? "text-2xl" : "text-3xl"} font-bold`}>{projectData.projectName}</h1>
    </div>

<div className="w-100 mt-4 px-1">

    <div className="mb-3"><span className="font-bold mb-2">Working Timeline :</span> <span>{projectData.wokringTimeLine}</span></div>
    <div className="mb-3"><span className="font-bold mb-2">Discription :</span> <span>{projectData.projectDiscription}</span></div>
    
    {projectData.techStack && projectData.techStack.length && <div className="mb-3"><span className="font-bold mb-2">Tech Stack :</span> <span>{
        projectData.techStack.join(", ")
        }</span></div>}
    
    {projectData.link && <div className="mb-7">

        <div className="mb-2">
            <span className="font-bold mb-3">Demployments :</span>
        </div>

        <a href={projectData.link} target="_blank"  rel="noreferrer">
            <button className="text-white rounded-md bg-black me-2 px-2 py-1 border-0"> <FaLink  className="text-lg mb-1"/> Check Out Live Demo</button>
        </a>

    </div>}
    
    {projectData.dowloadLink && <div className="mb-7">

        <div className="mb-2">
            <span className="font-bold mb-3">Download Links :</span>
        </div>

        <a href={projectData.dowloadLink} download="charter.apk" >
                        <button className="text-white rounded-md bg-black me-2 px-2 py-1 border-0">
                        <MdDownloadForOffline className="text-lg mb-1" /> Download</button>
        </a>

    </div>}

    {projectData.githubLinks && <div className="mb-7">
        <div className="mb-2">
            <span className="font-bold mb-3">Github Attachments :</span>
        </div>
        

        <div>{projectData.githubLinks.map((element, index)=>(
            <a href={element.link} key={"gitHubLink"+index}  target="_blank"  rel="noreferrer"> 
                <button className="text-white rounded-md bg-black me-2 px-2 py-1 border-0"> <VscGithub className="text-lg mb-1"/> {element.heading}</button> 
            </a>
        ))}</div>
    </div>}

    {projectData.gallery && <div className="mb-7">
        <div className="mb-2">
            <span className="font-bold mb-3">Photo Attachments :</span>
        </div>
        

<div className="w-full grid sm:grid-cols-3 grid-cols-2 gap-4 pt-3 bg-slate-100 rounded-lg">
        {projectData.gallery.map((element, index)=>(
            <div className="grid-item p-3" key={"galleryKey" + projectData.projectName + index }>
                <img src={element.imageUri} alt="gallerSection" className="rounded-xl h-auto w-100"/>
            </div>
        ))}
</div>
    </div>}

        <div className="h-10"></div>
    </div>
</div>

    </div>
  )


}