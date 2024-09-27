import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import '../../App.css'
const stats = [
  { id: 1, name: 'No of Seminars Conducted', value: '245' },
  { id: 2, name: 'No of Participants enriched', value: '5560' },
]

export const StatsGurukul =()=> {
  return (
    <div className="py-24 sm:py-3 gurukul">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-2">
        
          {stats.map((stat) => (
            <Tilt>
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 px-5 py-1 border-solid border-2 rounded-xl shadow-md" style={{"background" : "#fff"}} >
              <dt className="text-base leading-7 text-gray-600" >{stat.name} </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl px-5 py-1" style={{color:"#DC0000"}}>
                {stat.value}
              </dd>
             
            </div>
            </Tilt>
          ))}

        </dl>
      </div>
    
    </div>
  )
}


