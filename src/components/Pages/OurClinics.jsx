import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Mail, ChevronRight, Search, Menu, X, Navigation, Map } from 'lucide-react';

const Locations = () => {
  const [activeRegion, setActiveRegion] = useState('Delhi');
  const [activeCenter, setActiveCenter] = useState('FiftyOnePlus Lab');
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);

  const locationsData = {
    regions: [
      {
        name: 'Delhi',
        centers: [
          {
            name: 'FiftyOnePlus Lab',
            address: 'Unit 101, Princeton Towers, Paramount Building, 434 Quintin Paredes Street, Binondo, Delhi',
            services: [
              'Laboratory Examination (Blood, Urine, etc.)',
              'Drug Test',
              'X-Ray',
              'ECG',
              'Ultrasound',
              'Doctor Consultation'
            ],
            hours: 'Monday-Saturday | 8:00AM - 8:00PM',
            contact: {
              mobile: '+91 98765 43210',
              landline: '011 2345 6789',
              email: 'info@fiftyoneplus.com'
            },
            coordinates: {
              lat: 28.6139,
              lng: 77.2090
            }
          },
          {
            name: 'Diagnostics Plus',
            address: '123 Medical Plaza, Connaught Place, Delhi',
            services: [
              'Blood Tests',
              'MRI Scans',
              'CT Scans',
              'Pathology'
            ],
            hours: 'Monday-Sunday | 7:00AM - 9:00PM',
            contact: {
              mobile: '+91 98765 12345',
              landline: '011 4321 5678',
              email: 'info@diagnosticsplus.com'
            },
            coordinates: {
              lat: 28.6292,
              lng: 77.2185
            }
          }
        ]
      },
      {
        name: 'Noida',
        centers: [
          {
            name: 'HealthFirst Center',
            address: 'Sector 18, Noida',
            services: [
              'Full Body Checkup',
              'Cardiac Tests',
              'Diabetes Screening'
            ],
            hours: 'Monday-Friday | 7:30AM - 7:30PM',
            contact: {
              mobile: '+91 98765 67890',
              landline: '0120 4567 890',
              email: 'info@healthfirst.com'
            },
            coordinates: {
              lat: 28.5708,
              lng: 77.3260
            }
          }
        ]
      },
      {
        name: 'Faridabad',
        centers: [
          {
            name: 'MediCare Hub',
            address: 'Sector 15, Faridabad',
            services: [
              'Routine Checkups',
              'Vaccinations',
              'Pediatric Tests'
            ],
            hours: 'Monday-Saturday | 8:00AM - 6:00PM',
            contact: {
              mobile: '+91 98765 34567',
              landline: '0129 4567 123',
              email: 'info@medicarehub.com'
            },
            coordinates: {
              lat: 28.3887,
              lng: 77.3178
            }
          }
        ]
      },
      {
        name: 'Ghaziabad',
        centers: [
          {
            name: 'City Diagnostics',
            address: 'Raj Nagar, Ghaziabad',
            services: [
              'Advanced Blood Tests',
              'Thyroid Profile',
              'Liver Function Tests'
            ],
            hours: 'Monday-Sunday | 7:00AM - 8:00PM',
            contact: {
              mobile: '+91 98765 78901',
              landline: '0120 1234 567',
              email: 'info@citydiagnostics.com'
            },
            coordinates: {
              lat: 28.6692,
              lng: 77.4538
            }
          }
        ]
      }
    ]
  };

  // Helper components and functions
  const MapComponent = ({ center }) => {
    useEffect(() => {
      // This would normally initialize a map using the provided coordinates
      // Here we're simulating what would happen in a real implementation
      console.log(`Initializing map for ${center.name} at coordinates: ${center.coordinates.lat}, ${center.coordinates.lng}`);
      
      // In a real implementation, you would initialize a map library here
      // For example, with Google Maps:
      // const map = new google.maps.Map(document.getElementById("map"), {
      //   center: { lat: center.coordinates.lat, lng: center.coordinates.lng },
      //   zoom: 15,
      // });
      // new google.maps.Marker({
      //   position: { lat: center.coordinates.lat, lng: center.coordinates.lng },
      //   map,
      //   title: center.name,
      // });
    }, [center]);

    return (
      <div className="bg-gray-200 rounded-lg overflow-hidden relative" style={{ height: '300px' }}>
        {/* Placeholder map display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Map size={48} className="mx-auto text-blue-600 mb-2" />
            <p className="font-medium text-gray-700">Map Location</p>
            <p className="text-sm text-gray-600">
              {center.name} ({center.coordinates.lat.toFixed(4)}, {center.coordinates.lng.toFixed(4)})
            </p>
          </div>
        </div>
        
        {/* This div would be the map container in a real implementation */}
        <div id="map" className="w-full h-full"></div>
      </div>
    );
  };
  
  const getDirectionsUrl = (center) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${center.coordinates.lat},${center.coordinates.lng}&destination_place_id=${center.name}`;
  };

  const currentRegion = locationsData.regions.find(region => region.name === activeRegion);
  const currentCenter = currentRegion?.centers.find(center => center.name === activeCenter);

  // Filter centers based on search term
  const filteredCenters = currentRegion?.centers.filter(center => 
    center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-green-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Healthcare Locations</h1>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md hover:bg-green-700"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-green-600 text-white p-4">
          <h2 className="text-lg font-semibold mb-3">Regions</h2>
          <ul className="space-y-2 mb-6">
            {locationsData.regions.map(region => (
              <li key={region.name}>
                <button
                  onClick={() => {
                    setActiveRegion(region.name);
                    setActiveCenter(region.centers[0].name);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left p-2 rounded-md ${activeRegion === region.name ? 'bg-green-700 font-bold' : 'hover:bg-green-500'}`}
                >
                  {region.name}
                </button>
              </li>
            ))}
          </ul>
          
          <h2 className="text-lg font-semibold mb-3">{activeRegion} Centers</h2>
          <ul className="space-y-2">
            {currentRegion?.centers.map(center => (
              <li key={center.name}>
                <button
                  onClick={() => {
                    setActiveCenter(center.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left p-2 rounded-md ${activeCenter === center.name ? 'bg-blue-600 font-bold' : 'hover:bg-green-500'}`}
                >
                  {center.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Left Sidebar - Regions */}
      <div className="hidden lg:block w-full lg:w-1/5 bg-gradient-to-b from-green-600 to-green-700 text-white p-6 rounded-lg shadow-lg m-2">
        <h1 className="text-2xl font-bold mb-6 border-b border-green-500 pb-2">Regions</h1>
        <ul className="space-y-3">
          {locationsData.regions.map(region => (
            <li key={region.name}>
              <button
                onClick={() => {
                  setActiveRegion(region.name);
                  setActiveCenter(region.centers[0].name);
                  setSearchTerm('');
                }}
                className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-all duration-200 ${
                  activeRegion === region.name 
                  ? 'bg-white text-green-700 font-bold shadow-md' 
                  : 'hover:bg-green-500'
                }`}
              >
                <span>{region.name}</span>
                {activeRegion === region.name && <ChevronRight size={18} />}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Section - Centers */}
      <div className="hidden lg:block w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-lg m-2">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{activeRegion} Centers</h2>
        
        {/* Search Box */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search centers or services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute top-2.5 left-3 text-gray-400" size={18} />
        </div>
        
        {filteredCenters && filteredCenters.length > 0 ? (
          <ul className="space-y-2">
            {filteredCenters.map(center => (
              <li key={center.name}>
                <button
                  onClick={() => setActiveCenter(center.name)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    activeCenter === center.name 
                    ? 'bg-blue-600 text-white font-bold shadow-md' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{center.name}</span>
                    {activeCenter === center.name && <ChevronRight size={18} />}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-4 text-gray-500">
            No centers match your search
          </div>
        )}
      </div>

      {/* Right Section - Center Details */}
      <div className="w-full lg:w-2/4 bg-white p-6 rounded-lg shadow-lg m-2">
        {currentCenter && (
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm mb-2">
                {activeRegion}
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{currentCenter.name}</h2>
              <div className="flex items-start text-gray-600 mb-4">
                <MapPin className="min-w-6 mt-1" size={20} />
                <p className="ml-2">{currentCenter.address}</p>
              </div>
              
              {/* Location Map Toggle Button */}
              <button 
                onClick={() => setMapVisible(!mapVisible)}
                className="flex items-center bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <Map size={16} className="mr-2" />
                {mapVisible ? "Hide Map Location" : "Show Map Location"}
              </button>
            </div>
            
            {/* Map Component */}
            {mapVisible && (
              <div className="mb-6">
                <MapComponent center={currentCenter} />
                <div className="mt-3 flex justify-between">
                  <a 
                    href={getDirectionsUrl(currentCenter)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 w-full justify-center"
                  >
                    <Navigation size={16} className="mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            )}
            
            <div className="mb-8 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                <Clock className="mr-2" size={20} />
                Hours
              </h3>
              <p className="text-gray-700 font-medium">{currentCenter.hours}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Available Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentCenter.services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg"
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-2"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="text-green-600" size={20} />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Mobile</p>
                    <p className="text-gray-700">{currentCenter.contact.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-green-600" size={20} />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Landline</p>
                    <p className="text-gray-700">{currentCenter.contact.landline}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-green-600" size={20} />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-blue-600 hover:underline">
                      <a href={`mailto:${currentCenter.contact.email}`}>
                        {currentCenter.contact.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition-colors duration-200 font-medium flex-1 flex justify-center items-center">
                Book Appointment
              </button>
              <a 
                href={getDirectionsUrl(currentCenter)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-colors duration-200 font-medium flex-1 flex justify-center items-center"
              >
                <Navigation size={18} className="mr-2" />
                Directions
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Locations;