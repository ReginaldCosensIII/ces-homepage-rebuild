
const Services = () => {
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
                <p className="text-sm text-gray-600">Computer Enhancement Systems Inc</p>
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
          <div className="flex justify-between items-center">
            {/* Action Buttons - Left Side */}
            <div className="flex gap-4 py-2 mr-8">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-2 py-1.5 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse text-xs"
              >
                📞 BOOK A 15 MINUTE CALL
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1.5 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse text-xs"
              >
                🔒 FREE CYBERSECURITY SCAN
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-2 py-1.5 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse text-xs"
              >
                🔧 SCHEDULE ON-SITE SERVICE
              </button>
            </div>
            
            {/* Navigation Menu - Right Side */}
            <ul className="flex">
              <li className="relative group">
                <a href="/" className="block px-4 py-3 hover:bg-gray-600 transition-colors w-20 text-center">Home</a>
              </li>
              <li className="relative group">
                <a href="/about" className="block px-4 py-3 hover:bg-gray-600 transition-colors w-20 text-center">About Us</a>
              </li>
              <li className="relative group">
                <a href="/services" className="block px-4 py-3 hover:bg-gray-600 transition-colors cursor-pointer w-20 text-center bg-gray-600">Services ▼</a>
                <ul className="absolute left-0 top-full bg-gray-700 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  <li><a href="/services" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Computer Repair</a></li>
                  <li><a href="/services" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Network Setup</a></li>
                  <li><a href="/services" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Data Recovery</a></li>
                  <li><a href="/services" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Virus Removal</a></li>
                  <li><a href="/services" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Software Installation</a></li>
                  <li><a href="/services" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Hardware Upgrades</a></li>
                </ul>
              </li>
              <li className="relative group">
                <a href="/solutions" className="block px-4 py-3 hover:bg-gray-600 transition-colors cursor-pointer w-20 text-center">Solutions ▼</a>
                <ul className="absolute left-0 top-full bg-gray-700 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  <li><a href="/solutions" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Products</a></li>
                  <li><a href="/solutions" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Cloud Solutions</a></li>
                  <li><a href="/solutions" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Software Solutions</a></li>
                  <li><a href="/solutions" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Forensic Analysis</a></li>
                  <li><a href="/solutions" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Data Recovery</a></li>
                  <li><a href="/solutions" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Disaster Recovery</a></li>
                  <li><a href="/solutions" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Off-Site Backup</a></li>
                  <li><a href="/solutions" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Database Implementation</a></li>
                </ul>
              </li>
              <li className="relative group">
                <a href="/support" className="block px-4 py-3 hover:bg-gray-600 transition-colors w-20 text-center">Support</a>
              </li>
              <li className="relative group">
                <a href="/contact" className="block px-4 py-3 hover:bg-gray-600 transition-colors w-20 text-center">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Area with Datacenter Background */}
      <div 
        className="max-w-6xl mx-auto px-4 py-6 relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        
        <div className="relative z-10">
          <div className="flex gap-6">
            {/* Main Content */}
            <div className="flex-1">
              {/* Page Header */}
              <div className="p-4 mb-6 rounded-md" style={{ backgroundColor: '#eee', border: '2px', borderRadius: '5px', padding: '16px', margin: '16px 0' }}>
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#660033' }}>Our IT Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  CES Inc provides comprehensive IT services to keep your technology running smoothly. From hardware repairs to 
                  network installations, our certified technicians deliver professional solutions tailored to your needs.
                </p>
              </div>

              {/* Service Categories */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Computer Repair</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Expert diagnosis and repair of desktop and laptop computers. We handle everything from hardware 
                    failures to software issues.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hardware component replacement</li>
                    <li>• Operating system reinstallation</li>
                    <li>• Performance optimization</li>
                    <li>• Blue screen troubleshooting</li>
                  </ul>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Network Setup & Maintenance</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Professional network installation and configuration for businesses and homes. Secure, reliable connectivity solutions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Wireless network configuration</li>
                    <li>• Router and switch installation</li>
                    <li>• Network security implementation</li>
                    <li>• VPN setup and management</li>
                  </ul>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Data Recovery Services</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Advanced data recovery from failed hard drives, corrupted storage devices, and accidentally deleted files.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hard drive recovery</li>
                    <li>• SSD data restoration</li>
                    <li>• RAID array reconstruction</li>
                    <li>• Mobile device recovery</li>
                  </ul>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Virus & Malware Removal</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Complete malware removal and system protection. We clean infected systems and implement security measures.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Virus scanning and removal</li>
                    <li>• Spyware elimination</li>
                    <li>• System security hardening</li>
                    <li>• Antivirus software installation</li>
                  </ul>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Software Installation & Support</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Professional software installation, configuration, and ongoing support for business and personal applications.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Operating system installation</li>
                    <li>• Business software setup</li>
                    <li>• Driver installation and updates</li>
                    <li>• Software licensing management</li>
                  </ul>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Hardware Upgrades</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Boost your computer's performance with professional hardware upgrades and component installations.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Memory (RAM) upgrades</li>
                    <li>• SSD installation and migration</li>
                    <li>• Graphics card upgrades</li>
                    <li>• Power supply replacement</li>
                  </ul>
                </div>
              </div>

              {/* Service Guarantee */}
              <div className="bg-green-50 border border-green-200 p-4 rounded-md">
                <h3 className="text-lg font-bold text-green-800 mb-2">Service Guarantee</h3>
                <p className="text-sm text-green-700">
                  All our services come with a 30-day satisfaction guarantee. If you're not completely satisfied with our work, 
                  we'll make it right at no additional cost.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-72">
              {/* Service Request */}
              <div className="text-white p-4 mb-6" style={{ backgroundColor: '#660033' }}>
                <h3 className="text-lg font-bold mb-3">Request Service</h3>
                <p className="text-sm mb-3">Ready to get your technology working perfectly?</p>
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="w-full bg-white text-purple-800 font-bold py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                >
                  Schedule Service
                </button>
              </div>

              {/* Service Areas */}
              <div className="p-4 mb-6 border border-gray-200" style={{ backgroundColor: '#eee', borderRadius: '5px' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Service Areas</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Computer City & Surrounding Areas</li>
                  <li>• Tech Valley Region</li>
                  <li>• Digital Hills District</li>
                  <li>• Cyber Springs Community</li>
                  <li>• Data Plains Territory</li>
                </ul>
              </div>

              {/* Pricing Info */}
              <div className="bg-blue-50 border border-blue-200 p-4 mb-6">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Transparent Pricing</h3>
                <div className="text-sm text-blue-700 space-y-2">
                  <div>Diagnostic: $49</div>
                  <div>On-site Service: $89/hour</div>
                  <div>Remote Support: $59/hour</div>
                  <div className="text-xs">*Diagnostic fee waived with repair</div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white p-4 border border-gray-200">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Certifications</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• CompTIA A+ Certified</li>
                  <li>• Microsoft Certified Professional</li>
                  <li>• Cisco Network Associate</li>
                  <li>• Apple Certified Technician</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white mt-12" style={{ backgroundColor: 'darkslategray' }}>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-3">CES Inc</h4>
              <p className="text-sm text-gray-300">
                Computer Enhancement Systems Inc - Your trusted IT partner since 2008.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Services</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><a href="/services" className="hover:text-white">Computer Repair</a></li>
                <li><a href="/services" className="hover:text-white">Network Setup</a></li>
                <li><a href="/services" className="hover:text-white">Data Recovery</a></li>
                <li><a href="/services" className="hover:text-white">Virus Removal</a></li>
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
            <p>&copy; 2024 CES Inc - Computer Enhancement Systems Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
