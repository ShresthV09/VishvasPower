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
      <p className={`${styles.sectionSubText}  `}>Our Strength </p>
          <h2 className={`${styles.sectionHeadText}`}>Our Vendors</h2>
        </motion.div>
   
    <div className='Slider-DivTraction'>
       
       
      <div className="ImageHolder">
      <Carousel
          autoplay
          dots={true}
          draggable
          ref={ref}
        >

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776306/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/zmusjygjxsi1ekqng0xx.png" alt="services-img"/>
            
          </div>
          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776306/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/yy5ga836usnybyqnjgse.jpg" alt="services-img"/>
            
          </div>
          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776306/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/of00tqde7kbp6oqvoupp.webp" alt="services-img"/>
            
          </div>

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776306/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/oarlled0rtvmcixaedyp.png" alt="services-img"/>
            
          </div>

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776305/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/ow2h3euqwac8ek6brsa8.jpg" alt="services-img"/>
            
          </div>

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776305/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/ahlzulphatc4cqq7gfuk.jpg" alt="services-img"/>
            
          </div>

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776305/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/gc4sdj08mtbmnrozdkdt.png" alt="services-img"/>
            
          </div>

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776305/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/ipzu20d5satowheengn9.png" alt="services-img"/>
            
          </div>

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776305/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/bn41m17odgyfgdkzgwgt.png" alt="services-img"/>
            
          </div>

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776305/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/kot9gzmw1y70bvfy8boj.png" alt="services-img"/>
            
          </div>


          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776305/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/ymmi2hqk7vgid8quqyrm.jpg" alt="services-img"/>
            
          </div>

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776305/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/rdjeuaebnblo4wbktiab.png" alt="services-img"/>
            
          </div>

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776305/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/np6buxjluf5mgtzkjprp.png" alt="services-img"/>
            
          </div>

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776304/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/efvwlhdbrtywy698iy2v.png" alt="services-img"/>
            
          </div>

          <div className='Card-SliderVendors'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776304/VishvasWebsite/ABOUT%20US/OUR%20PROCESSES/Our%20Vendors/vscaokshua8bolvjjefu.png" alt="services-img"/>
            
          </div>
        </Carousel>
        
      </div>

      
      <div className='Content-container'>
       

        <div className='w-full flex para-services '>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-20  text-[17px] max-w-3xl leading-[30px] '
          >
          
           
           
              <ul className='space-y-2 TractionPoints '>
            <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              > We are having a stringent vendor
              selection process and are using material
              from some of the best names serving 
             the Power Transformer Industry
             in the country. Also, we are proud to 
             declare that all our Vendors are Indian
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
              the Power Transformer Industry
              in the country. Also, we are proud to 
              declare that all our Vendors are Indian</li>
             
             </ul>
             
          </motion.p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default CorePlant;