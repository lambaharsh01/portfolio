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
      projectName:"RentCo",
      imageUri: '/projects/rentCo/main.jpg',
      link: "https://rentcofrontend.netlify.app/", 
      wokringTimeLine:"06-2024 to 08-2024",
      projectDiscription:"A software product to stramline rent collection process with analytics.",
      cardLength:"xl",
      techStack:[" MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Bootstrap", "CSS", "HTML"],
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
    },
    {
      projectName:"Jogger Sports",
      imageUri: '/projects/joggerSports/main.jpg',
      link: "https://joggersports.netlify.app/", 
      wokringTimeLine:"12-2023 to 02-2024",
      projectDiscription:"This shopify website is an interactive UI for an online sports store designed to provide an immersive and engaging shopping experience for sports enthusiasts. With a user-friendly interface and intuitive navigation, customers can easily browse through various sports categories, explore product details, and make informed purchasing decisions.",
      cardLength:"sm",
      techStack:[" MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap", "CSS", "HTML"],
      githubLinks: [
        {
          heading:"Frontend Repo",
          link:"https://github.com/lambaharsh01/joggerSportStore"
        },
        {
          heading:"Backend Repo",
          link:"https://github.com/lambaharsh01/joggerBackend"
        }
      ],
      gallery:[
        { 
          heading:"",
          imageUri: "/projects/joggerSports/dashboard.jpg"
        },
        { 
          heading:"",
          imageUri: "/projects/joggerSports/collection2.jpg"
        },
        { 
          heading:"",
          imageUri: "/projects/joggerSports/infoBanner.jpg"
        },
        { 
          heading:"",
          imageUri: "/projects/joggerSports/collection.jpg"
        },
        { 
          heading:"",
          imageUri: "/projects/joggerSports/product.jpg"
        },
        { 
          heading:"",
          imageUri: "/projects/joggerSports/featuredMobile.jpg"
        },
      ],
    },
    {
      projectName:"Furniture Store",
      imageUri: '/projects/wood/main.jpg',
      wokringTimeLine:"07-2022 to 08-2022",
      projectDiscription:"This shopify website is an interactive UI for an online furniture store designed to provide user-friendly interface where customers can easily navigate through various furniture/ wood categories.",
      cardLength:"md",
      techStack:["Bootstrap", "CSS", "HTML"],
      githubLinks: [
        {
          heading:"Furniture Store Repo",
          link:"https://github.com/lambaharsh01/Wood-furniture-page-"
        }
      ],
      gallery:[
        { 
          heading:"",
          imageUri: "/projects/wood/dashboard.jpg"
        },
        { 
          heading:"",
          imageUri: "/projects/wood/products.jpg"
        },
        { 
          heading:"",
          imageUri: "/projects/wood/product.jpg"
        },
        { 
          heading:"",
          imageUri: "/projects/wood/sidebar.jpg"
        },
      ],
    },
    {
      projectName:"Code Editor",
      imageUri: '/projects/ide/main.jpg',
      wokringTimeLine:"05-2024 to 05-2024",
      projectDiscription:"A simple code editor built with vanilla JavaScript, allowing you to execute and view HTML, CSS, and JavaScript code. Output includes rendered HTML, applied CSS, and console logs",
      cardLength:"sm",
      techStack:["HTML", "CSS", "Javascript"],
      githubLinks: [
        {
          heading:"Code Editor",
          link:"https://github.com/lambaharsh01/ideVanillaJavascript"
        }
      ],
      gallery:[
        { 
          heading:"",
          imageUri: "/projects/ide/main2.jpg"
        },
        { 
          heading:"",
          imageUri: "/projects/ide/main.jpg"
        },
      ],
    },
    {
      projectName:"Brochureware",
      imageUri: '/projects/vsit/main.jpg',
      wokringTimeLine:"07-2022 to 08-2022",
      projectDiscription:"This is Brochureware web page for an educational institution for their online presences.",
      cardLength:"sm",
      techStack:["CSS", "HTML"],
      githubLinks: [
        {
          heading:"VSIT Brochureware",
          link:"https://github.com/lambaharsh01/Vsit"
        }
      ],
      gallery:[
        { 
          heading:"",
          imageUri: "/projects/vsit/cources.jpg"
        },
        { 
          heading:"",
          imageUri: "/projects/wood/contact.jpg"
        },
      ],
    },
  ]

  const projectArray=[ ...projectArrayToBeConstant, ...shuffleArray(projectArrayToBeShuffled)]


return (
<>

<div className="mt-5 bg-white rounded-t-3xl">
<div className=" projectSectionBackground pt-3 pb-20 rounded-3xl">

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

</div>
  </>
    )
}