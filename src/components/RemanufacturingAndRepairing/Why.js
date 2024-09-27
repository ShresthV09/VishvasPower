import React from 'react'
import { motion } from "framer-motion";
import './services.css'
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
export const WhyRepair = () => {
    return (
        <>
            <div className="container-WhyPage whyus" style={{ "height": "55vh !important" , }}>
                <motion.div variants={textVariant()} className="header-services">

                    <h2 className={`${styles.sectionHeadText} `}>Why Us?</h2>
                </motion.div>

                <div className='mt-5  points'>
                    <ul className='list-disc  space-y-5'>
                        <li
                            className='text-400-white text-[20px] '
                        >
                             We are known for our Professional Honesty in the work of Repairing & Remanufacturing
                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                           
                           We Remanufacture windings & insulations with same quality consciousness as 
for a new transformer
                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                            we make design improvements wherever necessary to ensure failure
 does not happen again
                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                           Our speed is our identity 

                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                        
                        We conduct all Factory Tests as required on repaired jobs to ensure
  high level of quality control
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

