
import { useNavigate } from 'react-router-dom';
import randomNumberZeroToTwo from "../utils/randomNumberZeroToTwo";
import isSmallScreen from '../utils/isSmallScreen';

import { FaLink } from "react-icons/fa";

import { useInView } from 'react-intersection-observer';

export default function Project({projectData={}}){

const navigate= useNavigate();

function randomNumberGenerator() {
    return Math.round((Math.random() * 0.5 + 0.0) * 100) / 100;
}

const { ref, inView } = useInView({
    threshold: randomNumberGenerator()
});    

const smallScreen=isSmallScreen();

const { id, imageUri, cardLength, projectName, link} = projectData;


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
                                onClick={()=>{navigate("/project/"+id)}}
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



</>)

}