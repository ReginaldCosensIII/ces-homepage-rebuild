const Index = () => {
  return (
    <div className="min-h-screen bg-white font-opensans">
      {/* Header Section - matching #headerbgWhite */}
      <div className="bg-white border-b border-gray-300" style={{ backgroundColor: '#fff', fontFamily: 'Open Sans, sans-serif', fontWeight: '500', minHeight: '85px' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <img src="/lovable-uploads/df3f5481-0db7-4c32-9040-3351fb72b1b0.png" alt="CES Inc Logo" className="w-12 h-12 mr-3" />
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
            {/* Navigation Menu - Full Width */}
            <ul className="flex w-full justify-center">
              <li className="relative group">
                <a href="/" className="block px-4 py-3 hover:bg-gray-600 transition-colors whitespace-nowrap text-center">Home</a>
              </li>
              <li className="relative group">
                <a href="/about" className="block px-4 py-3 hover:bg-gray-600 transition-colors whitespace-nowrap text-center">About Us</a>
              </li>
              <li className="relative group">
                <a href="/services" className="block px-4 py-3 hover:bg-gray-600 transition-colors whitespace-nowrap text-center">Managed Services</a>
              </li>
              <li className="relative group">
                <span className="block px-4 py-3 hover:bg-gray-600 transition-colors cursor-pointer whitespace-nowrap text-center">Business Solutions ▼</span>
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
                <span className="block px-4 py-3 hover:bg-gray-600 transition-colors cursor-pointer whitespace-nowrap text-center">Technical Support ▼</span>
                <ul className="absolute left-0 top-full bg-gray-700 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  <li><a href="/support" className="block px-4 py-2 hover:bg-gray-600 transition-colors">On-Site Service</a></li>
                  <li><a href="/support" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Diagnostic and Repairs</a></li>
                  <li><a href="/support" className="block px-4 py-2 hover:bg-gray-600 transition-colors">Network Management</a></li>
                </ul>
              </li>
              <li className="relative group">
                <a href="/contact" className="block px-4 py-3 hover:bg-gray-600 transition-colors whitespace-nowrap text-center">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Area with Datacenter Background */}
      <div 
        className="relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          minHeight: 'calc(100vh - 85px - 48px)' // Subtract header and nav height
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* Main Content */}
            <div className="flex-1">
              {/* Welcome Section - using container styling */}
              <div className="p-4 mb-6 rounded-md" style={{ backgroundColor: '#eee', border: '2px', borderRadius: '5px', padding: '16px', margin: '16px 0' }}>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#660033' }}>Welcome to CES Inc</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Computer Enhancement Systems Inc (CES Inc) has been providing reliable computer and IT services 
                  to businesses and individuals for over 15 years. Our experienced technicians are dedicated to 
                  keeping your technology running smoothly and efficiently.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  From computer repair and network setup to data recovery and virus removal, we offer comprehensive 
                  solutions for all your technology needs. Contact us today for fast, professional service you can trust.
                </p>
                
                {/* Action Buttons - Horizontal Layout */}
                <div className="flex justify-center gap-4 mt-6">
                  <button 
                    onClick={() => window.location.href = '/contact-form'}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse text-sm flex items-center justify-center"
                    style={{ height: '72px' }}
                  >
                    📞 BOOK A 15 MINUTE CALL
                  </button>
                  <button 
                    onClick={() => window.location.href = '/contact-form'}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse text-sm flex items-center justify-center"
                    style={{ height: '72px' }}
                  >
                    🔒 FREE CYBERSECURITY SCAN
                  </button>
                  <button 
                    onClick={() => window.location.href = '/contact-form'}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-4 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse text-sm flex items-center justify-center"
                    style={{ height: '72px' }}
                  >
                    🔧 SCHEDULE ON-SITE SERVICE
                  </button>
                </div>
              </div>

              {/* Services Overview */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Business Solutions</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Comprehensive IT solutions tailored to your business needs. From cloud migration to 
                    infrastructure optimization, we help streamline your technology operations.
                  </p>
                </div>
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Security Assessments</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Professional cybersecurity evaluations to identify vulnerabilities and strengthen your 
                    defenses. Complete risk analysis and remediation strategies for total protection.
                  </p>
                </div>
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Technical Support</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    24/7 technical support services to keep your systems running smoothly. Remote and 
                    on-site assistance for all your technology challenges and maintenance needs.
                  </p>
                </div>
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Products</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Quality hardware and software products from leading manufacturers. Custom 
                    configurations and enterprise-grade solutions for businesses of all sizes.
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
      </div>

      {/* Footer - using darkslategray */}
      <footer className="text-white mt-0" style={{ backgroundColor: 'darkslategray' }}>
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
            <p>&copy; 2024 CES Inc - Computer Enhancement Systems Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
