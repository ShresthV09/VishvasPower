import React from 'react'
import { SlideShowPOH } from '../components/POH/SlideShowPOH/SlideShowPOH'
import ChallengingJobsPOH from '../components/POH/ChallengingJobsPOH'
import { WhyPOH } from '../components/POH/WhyPOH'
import { Clients } from '../components/Home/Clients'



const POH = () => {
  return (
    <>
    <div className='mt-20'/>
    <SlideShowPOH/>
    <ChallengingJobsPOH/>
    <WhyPOH/>
    <Clients/>

    </>
  )
}

export default POH