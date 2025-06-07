
const Support = () => {
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
                <a href="/support" className="block px-4 py-3 hover:bg-gray-600 transition-colors w-20 text-center bg-gray-600">Support</a>
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
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#660033' }}>Technical Support Center</h2>
                <p className="text-gray-700 leading-relaxed">
                  Get the technical support you need when you need it. Our certified technicians are here to help 
                  with troubleshooting, maintenance, and ongoing IT support for your business or personal technology.
                </p>
              </div>

              {/* Support Options */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Remote Support</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Fast, secure remote assistance for immediate problem resolution without leaving your location.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• Instant screen sharing support</li>
                    <li>• Software troubleshooting</li>
                    <li>• System optimization</li>
                    <li>• Security updates</li>
                  </ul>
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    Start Remote Session
                  </button>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>On-Site Support</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Professional technicians come to your location for hands-on hardware and network support.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• Hardware installation & repair</li>
                    <li>• Network setup & troubleshooting</li>
                    <li>• Server maintenance</li>
                    <li>• Equipment replacement</li>
                  </ul>
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    Schedule Visit
                  </button>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Managed IT Services</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Comprehensive IT management and monitoring to prevent issues before they impact your business.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• 24/7 system monitoring</li>
                    <li>• Proactive maintenance</li>
                    <li>• Automatic updates</li>
                    <li>• Performance reporting</li>
                  </ul>
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    Learn More
                  </button>
                </div>

                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Emergency Support</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    24/7 emergency support for critical system failures and urgent IT issues.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• 24/7 emergency hotline</li>
                    <li>• Priority response times</li>
                    <li>• Critical system recovery</li>
                    <li>• Business continuity support</li>
                  </ul>
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    Emergency Contact
                  </button>
                </div>
              </div>

              {/* Knowledge Base */}
              <div className="p-4 mb-6 rounded-md" style={{ backgroundColor: '#eee', border: '2px', borderRadius: '5px' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#660033' }}>Self-Service Resources</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 border border-gray-200">
                    <h4 className="font-bold mb-2" style={{ color: '#660033' }}>Troubleshooting Guides</h4>
                    <p className="text-sm text-gray-700 mb-3">Step-by-step guides for common technical issues.</p>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Browse Guides →</a>
                  </div>
                  <div className="bg-white p-4 border border-gray-200">
                    <h4 className="font-bold mb-2" style={{ color: '#660033' }}>Video Tutorials</h4>
                    <p className="text-sm text-gray-700 mb-3">Visual learning resources for software and hardware.</p>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Watch Videos →</a>
                  </div>
                  <div className="bg-white p-4 border border-gray-200">
                    <h4 className="font-bold mb-2" style={{ color: '#660033' }}>Software Downloads</h4>
                    <p className="text-sm text-gray-700 mb-3">Essential software tools and security updates.</p>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Download Center →</a>
                  </div>
                </div>
              </div>

              {/* Support Packages */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-md border border-blue-200">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#660033' }}>Support Packages</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-bold text-lg mb-2" style={{ color: '#660033' }}>Basic Support</h4>
                    <p className="text-2xl font-bold text-green-600 mb-2">$49/month</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Email support</li>
                      <li>• Knowledge base access</li>
                      <li>• Software updates</li>
                      <li>• Basic troubleshooting</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-blue-300">
                    <h4 className="font-bold text-lg mb-2" style={{ color: '#660033' }}>Professional Support</h4>
                    <p className="text-2xl font-bold text-blue-600 mb-2">$149/month</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Phone & email support</li>
                      <li>• Remote assistance</li>
                      <li>• Priority response</li>
                      <li>• Monthly maintenance</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-purple-300">
                    <h4 className="font-bold text-lg mb-2" style={{ color: '#660033' }}>Enterprise Support</h4>
                    <p className="text-2xl font-bold text-purple-600 mb-2">$299/month</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 24/7 support hotline</li>
                      <li>• On-site visits included</li>
                      <li>• Dedicated account manager</li>
                      <li>• Proactive monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-72">
              {/* Quick Support */}
              <div className="text-white p-4 mb-6" style={{ backgroundColor: '#660033' }}>
                <h3 className="text-lg font-bold mb-3">Need Immediate Help?</h3>
                <div className="text-sm space-y-3">
                  <div>
                    <strong>Support Hotline:</strong><br />
                    (555) 123-TECH
                  </div>
                  <div>
                    <strong>Emergency Line:</strong><br />
                    (555) 911-TECH
                  </div>
                  <div>
                    <strong>Email Support:</strong><br />
                    support@cesitservice.com
                  </div>
                </div>
              </div>

              {/* Support Hours */}
              <div className="p-4 mb-6 border border-gray-200" style={{ backgroundColor: '#eee', borderRadius: '5px' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Support Hours</h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Only</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-300">
                    <div className="font-semibold">Emergency Support:</div>
                    <div>24/7 Available</div>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="bg-green-50 border border-green-200 p-4 mb-6">
                <h3 className="text-lg font-bold text-green-800 mb-2">Response Times</h3>
                <div className="text-sm text-green-700 space-y-2">
                  <div>Email Support: 4 hours</div>
                  <div>Phone Support: Immediate</div>
                  <div>On-site Visit: Same day*</div>
                  <div>Emergency: 1 hour</div>
                  <div className="text-xs">*Subject to availability</div>
                </div>
              </div>

              {/* Customer Portal */}
              <div className="bg-white p-4 border border-gray-200">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Customer Portal</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Access your support tickets, service history, and account information.
                </p>
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Login to Portal
                </button>
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

export default Support;
