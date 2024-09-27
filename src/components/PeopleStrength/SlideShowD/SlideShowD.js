import { useState } from "react";
import BtnSlider  from "./BtnSlider";
import dataSlider from "./DataSlider";
import { textVariant } from "../../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import "./FWSCarousel.css";


export const SlideShowD= () => {

    const[slideIndex, setSlideIndex]=useState(1);

    const nextSlide=()=>{
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex+1);
        }else{
            setSlideIndex(1);
        }
    }

    const prevSlide=()=>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex-1); 
        }else{
            setSlideIndex(dataSlider.length);
        }
    }


    const moveDot= index => {
        setSlideIndex(index); 
    }

  return (
    <div className="container-sliderAUTO">
         <motion.div variants={textVariant()} 
         className="SlideShowKHeader">
           <h2 className={`${styles.sectionHeadText} `}>Our Strength is Our People </h2>
         </motion.div>
         <div className="paraRR">
         <p className={`${styles.sectionSubText} paraSlideShowK`}>The Success of Good Quality Transformer
manufacturing boils down to the workmanship.
We Ensure high quality Workmanship by 3
pillars - Happy Workmen , Regula SOP Trainings , Foucs On Kaizen</p>
         </div>
         
         
        {dataSlider.map((obj, index)=>{
            return(
                <div
                key={obj.id} 
                className={slideIndex === index+1 ? "slideAUTO active-anim" : "slideAUTO"}
                >
                    <img src={obj.img} alt="lpImage"/>
                   <div className="content">
                   <h4 className="headerSlideShowTraction">{obj.title}</h4>
                 
                   
                   </div>
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        
        
        <div className="container-dots">
            {Array.from({length: dataSlider.length}).map((item , index)=>(
                <div
                onClick={()=>moveDot(index+1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
                >
                </div>
            ))}
            </div>        
    </div>
  )


  
}
