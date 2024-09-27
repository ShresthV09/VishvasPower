import React from 'react'
import ChallengingJobsEPC from '../components/EPC/ChallengingJobsEPC'
import { InfraEPC } from '../components/EPC/OurInfra'
import LandingEPC from '../components/EPC/SlideShowEPC/LandingEPC'
import { WhyEPC } from '../components/EPC/Why'
import { Clients } from '../components/Home/Clients'

const EPC = () => {
  return (
    <>
    <div className='EPCMargin'></div>
    
    <LandingEPC/>
    <ChallengingJobsEPC/>
    <WhyEPC/>
    <InfraEPC/>
    <Clients/>
    </>

  )
}

export default EPC