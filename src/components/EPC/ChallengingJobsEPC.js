import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';
import './core.css'




const ChallengingJobsEPC = () => {
  const ref = useRef()
  return (
    <div className='header-divRaw '>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
      <p className={`${styles.sectionSubText}  `}>Engineering, Procurement and Construction</p>
          <h2 className={`${styles.sectionHeadText}`}>Challenging Jobs</h2>
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
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014566/VishvasWebsite/SERVICES/EPC%20Page/Slideshow%20J%20-%20Copy/cuj8tzuvvwemkwvbitka.jpg" alt="services-img"/>
            <p>Warud TSS for Central Railway</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014489/VishvasWebsite/SERVICES/EPC%20Page/Slideshow%20J%20-%20Copy/nfx6n2co1ndc6wcokeda.jpg" alt="services-img"/>
<p>Gholvad TSS for Western Railway</p>
          </div>

          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014489/VishvasWebsite/SERVICES/EPC%20Page/Slideshow%20J%20-%20Copy/xdsovd2tfgkgplbj1fce.jpg" alt="services-img"/>
<p>Bhusaval SSP suitable for 4th Line for Central Railway</p>
          </div>

          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014489/VishvasWebsite/SERVICES/EPC%20Page/Slideshow%20J%20-%20Copy/mfnxhakufjatnmsfcsmr.jpg" alt="services-img"/>
<p>Dabhoi TSS for Western Railway</p>
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
        <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680680924/VishvasWebsite/f2qea1sqg44t7rmsv9gl.png " alt="right" >
          
        </img>
        </button>
        </div>
      </div>

      </motion.p>
    </div>
    </div>

  )
}

export default ChallengingJobsEPC;