import React from 'react'
import { motion } from "framer-motion";

import { fadeIn } from "../../../utils/motion";

import './Testimonial.css'

const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
  }) => {
  return (
  
        <motion.div
          variants={fadeIn("left", "spring", index * 0.5, 0.75)}
          className='card p-10 rounded-3xl xs:w-[320px] w-full'
        >
          <p className=' font-black  text-[48px] comma'>"</p>
      
          <div className='mt-1'>
            <p className=' testi tracking-wider text-[18px]'>{testimonial}</p>
      
            <div className='mt-7 flex justify-between items-center gap-1 person'>
              <div className='flex-1 flex flex-col'>
                <p className=' font-medium text-[16px] namepart'>
                  <span className='blue-text-gradient '>@</span> {name}
                </p>
                <p className='mt-1 text-secondary text-[12px]'>
                  {designation} of {company}
                </p>
              </div>
      
              <img
                src={image}
                alt={`feedback_by-${name}`}
                className='w-10 h-10 rounded-full object-cover'
              />
            </div>
          </div>
        </motion.div>
      
  )
}

export default FeedbackCard