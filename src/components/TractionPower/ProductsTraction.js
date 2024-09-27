import React from "react";
import {VerticalTimeline} from "react-vertical-timeline-component";
import { ExperienceCard } from "./ExperienceCard";
import "react-vertical-timeline-component/style.min.css";




export const ProductsTraction = () => {
  const experiences = [
    {
      iconBg: "#212121",
      date: "CR",
      points: [
        "21.6/30.24 MVA 132/27 KV Traction Power Transformer",
        "Qty:8"
      ],
    },
    {
      iconBg: "#212121",
      date: "SECR",
      points: [
        "21.6/30.24 MVA 132/27 KV Traction Power Transformer",
        "Qty:17"
      ],
    },
    {
      iconBg: "#212121",
      date: "SCR",
      points: [
        "21.6/30.24 MVA 132/27 KV Traction Power Transformer",
        "Qty:6"
      ],
    },
    {
      iconBg: "#212121",
      date: "WCR",
      points: [
        "21.6/30.24 MVA 132/27 KV Traction Power Transformer",
        "Qty:8"
      ],
    },
    {
      iconBg: "#212121",
      date: "ECOR",
      points: [
        "21.6/30.24 MVA 132/27 KV Traction Power Transformer",
        "Qty:8"
      ],
    },
    {
      iconBg: "#212121",
      date: "NWR",
      points: [
        "21.6/30.24 MVA 132/27 KV Traction Power Transformer",
        "Qty:8"
      ],
    },

    {
      iconBg: "#212121",
      date: "WR",
      points: [
        "21.6/30.24 MVA 66/27 KV Traction Power Transformer",
        "Qty:8"
      ],
    },

    {
      iconBg: "#212121",
      date: "SWR",
      points: [
        "21.6/30.24 MVA 66/27 KV Traction Power Transformer",
        "Qty:8"
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


