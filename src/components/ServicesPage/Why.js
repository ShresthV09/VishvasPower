import React from 'react'
import { motion } from "framer-motion";
import './services.css'
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
export const Why = () => {
    return (
        <>
            <div className="container-WhyPage whyus" style={{ "height": "55vh !important" }}>
                <motion.div variants={textVariant()} className="header-services">

                    <h2 className={`${styles.sectionHeadText} `}>Why Us?</h2>
                </motion.div>

                <div className='mt-5  points'>
                    <ul className='list-disc  space-y-5'>
                        <li
                            className='text-400-white text-[20px] '
                        >
                            Our Speed is our Identity . We are known for fast response time
                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                           
                           We give a new life to remanufactured transformers using new
& better quality material & redesigning the transformer
windings & insulations for better performance.
                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                            We have a 100% no-deviation policy. All our team members follow our quality conscious standard operating procedures for all operations.
                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                           We have state of the art machineries & test equipments to
bring manufacturing level quality to remanufacturing / overhauling.

                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                        
                            Professional honesty is our No. 1 Core Value.
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

