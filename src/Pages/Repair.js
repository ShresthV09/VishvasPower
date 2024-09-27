import React from 'react'
import { Clients } from '../components/Home/Clients'
import ChallengingJobs from '../components/RemanufacturingAndRepairing/ChallengingJobs'

import { SlideShowRR } from '../components/RemanufacturingAndRepairing/SlideShowRR/SlideShowRR'
import { WhyRepair } from '../components/RemanufacturingAndRepairing/Why'


const Repair = () => {
  return (
    <>
    <div className='mt-20'/>
    <SlideShowRR/>
    <ChallengingJobs/>
    <WhyRepair/>
    <Clients/>
  
    </>
  )
}

export default Repair