import React from "react";
import {VerticalTimeline} from "react-vertical-timeline-component";
import { ExperienceCard } from "./ExperienceCard";
import "react-vertical-timeline-component/style.min.css";




export const Experience = () => {
  const experiences = [
    {
      iconBg: "#212121",
      date: "1995 ",
      points: [
        "Vishvas Power was incorporated by three Electrical Engineers from Crompton Greaves with a vision to provide quality services to end users of EHV Switchgears & Transformers",
        "Vishvas Power became a well known name in the field of Overhauling of Power Transformers at site all throughout India",
        " Vishvas Power completed crossed revenue of INR 1 crore ",
      ],
    },
    {
      iconBg: "#212121",
      date: "2006 - 2012",
      points: [
        "Construction of a state of the Art Power Transformer Manufacturing Factory was stated at Butibori MIDC :- The Zero Mile of the COuntry",
        "Operations started at Butibori Plant",
        "With freshly infused funds from American Transformers LLC, The Butibori plant was expanded to double its capacity",
      ],
    },
    {
      iconBg: "#212121",
      date: "2013 - 2020",
      points: [
        " Vishvas Power becomes a renowned and trustworthy name in field of Repair & Remanufacturing of Power & Furnace Transformers",
        "Vishvas Power completes Prototype Testing of own make 132/27 KV 21.6/30.24 MVA Traction power Transformer for supplying to Indian Railways",
        "M/s Vishvas Power is added by RDSO Lucknow on it's Approved vendor list for supply of various rating of EHV Transformers to Indian Railways",
       
      ],
    },
    {
      iconBg: "#212121",
      date: "2021 - Present",
      points: [
        " M/s Vishvas Power emerges out stronger from the COVID crisis doubling it's revenue in Pandemic period with resilient execution",
        " M/s Vishvas Power becomes first Indian Manufacturer to develop and successfully approve itself with RDSO for new rating Transformers to be used in 2 X 25 KV AC Traction system for the Gati Shakti Project of Indian Railways ",
        "M/s Vishvas Power completes INR 100 Crore Revenue and establishes itself as a renowned manufacturer of Power Transformers for 25 KV AC & 2X25 KV Ac Traction systems for Indian Railways",
      ],
    },
  ];
  return (
    <div className="container-experiences">
      <span className="header-Experiences">
          <h1 className='v'>V</h1>
                  <h1>
                      ishvas Power Journey Throughout The Years
                    </h1>
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


