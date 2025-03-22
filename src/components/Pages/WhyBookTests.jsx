import React from 'react';

// SVG icons as components with Tailwind CSS color classes
const QualityIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="35" r="30" className="fill-green-50" />
    <path d="M35 23C28.4 23 23 28.4 23 35C23 41.6 28.4 47 35 47C41.6 47 47 41.6 47 35C47 28.4 41.6 23 35 23ZM32 41L26 35L28.4 32.6L32 36.2L41.6 26.6L44 29L32 41Z" className="fill-green-700" />
  </svg>
);

const TimeIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="35" r="30" className="fill-teal-50" />
    <path d="M39 23H31V25H39V23ZM35 39H37V33H35V39ZM43.03 32.04C43.39 31.12 43.28 30.08 42.73 29.26C42.17 28.44 41.23 28 40.25 28H38V23H32V28H29.75C28.77 28 27.83 28.44 27.27 29.26C26.72 30.08 26.61 31.12 26.97 32.04C27.26 32.82 27.84 33.44 28.59 33.76C28.22 34.42 28 35.19 28 36C28 36.81 28.22 37.58 28.59 38.24C27.84 38.56 27.26 39.18 26.97 39.96C26.61 40.88 26.72 41.92 27.27 42.74C27.83 43.56 28.77 44 29.75 44H32V47H38V44H40.25C41.23 44 42.17 43.56 42.73 42.74C43.28 41.92 43.39 40.88 43.03 39.96C42.74 39.18 42.16 38.56 41.41 38.24C41.78 37.58 42 36.81 42 36C42 35.19 41.78 34.42 41.41 33.76C42.16 33.44 42.74 32.82 43.03 32.04Z" className="fill-teal-600" />
  </svg>
);

const ConvenienceIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="35" r="30" className="fill-blue-50" />
    <path d="M46 30H42V26C42 24.9 41.1 24 40 24H30C28.9 24 28 24.9 28 26V30H24C22.9 30 22 30.9 22 32V44C22 45.1 22.9 46 24 46H46C47.1 46 48 45.1 48 44V32C48 30.9 47.1 30 46 30ZM30 26H40V30H30V26ZM46 44H24V32H46V44ZM35 35.5C32.5 35.5 30.5 37.5 30.5 40C30.5 42.5 32.5 44.5 35 44.5C37.5 44.5 39.5 42.5 39.5 40C39.5 37.5 37.5 35.5 35 35.5ZM35 42.5C33.6 42.5 32.5 41.4 32.5 40C32.5 38.6 33.6 37.5 35 37.5C36.4 37.5 37.5 38.6 37.5 40C37.5 41.4 36.4 42.5 35 42.5Z" className="fill-blue-600" />
  </svg>
);

const AvailabilityIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="35" r="30" className="fill-green-50" />
    <path d="M43 27H42V25H40V27H30V25H28V27H27C25.9 27 25 27.9 25 29V45C25 46.1 25.9 47 27 47H43C44.1 47 45 46.1 45 45V29C45 27.9 44.1 27 43 27ZM43 45H27V32H43V45ZM43 30H27V29H43V30ZM32 36H30V38H32V36ZM37 36H35V38H37V36ZM42 36H40V38H42V36ZM32 40H30V42H32V40ZM37 40H35V42H37V40ZM42 40H40V42H42V40Z" className="fill-green-600" />
  </svg>
);

const ExpertIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="35" r="30" className="fill-indigo-50" />
    <path d="M35 23C30.05 23 26 27.05 26 32C26 35.3 28.1 38.1 31 39.27V41C31 41.55 31.45 42 32 42H38C38.55 42 39 41.55 39 41V39.27C41.9 38.1 44 35.3 44 32C44 27.05 39.95 23 35 23ZM39 36.6V39H31V36.6C28.67 35.55 27 33.95 27 32C27 27.6 30.6 24 35 24C39.4 24 43 27.6 43 32C43 33.95 41.33 35.55 39 36.6ZM32 43C31.45 43 31 43.45 31 44C31 44.55 31.45 45 32 45H38C38.55 45 39 44.55 39 44C39 43.45 38.55 43 38 43H32ZM30 46C29.45 46 29 46.45 29 47C29 47.55 29.45 48 30 48H40C40.55 48 41 47.55 41 47C41 46.45 40.55 46 40 46H30Z" className="fill-indigo-600" />
  </svg>
);

const WhyBookTests = () => {
  const features = [
    {
      icon: <QualityIcon />,
      title: "Quality",
      description: "Follow Stringent Quality Control Practices"
    },
    {
      icon: <TimeIcon />,
      title: "On-Time Services",
      description: "Sample Collection & Reports"
    },
    {
      icon: <ConvenienceIcon />,
      title: "Convenience",
      description: "At-Home & In-Lab Services"
    },
    {
      icon: <AvailabilityIcon />,
      title: "Availability",
      description: "365 days a year"
    },
    {
      icon: <ExpertIcon />,
      title: "Expert Assistance",
      description: "On-Demand Report Consultation"
    }
  ];

  return (
    <div className="w-full bg-gray-100 py-10 px-4 rounded-lg my-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-800">
            Why <span className="text-blue-800">Book Tests</span> With us ?
          </h2>
          <p className="mt-4 text-gray-600 max-w-4xl">
            According to the study presented at the 78th UN General Assembly, Redcliffe's tests are up to 8 times more cost-effective than national treatment coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBookTests;