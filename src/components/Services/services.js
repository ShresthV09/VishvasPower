import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import './services.css'
import { styles } from "../../styles";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
             
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className=' font-bold text-[24px]'>{name}</h3>
          {/* <p className='mt-2 text-secondary text-[14px]'>{description}</p> */}
        </div>

      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="serviceContainerHomePage">
      <div className="container-servicesHomePage">
      <motion.div variants={textVariant()}className="header-services">
        <p className={`${styles.sectionSubText}  `}>Our work</p>
        <h2 className={`${styles.sectionHeadText}`}>Services</h2>
      </motion.div>

      {/* <div className='w-full flex para-services'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following Services showcases Our skills and experience through
          real-world examples of Our work.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus metus non ligula gravida, et iaculis risus placerat. Duis eu iaculis nisl, et rhoncus sem. Ut in suscipit tortor
        </motion.p>
      </div> */}

      <div className='mt-20 gap-7 card-services'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Works