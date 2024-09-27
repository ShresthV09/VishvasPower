import React from 'react'
import { motion } from "framer-motion";
import './services.css'
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
export const InfraEPC = () => {
    return (
        <>
           <div className="containerOurInfra whyus">
                <motion.div variants={textVariant()} className="header-services">

                    <h2 className={`${styles.sectionHeadText} `}>Our Infrastructure</h2>
                </motion.div>

                <div className='mt-5  points'>
                    <ul className='space-y-5'>
                        <li
                            className='text-400-white text-[20px]  '
                        >
                            <span > <h3 style={{ 'color': 'black' }}>We are having all equipment & tools for carrying out works</h3></span>

                        </li>
                        <li
                            className='text-400-white text-[15px]  '
                        >

                            <span> ENGINEERING :-</span>  DESIGN SOFTWARES

                        </li>
                        <div className='ListInfra'>
                        <li
                            className='text-400-white text-[15px]  '
                        >
                            <span>CIVIL :-</span>
                            <ul className='space-y-5 '>
                                <li
                                    className='text-400-white text-[15px]  '
                                >
                                    SOIL PENETRATION TESTING MACHINE

                                </li>
                                <li
                                    className='text-400-white text-[15px]  '
                                >

                                    CONCERTE MIXERS


                                </li>
                                <li
                                    className='text-400-white text-[15px]  '
                                >
                                    MS CENTERING PLATES OF VARIOUS SIZES
                                </li>
                                <li
                                    className='text-400-white text-[15px]  '
                                >
                                    PVC WATER TANKS UPTO 100 LTR CAPACITY


                                </li>
                            </ul>
                        </li>
                        <li
                            className='text-400-white text-[15px]  '
                        >
                            <span>TESTING :-</span>
                            <ul className='space-y-2 '>
                                <li
                                    className='text-400-white text-[15px]  '
                                >
                                     PRIMARY CURRENT INJECTION TESTER

                                </li>
                                <li
                                    className='text-400-white text-[15px]  '
                                >TAN DELTA TEST KIT
                                </li>
                                <li
                                    className='text-400-white text-[15px]  '
                                >
                                     CONTACT RESISTANCE TEST KIT

                                </li>
                                <li
                                    className='text-400-white text-[15px]  '
                                >
                                    CIRCUIT BREAKER TIMING TEST KIT

                                </li>
                                <li
                                    className='text-400-white text-[15px]  '
                                >
                                     SFRA TEST KIT


                                </li>
                                <li
                                    className='text-400-white text-[15px]  '
                                >
                                    
                                     IR TESTERS

                                </li>

                            </ul>

                        </li>
                       
                        </div>
                        <div className='ListInfra'>
                        <li
                            className='text-400-white text-[15px]  '
                        >
                            <span> EARTHING :-</span>
                            <ul className='space-y-5 '>
                                <li
                                    className='text-400-white text-[15px]  '
                                >
                                   AUGUR MACHINES

                                </li>
                                <li
                                    className='text-400-white text-[15px]  ' >
                                    JIGS FOR BENDING OF MS FLATS</li>
                                    <li
                                    className='text-400-white text-[15px]  '
                                >
                                   WELDING & CUTTING MACHINES

                                </li>


                            </ul>

                        </li>
                        <li
                            className='text-400-white text-[15px]  '
                        >
                            <span>BUSBAR WORK :-</span>
                            <ul className='space-y-5 '>
                                <li
                                    className='text-400-white text-[15px]  '
                                >
                                   BUSBAR BENDING MACHINES

                                </li>
                            </ul>

                        </li>
                        </div>
                        <div className='ListInfra'>
                        <li
                            className='text-400-white text-[15px]  '
                        >
                            <span>CABLING WORK :-</span>
                            <ul className='space-y-5 '>
                                <li
                                    className='text-400-white text-[15px]  '
                                >
                                    CRIMPING TOOLS

                                </li>
                                <li
                                    className='text-400-white text-[15px]  '
                                >

AUTOMATIC FERRULE PRINTER


                                </li>


                            </ul>

                        </li>
                        <li
                            className='text-400-white text-[15px]  '
                        >
                            <span>ERECTION :-</span>
                            <ul className='space-y-5 '>
                                <li
                                    className='text-400-white text-[15px]  '
                                >
                                    SOIL PENETRATION TESTING MACHINE

                                </li>
                                <li
                                    className='text-400-white text-[15px]  '
                                >

                                    CRANE UPTO 14 TONNE CAPACITY


                                </li>


                            </ul>

                        </li>
             
             
               
              
               
                        
                        </div>

                    </ul>
                </div>
            </div>
        </>
    )
}

