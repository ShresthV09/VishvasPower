import React from "react";
import {VerticalTimeline} from "react-vertical-timeline-component";
import { ExperienceCard } from "./ExperienceCard";
import "react-vertical-timeline-component/style.min.css";




export const CoreValues = () => {
  const experiences = [
    {
      iconBg: "#212121",
      date: "Honesty ",
      points: [
        "Personal and Professional honesty must be foundation of all our thinking and actions.",
      ],
    },
    {
      iconBg: "#212121",
      date: "Team",
      points: [
        "Team involvement is essential from planning to execution. Respecting team views and building up team is essential for sustained success",
      ],
    },
    {
      iconBg: "#212121",
      date: "Excellence",
      points: [
        " We must take efforts to improve our work at better level every time and must be open for ideas which bring excellence in our work.",
       
      ],
    },
    {
      iconBg: "#212121",
      date: "Sensitivity",
      points: [
        "We must be sensitive towards customer perception and not only complaints. We must be equally sensitive towards our commitments, both external and internal.",
      ],
    },
    {
      iconBg: "#212121",
      date: "Initiative and Ownership",
      points: [
        "Our response to happenings must not be passive. We must take initiative in improving actions and handle our work related responsibilities with ownershin approach.",
      ],
    },
    {
      iconBg: "#212121",
      date: "Commitment of Contribution to Envoirment and Society",
      points: [
        "Since majority of our time in life is consumed in workina. we must try to contribute to society and environment in all possible ways even during day to day work.",
      ],
    },
  ];
  return (
    <div className="container-experiences" style={{backgroundColor:"#212121"}}>
      <span className="header-Experiences CoreValues">
      <h1 style={{color:"#DC0000"}}>Core <span style={{color:"white"}}>Values</span> </h1>
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


