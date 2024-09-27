import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';
import {Button} from 'antd';
import { Link } from 'react-router-dom';


const OurPeople = () => {
  const ref = useRef()
  return (
    <div className='header-divTraction'>
      <motion.div variants={textVariant()} className="header-services HeaderRE">
      <p className={`${styles.sectionSubText}  `}>Our Strength</p>
          <h2 className={`${styles.sectionHeadText}`}>Our People</h2>
        </motion.div>
   
    <div className='Slider-DivTraction'>
       
       
      <div className="ImageHolder" >
      <Carousel
          autoplay
          dots={true}
          draggable
          ref={ref}
        >

          <div className='Card-Slider'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776306/VishvasWebsite/ABOUT%20US/OUR%20PEOPLE/Slideshow%20D/zptnoze5avtsfispkatr.jpg" alt="services-img"/>
           <p>VPES team undergoing regular Training</p>
          </div>


          <div className="Card-Slider">
             <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776306/VishvasWebsite/ABOUT%20US/OUR%20PEOPLE/Slideshow%20D/zehe9skkxdg0k75m02wb.jpg" alt="services-img"/>
<p>Holi Celebration at VPES</p>
          </div>
          <div className='Card-Slider'>
            <img src='https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679850340/VishvasWebsite/ABOUT%20US/OUR%20PEOPLE/Slideshow%20D/jkslyh9vf1kbqlj70n4s.jpg' alt='OurPeople' />
         <p>VPES team comissioning Transformer at site</p>
          </div>

        </Carousel>
        
      </div>

      
      <div className='Content-container'>
       

        <div className='w-full flex para-services '>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-11  text-[17px] max-w-3xl leading-[30px] '
          >
          
          <ul className='space-y-2 TractionPoints'>
            <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
                
            The Success of Good Quality Transformer
manufacturing boils down to the workmanship.
We Ensure high quality Workmanship by 3
pillars:-
              </li>
              <li
                className='text-400-white text-[18px] pl-1 tracking-wider'
              >
              happy Workmen :- We ensure that our
team is always happy & satisfied with 
their working environment</li>
              <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'
              > Regular SOP Trainings :- We drill down
              the SOPs and their reasons for existing 
              down to the lowest levels in the company</li>
              <li
                className='text-white-200 text-[18px] pl-1 tracking-wider'>
                  Focus on Kaizen :- We use tools like
              Quality Circles, Townhalls & Feedbacks to
              ensure that each team memeber keeps on
              improving everyday
                </li>
             </ul>
             <Button className='ml-8'><Link to="/StrengthPeople">Read More</Link></Button>
          </motion.p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default OurPeople;