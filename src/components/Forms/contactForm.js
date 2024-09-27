
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
// import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {emailjs} from "emailjs-com";
import  { useRef } from 'react';
import { motion } from "framer-motion";
export const Contact = () => {
    
    const formInitialDetails = {
        name: '',
        roll: '',
        email: '',
        phone: '',
        message: ''
      }
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Send');
      const [status, setStatus] = useState({});
    
      const onFormUpdate = (category, value) => {
          setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

  const form = useRef();

  const sendEmail = (e) => {
   
    e.preventDefault();
    setButtonText("Sending...");
    // emailjs.sendForm('service_tyo4xqe', 'template_vb6fcee', form.current, '4PoKMyIIYM6-BzELZ')
    //   .then((result) => {
        
    //     setButtonText("Sent !");
    //     setTimeout(()=>{
    //       setButtonText("Send");
    //     },3000)
    //     setStatus({ succes: true});
    //   }, (error) => {
    //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    //   });
      
      setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center ColReverse">
          <Col size={12} md={6}>
          <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            transition={{ duration: 0.5 }}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                                                                    >
                <iframe className="Map" title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.3553608971188!2d78.96386961473786!3d20.93823968604746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd49770f2677219%3A0xb82c243fd8532869!2sVishvas%20Power%20Engineering%20Services%20(P)%20Ltd.!5e0!3m2!1sen!2sin!4v1680682661020!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{borderRadius:"20px"}}></iframe>
                </motion.div>
              
            
          </Col>
          <Col size={12} md={6}>
          <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            transition={{ duration: 0.5 }}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                                                                    >
                <span className="tagline-contact">Contact Form</span>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="name" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="organisation"  value={formDetails.organisation}  placeholder="Organisation" onChange={(e) => onFormUpdate('organisation', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email"  value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={formDetails.phone}  placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="enquiryDescription" value={formDetails.enquiryDescription}  placeholder="Enquiry Description" onChange={(e) => onFormUpdate('enquiryDescription', e.target.value)} required></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                    status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
             
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}