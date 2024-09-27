import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';


const Traction = () => {
  const ref = useRef()
  return (
    <div className='header-divTraction'>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
          <p className={`${styles.sectionSubText}  `}>Our Products</p>
          <h2 className={`${styles.sectionHeadText}`}>Traction Power Transformers</h2>
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
                 This transformer is installed in a 
traction sub-stations along side 
the rail track and is used to feed 
25KV AC power to railway electric 
locomotives.
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
              The HV winding is connected 
to two nominated phases of incoming 
three phase lines and on the secondary
side, one terminal of 25 KV winding is 
connected to the traction overhead 
equipment while the other is solidly 
earthed to the running traction rails.</li>
              <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              > This transformer is designed to meet 
              overloads up to 200% for specified 
              duration and dynamic/thermal short 
              circuit of 0.5sec and 5 sec respectively.</li>
             </ul>
          </motion.p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Traction;