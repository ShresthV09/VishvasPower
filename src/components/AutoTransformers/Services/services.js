import React from "react";
import { motion } from "framer-motion";
import './services.css'
import { Button, Modal } from 'antd';
import { useState } from 'react';
import {textVariant } from "../../../utils/motion";


const RDSOAUTO = () => {
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

  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const showModal3 = () => {
    setIsModalOpen3(true);
  };
  const handleOk3 = () => {
    setIsModalOpen3(false);
  };
  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };
  return (
    <div className="SectionRDSO">
    
    <div className="RDSOContainers">
      <div className="HeaderRDSO">
    <motion.div variants={textVariant()} 
         className="SlideShowBHeader RDSO"
         >
         <h2>RDSO Approvals</h2>
         </motion.div>
         </div>
      <div className="ModalsRDSO">

      <Button className="ModalButton" onClick={showModal}>
      <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680983114/VishvasWebsite/RDSO/shlwlortzhqntucnbg9m.jpg" alt="RDSo"/>
      </Button>
      <Modal title="RDSO Approval 8 MVA 55 27.5 KV Autotransformer" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
      width={700}
      height={700}
      >
      <iframe src={`${"https://drive.google.com/file/d/1Yp7edqQtNVKJeA3vSN75FLLNPHHg-OIt/preview"}#view=fitH`} title="testPdf" height="500px" width="100%" />
      </Modal>
      <Button className="ModalButton" onClick={showModal2}>
      <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680983114/VishvasWebsite/RDSO/xhrsugl0a5p5hrm1j2ib.jpg" alt="RDSo"/>
      </Button>
      <Modal title="RDSO Approval 8 MVA 54 27 KV Autotransformer" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}
      width={700}
     
      >
      <iframe src={`${"https://drive.google.com/file/d/1qRbGCSmBqaNR-BMo-PsQ1Tjy7-j0qSFt/preview"}#view=fitH`} title="testPdf" height="500px" width="100%" />
      </Modal>
      <Button className="ModalButton" onClick={showModal3}>
      <img src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680983114/VishvasWebsite/RDSO/d1wsham8xpmzkhgorg5c.jpg" alt="RDSo"/>
      </Button>
      <Modal title="132 27 KV 21.6 30.24 MVA Traction Power Transformer Approval" open={isModalOpen3} onOk={handleOk3} onCancel={handleCancel3}
      width={700}
     
      >
      <iframe src={`${"https://drive.google.com/file/d/1EIOEtk_prXiJNr3kooNH_msvDgfXAf2x/preview"}#view=fitH`} title="testPdf" height="500px" width="100%" />
      </Modal>
      </div>
    </div>
    </div>
  );
};

export default RDSOAUTO


