import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';
import './core.css'



const ChallengingJobsPOH = () => {
  const ref = useRef()
  return (
    <div className='header-divRaw '>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
          <p className={`${styles.sectionSubText}  `}>Periodic OverHauling</p>
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
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014490/VishvasWebsite/SERVICES/POH%20page/Slideshow%20I/cgj1hym8cuilfirierid.jpg" alt="services-img"/>
            <p>50 MVA 220 KV POH by Us</p>
          </div>


            {/* <div className="Card-Slider">
              <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014487/VishvasWebsite/SERVICES/Repair%20page/Slidehosw%20H/z3seh0udd1m5rftsc1hm.heic" alt="services-img"/>

            </div> */}


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014489/VishvasWebsite/SERVICES/POH%20page/Slideshow%20I/otj5b7v852w0pgcyazi6.jpg" alt="services-img"/>
<p>315 MVA 220 KV GT POH by our team</p>
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

export default ChallengingJobsPOH;