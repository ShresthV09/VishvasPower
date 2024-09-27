import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';



const Party = () => {
  const ref = useRef()
  return (
    <div className='header-divCore'>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
      <p className={`${styles.sectionSubText}  `}>Our Strength </p>
          <h2 className={`${styles.sectionHeadText}`}>3rd Party Inspection</h2>
        </motion.div>
   
    <div className='Slider-DivTraction  RowReverse'>
       
       
      <div className="ImageHolder">
      <Carousel
          autoplay
          dots={true}
          draggable
          ref={ref}
        >

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776300/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/3rd%20party%20testing/zxijh1oek18tkwy73bbv.png" alt="services-img"/>
            
          </div>
          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776300/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/3rd%20party%20testing/dk8sb9ffmglb76ubldoy.png" alt="services-img"/>
            
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
           
              <ul className='space-y-2 TractionPoints '>
            <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >  Our Transformers are being tested
              in our Transformer Test Lab by
              reputed 3rd party agencies
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
              like
              RITES, TUV Nord e.t.c. to ensure 
              impartiality in testing</li>
             
             </ul>
             </ul>
          </motion.p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Party;