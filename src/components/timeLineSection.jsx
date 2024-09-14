
import './componentStyles/timeLineSection.css';

// Ui components
import TimeLine from './timeLine';
import isSmallScreen from '../utils/isSmallScreen';
import AnimateWords from './animateWords';

// data dependencies
import timeLineObject from "../data/timeLine.json"

export default function TimeLineSection() {


//    {
//     "timeLineYear": "2019-22",
//     "heading": "Graduation",
//     "subHeading": "Delhi University",
//     "timeLine": "05/2019 to 06/2022",
//     "discription": "I graduated with honors in GeoInformatics/Geography from Delhi University, where I served as Vice President of the Departmental Society, 'Shivalik', and was an active member of the Debating Society, 'Dictum'. These roles allowed me to play a key part in organizing and managing numerous college events, while developing strong leadership and communication skills.",
//     "bottomHeading": "Skills: ",
//     "bottomContent": " Leadership and Team Management, Public Speaking and Debating,  Research and Analytical Skills",
//     "shadeOfGray": 5
//   }

    const smallScreen= isSmallScreen();

    return <div className="row px-3" id='about_sec'>
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

