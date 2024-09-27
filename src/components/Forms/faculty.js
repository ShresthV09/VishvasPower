import React, { useRef } from 'react'
import './SliderDiv.css';
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { Carousel } from 'antd';


const OurPeople = () => {
  const ref = useRef()
  return (
    <div className='header-div facutlyDiv '>
      <motion.div variants={textVariant()} className="FacultyHeader">
        <p className={`${styles.sectionSubText}`}>Best Teachers</p>
        <h2 className={`${styles.sectionHeadText}`}>Our Faculty</h2>
      </motion.div>

      <div className='Slider-Div'>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}>
          <div className="FacultyContainer">
            <Carousel
              autoplay
              dots={true}
              draggables
              ref={ref}
            >

              <div className='Card-SliderFaculty'>
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680002510/VishvasWebsite/GURUKUL/Our%20Faculty/c84k6icjmh46st5wwfdo.png" alt="services-img" />
                <h4>Rajeev Bhave </h4>
                <p>Director VPES</p>

              </div>


              <div className="Card-SliderFaculty">
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680002510/VishvasWebsite/GURUKUL/Our%20Faculty/oanrfeevf9shcokjjfr7.jpg" alt="services-img" />
                <h4>Mr Savio Dmello </h4>
                <p>Director VPES</p>

              </div>


              <div className="Card-SliderFacultyBG">
                <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680002510/VishvasWebsite/GURUKUL/Our%20Faculty/xa7ccnketk7nf8nmelhs.jpg" alt="services-img" />
                <h4>Mr. Kiran Joharapurkar</h4>
                <p>Prime Faculty</p>

              </div>


            

            </Carousel>


          </div>
          <div className='ButtonFacutly'>
            <button onClick={() => {
              ref.current.prev()
            }}>
              <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680680924/VishvasWebsite/lvxcuffiqdkiqtjru8yi.png" alt="left" >

              </img>
            </button>
            <button onClick={() => {
              ref.current.next()
            }}>
              <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680680924/VishvasWebsite/f2qea1sqg44t7rmsv9gl.png " alt="right" >

              </img>
            </button>
          </div>

        </motion.p>
        <div className='Content-container'>


          <div className='w-full flex para-services 'style={{paddingLeft:"6px" , paddingRight:"6px"}}>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
              The Success of Good Quality Transformer
              manufacturing boils down to the workmanship.
              We Ensure high quality Workmanship by 3
              pillars:-

              <ul className=' list-disc  space-y-2'>
                <li
                  className='text-white-200 text-[15px] pl-1 tracking-wider'
                >
                  happy Workmen :- We ensure that our
                  team is always happy & satisfied with
                  their working environment </li>
                <li
                  className='text-white-200 text-[15px] pl-1 tracking-wider'
                > Regular SOP Trainings :- We drill down
                  the SOPs and their reasons for existing
                  down to the lowest levels in the company</li>
                <li
                  className='text-white-200 text-[15px] pl-1 tracking-wider'
                >Focus on Kaizen :- We use tools like
                  Quality Circles, Townhalls & Feedbacks to
                  ensure that each team memeber keeps on
                  improving everyday</li>

              </ul>
              
              
            </motion.p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default OurPeople;