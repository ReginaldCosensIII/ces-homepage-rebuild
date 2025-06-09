
const About = () => {
  return (
    <div className="min-h-screen bg-white font-opensans">
      {/* Header Section */}
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
              {/* About Us Header */}
              <div className="p-4 mb-6 rounded-md" style={{ backgroundColor: '#eee', border: '2px', borderRadius: '5px', padding: '16px', margin: '16px 0' }}>
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#660033' }}>About CES Inc</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Computer Enhancement Systems Inc (CES Inc) has been a trusted name in IT services and computer 
                  solutions since 2008. For over 15 years, we have been dedicated to providing reliable, 
                  professional technology services to businesses and individuals throughout our community.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is simple: to keep your technology running smoothly so you can focus on what 
                  matters most to you. Whether you're a small business owner, a home user, or managing 
                  enterprise-level systems, we have the expertise and experience to meet your needs.
                </p>
              </div>

              {/* Our Story */}
              <div className="bg-white p-5 border border-gray-200 shadow-sm mb-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#660033' }}>Our Story</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Founded in 2008, CES Inc began as a small computer repair shop with a vision to provide 
                  honest, reliable IT services to our local community. Over the years, we've grown from 
                  a single technician operation to a full-service IT company serving hundreds of satisfied 
                  customers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  What started with basic computer repairs has evolved into comprehensive IT solutions 
                  including network management, cybersecurity, cloud services, and enterprise-level 
                  support. Despite our growth, we've never lost sight of our core values: quality 
                  service, honest pricing, and treating every customer like family.
                </p>
              </div>

              {/* Our Values */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Reliability</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We understand that technology issues can disrupt your day. That's why we're committed 
                    to providing fast, dependable service when you need it most.
                  </p>
                </div>
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Expertise</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our certified technicians stay current with the latest technology trends and 
                    solutions to ensure you receive the most effective service possible.
                  </p>
                </div>
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Transparency</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    No hidden fees or surprise charges. We believe in clear communication and 
                    upfront pricing so you know exactly what to expect.
                  </p>
                </div>
                <div className="bg-white p-5 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Customer Focus</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Your satisfaction is our priority. We take the time to understand your needs 
                    and provide solutions that work for your specific situation.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-72">
              {/* Quick Contact */}
              <div className="text-white p-4 mb-6" style={{ backgroundColor: '#660033' }}>
                <h3 className="text-lg font-bold mb-3">Get In Touch</h3>
                <div className="text-sm space-y-2">
                  <div>📞 (555) 123-4567</div>
                  <div>📧 info@cesitservice.com</div>
                  <div>📍 123 Tech Street<br />Computer City, TC 12345</div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="p-4 mb-6 border border-gray-200" style={{ backgroundColor: '#eee', borderRadius: '5px' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Why Choose CES Inc?</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ 15+ years of experience</li>
                  <li>✓ Certified technicians</li>
                  <li>✓ 24/7 emergency support</li>
                  <li>✓ Competitive pricing</li>
                  <li>✓ Free estimates</li>
                  <li>✓ Satisfaction guaranteed</li>
                </ul>
              </div>

              {/* Certifications */}
              <div className="bg-white p-4 border border-gray-200">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#660033' }}>Certifications</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• CompTIA A+ Certified</li>
                  <li>• Microsoft Certified</li>
                  <li>• Cisco Network Associate</li>
                  <li>• Security+ Certified</li>
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
              <div className="flex items-center mb-3">
                <img src="/lovable-uploads/df3f5481-0db7-4c32-9040-3351fb72b1b0.png" alt="CES Inc Logo" className="w-8 h-8 mr-2" />
                <h4 className="font-bold">CES Inc</h4>
              </div>
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

export default About;
