
const Solutions = () => {
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
                <a href="/services" className="block px-4 py-3 hover:bg-gray-600 transition-colors cursor-pointer w-20 text-center">Services ▼</a>
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
                <a href="/solutions" className="block px-4 py-3 hover:bg-gray-600 transition-colors cursor-pointer w-20 text-center bg-gray-600">Solutions ▼</a>
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
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#660033' }}>IT Solutions & Products</h2>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive IT solutions designed to streamline your business operations, protect your data, 
                  and ensure maximum uptime. From cloud infrastructure to database implementation.
                </p>
              </div>

              {/* Solution Categories */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Cloud Solutions</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Scalable cloud infrastructure and migration services to modernize your business operations.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cloud migration planning</li>
                    <li>• Infrastructure as a Service (IaaS)</li>
                    <li>• Platform as a Service (PaaS)</li>
                    <li>• Cloud security implementation</li>
                  </ul>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Software Solutions</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Custom software development and enterprise application integration for improved productivity.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Custom software development</li>
                    <li>• Enterprise resource planning (ERP)</li>
                    <li>• Customer relationship management (CRM)</li>
                    <li>• Business intelligence tools</li>
                  </ul>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Disaster Recovery</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Comprehensive disaster recovery planning to ensure business continuity in any situation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Business continuity planning</li>
                    <li>• Automated backup solutions</li>
                    <li>• Rapid recovery protocols</li>
                    <li>• Testing and validation</li>
                  </ul>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Off-Site Backup</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Secure, automated off-site backup solutions to protect your critical business data.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automated daily backups</li>
                    <li>• Encrypted data transmission</li>
                    <li>• Multiple retention policies</li>
                    <li>• 24/7 monitoring and alerts</li>
                  </ul>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Database Implementation</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Professional database design, implementation, and optimization for efficient data management.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Database design and architecture</li>
                    <li>• Performance optimization</li>
                    <li>• Data migration services</li>
                    <li>• Security and compliance</li>
                  </ul>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Forensic Analysis</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Professional digital forensic services for legal compliance and security incident investigation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Digital evidence collection</li>
                    <li>• Incident response analysis</li>
                    <li>• Legal compliance reporting</li>
                    <li>• Expert witness testimony</li>
                  </ul>
                </div>
              </div>

              {/* Products Section */}
              <div className="p-4 mb-6 rounded-md" style={{ backgroundColor: '#eee', border: '2px', borderRadius: '5px' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#660033' }}>Hardware & Software Products</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 border border-gray-200">
                    <h4 className="font-bold mb-2" style={{ color: '#660033' }}>Business Computers</h4>
                    <p className="text-sm text-gray-700">Custom-built workstations and servers designed for your specific business needs.</p>
                  </div>
                  <div className="bg-white p-4 border border-gray-200">
                    <h4 className="font-bold mb-2" style={{ color: '#660033' }}>Network Equipment</h4>
                    <p className="text-sm text-gray-700">Enterprise-grade routers, switches, and wireless access points for reliable connectivity.</p>
                  </div>
                  <div className="bg-white p-4 border border-gray-200">
                    <h4 className="font-bold mb-2" style={{ color: '#660033' }}>Security Software</h4>
                    <p className="text-sm text-gray-700">Advanced cybersecurity solutions including antivirus, firewalls, and endpoint protection.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-72">
              {/* Consultation Request */}
              <div className="text-white p-4 mb-6" style={{ backgroundColor: '#660033' }}>
                <h3 className="text-lg font-bold mb-3">Free Consultation</h3>
                <p className="text-sm mb-3">Let's discuss the perfect IT solution for your business.</p>
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="w-full bg-white text-purple-800 font-bold py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                >
                  Schedule Consultation
                </button>
              </div>

              {/* Industry Focus */}
              <div className="p-4 mb-6 border border-gray-200" style={{ backgroundColor: '#eee', borderRadius: '5px' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Industries We Serve</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Healthcare & Medical</li>
                  <li>• Legal & Professional Services</li>
                  <li>• Manufacturing & Distribution</li>
                  <li>• Education & Non-Profit</li>
                  <li>• Retail & E-commerce</li>
                </ul>
              </div>

              {/* Implementation Process */}
              <div className="bg-blue-50 border border-blue-200 p-4 mb-6">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Implementation Process</h3>
                <div className="text-sm text-blue-700 space-y-2">
                  <div>1. Assessment & Planning</div>
                  <div>2. Solution Design</div>
                  <div>3. Implementation & Testing</div>
                  <div>4. Training & Support</div>
                </div>
              </div>

              {/* Partner Certifications */}
              <div className="bg-white p-4 border border-gray-200">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Partner Certifications</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Microsoft Certified Partner</li>
                  <li>• VMware Solution Provider</li>
                  <li>• Cisco Select Partner</li>
                  <li>• Dell Technologies Partner</li>
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

export default Solutions;
