import React from 'react'
import CCA from '../components/PlantStrength/CCA'
import CorePlant from '../components/PlantStrength/Core'
import DryOut from '../components/PlantStrength/DryOut'
import { SlideShowB } from '../components/PlantStrength/SlideShowB/SlideShowB'
import Winding from '../components/PlantStrength/Winding'
import Tanking from '../components/PlantStrength/Tanking'
import Testing from '../components/PlantStrength/Testing'

const StrengthPlant = () => {
  return (
    <>
     <div className='mt-20'></div>
<SlideShowB/>
<CorePlant/>
<Winding/>
<CCA/>
<DryOut/>
<Tanking/>
<Testing/>

    </>
  )
}

export default StrengthPlant