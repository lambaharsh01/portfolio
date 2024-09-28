
import randomNumberZeroToTwo from "../../utils/randomNumberZeroToTwo";

import { RiLink } from "react-icons/ri";
import { useInView } from 'react-intersection-observer';

export default function ProjectCard({projectData={}}){

function randomNumberGenerator() {
    return Math.round((Math.random() * 0.5 + 0.0) * 100) / 100;
}

const { ref, inView } = useInView({
    threshold: randomNumberGenerator()
});

const { imageUri, cardLength, projectName, catagory, link} = projectData;


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
                    <div className="w-100 h-100 relative eldestChile projects__card">
                            <img 
                                src={imageUri} 
                                alt="projectImage" 
                                className="projectCardImage linkElements projects__img"
                                />
                
                 <div className="projects__modal">
                <div>
                        <span className="projects__subtitle">{catagory}</span>
                        <h3 className="projects__title">{projectName}</h3>
                    
                  <a
                    href={link}
                    rel="noreferrer"
                    className="projects__button button button__small"
                  >
                    <RiLink/>
                  </a>
                </div>
              </div>
                    </div>
        </div>


</>)

}