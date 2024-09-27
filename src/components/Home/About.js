import React from "react";
import Tilt from 'react-parallax-tilt';
import CountUp from "react-countup";


const stats = [
  { id: 1, name: 'Transformers Manufactured', value: '214' },
  { id: 2, name: 'Transformers Remanufactured', value: '344'},
  { id: 3, name: 'Transformers Overhauled', value: '625' },
  { id: 4, name: 'Seminars have Conducted', value: '245'  },
]



export const Stats =()=> {
  
  return (  
    <div className=" py-24 sm:py-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-4">
        
          {stats.map((stat) => (
            <Tilt>
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 px-5 py-1 " style={{"background" : "#121212" , "box-shadow":"rgba(0, 0, 0, 0.24) 0px 3px 8px" , borderRadius:'10px'}} >
              <dt className="text-base leading-7 statsName" >{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight StatsNumber sm:text-5xl px-5 py-1" >
              <CountUp start={0} end={stat.value} duration={2} delay={0}/>+ </dd>
            </div>
            </Tilt>
          ))}

        </dl>
      </div>
    
    </div>
  )
}
