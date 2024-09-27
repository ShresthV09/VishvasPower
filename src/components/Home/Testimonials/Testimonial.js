import React from 'react'
import { motion } from "framer-motion";
import FeedbackCard from './FeedbackCard';
import { styles } from "../../../styles";
import {textVariant } from "../../../utils/motion";
import { testimonials } from "../../../constants";
import './Testimonial.css'

export const Testimonial = () => {
  return (
    <section className='SectionTesti'>
        <div className='ContainerTesti'>
        <div
        className="testi-header">
        <motion.div variants={textVariant(0.5)}>
          <p className={styles.sectionSubText} style={{"color":"#ff2d34"}}>What others say</p>
          <span className='HeadingTesti'>
          <h1>Testimonials</h1>
          </span>
        </motion.div>
      </div>
      <div className='cards-section'>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 cards`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
      </div>
        </div>
    </section>
  )
}

