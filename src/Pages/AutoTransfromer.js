import React from 'react'
import AutoTransformers from '../components/AutoTransformers/AutoTransformers'
import RDSOAUTO from '../components/AutoTransformers/Services/services'
import { SlideShowF } from '../components/AutoTransformers/SlideShowF/SlideShow'
import { ProductsAuto } from '../components/AutoTransformers/ProductsAuto'


const AutoTransfromerPage = () => {
  return (
    <>
    <div className='TractionDIV'/>
    <AutoTransformers/>
   <SlideShowF/>
    <RDSOAUTO/>
    <ProductsAuto/>
    
    </>
  )
}

export default AutoTransfromerPage