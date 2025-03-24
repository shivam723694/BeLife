
import allhealthclinic from "../banner/allhealthclinic.png"


export default function AllClinicBanner({ location = "Gurgaon", locationCount = 5 }) {
  return (
    <div className="relative w-full h-screen bg-sky-50 overflow-hidden">
      {/* Background Image Section */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent z-10"></div>
        <div className="w-full h-full bg-gradient-to-b from-blue-50 to-gray-100"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-20 flex flex-col md:flex-row h-full container mx-auto px-4">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-sky-500">BeLife - Your Trusted Corporate Clinic in</span>
            <br />
            <span className="text-gray-800">{location}, </span> 
            <span className="text-black font-bold">Conveniently Located</span>
            <br />
            <span className="text-black font-bold">Across {locationCount} Locations</span>
          </h1>
          
          <button className="bg-black text-white rounded-full px-8 py-3 mt-6 w-fit font-medium hover:bg-gray-800 transition-colors shadow-lg">
            Book Appointment
          </button>
          
          {/* Stats Section */}
          <div className="flex flex-wrap mt-8 bg-pink-50 bg-opacity-80 rounded-lg p-4 w-fit space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-700">125K+ Health Served</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-700">1 Lac Health ChekUps<br />Completed</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-700">Rated 4.8 on Google</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Image Section */}
        <div className="hidden md:block w-1/2 relative">
          <div className="absolute right-0 top-0 h-full w-full">
            <div className="relative h-full w-full">
              {/* Clinic storefront mockup */}
              <div className="absolute bottom-0 right-0 w-full h-4/5 bg-white rounded-tl-lg shadow-lg overflow-hidden">
                <div className="w-full h-1/4 bg-sky-300"></div>
                <div className="flex justify-center p-4">
                  <img src={allhealthclinic} alt="Pet clinic storefront" className="rounded shadow-md" />
                </div>
              </div>
              
              {/* Pet images */}
              <div className="absolute top-20 right-24 bg-white p-2 rounded-lg shadow-lg">
                <div className="flex space-x-2">
                  <img src="/images/dog.jpg" alt="Dog" className="h-16 w-16 rounded object-cover" />
                  <img src="/images/cat.jpg" alt="Cat" className="h-16 w-16 rounded object-cover" />
                  <img src="/images/puppy.jpg" alt="Puppy" className="h-16 w-16 rounded object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}