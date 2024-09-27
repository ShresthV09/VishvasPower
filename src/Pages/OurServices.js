import React from 'react'
import { Contact } from '../components/Forms/contactForm';
import OuServices from '../components/ServicesPage/OuServices';
import { Why } from '../components/ServicesPage/Why';
function OurServices() {
  return (
    <>
    <div className='mt-20'/>
   <OuServices/>
   <Why/>
   <Contact/>
   </>
  )
}

export default OurServices