const Solutions = () => {
  return (
    <div className="min-h-screen bg-white font-opensans">
      {/* Header Section */}
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

      {/* Navigation Menu */}
      <nav className="text-white" style={{ backgroundColor: 'darkslategray' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <ul className="flex w-full justify-center">
              <li className="relative group">
                <a href="/" className="block px-4 py-3 hover:bg-gray-600 transition-colors whitespace-nowrap text-center">Home</a>
              </li>
              <li className="relative group">
                <a href="/about" className="block px-4 py-3 hover:bg-gray-600 transition-colors whitespace-nowrap text-center">About Us</a>
              </li>
              <li className="relative group">
                <span className="block px-4 py-3 hover:bg-gray-600 transition-colors cursor-pointer whitespace-nowrap text-center">Managed Services ▼</span>
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
                <a href="/support" className="block px-4 py-3 hover:bg-gray-600 transition-colors whitespace-nowrap text-center">Support</a>
              </li>
              <li className="relative group">
                <a href="/contact" className="block px-4 py-3 hover:bg-gray-600 transition-colors whitespace-nowrap text-center">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 relative">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>

        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#660033' }}>Business Solutions</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We offer comprehensive business solutions designed to enhance your operational efficiency and drive growth. From strategic technology planning to implementation and ongoing support.
          </p>

          {/* Action Buttons - Horizontal Layout */}
          <div className="flex justify-center gap-4 mt-6 mb-8">
            <button 
              onClick={() => window.location.href = '/contact-form'}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse text-sm h-16 flex items-center justify-center"
            >
              📞 BOOK A 15 MINUTE CALL
            </button>
            <button 
              onClick={() => window.location.href = '/contact-form'}
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse text-sm h-16 flex items-center justify-center"
            >
              🔒 FREE CYBERSECURITY SCAN
            </button>
            <button 
              onClick={() => window.location.href = '/contact-form'}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-6 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse text-sm h-16 flex items-center justify-center"
            >
              🔧 SCHEDULE ON-SITE SERVICE
            </button>
          </div>

          {/* Solutions Overview */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-5 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Cloud Solutions</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Secure and scalable cloud solutions for your business. Access your data from anywhere, anytime.
              </p>
            </div>
            <div className="bg-white p-5 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Data Recovery</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Professional data recovery services for crashed hard drives, corrupted files, and deleted data.
              </p>
            </div>
            <div className="bg-white p-5 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Software Solutions</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Custom software development to meet your specific business needs.
              </p>
            </div>
            <div className="bg-white p-5 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Forensic Analysis</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Expert forensic analysis services to uncover digital evidence.
              </p>
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

export default Solutions;
