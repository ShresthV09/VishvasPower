import React from 'react'
import { motion } from "framer-motion";
import './services.css'
import { styles } from "../../styles";
import {textVariant } from "../../utils/motion";
export const WhyPOH = () => {
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
                             Experience of 600+ Transformers of Various sizes Overhauled at the site
                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                           
                           Quality Conscious young team with 0 deviation approach from the SOPs
                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                            In-house equipment like filter machines to ensure full quality compliance
to process
                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                          Quality Department for all site works with periodic audits 

                        </li>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                        
                        Strong know-how with backup of our Manufacturing wing to give you
best possible service at lowest possible cost
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

