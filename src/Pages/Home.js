import React from "react";
import {FWSCarousel} from '../components/Home/FullWidthSingleCarousel/FWSCarousel.js';

import { Experience } from '../components/Home/Experience';
import { Clients } from '../components/Home/Clients';
import {Testimonial} from '../components/Home/Testimonials/Testimonial';


import LandingPage from "../components/Home/LandingPage/LandingPage.js";
import OurServices from "../components/Home/OuServices.js";
import MyComponent from "../components/Icon.js";


export default function Home() {
  return (
    <>
    <LandingPage/>
   <FWSCarousel/>
   <Experience/>
   <Clients/>
   <MyComponent/>
   <Testimonial/>
   <OurServices/>
   
  
   </>
  )
}
