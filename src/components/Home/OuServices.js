import React from "react";

import { motion } from "framer-motion";
import './services.css'

import { fadeIn, textVariant } from "../../utils/motion";
import { Button } from "antd";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div className="container-servicesPage ">
       <div
        className="testi-header  servicesHeader ml-3">
        <motion.div variants={textVariant(0.5)}>
         
          <span className='HeadingTesti'>
          <h1 style={{color:"#121212" }}>Our Services</h1>
          </span>
        </motion.div>
      </div>

      <div className='mt-20 gap-7 card-services ServicesCenter'>
        <motion.div variants={fadeIn("up", "spring", 0 * 0.5, 0.75)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}>
          <div
            className='bg-tertiary px-4 sm:px-3 rounded-2xl sm:w-[360px] w-full prod-card'
          >
            <div className='relative w-full h-[230px]'>
              <img
                src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776150/VishvasWebsite/Products/TractionPowe/SlideShowE/gjssrtzrafzjvsgswgby.jpg"
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl '
              />


            </div>

            <div className='mt-5'>
              <h3 className=' font-bold text-[24px]'>Manufacturing of Transformers</h3>
              
              <Button><Link to="/TractionPower">Read More</Link></Button>
            </div>

</div>
        
        </motion.div>

        <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}>
          <div
            className='bg-tertiary  px-4 sm:px-3 rounded-2xl sm:w-[360px] w-full prod-card'
          >
            <div className='relative w-full h-[230px]'>
              <img
                src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014488/VishvasWebsite/SERVICES/Repair%20page/Slidehosw%20H/p2r5doashec0vzjx10yx.jpg"
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />


            </div>

            <div className='mt-5'>
              <h3 className=' font-bold text-[24px]'>Remanufacturing/Repair of Transformers</h3>
             

              <Button><Link to="/Repair">Read More</Link></Button>
            </div>


          </div>
        </motion.div>


        <motion.div variants={fadeIn("up", "spring", 2 * 0.5, 0.75)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
        >
          <div
           
            className='bg-tertiary px-4 sm:px-3 rounded-2xl sm:w-[360px] w-full prod-card'
          >
            <div className='relative w-full h-[230px]'>
              <img
                src='https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014489/VishvasWebsite/SERVICES/POH%20page/x7hbeacpr1vj9dfuokdc.jpg'
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />


            </div>

            <div className='mt-5'>
              <h3 className=' font-bold text-[24px]'>POH Of Transformers</h3>
              
              <Button className="mt-4"><Link to="/POH">Read More</Link></Button>
            </div>


          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default OurServices;