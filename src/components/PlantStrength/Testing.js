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
          <h2 className={`${styles.sectionHeadText}`}>Testing</h2>
        </motion.div>
   
    <div className='Slider-DivTraction RowReverse'>
       
       
      <div className="ImageHolder">
      <Carousel
          autoplay
          dots={true}
          draggable
          ref={ref}
        >

          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776298/VishvasWebsite/ABOUT%20US/PLANT/Testing/e3ojmbylqpgcl6asxmpb.jpg" alt="services-img"/>
            <p>FAT in progress on 160 MVA Transformer</p>
          </div>
          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681042200/VishvasWebsite/ABOUT%20US/PLANT/Testing/ghju6e9st20jcsdg8ftc.jpg" alt="services-img"/>
            <p>Power analyzer</p>
          </div>
          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681042199/VishvasWebsite/ABOUT%20US/PLANT/Testing/wsznuvg9sodh3nntecpc.jpg" alt="services-img"/>
            <p>200 HZ DVDF Mg Set</p>
          </div>
          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776298/VishvasWebsite/ABOUT%20US/PLANT/Testing/glh7iibx4uxmxbb7a1kz.jpg" alt="services-img"/>
            <p>Testing 1</p>
          </div>
          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776298/VishvasWebsite/ABOUT%20US/PLANT/Testing/twkke3cebyuix8csujas.jpg" alt="services-img"/>
            <p>Testing 2</p>
          </div>

       



         


  
        </Carousel>
        
      </div>

      
      <div className='Content-container'>
       

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
              >All routine tests as per IS 2026
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
             0-500 KV HV Tester</li>
              <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              > Impulse Tester 1600 KV 160 KJ</li>
               <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              > Recurrent Surge Generator</li>
               <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              >FRAX 101 for SFRA analysis</li>
               <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              >PDD-6m for PD measurement</li>
               <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              >Facility for Temperature rise test
              upto 250 MVA 220 KV</li>
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