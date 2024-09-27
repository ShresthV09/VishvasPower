import React from 'react'
import OurPeople from '../components/Strength/OurPeople'
import OurPlant from '../components/Strength/OurPlant'
import OurProcess from '../components/Strength/OurProcess'
import { Experience } from '../components/Home/Experience';

function About() {
  return (
    <>
  <div className='mt-10'/>
    <Experience/>
    <OurPlant/>
    <OurProcess/>
    <OurPeople/>
    </>
  )
}

export default About