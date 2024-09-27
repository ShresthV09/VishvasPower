import React from 'react'
import './landingEPC.css'
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from "react-countup";


const LandingEPC = () => {
    const [counterOn, setCounterOn] = useState(false); 
    return (
        <div className='SectionEPC'>
            <div className='ContainerEPC'>
                <div className='contentEPC'>
                    <div className='HeaderEPC'>
                        <span> <h1 className='v'>E</h1>
                        <h1>ngineering</h1></span>
                        <span><h1 className='v'>P</h1>
                        <h1>rocurement</h1></span>
                        <span><h1 className='v'>C</h1>
                        <h1>onstruction </h1></span>
                        
                        
                        
                    </div>
                    <h4 className='mt-3'>
                        Our EPC wing provides total solutions on Railway
                        Electrifcation
                    </h4>
                    <ul className=' space-y-5 mt-4 '>
                        <h3>E = Engineering</h3>
                        <li
                            className='text-400-white text-[25px]  '
                        >
                            We have expertise in design & drawing of PSI & OHE
                            works of Railway Electrification &
                            EHV substations upto 220 KV class
                        </li>

                    </ul>

                    <ul className=' space-y-5 mt-4 '>
                        <h3>P = Procurement
                        </h3>
                        <li
                            className='text-400-white text-[25px]  '
                        >
                            We have strong relationships with vendors of EHV class
                            substation equipment all over India for providing all substation
                            equipments from fasteners to transformers

                        </li>

                    </ul>

                    <ul className=' space-y-5 mt-4 '>
                        <h3>C = Construction</h3>
                        <li
                            className='text-400-white text-[25px]  '
                        >We have inhouse teams & machinery with expertise in all
                            works associated in making substations such as Foundation,
                            Erection, Earthing, Busbar & conductor work, Cabling & Testing
                        </li>

                    </ul>
                </div>
                <ScrollTrigger onEnter={()=>{
            setCounterOn(true);
        }}>
                <div className='blocksSection'>

                <div className='blocksEPC'>
                    <div className='block'>
                        <h3> <CountUp start={0} end={4} duration={2} delay={0}/>+</h3>
                        <p>AUG SSP</p>
                    </div>

                    <div className='block'>
                        <h3><CountUp start={0} end={11} duration={2} delay={0}/>+</h3>
                        <p>NEW SSP</p>
                    </div>

                    <div className='block'>
                        <h3><CountUp start={0} end={5} duration={2} delay={0}/>+</h3>
                        <p>AUG TSS</p>
                    </div>

                    <div className='block'>
                        <h3><CountUp start={0} end={4} duration={2} delay={0}/>+</h3>
                        <p>NEW TSS</p>
                    </div>
                </div>
                </div>
                </ScrollTrigger>

            </div>
        </div>
    )
}

export default LandingEPC