import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import './services.css'
import './whyus.css'
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { Button } from "antd";
import { Link } from "react-router-dom";

const OurProducts = () => {
  return (
    <div className="container-WhyusProd" >
      <motion.div variants={textVariant()} className="header-services">
<span>
        <h2 className={`${styles.sectionHeadText}`}>Why us?</h2>
        </span>
      </motion.div>

      <div className='mt-20  gap-7 card-Whyus'>
        <motion.div variants={fadeIn("up", "spring", 0 * 0.5, 0.75)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary px-4 sm:px-3 rounded-2xl sm:w-[360px] card1'
          >
            <div className='relative w-full h-[230px]'>
              <img
                src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776260/VishvasWebsite/Products/Credentials/wjrcjl0thpnzmptxaqgw.jpg"
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />


            </div>

            <div className='mt-5'>
              <h3 className=' font-bold text-[24px]'>Our Strengths</h3>
              <ul className='list-disc  space-y-2'>
                <li
                  className='text-secondary text-[14px]'
                >
                  WE DESIGN TRANSFORMERS TO
                  LAST60+ YEARS
                </li>
                <li
                  className='text-secondary text-[14px]  '
                >
                  WE ARE HIGHLY QUALITY CONSCIOUS

                </li>
                <li
                  className='text-secondary text-[14px]  '
                >

                  WE ARE HIGHLY SERVICE ORIENTED
                </li>

                <li
                  className='text-secondary text-[14px]  '
                >

                  WE HAVE HIGHLY EXPERIENCED &
                  SINCERE TEAM
                </li>
                <li
                  className='text-secondary text-[14px]  '
                >

                  WE HAVE A NEVER SAY NO ATTITUDE
                  & RIGIDITY IS NON-EXISTENT IN
                  OUR COMPANY
                </li>



              </ul>

              <Button><Link to="/ChallengingRecords">Read More</Link></Button>
            </div>


          </Tilt>
        </motion.div>

        <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary px-4 sm:px-3 rounded-2xl sm:w-[360px] card2'
          >
            <div className='relative w-full h-[230px]'>
              <img
                src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776260/VishvasWebsite/Products/Credentials/wjrcjl0thpnzmptxaqgw.jpg"
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />


            </div>

            <div className='mt-5'>
              <h3 className=' font-bold text-[24px]'>Our Credentials</h3>
              <ul className='list-disc  space-y-2'>
                <li
                  className='text-secondary text-[14px]  '
                >
                  WE ARE RDSO APPROVED
                  TRANSFORMER OEM
                  FOR VARIOUS RATING
                </li>
                <li
                  className='text-200-white text-[14px]  '
                >
                  WE ARE ISO 9001:2018 CERTIFIED
                </li>
                <li
                  className='text-secondary text-[14px]  '
                >
                  WE HAVE 0% FAILURE RATE

                </li>
                <li
                  className='text-secondary text-[14px]  '
                >

                  WE HAVE SUPPLIED MORE THAN
                  60+ TRANSFORMERS ALL OVER
                  INDIA
                </li>
              </ul>

              <Button><Link to="/OurCredentials">Read More</Link></Button>
            </div>


          </Tilt>
        </motion.div>

      </div>
    </div>
  );
};

export default OurProducts;