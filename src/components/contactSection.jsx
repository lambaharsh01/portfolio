import './componentStyles/contactSection.css';

import {useState} from 'react';

import AnimateWords from './animateWords';

// Middle ware
import axios from 'axios';

// Icons 
import { toast } from 'react-toastify';

import isSmallScreen from '../utils/isSmallScreen';


export default function Contact(){

const smallScreen=isSmallScreen();
    
const [queryName, setQueryName]=useState('');
const [queryEmail, setQueryEmail]=useState('');
const [queryNumber, setQueryNumber]=useState('');
const [query, setQuery]=useState('');

const [disable, setDisable]= useState(false);

const [querySubmissionStatus, setQuerySubmissionStatus] =useState("Send Your Query");


const validateFields= ()=> {


    const phoneNumberPattern = /^[6-9]\d{9}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!queryName.trim()) return toast.error("Please enter your name");
    if(!emailPattern.test(queryEmail)) return toast.error("Please enter a valid Email Id");
    if(!phoneNumberPattern.test(queryNumber)) return toast.error("Please enter a valid Mobile Number");
    if(!query.trim()) return toast.error("Please enter a your query");

    setQuerySubmissionStatus("Sending Your Query...");
    setDisable(true);
    
    axios.post(process.env.REACT_APP_BASE_URI + '/query_profile',{name:queryName.trim(), email:queryEmail, number:queryNumber, query:query.trim() })
    .then((res)=>{
        toast.success("Query Has Been Sent");
        setQuerySubmissionStatus("Query Sent Successfully");
    })
    .catch((err)=>{ 
        toast.error("Query could not be sent (Network error)");
        setQuerySubmissionStatus("Query Not Sent (Try Again)");
        setDisable(false);
        console.log(err)
    });
}








return(
<div className="w-full">
        <div className='darkGreyBackground h-5 rounded-t-3xl -mt-5'></div>
        <div className='darkGreyBackground pt-2 pb-3 ps-3 border-bottom'>

            <span className={`text-white font-semibold  ${ smallScreen ? "text-4xl":"text-5xl"}`}>
                <AnimateWords string='My' averageTimeGap={0.05} initialDelay={1}/>
            </span>
                <br />            
            <span className={`text-white font-semibold  ${ smallScreen ? "text-4xl":"text-5xl"}`}>
                <AnimateWords string='Contacts' averageTimeGap={0.05} initialDelay={1}/>
            </span>
            
        </div>

        
<div className="row darkGreyBackground">

    <div className="col-sm-6 p-2 mb-5">
        <div className='w-100 h-100 p-4'>
        

        <h3 className={`text-white ${ smallScreen ? "text-4xl":"text-5xl"} mb-4`}>
            <AnimateWords string="Get In Touch" averageTimeGap={0.05} initialDelay={1}/>
        </h3>


            <p className='text-white font-medium text-lg'>
            I'm always excited to collaborate, discuss new projects, or simply chat about the latest developments in the MERN stack universe. Feel free to reach out to me anytime, and I'll do my best to respond promptly.
            </p>


            <h3 className={`text-white ${ smallScreen ? "text-2xl":"text-2xl"} mt-4 mb-2`}>
                    <AnimateWords string="Contact Information:" averageTimeGap={0.02} initialDelay={1}/>
            </h3>

            <h3 className={`text-white text-lg`}>
                Phone: 8287868558
            </h3>
            <h3 className={`text-white text-lg`}>
                Email: lambaharsh01@gmail.com or lambaharsh0101@gmail.com
            </h3>


        </div>
    </div>
            
            
    <div className="col-sm-6 querySection p-2 mb-5 bg-white" id='contact_sec'>
        <div className='w-100 h-100 p-4'>

        <h3 className={`darkGreyText ${ smallScreen ? "text-4xl":"text-5xl"} mb-4`}>
            <AnimateWords string='Send Your Query' averageTimeGap={0.02} initialDelay={0.8}/>
        </h3>

        <input 
            type="text" 
            placeholder="Your Name" 
            value={queryName}  
            className="w-100 my-2 pt-2 pb-1 mb-4"
            onChange={(elem)=>setQueryName(elem.currentTarget.value)}
            disabled={disable}
        />

        <input 
            type="email" 
            placeholder="Your Email" 
            value={queryEmail} 
            className="w-100 my-2 pt-2 pb-1 mb-4"
            onChange={(elem)=>setQueryEmail(elem.currentTarget.value)}
            disabled={disable}
        />

        <input 
            type="number" 
            placeholder="Your Mobile No." 
            value={queryNumber} 
            className="w-100 my-2 pt-2 pb-1 mb-4"
            onChange={(elem)=>setQueryNumber(elem.currentTarget.value)}
            disabled={disable}
        />

        <textarea 
            className="w-100 my-2 pt-1 pb-1 mb-4 mt-2" 
            value={query} 
            placeholder="Your Query"
            onChange={(elem)=> setQuery(elem.currentTarget.value)}
            disabled={disable}
        />

        <button 
            className='darkGreyBackground border-0 p-2 w-full text-2xl font-medium text-white mb-4'
            onClick={validateFields}
            disabled={disable}>
            <AnimateWords string={querySubmissionStatus} averageTimeGap={0.02} initialDelay={0.8}/>
        </button>

        </div>
    </div>

</div>
</div>
    )
}