import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';

const CorePlant = () => {
  const ref = useRef()
  return (
    <div className='header-divCore '>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
      <p className={`${styles.sectionSubText}  `}>Our Strength </p>
          <h2 className={`${styles.sectionHeadText}`}>Tanking</h2>
        </motion.div>
   
    <div className='Slider-DivTraction RowReverse'>
       
       
      <div className="ImageHolder">
      <Carousel
          autoplay
          dots={true}
          draggable
          ref={ref}
        >

<div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681042037/VishvasWebsite/ABOUT%20US/PLANT/Tanking/e7esevbclmqdsgbkzzvu.jpg" alt="services-img"/>
<p>EOT Crane 40 Tonne</p>
          </div>

          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681042037/VishvasWebsite/ABOUT%20US/PLANT/Tanking/vcdya8osnsf9kcrf4kxc.jpg" alt="services-img"/>
<p>Gehlot Crane 200 Tonnes</p>
          </div>
          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776295/VishvasWebsite/ABOUT%20US/PLANT/Tanking/gh9ntdjind5ttstl2qqo.jpg" alt="services-img"/>
            <p>CCA 2</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776294/VishvasWebsite/ABOUT%20US/PLANT/Tanking/oskpkdy72xzflql1cu53.jpg" alt="services-img"/>
<p>CCA scott</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776295/VishvasWebsite/ABOUT%20US/PLANT/Tanking/syuqz0hwfcqzmv0fg5j2.jpg" alt="services-img"/>
<p>Dispatch</p>
          </div>

        


         


  
        </Carousel>
        
      </div>

      
      <div className='Content-container mt-10'>
       

        <div className='w-full flex para-services '>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className=' text-[17px] max-w-3xl leading-[30px] '
          >
          
            <ul className='space-y-2 TractionPoints'>
            <li className='text-400-white text-[20px] pl-1 tracking-wider'>Facilities Available:-</li>
              <ul className='space-y-2 TractionPoints list-disc'>
            <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              > Crane upto 200 MVA 
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
            1200 KLPH Filter Machines</li>
              <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              > vacuum Pumps upto 1 Torr capacity</li>
               <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              >Mechanized Tools</li>
               <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              >Jigs for handling accesories </li>
              
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