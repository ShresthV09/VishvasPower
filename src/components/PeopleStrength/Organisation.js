import React, { useRef } from 'react'

import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';




const Organisation = () => {
  const ref = useRef()
  return (
    <div className='header-divRaw '>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
      <p className={`${styles.sectionSubText}  `}>VPES</p>
          <h2 className={`${styles.sectionHeadText}`}>Organisation Chart</h2>
        </motion.div>
   
    <div className='Slider-DivRR'>
      <motion.p
            variants={fadeIn("", "", 0.1, 1)}>
      <div className="Card-ContainerRR">
      <Carousel
          autoplay
          dots={true}
          draggable
          ref={ref}
        >

         


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681044669/VishvasWebsite/ABOUT%20US/OUR%20PEOPLE/lj6soo64rpzggcgw9wi1.jpg" alt="services-img"/>
           
          </div>

        </Carousel>
       
      </div>

      </motion.p>
    </div>
    </div>

  )
}

export default Organisation;