import React from 'react'
import {textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import './clients.css';
export const Clients = () => {
  return (
   <div className='ClientSection clients-container '>
    <div
        className="testi-header ClientsHeader">
        <motion.div variants={textVariant(0.5)}>
          <span className='HeadingTesti HeadingClients'>
          <h1 style={{color:"#121212" }}>VPES Clients</h1>
          </span>
        </motion.div>
      </div>
    <div className='clients'>
        <div className='gov-clients'>
        <span className='headerSpan SubClients'>
        <h1 className=' text-center  header'style={{"color":"#121212"}} >
        Goverment</h1>
      

   </span>
        <div className='clients-row'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679771845/Clients/Goverment/a2t58k7dveshbq3vx71h.png" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772085/Clients/Goverment/mzdcafgrng41nlysctgl.png" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772085/Clients/Goverment/iw2cnxx6an3y6ngzqkw5.png" alt="clients"/>
            
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679771834/Clients/Goverment/sqhkbqoyncarj2pxwbjd.png" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679771844/Clients/Goverment/g3hyxteyoyepmhvrlctk.jpg" alt="clients"/>
        </div>
        <div className='clients-row'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679771834/Clients/Goverment/bpqkbfybebqewx2xq7xt.webp" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679771834/Clients/Goverment/kwvpitjhk2s3yace9wcn.png" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679771845/Clients/Goverment/xpqnobsftzzj7as9ootg.jpg" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679771834/Clients/Goverment/f4k9hid3bhsy9een8alz.jpg" alt="clients"/>
            
        </div>
        <div className='clients-row'>
        <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679771834/Clients/Goverment/zygn8czqkyh8axqpireu.webp" alt="clients"/>
        <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679771844/Clients/Goverment/jcfovmdqia9sghloqhjy.jpg" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679771846/Clients/Goverment/hheoc4ojd0vuyatrchnb.png" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772085/Clients/Goverment/pqogytvstsa2mco4r4xn.png" alt="clients"/>
            
        </div>
        </div>
        <div className='private-clients'>
        <span className='headerSpan SubClients'>
        <h1 className=' text-center  header'style={{"color":"#121212"}} >
        Private</h1>
       

   </span>
   <div className='clients-row'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772575/Clients/Private/o8d9dbywi57p3w0lfn0l.png" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772575/Clients/Private/btw2f6zfycks7njpm4j6.png" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772576/Clients/Private/geyuheeqydmwjd7xdb5y.jpg" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772576/Clients/Private/nhjesgmcfwompz0agjmr.png" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772576/Clients/Private/w4qdp75sgzafrpnt0jca.png" alt="clients"/>
        </div>
        <div className='clients-row'>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772576/Clients/Private/cuuqgt6kytjdpfmxl3zs.jpg" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772575/Clients/Private/envkbyqktalow1qn3pjp.png" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772575/Clients/Private/uq5d3tsqzsj6t5vuw9xl.jpg" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772575/Clients/Private/k6gvkwpypmm7u4knznyr.png" alt="clients"/>
            
        </div>
        <div className='clients-row'>
        <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772575/Clients/Private/mdaeatr7rd3g0l62bndq.png" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772575/Clients/Private/fy5glamqcjjlii20vfyb.png" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772575/Clients/Private/hoofodkucnixwqxmewjn.png" alt="clients"/>
            <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1679772575/Clients/Private/uatzl8dgb3lisostsths.avif" alt="clients"/>
            
        </div>
        </div>
    </div>
   </div>
  )
}

