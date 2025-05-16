import { useState } from "react";
import { 
  
  FaXRay, 
  FaFlask, 
  FaHeartbeat, 
  FaVirus, 
  FaBaby 
} from "react-icons/fa";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const services = [
    {
      title: "Ultrasound",
      description: "At OnePLUS Ultrasound Lab, we understand the importance of precise diagnostics in healthcare. Our team of highly skilled professionals ensures accurate results with cutting-edge technology.",
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 8V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 12C16 10.8954 15.1046 10 14 10C12.8954 10 12 10.8954 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 12C16 13.1046 15.1046 14 14 14C12.8954 14 12 13.1046 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 16C8 17.1046 8.89543 18 10 18C11.1046 18 12 17.1046 12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>,
      category: "imaging",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
      borderColor: "border-violet-500"
    },
    {
      title: "X-Ray",
      description: "The team at OnePLUS Ultrasound Lab comprises skilled radiologists and technologists who are dedicated to providing clear and detailed imaging for accurate diagnoses.",
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 8L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 8L9 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>,
      category: "imaging",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-500"
    },
    {
      title: "Laboratory",
      description: "Fully Automated State Of The Art Laboratory With Closed Blood Collection System By BD And Full Facilities For All Blood Tests and advanced diagnostics.",
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 3V8L6 15V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V15L14 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 15H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>,
      category: "lab",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      borderColor: "border-teal-500"
    },
    {
      title: "ECG & Heart Tests",
      description: "The Electrocardiogram (ECG) test at OnePLUS Ultrasound Lab is not merely a routine examination; it's a gateway to understanding your heart's electrical activity with precision.",
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.8 13H9.2L10.5 8L13.5 18L14.8 13H19.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.2 16C21.2 16.5304 21.0104 17.0391 20.6728 17.4142C20.3352 17.7893 19.8783 18 19.4 18H4.6C4.12174 18 3.66515 17.7893 3.32754 17.4142C2.98993 17.0391 2.8 16.5304 2.8 16V8C2.8 7.46957 2.98993 6.96086 3.32754 6.58579C3.66515 6.21071 4.12174 6 4.6 6H19.4C19.8783 6 20.3352 6.21071 20.6728 6.58579C21.0104 6.96086 21.2 7.46957 21.2 8V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      category: "cardio",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      borderColor: "border-rose-500"
    },
    {
      title: "Dengue Test",
      description: "In the relentless pursuit of cutting-edge healthcare solutions, we emerge as a beacon of excellence with rapid and accurate dengue testing facilities.",
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 9L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 9L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 15L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 15L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>,
      category: "lab",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-500"
    },
    {
      title: "USG & Prenatal",
      description: "Amniotic Fluid is the fluid that surrounds the baby inside the uterus. Our specialized tests analyze these cells for comprehensive prenatal diagnosis.",
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 16V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>,
      category: "prenatal",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      borderColor: "border-cyan-500"
    }
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "imaging", name: "Imaging" },
    { id: "lab", name: "Laboratory" },
    { id: "cardio", name: "Cardiology" },
    { id: "prenatal", name: "Prenatal" }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-3">
            Healthcare Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Diagnostic <span className="text-blue-600">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our state-of-the-art facilities provide accurate and timely diagnostics 
            with personalized care from experienced healthcare professionals.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className={`group ${service.bgColor} rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden`}
            >
              <div className="p-6">
                <div className={`${service.iconColor} mb-5`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5 line-clamp-3">
                  {service.description}
                </p>
                <div className="pt-2 border-t border-gray-200">
                  <button className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    Learn more
                    <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={`h-1 w-full ${service.borderColor}`}></div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Schedule Your Appointment Today
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team of healthcare professionals is ready to provide you with exceptional care
            and accurate diagnostics for all your health needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
              Book Appointment
            </button>
            <button className="bg-white border border-gray-300 hover:border-blue-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;