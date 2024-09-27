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
          <p className={`${styles.sectionSubText}  `}>Our Strength</p>
          <h2 className={`${styles.sectionHeadText}`}>CCA</h2>
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
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776300/VishvasWebsite/ABOUT%20US/PLANT/CCA/vxuqnyolf4s4jtmsn2fb.jpg" alt="services-img"/>
            <p>SPA 11</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776300/VishvasWebsite/ABOUT%20US/PLANT/CCA/vycutgpbvjptgdymzsl9.jpg" alt="services-img"/>
<p>CCA</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776299/VishvasWebsite/ABOUT%20US/PLANT/CCA/jdb2niz5cvi7ttdk7ulm.jpg" alt="services-img"/>
<p>SPA 1</p>
          </div>
          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776299/VishvasWebsite/ABOUT%20US/PLANT/CCA/jr3ebprvnsrwkjhf5vs9.jpg" alt="services-img"/>
<p>SPA 4</p>
          </div>
          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776299/VishvasWebsite/ABOUT%20US/PLANT/CCA/vajixzyh276d5nndvd4p.jpg" alt="services-img"/>
<p>SPA 3</p>
          </div>
          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776300/VishvasWebsite/ABOUT%20US/PLANT/CCA/ygl35d4krxazxppcfinf.jpg" alt="services-img"/>
            <p>SPA</p>
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
              >Enclosed chamber for CCA assembly
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
               Hydraulic Jacks for pressing</li>
        
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