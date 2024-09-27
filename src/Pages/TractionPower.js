import React from 'react'
import { SlideShowE } from '../components/TractionPower/SlideShowE/SlideShowE'
import RDSO from '../components/TractionPower/Services/services'
import Traction from '../components/TractionPower/Traction'
import { ProductsTraction } from '../components/TractionPower/ProductsTraction'

const TractionPower = () => {
  return (
    <>
    <div className='TractionDIV'/>
   <Traction/>
   <SlideShowE/>
   <RDSO/>
   <ProductsTraction/>
    </>
  )
}

export default TractionPower
