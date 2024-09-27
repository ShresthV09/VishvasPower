import React from 'react'
import { Contact } from '../components/Forms/contactForm'
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
export const ContactUs = () => {
  return (
    
    <div className='main-contactus'>
         <div className='mt-10'/>
      <Contact/>
      <hr/>
      <motion.div variants={textVariant()} 
         className=""
         >
           <div className='HeaderContactUs'>
           <h2 className={`${styles.sectionHeadText} `}>Important Contacts</h2>
           </div>
         </motion.div>
    <div className='container-Contactus'>
    
    <div className='cards-Contactus'>
        <div className='card-Holder'>
            <div className='card-contact1'>
                <h2>FOR NEW TRF</h2>
                <div className='email-div'>
                    <h4>Email:-</h4>
                    <ul>
                        <li>
                        vishvaspower@gmail.com
                        </li>
                        <li>
                        director@vishvaspower.co.in
                        </li>
                    </ul>
                </div>
                <div className='contact-divs'>
                    <h4>
                    Contact Person:-
                    </h4>
                    <ul>
                        <li>
                        Mr R M Bhave
                        </li>
                        <li>
                        9326004101
                        </li>
                    </ul>
                </div>
                
            </div>
           

            <div className='card-contact2'>
                <h2>REPAIR/REMAN</h2>
                <div className='email-div'>
                    <h4>Email:-</h4>
                    <ul>
                        <li>
                        vishvaspower@gmail.com
                        </li>
                        <li>
                        director@vishvaspower.co.in
                        </li>
                    </ul>
                </div>
                <div className='contact-divs'>
                    <h4>
                    Contact Person:-
                    </h4>
                    <ul>
                        <li>
                        Mr R M Bhave
                        </li>
                        <li>
                        9326004101
                        </li>
                    </ul>
                </div>
        </div>
        </div>

        <div className='card-Holder'>
            <div className='card-contact1'>
                <h2>POH</h2>
                <div className='email-div'>
                    <h4>Email:-</h4>
                    <ul>
                        <li>
                        vishvaspower@gmail.com
                        </li>
                        <li>
                        director@vishvaspower.co.in
                        </li>
                    </ul>
                </div>
                <div className='contact-divs'>
                    <h4>
                    Contact Person:-
                    </h4>
                    <ul>
                        <li>
                        Mr R M Bhave
                        </li>
                        <li>
                        9326004101
                        </li>
                    </ul>
                </div>
                
            </div>
           

            <div className='card-contact2'>
                <h2>EPC</h2>
                <div className='email-div'>
                    <h4>Email:-</h4>
                    <ul>
                        <li>
                        vishvaspower@gmail.com
                        </li>
                        <li>
                        director@vishvaspower.co.in
                        </li>
                    </ul>
                </div>
                <div className='contact-divs'>
                    <h4>
                    Contact Person:-
                    </h4>
                    <ul>
                        <li>
                        Mr R M Bhave
                        </li>
                        <li>
                        9326004101
                        </li>
                    </ul>
                </div>
        </div>
        </div>

        <div className='card-Holder'>
            <div className='card-contact1'>
                <h2>SERVICE</h2>
                <div className='email-div'>
                    <h4>Email:-</h4>
                    <ul>
                        <li>
                        vishvaspower@gmail.com
                        </li>
                        <li>
                        director@vishvaspower.co.in
                        </li>
                    </ul>
                </div>
                <div className='contact-divs'>
                    <h4>
                    Contact Person:-
                    </h4>
                    <ul>
                        <li>
                        Mr R M Bhave
                        </li>
                        <li>
                        9326004101
                        </li>
                    </ul>
                </div>
                
            </div>
           

            <div className='card-contact2'>
                <h2>HR</h2>
                <div className='email-div'>
                    <h4>Email:-</h4>
                    <ul>
                        <li>
                        hq@vishvaspower.co.in
                        </li>
                        
                    </ul>
                </div>
                <div className='contact-divs'>
                    <h4>
                    Contact Person:-
                    </h4>
                    <ul>
                        <li>
                        Mr R M Bhave
                        </li>
                        <li>
                        9326004101
                        </li>
                    </ul>
                </div>
        </div>
        </div>

       
        </div>
       
        </div>
      
        </div>
        
  )
}

