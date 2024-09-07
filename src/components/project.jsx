import randomNumberZeroToTwo from "../utils/randomNumberZeroToTwo";
import isSmallScreen from '../utils/isSmallScreen';
import { useState } from "react";
import { ImCross } from "react-icons/im";

import { FaLink } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { MdDownloadForOffline } from "react-icons/md";

import { useInView } from 'react-intersection-observer';

export default function Project({projectData={}}){


function disableScroll() {

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let scrollLeft =  window.pageXOffset ||  document.documentElement.scrollLeft;

    window.onscroll = function () {  window.scrollTo(scrollLeft, scrollTop); };
}

function enableScroll() {
    window.onscroll = function () { };
}

function randomNumberGenerator() {
    return Math.round((Math.random() * 0.5 + 0.0) * 100) / 100;
}

const { ref, inView } = useInView({
    threshold: randomNumberGenerator()
});    


const smallScreen=isSmallScreen();

const [show, setShow]=useState(false);

const { imageUri, cardLength, projectName, projectDiscription, wokringTimeLine, githubLinks, link, gallery, techStack, dowloadLink } = projectData;


if(!imageUri) return (<span></span>);

let cardLengthClass;

const cardLengthRaw = cardLength ?? randomNumberZeroToTwo();

switch (cardLengthRaw) {
    case 0:
    case 'sm':
        cardLengthClass = "card_small";
        break;
    case 1:
    case 'md':
        cardLengthClass = "card_medium";
        break;
    case 2:
    case 'lg':
        cardLengthClass = "card_large";
        break;
    case 'xl':
        cardLengthClass = "card_extra_large";
        break;
    case 'xxl':
        cardLengthClass = "card_extra_extra_large";
        break;
    default:
        cardLengthClass = "card_medium";
        break;
}




return (
<>
    {/* IMAGE CARD */}
    
        <div 
        className={`projectCard ${cardLengthClass} border-2 border-white`}
        ref={ref} 
        style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 1.5s',
        }}
        >
                    <div className="w-100 h-100 relative eldestChile">
                            <img 
                                src={imageUri} 
                                alt="projectImage" 
                                className="projectCardImage linkElements"
                                onClick={()=>{setShow(true); disableScroll()}}
                            />
                            <div className="absolute bottom-0 bg-white border-top z-10 w-100 projectContent p-1 text-center">
                                <span className={`px-1 flex justify-between font-bold ${smallScreen ? "text-base":"text-xl"}`}>
                                    
                                    {projectName}  

                                    {link && (
                                        <a href={link} target="_blank"  rel="noreferrer">
                                        <button className={`text-white rounded-full bg-black border-0  ${smallScreen ? "px-2 py-0.5 text-xs":" px-3 text-sm"}`}> 
                                            <FaLink  className={smallScreen ? "": "mb-1"}/>
                                        </button>
                                     </a>)}

                                </span>
                            </div>
                    </div>
        </div>

{/* Show Modal */}

<div
    className={`custom-overlay px-3 ${show ? 'show' : ''} darkGreyText`}
    style={{
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    zIndex: 1050,
    display: show ? 'block' : 'none',
    overflow: 'scroll',
    }}>

    <div className="flex justify-between border-bottom mb-3 bg-white p-2 sticky top-0 w-full">
        <h1 className={`${ smallScreen ? "text-2xl" : "text-3xl"} font-bold`}>{projectName}</h1>
        <ImCross className="darkGreyText text-2xl mt-2"
        onClick={()=>{setShow(false); enableScroll()}}/>
    </div>

<div className="w-100 mt-4 px-1">

    <div className="mb-3"><span className="font-bold mb-2">Working Timeline :</span> <span>{wokringTimeLine}</span></div>
    <div className="mb-3"><span className="font-bold mb-2">Discription :</span> <span>{projectDiscription}</span></div>
    
    {techStack && techStack.length && <div className="mb-3"><span className="font-bold mb-2">Tech Stack :</span> <span>{
        techStack.join(", ")
        }</span></div>}
    
    {link && <div className="mb-7">

        <div className="mb-2">
            <span className="font-bold mb-3">Demployments :</span>
        </div>

        <a href={link} target="_blank"  rel="noreferrer">
            <button className="text-white rounded-md bg-black me-2 px-2 py-1 border-0"> <FaLink  className="text-lg mb-1"/> Check Out Live Demo</button>
        </a>

    </div>}
    
    {dowloadLink && <div className="mb-7">

        <div className="mb-2">
            <span className="font-bold mb-3">Download Links :</span>
        </div>

        <a href={dowloadLink} download="charter.apk" >
                        <button className="text-white rounded-md bg-black me-2 px-2 py-1 border-0">
                        <MdDownloadForOffline className="text-lg mb-1" /> Download</button>
        </a>

    </div>}

    {githubLinks && <div className="mb-7">
        <div className="mb-2">
            <span className="font-bold mb-3">Github Attachments :</span>
        </div>
        

        <div>{githubLinks.map((element, index)=>(
            <a href={element.link} key={"gitHubLink"+index}  target="_blank"  rel="noreferrer"> 
                <button className="text-white rounded-md bg-black me-2 px-2 py-1 border-0"> <VscGithub className="text-lg mb-1"/> {element.heading}</button> 
            </a>
        ))}</div>
    </div>}

    {gallery && <div className="mb-7">
        <div className="mb-2">
            <span className="font-bold mb-3">Photo Attachments :</span>
        </div>
        

<div className="w-full grid sm:grid-cols-3 grid-cols-2 gap-4 pt-3 bg-slate-100 rounded-lg">
        {gallery.map((element, index)=>(
            <div className="grid-item p-3" key={"galleryKey" + projectName + index }>
                <img src={element.imageUri} alt="gallerSection" className="rounded-xl h-auto"/>
            </div>
        ))}
</div>
    </div>}

        <div className="h-10"></div>
    </div>
</div>


</>)

}