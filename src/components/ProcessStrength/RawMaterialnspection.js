import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';
import './core.css'



const RawMaterialnspection = () => {
  const ref = useRef()
  return (
    <div className='header-divRaw '>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
      <p className={`${styles.sectionSubText}  `}>Our Strength </p>
          <h2 className={`${styles.sectionHeadText}`}>Raw Material Inspection</h2>
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
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776304/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/RAW%20MATERIAL%20INSPECTION/iue00ieo9d8meupwkc8l.jpg" alt="services-img"/>
            <p>Raw Material inspection of valves</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776304/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/RAW%20MATERIAL%20INSPECTION/g4jdtptbp658e8goipvq.jpg" alt="services-img"/>
<p>Raw material Inspection of fasteners</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776304/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/RAW%20MATERIAL%20INSPECTION/gdo0oaqjwzaiomei0syk.jpg" alt="services-img"/>
<p>Raw material Inspection of PICC</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776304/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/RAW%20MATERIAL%20INSPECTION/vwyu3atdhxjr7tlildwy.jpg" alt="services-img"/>
          <p>Raw material Inspection of PCB Cylinders</p>
          </div>
          <div className="Card-Slider">

             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776304/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/RAW%20MATERIAL%20INSPECTION/ysjcxalikopllvxsdyvi.jpg" alt="services-img"/>
          <p>Raw material Inspection of Permawood Rings</p>
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

export default RawMaterialnspection;