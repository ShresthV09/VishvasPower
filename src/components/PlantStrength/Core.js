import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';
import {Button} from 'antd';


const CorePlant = () => {
  const ref = useRef()
  return (
    <div className='header-divCore'>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
          <p className={`${styles.sectionSubText}  `}>Our Strength</p>
          <h2 className={`${styles.sectionHeadText}`}>Plant Core</h2>
        </motion.div>
   
    <div className='Slider-DivTraction'>
       
       
      <div className="ImageHolder">
      <Carousel
          autoplay
          dots={true}
          draggable
          ref={ref}
        >

          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776296/VishvasWebsite/ABOUT%20US/PLANT/CORE/nbagyt8oos8wrzhxpfmw.png" alt="services-img"/>
            <p>core</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776295/VishvasWebsite/ABOUT%20US/PLANT/CORE/o8m8akahgskvmtnsvvfb.jpg" alt="services-img"/>
<p>5 Limbed Core of 100 MVA ICT</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776294/VishvasWebsite/ABOUT%20US/PLANT/CORE/kmdnjq5j4gkri2dl6ezq.jpg" alt="services-img"/>
<p>core</p>
          </div>


  

        </Carousel>
        
      </div>

      
      <div className='Content-container'>
       

        <div className='w-full flex para-services '>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-20  text-[17px] max-w-3xl leading-[30px] '
          >
          
            <ul className='space-y-2 TractionPoints'>
            <li className='text-400-white text-[20px] pl-1 tracking-wider'>Facilities Available:-</li>
              <ul className='space-y-2 TractionPoints list-disc'>
            <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >Core Building Tables upto 250 MVA
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
              Epstein Bridge for Loss Measurement</li>
              <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              > Resiglass curing Oven</li>
             </ul>
             </ul>
          </motion.p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default CorePlant;