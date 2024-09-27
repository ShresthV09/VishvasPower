import React from 'react'
import { motion } from "framer-motion";
import './services.css'
import { styles } from "../../styles";
import {textVariant } from "../../utils/motion";
export const WhyChallenge = () => {
    return (
        <>
            <div className="container-servicesPage whyus Gurantee mt-20  ">
                <motion.div variants={textVariant()} className="header-services">

                    <h2 className={`${styles.sectionHeadText}`}>THE VISHVAS GUARANTEE</h2>
                </motion.div>
                 <div className='mt-8 px-5 points'>
                    <ul className='list-disc  space-y-5'>
                        <li
                            className='text-400-white text-[18px]  '
                        >
                            WE DESIGN THE TRANSFORMER TO LAST 60+ YEARS
                        </li>
                        <li
                            className='text-400-white text-[18px]  '
                        >
                           WE MANUFACTURE THE TRANSFORMER WITH NO-DEVIATION FROM
OUR QUALITY SOPs
                        </li>
                        <li
                            className='text-400-white text-[18px]  '
                        >
                            WE TEST THE TRANSFOREMR WITH STRINGENT IS/IEC REQUIREMENTS
TO ENSURE IT MEETS THE QUALITY REQUIREMENTS
                        </li>
                        <li
                            className='text-400-white text-[18px]  '
                        >
                          WE ARE WITH YOU IN THE JOURNEY FROM SUPPLY TO COMISSIONING
TO ACTUAL PERFORMANCE IN THE FIELD
                        </li>
                      

                    </ul>
                </div>
            </div>
        </>
    )
}

