import './componentStyles/projectSection.css';

// UI components
import Project from './project';
import AnimateWords from './animateWords';

// utility functions
import isSmallScreen from '../utils/isSmallScreen';
import shuffleArray from '../utils/shuffleArray';

// data dependencies
import projectArrayFirst from "../data/projectArrayFirst.json";
import projectArrayLast from "../data/projectArraySecond.json";

export default function ProjectSection(){

  const smallScreen= isSmallScreen();

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