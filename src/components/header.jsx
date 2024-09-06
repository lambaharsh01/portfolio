import { useInView } from 'react-intersection-observer';
import './componentStyles/header.css'
import { useEffect, useState } from 'react';


export default function Header(){

    const { ref, inView } = useInView({ threshold: 0.2 });
    
    function focusElement(elem){
        
        const targetElement = document.getElementById(elem);
        
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }
    }
       
  const [showHeader, setShowHeader] = useState(true);
  const [showHeaderStrict, setShowHeaderStrict] = useState(true);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 80) {

        setShowHeaderStrict(false);

        if (scrollPosition < previousScrollPosition) {
          // User is scrolling up
          setShowHeader(true);
        } else {
          // User is scrolling down
          setShowHeader(false);
        }
      } else {
        // User is at the top of the page, show the header
        setShowHeaderStrict(true);
        setShowHeader(true);
      }
      setPreviousScrollPosition(scrollPosition);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [previousScrollPosition]);



    
   return<div className="row navigation">

    <nav 
    className="navbar navbar-expand fixed-top"
    style={{
      transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
      transition: showHeaderStrict ? '' : 'transform 0.8s',
    }}
    >

      <span 
      className="navbar-brand brand ps-3 text-white linkElements" 
      onClick={()=>focusElement('pageTop')}
      ref={ref} 
      style={{
          opacity: inView ? 1 : 0,
          transition: 'opacity 1.5s',
      }}
      >
        Portfolio.
      </span>

      <div className="navbar-collapse w-100 d-flex justify-content-end">
        <ul className="navbar-nav me-md-2 me-1" >
            
        

          <li 
          className="nav-item me-sm-5 me-1 linkElements" 
          onClick={()=>focusElement('about_sec')}
          ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s'}}
          > EXPERIENCE</li> 

          <li 
          className="nav-item me-sm-5 me-1 linkElements" 
          onClick={()=>focusElement('product_sec')}
          ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 1.5s'}}
          >PROJECTS</li>

          <li 
          className="nav-item me-sm-4 linkElements" 
          onClick={()=>focusElement('contact_sec')}
          ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 2s'}}
          >CONTACT</li>
        </ul>
      </div>
    </nav>
  </div>
  
}