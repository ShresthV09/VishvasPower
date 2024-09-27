import React from "react";
import {VerticalTimeline} from "react-vertical-timeline-component";
import { ExperienceCard } from "./ExperienceCard";
import "react-vertical-timeline-component/style.min.css";




export const ProductsAuto = () => {
  const experiences = [
    {
      iconBg: "#212121",
      date: "WCR",
      points: [
        "8 MVA 54/27KV AUTOTRANSFORMER",
        "Qty:8"
      ],
    },
    {
      iconBg: "#212121",
      date: "SECR",
      points: [
        "8 MVA 54/27KV AUTOTRANSFORMER",
        "Qty:17"
      ],
    },
    {
      iconBg: "#212121",
      date: "WCR",
      points: [
        "8 MVA 55/27.5 KV AUTOTRANSFORMER",
        "Qty:6"
      ],
    },
    {
      iconBg: "#212121",
      date: "NR",
      points: [
        "16.5 MVA 55/27.5 KV AUTOTRANSFORMER",
        "Qty:4"
      ],
    },
    
  ];
  return (
    <div className="container-experiences" style={{backgroundColor:"#212121"}}>
      <span className="header-Experiences CoreValues">
      <h1 style={{color:"#DC0000"}}>Supplies <span className='power'>done as of 31/3/2023</span> </h1>
                    </span>
     

      <div className=' flex flex-col  '>
        <VerticalTimeline lineColor="white">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};


