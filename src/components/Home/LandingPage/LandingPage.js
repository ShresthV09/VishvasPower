import React from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import '../lp.css'
import './LandingPage.css';

import { Stats } from '../About';
const LandingPage = () => {
    const [counterOn, setCounterOn] = useState(false); 
    return (
        <div className='SectionLP'>
            <div className='BCIlp'/>
        <div className='LandingPageVPESSection '>
            <div className='StatsPlusContainer  ' >
                 
            <div className='LandingPageVPESContainer'>
                <div className='ContentLandingPage'>
                    
                    <span className='v'>
                        <h1 style={{color:"#DC0000"}}>Vishvas <span className='power'>Power</span> </h1>
                    
                    </span>
                    
                    <h1>
                    Engineering Services
                    </h1>
                   
                   <div className='subtitleLanding'>
                   <p className='sndSub'> 
                    Total solutions on Power Transformers and 
                    </p>
                    <p className='sndSub'>Railway Electrification</p>
                   </div>
                </div>
                <div className='LogoLandingPage'>
                    <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680694008/VishvasWebsite/hvktutgondilxrb1n9yc.png" alt="logo"/>
                   
                </div>
            </div>
            <div className='StatsContianer' >
                <ScrollTrigger onEnter={()=> setCounterOn(true)}>
                    <Stats/>
                </ScrollTrigger>
           
        </div>  
        </div>
        
        </div>

        </div>
    )
}

export default LandingPage