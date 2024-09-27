import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';


const CorePlant = () => {
  const ref = useRef()
  return (
    <div className='header-divCore'>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
      <p className={`${styles.sectionSubText}  `}>Our Strength </p>
          <h2 className={`${styles.sectionHeadText}`}>DryOut</h2>
        </motion.div>
   
    <div className='Slider-DivTraction RowReverse' >
       
       
      <div className="ImageHolder">
      <Carousel
              autoplay
              dots={true}
              draggable
              ref={ref}
            >

              <div className='Card-Slider'>
              <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776299/VishvasWebsite/ABOUT%20US/PLANT/VPD/uqgeqlynd01u7hhjumtn.jpg" alt="services-img"/>
<p>VPD 1</p>
              </div>

              <div className='Card-Slider'>
              <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041262/VishvasWebsite/ABOUT%20US/PLANT/VPD/cctmoqnajcwhpboqvhxw.jpg" alt="services-img"/>
<p>VPD system</p>
              </div>

              <div className='Card-Slider'>
              <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041259/VishvasWebsite/ABOUT%20US/PLANT/VPD/uhgk6wsbx7ji2nmzdbat.jpg" alt="services-img"/>
<p>VPD Autoclave</p>
              </div>


              

            </Carousel>
        
      </div>

      
      <div className='Content-container mt-20'>
       

        <div className='w-full flex para-services mt-10'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='  text-[17px] max-w-3xl leading-[30px] '
          >
          
            <ul className='space-y-2 TractionPoints'>
            <li className='text-400-white text-[20px] pl-1 tracking-wider'>Facilities Available:-</li>
              <ul className='space-y-2 TractionPoints list-disc'>
            <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              > Vapour Phase Drying Oven
              </li>
             
             
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