import { useState } from "react";
import BtnSlider  from "./BtnSlider";
import dataSlider from "./DataSlider";
import { textVariant } from "../../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import "./FWSCarousel.css";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from "react-countup";

export const SlideShowPOH= () => {

    const[slideIndex, setSlideIndex]=useState(1);
    const [counterOn, setCounterOn] = useState(false); 

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
    <div className="container-sliderPOH">
         <motion.div variants={textVariant()} 
         className="SlideShowKHeader">
           <h2 className={`${styles.sectionHeadText} `}>Periodic OverHauling</h2>
         </motion.div>
         <div className="paraRR">
         <p className={`${styles.sectionSubText} paraSlideShowK`}>Periodic Overhauling of Trasnformer is conducted every 10 years to ensure that Transformer remains healthy till the end of its codal life. It involves activities such as internal inspection, Pressing of CCA, replacement of Gaskets and spares and Oil.
A properly carried out Overhauling can provide a new lease of life to an old Transformer.
</p>
         </div>
         
        {dataSlider.map((obj, index)=>{
            return(
                <div
                key={obj.id} 
                className={slideIndex === index+1 ? "slidePOH active-anim" : "slidePOH"}
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
        <ScrollTrigger onEnter={()=>{
            setCounterOn(true);
        }}>
        <div className="statsPOH">
        <div className="statPOH1">
        
        <h4>
        <CountUp start={0} end={400} duration={2} delay={0}/> KV
        </h4>
        <p> <CountUp start={0} end={315} duration={2} delay={0}/> MVA</p>
             
            
        </div>
        <div className="statPOH2">  
        <h4>
        <CountUp start={0} end={650} duration={2} delay={0}/>+
        </h4>
        <p>Transformers</p>
        
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
