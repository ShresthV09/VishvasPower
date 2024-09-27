import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';
import './core.css'



const ChallengingJobs = () => {
  const ref = useRef()
  return (
    <div className='header-divRaw '>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
          <p className={`${styles.sectionSubText}  `}>Remanufacturing & Repairing </p>
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
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014488/VishvasWebsite/SERVICES/Repair%20page/Slidehosw%20H/p2r5doashec0vzjx10yx.jpg" alt="services-img"/>
            <p>Remanufactured Core Coil Assembly of Furnace Duty Transformer 36 MVA</p>
          </div>


            {/* <div className="Card-Slider">
              <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014487/VishvasWebsite/SERVICES/Repair%20page/Slidehosw%20H/z3seh0udd1m5rftsc1hm.heic" alt="services-img"/>
<p>Fully Remanufactured Core _ Coil Assembly of 220 33 11 KV 50 MVA Transformer </p>
            </div> */}


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014487/VishvasWebsite/SERVICES/Repair%20page/Slidehosw%20H/pakxjcle4ncntaig72hk.jpg" alt="services-img"/>
<p>Remanufactured Single Phase Assemblies of 50 MVA 132 33 KV Transformer</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014487/VishvasWebsite/SERVICES/Repair%20page/Slidehosw%20H/bwnmd1a1a0oanptkxnar.jpg" alt="services-img"/>
          <p>100 MVA CCA under process  </p>
          </div>
          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014486/VishvasWebsite/SERVICES/Repair%20page/Slidehosw%20H/ogzcrlryxumhzvi2jlwu.jpg" alt="services-img"/>
          <p>Fully Remanufactured 80 MVA 220 34.5 KV transformer being dispatched</p>
          </div>
          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014486/VishvasWebsite/SERVICES/Repair%20page/Slidehosw%20H/evo4p4qr9lwz7gdhubfw.jpg" alt="services-img"/>
          <p>Fully remanufactured 54 MVA 220 27 KV Scott Connected Transformer</p>
          </div>
          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014486/VishvasWebsite/SERVICES/Repair%20page/Slidehosw%20H/ssvjvzlkv5vp5bhhm9yj.jpg" alt="services-img"/>
          <p>FullyRemanufactured 80 MVA 132 11.5 -11.5KV dual LV Transformer</p>
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

export default ChallengingJobs;