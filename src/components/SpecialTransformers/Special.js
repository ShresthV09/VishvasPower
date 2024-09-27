import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';
import {Button} from 'antd';


const Special = () => {
  const ref = useRef()
  return (
    <div className='header-divTraction'>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
          <p className={`${styles.sectionSubText}  `}>Our Products</p>
          <h2 className={`${styles.sectionHeadText}`}>Special Transformer</h2>
        </motion.div>
   
    <div className='Slider-DivTraction'>
       
       
      <div className="">
        <Carousel
          autoplay
          dots={true}
          draggable
          ref={ref}
        >

          <div className='Card-Slider '>
            <img style={{objectFit:'contain'}} src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680081269/VishvasWebsite/Products/TractionPowe/gkxoltgguwdqh6xlqzc1.jpg" alt="services-img"/>
            
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
                  Special V connected Traction Power Transformers
with dual LV windings are used in 2 X 25 
KV AC Traction system
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
               In this arrangement, 3 single-phase 
transformers are connected to different
 pairs of 3 phases forming on open delta
 connection on the primary side.</li>
              <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              > Out of the 3 single-phase transformers,
              one transformer feeds the OHE on one
              side of the TSS; another transformer
              feeds the OHE on the other side of 
             TSS and the third remains as standby.</li>
             </ul>
          </motion.p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Special;