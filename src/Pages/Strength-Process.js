import React from 'react'
import OurVendors from '../components/ProcessStrength/OurVendors'
import RawMaterialInspection from '../components/ProcessStrength/RawMaterialnspection'
import Party from '../components/ProcessStrength/party'
import FinalInspection from '../components/ProcessStrength/FinalInspection'
import Nabl from '../components/ProcessStrength/Nabl'
import InProcess from '../components/ProcessStrength/InProcess'
import { SlideShowC } from '../components/ProcessStrength/SlideShowC/SlideShowC'
const StrengthProcess= () => {
  return (
   <>
    <div className='mt-20'></div>
   <SlideShowC/>
   <OurVendors/>
   <RawMaterialInspection/>
   <InProcess/>
   <Party/>
   <FinalInspection/>
   <Nabl/>

   </>
  )
}

export default StrengthProcess