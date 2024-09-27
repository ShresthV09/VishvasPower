import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';


const AutoTransformers = () => {
  const ref = useRef()
  return (
    <div className='header-divTraction'>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
          <p className={`${styles.sectionSubText}  `}>Our Product-FOR 2X25 KV AC SYSTEM</p>
          <h2 className={`${styles.sectionHeadText}`}>Autotransformers</h2>
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
            <img style={{objectFit:'contain'}} src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776235/VishvasWebsite/Products/AutoTransformers/hstivxbgjzm4przmrzm8.jpg" alt="services-img"/>
            
          </div>
          <div className='Card-Slider'>
            <img style={{objectFit:'contain'}} src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776235/VishvasWebsite/Products/AutoTransformers/obhgxtakfuzdhpmkcsqf.jpg" alt="services-img"/>
            
          </div>
          <div className='Card-Slider'>
            <img style={{objectFit:'contain'}} src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776235/VishvasWebsite/Products/AutoTransformers/x8s0q4xfou3fgtwu9gzc.jpg" alt="services-img"/>
            
          </div>

        </Carousel>
        
      </div>

      
      <div className='Content-container'>
       

        <div className='w-full flex para-services '>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-11  text-[17px] max-w-3xl leading-[30px] '
          >
          
            <ul className='space-y-2 TractionPoints'>
            <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
                 Autotransformers are located
at SPs & SSPs in 2 X 25 KV AC 
Traction system.
Power from TSS to feeding circuit is 
transferred at 50 kv
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
              which is stepped 
down to utilization voltage of 
25 kv by the auto transformer(AT).
It has a winding of 50 kv with neutral
 point in the middle of the winding.</li>
              <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              > Neutral point is solidly connected to 
              traction rails through a buried rail 
              while one outer terminal is connected 
              to OHE and the other to feeder</li>
             </ul>
          </motion.p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default AutoTransformers;