import { useState } from "react";
import BtnSlider  from "./BtnSlider";
import dataSlider from "./DataSlider";
import { textVariant } from "../../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import "./FWSCarousel.css";
import { useEffect } from "react";


export const SlideShowB= () => {

    const[slideIndex, setSlideIndex]=useState(1);
    const [autoplay, setAutoPlay] = useState(true);
    let timeout = null;
     
    useEffect((timeout)=>{
        timeout = autoplay && setTimeout(()=>{
            nextSlide();
        },2000);
    });

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
    <div className="container-sliderAUTO" onMouseEnter={()=>{
        setAutoPlay(false);
        clearTimeout(timeout);
    }}
    onMouseLeave={()=>{
        setAutoPlay(true);
    }}>
         <motion.div variants={textVariant()} 
         className="SlideShowKHeader">
           <h2 className={`${styles.sectionHeadText} `}>Our Strength is Our Plant</h2>
         </motion.div>
         <div className="paraRR">
         <p className={`${styles.sectionSubText} paraSlideShowK`}>Our state of the art Factory is located in 5 star Industrial Area
MIDC Butibori, Nagpur</p>
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
