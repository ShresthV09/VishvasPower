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
          <h2 className={`${styles.sectionHeadText}`}>Windings</h2>
        </motion.div>
   
    <div className='Slider-DivTraction RowReverse' >
       
       
      <div className="ImageHolder">
      <Carousel
              autoplay
              dots={true}
              draggable
              ref={ref}
            >

              <div className='Card-Slider'>
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041525/VishvasWebsite/ABOUT%20US/PLANT/Winding/ps9wg5epmh0x1axmvuq2.jpg" alt="services-img" />
<p>Horizontal Winding Machines</p>
              </div>

              <div className='Card-Slider'>
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041525/VishvasWebsite/ABOUT%20US/PLANT/Winding/y5hgtihhgqne4wx2damd.jpg" alt="services-img" />
                <p>vertical winding Machines</p>

              </div>


              <div className='Card-Slider'>
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041526/VishvasWebsite/ABOUT%20US/PLANT/Winding/n4ulld0samjygfwewqfv.jpg" alt="services-img" />
                <p>Formers for Winding</p>

              </div>
              <div className='Card-Slider'>
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041512/VishvasWebsite/ABOUT%20US/PLANT/Winding/jbnj2hapd1dvrgvtft1m.jpg" alt="services-img" />
                <p>Hydrualic Presss for Coil Stabilizing</p>

              </div>
              <div className='Card-Slider'>
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041522/VishvasWebsite/ABOUT%20US/PLANT/Winding/umjkogokoltrvhqwcwnp.jpg" alt="services-img" />
                <p>Tensioning Post</p>

              </div>

              <div className='Card-Slider'>
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041513/VishvasWebsite/ABOUT%20US/PLANT/Winding/ysnozfdzswjci1cfjgug.jpg" alt="services-img" />
                <p>S bends in windings</p>

              </div>

              <div className='Card-Slider'>
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041512/VishvasWebsite/ABOUT%20US/PLANT/Winding/c4xaiplhf0qjhazaepqt.jpg" alt="services-img" />
<p>Winding under pressing</p>
              </div>

              <div className='Card-Slider'>
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041509/VishvasWebsite/ABOUT%20US/PLANT/Winding/kepvwmyc7nyvsfpvvibl.jpg" alt="services-img" />
                <p>Surge end rings</p>

              </div>

              <div className='Card-Slider'>
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041509/VishvasWebsite/ABOUT%20US/PLANT/Winding/kepvwmyc7nyvsfpvvibl.jpg" alt="services-img" />
<p>Cylinder pasting</p>
              </div>

              <div className='Card-Slider'>
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041509/VishvasWebsite/ABOUT%20US/PLANT/Winding/y5vpkbuzavntrpsldpwu.jpg" alt="services-img" />
<p>Winding under progress</p>
              </div>

              <div className='Card-Slider'>
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1681041502/VishvasWebsite/ABOUT%20US/PLANT/Winding/gobq4chtyc3qmkvov3ul.jpg" alt="services-img" />
<p>EOT Crane 25 Tonnes</p>
              </div>

            </Carousel>
        
      </div>

      
      <div className='Content-container'>
       

        <div className='w-full flex para-services '>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='  text-[17px] max-w-3xl leading-[30px] '
          >
          
            <ul className='space-y-2 TractionPoints'>
            <li className='text-400-white text-[20px] pl-1 tracking-wider'>Facilities Available:-</li>
              <ul className='space-y-2 TractionPoints list-disc'>
            <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              > Horiontal Winding machines 
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
              vertical Winding Machines</li>
              <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              > S Bend tools</li>
               <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              >tensioning Posts</li>
               <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              > 90 Deg bend tools</li>
               <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              > Hydrualic Press</li>
                <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              > Winding Drying vacuum Oven</li>
                <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              >Clamping fixtures</li>
             
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