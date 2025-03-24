// src/components/ServicesSection.jsx
const ServicesSection = () => {
    const services = [
      {
        title: "Ultrasound",
        description: "At OnePLUS Ultrasound Lab, we understand the importance of precise diagnostics in healthcare. Our team of highly skilled professionals ensures accurate results with cutting-edge technology.",
        icon: "🔍"
      },
      {
        title: "X-Ray",
        description: "The team at OnePLUS Ultrasound Lab comprises skilled radiologists and technologists who are dedicated to providing clear and detailed imaging for accurate diagnoses.",
        icon: "📷"
      },
      {
        title: "Laboratory",
        description: "Fully Automated State Of The Art Laboratory With Closed Blood Collection System By BD And Full Facilities For All Blood Tests and advanced diagnostics.",
        icon: "🧪"
      },
      {
        title: "Other Facilities",
        description: "The Electrocardiogram (ECG) test at OnePLUS Ultrasound Lab is not merely a routine examination; it's a gateway to understanding your heart's electrical activity with precision.",
        icon: "❤️"
      },
      {
        title: "Dengue Test",
        description: "In the relentless pursuit of cutting-edge healthcare solutions, we emerge as a beacon of excellence with rapid and accurate dengue testing facilities.",
        icon: "🦟"
      },
      {
        title: "USG",
        description: "Amniotic Fluid is the fluid that surrounds the baby inside the uterus. Our specialized tests analyze these cells for comprehensive prenatal diagnosis.",
        icon: "👶"
      }
    ];
  
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-700 mb-2">Our Popular Test Best Quality Services</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Our Amazing Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-teal-600 font-medium hover:text-teal-800 transition-colors">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;