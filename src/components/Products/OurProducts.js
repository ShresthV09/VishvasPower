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
    <div className="containerProducts" >
      <div
        className="testi-header HeaderProd">
        <motion.div variants={textVariant(0.5)}>
          <span className='HeadingTesti'>
          <h1 style={{color:"#fff" , marginBottom:"30px" }}>Our Products</h1>
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
                src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776150/VishvasWebsite/Products/TractionPowe/SlideShowE/gjssrtzrafzjvsgswgby.jpg"
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />


            </div>

            <div className='mt-5'>
              <h3 className=' font-bold text-[24px]'>Traction Power Transformers</h3>
              <ul className='list-disc  space-y-2'>
                <li
                  className='text-secondary text-[14px]'
                >
                  132/27 KV 21.6/30.24
                  MVA Traction Power
                  Transformer as per
                  RDSO specification
                  TI/SPC/PSI/TRNPWR/3201
                </li>
                <li
                  className='text-secondary text-[14px]  '
                >
                  66/27 KV 21.6/30.24
                  MVA Traction Power
                  Transformer as per
                  RDSO specification
                  TI/SPC/PSI/TRNPWR/3201
                </li>


              </ul>

              <Button className="mt-4  ProdButton"><Link to="/TractionPower">Read More</Link></Button>
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
                src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776235/VishvasWebsite/Products/AutoTransformers/hstivxbgjzm4przmrzm8.jpg"
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />


            </div>

            <div className='mt-5'>
              <h3 className=' font-bold text-[24px]'>Autotransformer</h3>
              <ul className='list-disc  space-y-2'>
                <li
                  className='text-secondary text-[14px]  '
                >
                  8 MVA 55/27.5 KV Autotransformer as per
                  RDSO spec TI/SPC/PSI/AUTOTR/1200
                </li>
                <li
                  className='text-secondary text-[14px]  '
                >
                  12.3 MVA 55/27.5 KV Autotransformer as per
                  RDSO spec TI/SPC/PSI/AUTOTR/1200
                </li>
                <li
                  className='text-secondary text-[14px]  '
                >
                  16.5 MVA 55/27.5 KV Autotransformer as per
                  RDSO spec TI/SPC/PSI/AUTOTR/1200

                </li>
                <li
                  className='text-secondary text-[14px]  '
                >

                  8 MVA 54/27 KV Autotransformer as per
                  RDSO spec ETI/PSI/125 (07/97)
                </li>
              </ul>

              <Button className="ProdButton"><Link to="/AutoTransformer">Read More</Link></Button>
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
                src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679776260/VishvasWebsite/Products/Special%20transformers/esfnnwrxqg5irrclhkza.jpg"
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />


            </div>

            <div className='mt-5'>
              <h3 className=' font-bold text-[24px]'>Special Transformers</h3>
              <ul className=' space-y-1'>
                <li
                  className='list-disc text-secondary text-[14px]'
                >
                  132/2x27 KV 38/53/63
                  MVA dual lv v connected
                  Traction Power
                  Transformer as per

                </li>
                <li
                  className='text-secondary text-[14px]'
                >
                  RDSO specification
                  TI/SPC/PSI/TRNPWR/4200
                </li>


              </ul>
              <Button className="mt-20 ProdButton"><Link to="/Special">Read More</Link></Button>
            </div>


          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default OurProducts;