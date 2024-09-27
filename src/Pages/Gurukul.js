import React from 'react'
import { SlideShowK } from '../components/Gurukul/SlideShowK/SlideShowK'
import { StatsGurukul } from '../components/Gurukul/About'
import Faculty from '../components/Forms/faculty'
function Gurukul() {
  return (
    <>
     <div className='mt-20'/>
    <SlideShowK/>
    <StatsGurukul/>
    <Faculty/>
    </>
  )
}

export default Gurukul