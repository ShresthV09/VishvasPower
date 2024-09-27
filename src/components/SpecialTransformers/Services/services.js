import React from "react";
import { motion } from "framer-motion";
import './services.css'



import { Button, Modal } from 'antd';
import { useState } from 'react';

import { textVariant } from "../../../utils/motion";


const RDSO = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  return (
    <div className="SectionRDSO">
    
    <div className="RDSOContainers">
      <div className="HeaderRDSO">
    <motion.div variants={textVariant()} 
         className="SlideShowBHeader RDSO"
         >
         <h2>RDSO Approval</h2>
         </motion.div>
         </div>
      <div className="ModalsRDSO">

      <Button className="ModalButton" onClick={showModal}>
      <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680983114/VishvasWebsite/RDSO/heugazm7jeb6gz09coln.jpg" alt="RDSo"/>
      </Button>
      <Modal title="RDSO Approvals" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
      width={700}
     
      >
      <h1>Coming Soon....</h1>
      </Modal>
      
      </div>
    </div>
    </div>
  );
};

export default RDSO


