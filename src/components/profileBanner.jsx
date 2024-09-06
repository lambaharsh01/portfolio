import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare, FaPhoneSquareAlt } from "react-icons/fa";

// Utility function
import isSmallScreen from "../utils/isSmallScreen";

// Components
import AnimateWords from './animateWords';

export default function ProfileBanner(){

    const smallScreen= isSmallScreen();

    const { ref, inView } = useInView({
        threshold: 0.8
      });
    
     

    return (
        <div className="row information">
        <div className="col-12  text-center mb-2 mt-md-3 mt-0 pt-md-3 pt-0"
        ref={ref}
        >
          <img alt='profilePicture' src="/portfolio_images/profile2.jpg" className="profile rounded-circle me-5" />
          <div className="icon text-light">
    
            <a rel="noreferrer" href="https://www.linkedin.com/in/harsh-lamba-1b185b214" target="_blank">
              <FaLinkedin 
              className='ps-sm-4 ms-sm-0 ms-2 r_icon'
              style={{
                opacity: inView ? 1 : 0,
                transition: 'opacity 1s',
              }}
              />
            </a>
  
            <br />
  
            <a rel="noreferrer" href="https://github.com/lambaharsh01" target="_blank">
              <FaGithubSquare 
              className='ps-sm-4 ms-sm-0 ms-2 r_icon'
              style={{
                opacity: inView ? 1 : 0,
                transition: 'opacity 1.8s',
              }}
              />
            </a>
            
            <br />
  
            <a rel="noreferrer" href="https://wa.link/zfpu97" target="_blank">
              <FaWhatsappSquare 
              className='ps-sm-4 ms-sm-0 ms-2 r_icon'
              style={{
                opacity: inView ? 1 : 0,
                transition: 'opacity 2.6s',
              }}
              />
            </a>
  
              <br />
  
            <a href="tel:8287868558" rel="noreferrer">
              <FaPhoneSquareAlt 
              className='ms-sm-4 ms-2 r_icon_phone'
              style={{
                opacity: inView ? 1 : 0,
                transition: 'opacity 3.4s',
              }}
              />
            </a>
  
          </div>
          <div className={`col-12 text-center text-white mt-12 pb-3`}>

                <h1 className={`border-bottom font-semibold ${ smallScreen ? "text-3xl pb-1" : "text-5xl pb-2"}`}>
                    <AnimateWords string="HARSH "/>
                    <AnimateWords string="LAMBA " initialDelay={2} averageTimeGap={0.15}/>
                </h1>
                
                <h3 className={`pt-1 `}>
                    <AnimateWords string="MERN "/>
                    <AnimateWords string="STACK " initialDelay={1.2} />
                    <AnimateWords string="DEVELOPER " initialDelay={1.4}/>
                </h3>

          </div>
        </div>
      </div>
    )
}