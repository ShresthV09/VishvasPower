import { useState } from "react";
import BtnSlider  from "./BtnSlider";
import dataSlider from "./DataSlider";
import { textVariant } from "../../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import "./FWSCarousel.css";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from "react-countup";

export const SlideShowRR= () => {
    const [counterOn, setCounterOn] = useState(false); 

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
    <div className="container-sliderRR">
         <motion.div variants={textVariant()} 
         className="SlideShowKHeader">
           <h2 className={`${styles.sectionHeadText} `}>Remanufacturing & Repairing</h2>
         </motion.div>
         <div className="paraRR">
         <p className={`${styles.sectionSubText} paraSlideShowK`}>We offer services of remanufacturing of old failed transformers of any OEM to breathe life and make them as good as new at less than 50% of cost of new transformer. This is done by making complete new windings & insulation & refurbishing the existing core & tank.</p>
         </div>
         
        {dataSlider.map((obj, index)=>{
            return(
                <div
                key={obj.id} 
                className={slideIndex === index+1 ? "slideRR active-anim" : "slideRR"}
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
        <ScrollTrigger onEnter={()=> setCounterOn(true)}>
        <div className="statsRR">
        <div className="statRR1">
        
        <h4>
        <CountUp start={0} end={ 344} duration={2} delay={0}/>+
         
        </h4>
        <p>Transformers Remanufactured</p>
             
            
        </div>
        <div className="statRR2">  
        <h4>
           Upto
        </h4>
        <p><CountUp start={0} end={ 250} duration={2} delay={0}/>MVA - <CountUp start={0} end={220} duration={2} delay={0}/>KV</p>
        
        </div>
        </div>
        </ScrollTrigger>
        
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
