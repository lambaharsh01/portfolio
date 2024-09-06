import { useInView } from 'react-intersection-observer';

import isSmallScreen from '../utils/isSmallScreen';

export default function TimeLine({
    timeLineYear="",
    heading="", 
    subHeading="", 
    timeLine="", 
    discription="",
    bottomHeading="",
    bottomContent="",
    shadeOfGray=4

}){


    const { ref: mainRefrence, inView: mainInView } = useInView({
        threshold: 0.24
      });
      
    //   const { ref: subRefrence, inView: subInView } = useInView({
    //     threshold: 0.5
    //   });

    const smallScreen=isSmallScreen();

    return<div  className="timeline" 
                ref={mainRefrence} 
                style={{
                  opacity: mainInView ? 1 : 0,
                  transition: 'opacity 1.5s',
                }}
            >
    <span 
    className={`timeline-content bgGray${shadeOfGray}`}>
    <div className="timeline-year">{timeLineYear}</div>
        <span className="darkGreyText font-semibold text-2xl">{heading}</span>
        <br />
        <span className={`darkGreyText text-lg ${smallScreen ? "font-medium":"font-semibold" }`}>{subHeading}</span>
        <br />
        <p className={`darkGreyText mt-1 mb-2 ${smallScreen ? "font-medium":"font-semibold" }`}>{timeLine}</p>
        <p className={`font-semibold `}>{discription}</p>
        <span className={`font-semibold text-sm`}>
            <span className={`darkGreyText text-base ${smallScreen ? "font-medium":"font-semibold" }`} >{bottomHeading} </span> {bottomContent}
            </span>
    </span>
</div>
}

