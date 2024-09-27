import React from 'react'
import { motion } from "framer-motion";
import './services.css'
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
export const OurApprovals = () => {
    return (
        <>
            <div className="container-servicesPage whyus Gurantee mt-20  ">
                <motion.div variants={textVariant()} className="header-services">
                
                    <h2 className={`${styles.sectionHeadText}`}>RDSO Approval for</h2>
                </motion.div>
                 <div className='mt-8 px-5 points'>
                    <ul className='list-disc  space-y-5'>
                        <li
                            className='text-400-white text-[18px]  '
                        >
                            132/27 KV 21.6/30.24 MVA Traction Power Transformer
                        </li>
                        <li
                            className='text-400-white text-[18px]  '
                        >
                           66/27 KV 21.6/30.24 MVA Traction Power Transformer
                        </li>
                        <li
                            className='text-400-white text-[18px]  '
                        >
                           8-12.3-16.5 MVA 55/27.5 Kv autotransformers
                        </li>
                        <li
                            className='text-400-white text-[18px]  '
                        >
                           8 MVA 54/27 KV Autotransformer
                        </li>
                        <li
                            className='text-400-white text-[18px]  '
                        >
                        132/2X27 KV Dual LV V connected Traction Power transformer
                        </li>
                      

                    </ul>
                </div>
            </div>
        </>
    )
}

