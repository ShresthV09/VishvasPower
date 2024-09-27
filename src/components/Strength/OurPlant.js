import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';
import {Button} from 'antd';


const OurPlant = () => {
  const ref = useRef()
  return (
    <div className='header-divTraction'>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
      <p className={`${styles.sectionSubText}  `}>Our Strength</p>
          <h2 className={`${styles.sectionHeadText}`}>Our Plant</h2>
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
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776297/VishvasWebsite/ABOUT%20US/PLANT/Slideshow%20B/xpgfd1gqdxezpvd0d6ug.jpg" alt="services-img" />
                <p>Our Plant is Located at the Zero Mile of India</p>
              </div>


              <div className="Card-Slider">
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776295/VishvasWebsite/ABOUT%20US/PLANT/Slideshow%20B/yfezzet9vj1uuuvpfwq0.jpg" alt="services-img" />
                <p>Dispatch of Transformer</p>
              </div>


              <div className="Card-Slider">
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776296/VishvasWebsite/ABOUT%20US/PLANT/Slideshow%20B/y1snhnggxs2m3cqil5fx.jpg" alt="services-img" />
<p>Vertical Winding Machine</p>
              </div>


              <div className="Card-Slider">
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776297/VishvasWebsite/ABOUT%20US/PLANT/Slideshow%20B/evgqrowrcalreqartxgo.jpg" alt="services-img" />
                <p>Core Being prepared for SPA Lowering</p>
              </div>
              <div className='Card-Slider'>
                <img src='https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776297/VishvasWebsite/ABOUT%20US/PLANT/Slideshow%20B/dnchdwiutp1xkz8et4fy.jpg' alt="services" />
                <p>CCA being Tanked after VPD Process</p>
              </div>
              <div className='Card-Slider'>
                <img src='https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776298/VishvasWebsite/ABOUT%20US/PLANT/Slideshow%20B/h56lonegienuf8vzmq6i.jpg' alt="services" />
                <p>Facotry Acceptance Testing in Progress</p>
              </div>
              <div className='Card-Slider'>
                <img src='https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776297/VishvasWebsite/ABOUT%20US/PLANT/Slideshow%20B/yhn7ul4ulrhqnzpebz1q.jpg' alt="services" />
                <p>View of Winding Bay</p>
              </div>
              <div className='Card-Slider'>
                <img src='https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776297/VishvasWebsite/ABOUT%20US/PLANT/Slideshow%20B/dh24i6zxcny9dyng2mvk.jpg' alt="services" />
              <p>High Current Winding ready to be unloaded</p>
              </div>
              <div className='Card-Slider'>
                <img src='https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776297/VishvasWebsite/ABOUT%20US/PLANT/Slideshow%20B/yf6duji5swzvt5yw2rw0.jpg' alt="services" />
              <p>View of VPD Autoclave</p> 
              </div>
              <div className='Card-Slider'>
                <img src='https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776297/VishvasWebsite/ABOUT%20US/PLANT/Slideshow%20B/j9uf94i7xxre8daljmj4.jpg' alt="services" />
                <p>Building of Core in Progress</p>
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
           <li>Our State of the Art Plant is located
              at the Zero Mile of India fully equipped
              with all latest technologies & machineries
              to Manufacture Transformers upto
              220 KV 250 MVA class.
              Land Area :- 19900 sqm
              Covered area :- 5196 sqm
              Our Latest Equipments & machineries include</li>
          <ul className='list-disc space-y-2 TractionPoints'>
            <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
                
                Vapour Phase Drying Facility
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
              Partial Discharge Measurement</li>
              <li
                className='text-white-400 text-[18px] pl-1 tracking-wider'
              >Impulse test Facility upto 1600 KV 160KJ</li>
              <li
                className='text-white-400 text-[18px] pl-1 tracking-wider'>
                   Epstein Bridge for CRGO Loss measurement
                   
                </li>
                <li
                className='text-white-400 text-[18px] pl-1 tracking-wider'>
                  
                   Recurrent Surge Oscillogram
                </li>
             </ul>
             </ul>
             <Button className='ml-8'><Link to="/StrengthPlant">Read More</Link></Button>
          </motion.p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default OurPlant;