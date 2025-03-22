// App.jsx
import React from 'react';
import { FaUpload, FaUserMd, FaHospital, FaHandshake } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Welcome to BeLife
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-8">
            Where we believe in "Best Tests, Best Hygiene, Best Technology"
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          BeLife Diagnostics & Polyclinic is committed to provide the entire gamut of most advanced laboratory services and exceptional support services in boosting the community's health services sector. We ensure a dependable, secure, affordable, competent, and confident service experience to our patrons.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ServiceCard 
            icon={<FaUpload className="text-blue-500" size={32} />}
            title="Upload Prescription"
            description="Easily upload your prescription for quick processing and accurate test preparations."
            image="https://onepluslab.com/wp-content/uploads/2024/10/01.png"
            bgColor="bg-blue-50"
          />
          
          <ServiceCard 
            icon={<FaUserMd className="text-purple-500" size={32} />}
            title="Find Doctors"
            description="Connect with our network of qualified specialists for consultations and follow-ups."
            image="https://onepluslab.com/wp-content/uploads/2024/10/02.png"
            bgColor="bg-purple-50"
          />
          
          <ServiceCard 
            icon={<FaHospital className="text-green-500" size={32} />}
            title="Geriatric Care"
            description="Specialized diagnostic and healthcare services tailored for elderly patients."
            image="https://onepluslab.com/wp-content/uploads/2024/10/03.png"
            bgColor="bg-green-50"
          />
          
          <ServiceCard 
            icon={<FaHandshake className="text-amber-500" size={32} />}
            title="Book Franchise"
            description="Join our network of diagnostic centers and benefit from our established protocols."
            image="https://onepluslab.com/wp-content/uploads/2024/10/04.png"
            bgColor="bg-amber-50"
          />
        </section>

        {/* <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Advanced Technology</h3>
                    <p className="text-gray-600">State-of-the-art equipment for accurate and timely results</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Team</h3>
                    <p className="text-gray-600">Qualified professionals with years of specialized experience</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fast Turnaround</h3>
                    <p className="text-gray-600">Quick processing with digital reports available online</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-5/12">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Book a Home Collection</h3>
                <form>
                  <div className="mb-4">
                    <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4">
                    <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4">
                    <input type="text" placeholder="Address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">Schedule Now</button>
                </form>
              </div>
            </div>
          </div>
        </section> */}

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

     
    </div>
  );
}

// ServiceCard Component
function ServiceCard({ icon, title, description, image, bgColor }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${bgColor}`}>
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3">
            {icon}
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition flex items-center">
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Sample services data
const services = [
  {
    title: "Blood Tests",
    description: "Comprehensive blood testing services including CBC, lipid profiles, and specialized panels."
  },
  {
    title: "Molecular Diagnostics",
    description: "Advanced PCR and genetic testing for precise diagnosis and treatment planning."
  },
  {
    title: "Microbiology",
    description: "Culture and sensitivity testing for infectious disease management."
  },
  {
    title: "Histopathology",
    description: "Tissue sample analysis for accurate disease diagnosis and staging."
  },
  {
    title: "Health Packages",
    description: "Preventive screening packages tailored for different age groups and health concerns."
  },
  {
    title: "Home Collection",
    description: "Convenient sample collection at your doorstep by trained phlebotomists."
  }
];

export default App;