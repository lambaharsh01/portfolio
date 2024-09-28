import './portfolioMinimilist.css';

import HeaderSection from './sections/headerSection';
import ProjectsAndSkills from './sections/projectsAndSkills';
import FooterSection from './sections/footerSection';

export default function portfolioMinimilist() {

    return <div className='w-full'>

        <HeaderSection />
        
        <ProjectsAndSkills />

        <FooterSection />
    
        </div>  
}