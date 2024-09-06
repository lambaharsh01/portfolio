import './componentStyles/projectSection.css';
import shuffleArray from '../utils/shuffleArray';
import Project from './project';

import isSmallScreen from '../utils/isSmallScreen';

import AnimateWords from './animateWords';

export default function ProjectSection(){

  const smallScreen= isSmallScreen();

  const projectArrayToBeConstant=[];

  const projectArrayToBeShuffled=[
    {
      imageUri: '/projects/rentCo/main.jpg', 
      gallery:[
        { 
          heading:"",
          imageUri: "/projects/rentCo/dashboard.jpg"
        }, 
        { 
          heading:"",
          imageUri: "/projects/rentCo/property.jpg"
        }, 
        { 
          heading:"",
          imageUri: "/projects/rentCo/transactions.jpg"
        }, 
        { 
          heading:"",
          imageUri: "/projects/rentCo/tenantInfo.jpg"
        },  
        { 
          heading:"",
          imageUri: "/projects/rentCo/addingTenant.jpg"
        }, 
        { 
          heading:"",
          imageUri: "/projects/rentCo/addTenant.jpg"
        }, 
      ],
      link: "https://rentcofrontend.netlify.app/",
      githubLinks: [
      {
        heading:"Frontend Repo",
        link:"https://github.com/lambaharsh01/rentCoFrontend"
      },
      {
        heading:"Backend Repo",
        link:"https://github.com/manthan110011/rentCoBackend"
      }
    ],
      wokringTimeLine:"06-2024 to 08-2024",
      projectName:"RentCo",
      projectDiscription:"A software product to stramline rent collection process with analytics.",
      cardLength:"xl"
    },
  ]

  const projectArray=[ ...projectArrayToBeConstant, ...shuffleArray(projectArrayToBeShuffled)]


  for(let i=0; i<10; i++){
    projectArray.push(...projectArrayToBeShuffled)
  }


return (
<>

<div className="mt-5 projectSectionBackground pt-3 pb-20 rounded-t-3xl">

<div className='w-100 px-4 text-end'>
                <div className={`col-12 darkGreyText pb-1`}>
                    <h1 className={`font-bold me-4 ${ smallScreen ? "text-4xl pb-1" : "text-5xl pb-2"}`}>
                        <AnimateWords string='My ' averageTimeGap={0.1} initialDelay={1}/>
                        <br />
                        <AnimateWords string='Projects ' averageTimeGap={0.15} initialDelay={1}/>
                    </h1>
                </div>
            </div>

    <div className="projectContainer">
      {projectArray.map((element, index)=>(
        <Project key={"projectCard"+index} projectData={element} />
      ))}
    </div>        
</div>

<div className='w-full h-5 projectSectionBackground'>
<div className='w-full h-5 bg-white rounded-t-3xl'>
</div>
</div>
  </>
    )
}