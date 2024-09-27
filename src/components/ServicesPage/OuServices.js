import React from "react";
import { motion } from "framer-motion";
import './services.css'
import './whyus.css'
import { fadeIn, textVariant } from "../../utils/motion";
import { Button } from "antd";
import { Link } from "react-router-dom";

const OurProducts = () => {
  return (
    <div className="containerProducts" >
      <div
        className="testi-header HeaderProd">
        <motion.div variants={textVariant(0.5)}>
          <span className='HeadingTesti'>
          <h1 style={{color:"#fff" , marginBottom:"30px" }}>Our Services</h1>
          </span>
        </motion.div>
      </div>

      <div className='mt-20  gap-7 card-services'>
        <motion.div variants={fadeIn("up", "spring", 0 * 0.5, 0.75)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}>
          <div
            className='bg-tertiary px-4 sm:px-3 rounded-2xl sm:w-[360px] w-full prod-cardS'
          >
            <div className='relative w-full h-[230px]'>
              <img
                src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014486/VishvasWebsite/SERVICES/Repair%20page/ubydajazidespad8kskz.jpg"
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />


            </div>

            <div className='mt-5'>
              <h3 className=' font-bold text-[24px]'>Remanufacturing / Repair
                of Transformers</h3>
                <ul className='list-disc  space-y-2'>
                <li
                  className='text-secondary text-[14px]'
                >
                  upto 220 KV 250 MVA
                </li>
                <li
                  className='text-secondary text-[14px]  '
                >
                  ICT, GT, Furnace Duty
                  Rectifier
                </li>
                </ul>

              <Button className="mt-4  ProdButton"><Link to="">Read More</Link></Button>
            </div>


          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="BorderTop"
        >
          <div
            className='bg-tertiary  px-4 sm:px-3 rounded-2xl sm:w-[360px] w-full prod-cardS'
          >
            <div className='relative w-full h-[230px]'>
              <img
                src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014489/VishvasWebsite/SERVICES/POH%20page/x7hbeacpr1vj9dfuokdc.jpg"
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />


            </div>

            <div className='mt-5'>
              <h3 className=' font-bold text-[24px]'>POH of Transformers</h3>
              <ul className='list-disc  space-y-2'>
                <li
                  className='text-secondary text-[14px]  '
                >
                  upto 400 KV 315 MVA
                </li>

              </ul>

              <Button className="ProdButton mt-20"><Link to="">Read More</Link></Button>
            </div>


          </div>
        </motion.div>


        <motion.div variants={fadeIn("up", "spring", 2 * 0.5, 0.75)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="BorderTop"
        >
          <div
            className='bg-tertiary px-4 sm:px-3 rounded-2xl sm:w-[360px] w-full prod-cardS'
          >
            <div className='relative w-full h-[230px]'>
              <img
                src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680014489/VishvasWebsite/SERVICES/EPC%20Page/Slideshow%20J%20-%20Copy/nfx6n2co1ndc6wcokeda.jpg"
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />


            </div>

            <div className='mt-5'>
            <h3 className=' font-bold text-[24px]'>EPC for EHV Projects</h3>
              <ul className=' space-y-1'>
                <li
                  className='list-disc text-secondary text-[14px]'
                >
                  Railway TSS , SP, SSP
                  Railway OHE
                  EHV Substations

                </li>
              </ul>
              <Button className="mt-14 ProdButton"><Link to="">Read More</Link></Button>
            </div>


          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default OurProducts;