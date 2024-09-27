import { useState } from "react";
import BtnSlider  from "./BtnSlider";
import dataSlider from "./DataSlider";
import { textVariant } from "../../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import "./FWSCarousel.css";


export const SlideShowG= () => {

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
           <h2 className={`${styles.sectionHeadText} `}>Our Ratings</h2>
         </motion.div>
         
         
        {dataSlider.map((obj, index)=>{
            return(
                <div
                key={obj.id} 
                className={slideIndex === index+1 ? "slideAUTO active-anim" : "slideAUTO"}
                >
                    <img src={obj.img} alt="lpImage"/>
                   <div className="content">
                   <h4 className="headerSlideShowA">{obj.title}</h4>
                 
                   
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
