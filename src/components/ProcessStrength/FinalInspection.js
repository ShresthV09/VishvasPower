import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';
import './core.css'



const FinalInspection = () => {
  const ref = useRef()
  return (
    <div className='header-divRaw '>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
      <p className={`${styles.sectionSubText}  `}>Our Strength </p>
          <h2 className={`${styles.sectionHeadText}`}>Final Inspection</h2>
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

          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776304/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Final%20Inspection/eetqehpmgsziirh1kjsu.jpg" alt="services-img"/>
            <p>Automatic Turns ratio Meter</p>
          </div>


          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776303/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Final%20Inspection/pyjhg8zgjjqnhxpadcgm.jpg" alt="services-img"/>
            <p>Power analyzer for Loss Measuremernt</p>
          </div>

          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776303/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Final%20Inspection/amagwledxfjkk7qikbry.jpg" alt="services-img"/>
            <p>Gas Cromoatograph for DGA Analysis</p>
          </div>

          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776303/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Final%20Inspection/lbqwfqaya4hwx0cuwgqw.jpg" alt="services-img"/>
            <p>5 KV IR Tester</p>
          </div>

          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776303/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Final%20Inspection/iwabpl99kk1robootsfn.jpg" alt="services-img"/>
            <p>FAT in progress on 160 MVA Transformer</p>
          </div>

          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776303/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Final%20Inspection/xvzljeugkipqf1jf8xlp.jpg" alt="services-img"/>
            <p>Mircoohmmeter for Winding Resistance Measurement</p>
          </div>

          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776303/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Final%20Inspection/um6s6wrquqfrbfqyqpdw.jpg" alt="services-img"/>
            <p>1600 KV 160 KJ Impulse Generator</p>
          </div>
        </Carousel>
        <div className='ButtonCOREBiggieRR'>
          <button onClick={()=>{
          ref.current.prev()
        }}>
        <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680680924/VishvasWebsite/lvxcuffiqdkiqtjru8yi.png" alt="left" >
         
        </img>
        </button>
        <button onClick={()=>{
          ref.current.next()
        }}>
        <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680680924/VishvasWebsite/f2qea1sqg44t7rmsv9gl.png" alt="right" >
          
        </img>
        </button>
        </div>
      </div>

      </motion.p>
    </div>
    </div>

  )
}

export default FinalInspection;