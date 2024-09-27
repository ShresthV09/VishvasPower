import React from "react";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export const ExperienceCard = ({ experience }) => {
    
    return (
      <VerticalTimelineElement

        contentStyle={{
          background: "#fff",
          color: "#121212",
          
          fontWeight:"600",
         
        }}
        contentArrowStyle={{ borderRight: "7px solid  #fff" }}
        date={experience.date} 
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
          </div>
        }
      >
  
        <ul className=' list-disc  space-y-2 '>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className=' text-[16px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };

