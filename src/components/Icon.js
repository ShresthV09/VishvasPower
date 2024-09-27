import React from 'react';
import IconName1 from '../financial-planning.svg';
import IconName2 from '../financial-planning.svg';
// Import the rest of the icons

function MyComponent() {
  const icons = [
    {
      icon: {IconName1},
      title: 'Icon 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: {IconName1},
      title: 'Icon 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more icons as needed
  ];

  return (
    <div className="flex flex-wrap justify-center p-4">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 m-4 border border-gray-300 rounded-lg"
        >
         <img src={icon.icon} />
          <h3 className="text-lg font-semibold">{icon.title}</h3>
          <p className="text-gray-500">{icon.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
