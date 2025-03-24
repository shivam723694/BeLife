// src/App.jsx
import ServicesSection from './components/ServicesSection';

function ServicesSectionMain() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Contact</a>
          </nav>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Book Appointment
          </button>
        </div>
      </header>
      
      <main>
        <ServicesSection />
      </main>
      
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-300">Providing exceptional diagnostic services since 2013 with cutting-edge technology and compassionate care.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300">
              <p>123 Medical Plaza</p>
              <p>Delhi, India</p>
              <p className="mt-2">Phone: +91 1234567890</p>
              <p>Email: info@belifediagnostics.com</p>
            </address>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BeLife Diagnostics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ServicesSectionMain;