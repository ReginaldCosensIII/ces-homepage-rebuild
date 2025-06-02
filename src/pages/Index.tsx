
const Index = () => {
  return (
    <div className="min-h-screen bg-white font-opensans">
      {/* Header Section - matching #headerbgWhite */}
      <div className="bg-white border-b border-gray-300" style={{ backgroundColor: '#fff', fontFamily: 'Open Sans, sans-serif', fontWeight: '500', minHeight: '85px' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <img src="/placeholder.svg" alt="CES Inc Logo" className="w-12 h-12 mr-3" />
              <div>
                <h1 className="text-2xl font-bold" style={{ color: '#660033' }}>CES Inc</h1>
                <p className="text-sm text-gray-600">Computer Enhancement Services Inc</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-700">
              <div>Phone: (555) 123-4567</div>
              <div>Email: info@cesitservice.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu - matching #headerbg */}
      <nav className="text-white" style={{ backgroundColor: 'darkslategray' }}>
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex">
            <li className="relative group">
              <a href="/" className="block px-4 py-3 hover:bg-gray-600 transition-colors">Home</a>
            </li>
            <li className="relative group">
              <a href="/about" className="block px-4 py-3 hover:bg-gray-600 transition-colors">About Us</a>
            </li>
            <li className="relative group">
              <a href="/services" className="block px-4 py-3 hover:bg-gray-600 transition-colors cursor-pointer">Services ▼</a>
              <ul className="absolute left-0 top-full bg-gray-700 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                <li><a href="/computer-repair" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Computer Repair</a></li>
                <li><a href="/network-setup" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Network Setup</a></li>
                <li><a href="/data-recovery" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Data Recovery</a></li>
                <li><a href="/virus-removal" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Virus Removal</a></li>
                <li><a href="/software-installation" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Software Installation</a></li>
                <li><a href="/hardware-upgrades" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Hardware Upgrades</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="/support" className="block px-4 py-3 hover:bg-gray-600 transition-colors">Support</a>
            </li>
            <li className="relative group">
              <a href="/contact" className="block px-4 py-3 hover:bg-gray-600 transition-colors">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Welcome Section - using container styling */}
            <div className="p-4 mb-6 rounded-md" style={{ backgroundColor: '#eee', border: '2px', borderRadius: '5px', padding: '16px', margin: '16px 0' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#660033' }}>Welcome to CES Inc</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Computer Enhancement Services Inc (CES Inc) has been providing reliable computer and IT services 
                to businesses and individuals for over 15 years. Our experienced technicians are dedicated to 
                keeping your technology running smoothly and efficiently.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From computer repair and network setup to data recovery and virus removal, we offer comprehensive 
                solutions for all your technology needs. Contact us today for fast, professional service you can trust.
              </p>
            </div>

            {/* Services Overview */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-5 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Computer Repair</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Professional diagnosis and repair of desktop and laptop computers. We fix hardware issues, 
                  replace components, and ensure your computer runs like new.
                </p>
              </div>
              <div className="bg-white p-5 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Network Setup</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Complete network installation and configuration for homes and businesses. Secure wireless 
                  networks, file sharing, and remote access solutions.
                </p>
              </div>
              <div className="bg-white p-5 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Data Recovery</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Professional data recovery services for crashed hard drives, corrupted files, and deleted data. 
                  We use advanced tools to recover your valuable information.
                </p>
              </div>
              <div className="bg-white p-5 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Virus Removal</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Complete virus and malware removal services. We clean infected computers and install 
                  protection software to prevent future infections.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-72">
            {/* Quick Contact - using brand colors */}
            <div className="text-white p-4 mb-6" style={{ backgroundColor: '#660033' }}>
              <h3 className="text-lg font-bold mb-3">Quick Contact</h3>
              <div className="text-sm space-y-2">
                <div>📞 (555) 123-4567</div>
                <div>📧 info@cesitservice.com</div>
                <div>📍 123 Tech Street<br />Computer City, TC 12345</div>
              </div>
            </div>

            {/* Business Hours - using container styling */}
            <div className="p-4 mb-6 border border-gray-200" style={{ backgroundColor: '#eee', borderRadius: '5px' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Business Hours</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Emergency Service */}
            <div className="bg-red-100 border border-red-300 p-4 mb-6">
              <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Service</h3>
              <p className="text-sm text-red-700 mb-3">
                24/7 emergency computer repair available for critical business systems.
              </p>
              <div className="text-sm font-bold text-red-800">
                Emergency Line: (555) 911-TECH
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white p-4 border border-gray-200">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Service Areas</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Computer City</li>
                <li>• Tech Valley</li>
                <li>• Digital Hills</li>
                <li>• Cyber Springs</li>
                <li>• Data Plains</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - using darkslategray */}
      <footer className="text-white mt-12" style={{ backgroundColor: 'darkslategray' }}>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-3">CES Inc</h4>
              <p className="text-sm text-gray-300">
                Computer Enhancement Services Inc - Your trusted IT partner since 2008.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Services</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><a href="/computer-repair" className="hover:text-white">Computer Repair</a></li>
                <li><a href="/network-setup" className="hover:text-white">Network Setup</a></li>
                <li><a href="/data-recovery" className="hover:text-white">Data Recovery</a></li>
                <li><a href="/virus-removal" className="hover:text-white">Virus Removal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contact Info</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>(555) 123-4567</div>
                <div>info@cesitservice.com</div>
                <div>123 Tech Street, Computer City, TC 12345</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm text-gray-400">
            <p>&copy; 2024 CES Inc - Computer Enhancement Services Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
