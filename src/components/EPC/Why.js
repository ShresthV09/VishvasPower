import React from 'react'
import { motion } from "framer-motion";
import './services.css'
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
export const WhyEPC= () => {
    return (
        <>
            <div className="container-EPC whyus">
                <motion.div variants={textVariant()} className="header-services">

                    <h2 className={`${styles.sectionHeadText} `}>Why Us?</h2>
                </motion.div>

                <div className='mt-5 px-5 points'>
                    <ul className='list-disc  space-y-5'>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                           <span> LONG EXPERIENCE </span>:- Our team has executed several challenging projects in past
                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                           
                           <span> ELF OWNED MACHINERY</span> :- We are not dependent on outside agencies 
                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                          <span>  ROBUST TEAM</span> :- Our team has carried out works at challenging locations in rough
 weather
to process
                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                          <span> CLOSE COORDINATION</span> :- Strong Link between Design & Execution leads to 
                           fast completion of projects 

                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                 <span>  SCIENTIFIC PROCESSES</span> :- We have developed SOPs for carrying out all works from
development of BOM to Final Comissionibng
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

