import './componentStyles/projectSection.css';
import shuffleArray from '../utils/shuffleArray';
import Project from './project';

import isSmallScreen from '../utils/isSmallScreen';

import AnimateWords from './animateWords';

export default function ProjectSection(){

  const smallScreen= isSmallScreen();

  const projectArrayFirst=[
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
        { imageUri: "/projects/rentCo/dashboard.jpg" }, 
        { imageUri: "/projects/rentCo/property.jpg" }, 
        { imageUri: "/projects/rentCo/transactions.jpg" }, 
        { imageUri: "/projects/rentCo/tenantInfo.jpg" },  
        { imageUri: "/projects/rentCo/addingTenant.jpg" }, 
        { imageUri: "/projects/rentCo/addTenant.jpg" }, 
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
        { imageUri: "/projects/joggerSports/dashboard.jpg"},
        { imageUri: "/projects/joggerSports/collection2.jpg"},
        { imageUri: "/projects/joggerSports/infoBanner.jpg"},
        { imageUri: "/projects/joggerSports/collection.jpg"},
        { imageUri: "/projects/joggerSports/product.jpg"},
        { imageUri: "/projects/joggerSports/featuredMobile.jpg"},
      ],
    },
    {
      projectName:"Bus Ticket App",
      imageUri: '/projects/charter/main.jpg',
      wokringTimeLine:"02-2024 to 04-2024",
      projectDiscription:`This is a clone of the bus ticketing app 'Charter,' used for booking online tickets with the Delhi Transport Corporation.`,
      cardLength:"xxl",
      techStack:["React Native"],
      githubLinks: [
        {
          heading:"Charter App Repo",
          link:"https://github.com/lambaharsh01/ticketingMobileApp"
        }
      ],
      gallery:[
        { imageUri: "/projects/charter/dashboard.jpg"},
        { imageUri: "/projects/charter/ticket.jpg"},
        { imageUri: "/projects/charter/history.jpg"},
        { imageUri: "/projects/charter/scan.jpg"},
        { imageUri: "/projects/charter/ticket2.jpg"},
      ],
    },
  ];

  const projectArrayLast=[
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
        { imageUri: "/projects/wood/main.jpg"},
        { imageUri: "/projects/wood/dashboard.jpg"},
        { imageUri: "/projects/wood/products.jpg"},
        { imageUri: "/projects/wood/product.jpg"},
        { imageUri: "/projects/wood/sidebar.jpg"},
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
        { imageUri: "/projects/ide/main2.jpg"},
        { imageUri: "/projects/ide/main.jpg"},
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
        { imageUri: "/projects/vsit/main.jpg"},
        { imageUri: "/projects/vsit/cources.jpg"},
        { imageUri: "/projects/vsit/contact.jpg"},
      ],
    },
    {
      projectName:"Nike Clone",
      imageUri: '/projects/nike/main.jpg',
      wokringTimeLine:"05-2022 to 05-2022",
      projectDiscription:"This is a clone of Nike's website made with pure html without css",
      cardLength:"sm",
      techStack:["HTML"],
      githubLinks: [
        {
          heading:"Nike Clone",
          link:"https://github.com/lambaharsh01/nikeClonePureHTML"
        }
      ],
      gallery:[
        { imageUri: "/projects/nike/main.jpg"},
        { imageUri: "/projects/nike/info.jpg"},
        { imageUri: "/projects/nike/kidsSection.jpg"},
        { imageUri: "/projects/nike/menWomenSection.jpg"},
      ],
    },
  ]

  const projectArray=[ ...shuffleArray(projectArrayFirst), ...shuffleArray(projectArrayLast)]


return (
<>

<div className="mt-5 bg-white rounded-t-3xl" id='product_sec'>
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