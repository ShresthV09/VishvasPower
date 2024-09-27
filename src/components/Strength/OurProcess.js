import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';
import {Button} from 'antd';


const OurProcess = () => {
  const ref = useRef()
  return (
    <div className='header-divTraction'>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
      <p className={`${styles.sectionSubText}  `}>Our Strength</p>
          <h2 className={`${styles.sectionHeadText}`}>Our Process</h2>
        </motion.div>
   
    <div className='Slider-DivTraction'>
       
       
      <div className="ImageHolder mt-10" >
      <Carousel
          autoplay
          dots={true}
          draggable
          ref={ref}
        >

          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776301/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/SLIDESHOW%20C/agxvnc5zsk9ycpohfslu.jpg" alt="services-img"/>
            <p>Single Phase Assemblies Ready for VPD</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776301/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/SLIDESHOW%20C/aldkilcuqkrb8ekk4bql.jpg" alt="services-img"/>
<p> CCA being Tanked after VPD Process</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776300/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/SLIDESHOW%20C/biegdyvbrgyld5txgxlo.jpg" alt="services-img"/>
<p>Core Being prepared for SPA Lowering</p>
          </div>


          <div className="Card-Slider">
            
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776301/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/SLIDESHOW%20C/rfmg6hke54p7yoesoymb.jpg" alt="services-img"/>
         <p>Building of Core in Progress</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776301/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/SLIDESHOW%20C/l1ajns22k5fkcmdbalcq.jpg" alt="services-img"/>
          <p>High Current Winding ready to be unloaded</p>
          </div>

        </Carousel>
        
      </div>

      
      <div className='Content-container'>
       

        <div className='w-full flex para-services '>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-11  text-[20px] max-w-3xl leading-[30px] '
          >
            <ul className='space-y-2 TractionPoints'>
           <li> Power Transformer is a handicraft product.
Manufacturing of EHV class Transformers
is akin to assembly of High Quality Engines like
Rolls Royce, Mclaren e.t.c</li>
          
            <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
                
                Stringent Quality Control Processes are the
              pillars upon which our 0% failure record is based
              We are using high quality materials from selected
              vendors which undergo strict quality checking
              before acceptance.
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
             We are employing 3 level In-Process Quality Checks
              done by the worker himself, his supervisor & a
              seperate In Process Quality Department</li>
              
             </ul>
             <Button className='ml-8'><Link to="/StrengthProcess">Read More</Link></Button>
             
          </motion.p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default OurProcess;