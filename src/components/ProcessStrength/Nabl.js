import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';



const Nabl = () => {
  const ref = useRef()
  return (
    <div className='header-divCore'>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
      <p className={`${styles.sectionSubText}  `}>Our Strength </p>
          <h2 className={`${styles.sectionHeadText}`}>NABL</h2>
        </motion.div>
   
    <div className='Slider-DivTraction'>
       
       
      <div className="ImageHolder">
      <Carousel
          autoplay
          dots={true}
          draggable
          ref={ref}
        >

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776303/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Final%20Inspection/um6s6wrquqfrbfqyqpdw.jpg" alt="services-img"/>
            
          </div>
          
        </Carousel>
        
      </div>

      
      <div className='Content-container'>
       

        <div className='w-full flex para-services '>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-20  text-[17px] max-w-3xl leading-[30px] '
          >
          
           
           
              <ul className='space-y-2 TractionPoints '>
            <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              > Our Transforemr Test Laboratory has
              Applied for NABL Accredition
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
              and
              will soon be Accredited for ISO 17025</li>
             
             </ul>
             
          </motion.p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Nabl;