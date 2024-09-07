import TimeLine from './timeLine';
import isSmallScreen from '../utils/isSmallScreen';

import './componentStyles/timeLineSection.css';
import AnimateWords from './animateWords';


export default function TimeLineSection(){

    const smallScreen= isSmallScreen();

    const timeLineObject=[
        {
            timeLineYear: "2024-25",
            heading: "Node Js Developer",
            subHeading: "Manthan IT Solutions",
            timeLine: "02/2023 to Present",
            discription: "As a Node.js developer specializing in Oracle DB and MySQL, I collaborated closely with cross-functional teams to design and implement optimized systems that ensured high performance and reliability. My focus on delivering error-free solutions and attention to detail consistently contributed to the success and growth of the company.",
            bottomHeading: "Tech Stack: ",
            bottomContent: " NodeJs, Oracle 19C, MySQL, JQuery, HTML, CSS",
            shadeOfGray:9
        },
        {
            timeLineYear: "2022-23",
            heading: "Web Development Trainee",
            subHeading: "VSIT",
            timeLine: "07/2022 to 02/2023",
            discription: "At VSIT, I gained hands-on experience in web design, developing responsive and dynamic websites using the MERN stack. This training allowed me to build full-stack applications with a focus on both functionality and user experience.",
            bottomHeading: "Tech Stack: ",
            bottomContent: " MongoDB , ExpressJs, ReactJs, NodeJs, MySQL",
            shadeOfGray:3
        },
        {
            timeLineYear: "2019-22",
            heading: "Graduation",
            subHeading: "Delhi University",
            timeLine: "05/2019 to 06/2022",
            discription: "I graduated with honors in GeoInformatics/Geography from Delhi University, where I served as Vice President of the Departmental Society, 'Shivalik', and was an active member of the Debating Society, 'Dictum'. These roles allowed me to play a key part in organizing and managing numerous college events, while developing strong leadership and communication skills.",
            bottomHeading: "Skills: ",
            bottomContent: " Leadership and Team Management, Public Speaking and Debating,  Research and Analytical Skills",
            shadeOfGray:5
        }
    ];

    return <div className="row px-3">
            <div className='w-100 mt-4'>
                <div className={`col-12 darkGreyText pb-3`}>
                    <h1 className={`font-bold ${ smallScreen ? "text-4xl pb-1" : "text-5xl pb-2"}`}>
                        <AnimateWords string='My ' averageTimeGap={0.1} initialDelay={1}/>
                        <br />
                        <AnimateWords string='Experience' averageTimeGap={0.15} initialDelay={1}/>
                    </h1>
                </div>
            </div>
            <div className="col-md-12">
                <div className="main-timeline">

                    {timeLineObject.map((element, index) => <TimeLine 
                    timeLineYear= {element.timeLineYear}
                    heading= {element.heading}
                    subHeading= {element.subHeading}
                    timeLine= {element.timeLine}
                    discription= {element.discription}
                    bottomHeading= {element.bottomHeading}
                    bottomContent= {element.bottomContent}
                    shadeOfGray= {element.shadeOfGray}
                    key={'timeLine'+ index}/> 
                    )}

                </div>
            </div>
        </div>

}

