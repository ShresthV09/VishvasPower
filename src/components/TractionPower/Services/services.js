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
          <span>
            <h2>RDSO Approvals</h2>
           </span>
         </motion.div>
         </div>
      <div className="ModalsRDSO">

      <Button className="ModalButton" onClick={showModal}>
      <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680983114/VishvasWebsite/RDSO/heugazm7jeb6gz09coln.jpg" alt="RDSo"/>
      </Button>
      <Modal title="66 27 KV 21.6 30.24 MVA Traction Power Transformer approval letter" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
      width={700}
      height={700}
      >
      <iframe src={`${"https://drive.google.com/file/d/1Lb8tbJ531geh6BU2mVJwFJetQsdIqSFS/preview"}#view=fitH`} title="testPdf" height="500px" width="100%" />
      </Modal>
      <Button className="ModalButton" onClick={showModal2}>
      <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680983114/VishvasWebsite/RDSO/pnhrfg21taspzgafuhwa.jpg" alt="RDSo"/>
      </Button>
      <Modal title="132 27 KV 21.6 30.24 MVA Traction Power Transformer Approval" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}
      width={700}
     
      >
      <iframe src="https://drive.google.com/file/d/1SSuswpXt9_KR9u1XrmU9eIHAbeiJ4YzM/preview" title="testPdf" height="500px" width="100%" />
      </Modal>
      </div>
    </div>
    </div>
  );
};

export default RDSO


