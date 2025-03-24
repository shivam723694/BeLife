import React from 'react';
import { Droplet, Radio, Image, Activity, Heart, Stethoscope, 
  Home, Building, Truck, Syringe, Star } from 'lucide-react';

function MedicalServices() {
  const services = [
    // Column 1
    [
      { icon: <Droplet className="text-emerald-500 w-5 h-5" />, name: "Fully Automated Laboratory Services" },
      { icon: <Droplet className="text-emerald-500 w-5 h-5" />, name: "Special Laboratory" },
      { icon: <Radio className="text-emerald-500 w-5 h-5" />, name: "X-Ray" },
      { icon: <Image className="text-emerald-500 w-5 h-5" />, name: "Digital Mammography", limited: true },
    ],
    // Column 2
    [
      { icon: <Activity className="text-emerald-500 w-5 h-5" />, name: "CT-Scan", limited: true },
      { icon: <Heart className="text-emerald-500 w-5 h-5" />, name: "ECG" },
      { icon: <Heart className="text-emerald-500 w-5 h-5" />, name: "ICG", limited: true },
      { icon: <Heart className="text-emerald-500 w-5 h-5" />, name: "Echocardiography", limited: true },
      { icon: <Activity className="text-emerald-500 w-5 h-5" />, name: "Treadmill Stress Test", limited: true },
    ],
    // Column 3
    [
      { icon: <Heart className="text-emerald-500 w-5 h-5" />, name: "Ambulatory Blood Pressure Monitoring", limited: true },
      { icon: <Heart className="text-emerald-500 w-5 h-5" />, name: "Holter Monitoring", limited: true },
      { icon: <Radio className="text-emerald-500 w-5 h-5" />, name: "Ultrasound" },
      { icon: <Activity className="text-emerald-500 w-5 h-5" />, name: "Vascular Procedure", limited: true },
      { icon: <Star className="text-emerald-500 w-5 h-5" />, name: "Momma Clinic", limited: true },
    ],
    // Column 4
    [
      { icon: <Stethoscope className="text-emerald-500 w-5 h-5" />, name: "Multi-Specialty Doctors' Clinic" },
      { icon: <Home className="text-emerald-500 w-5 h-5" />, name: "Home Service" },
      { icon: <Building className="text-emerald-500 w-5 h-5" />, name: "Ambulatory Care Services", limited: true },
      { icon: <Truck className="text-emerald-500 w-5 h-5" />, name: "Mobile On-Site Services" },
      { icon: <Syringe className="text-emerald-500 w-5 h-5" />, name: "Vaccination" },
    ]
  ];

  return (
    <div className="bg-sky-50 p-6 rounded-lg max-w-7xl mx-auto">
      <h2 className="text-emerald-500 text-2xl font-semibold mb-6">Services</h2>
      
      <div className="flex flex-wrap gap-8 justify-between">
        {services.map((column, colIndex) => (
          <div key={colIndex} className="w-full md:w-[23%] space-y-4">
            {column.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-0.5">{service.icon}</span>
                <p className="text-gray-800 text-sm">
                  {service.name}
                  {service.limited && <span className="text-emerald-500 ml-1">*</span>}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-right text-emerald-500">
        * Available in selected branches only
      </div>
    </div>
  );
}

export default MedicalServices;