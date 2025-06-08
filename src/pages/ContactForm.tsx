
const ContactForm = () => {
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
                <a href="/" className="block px-4 py-3 hover:bg-gray-600 transition-colors w-20 text-center">Home</a>
              </li>
              <li className="relative group">
                <a href="/about" className="block px-4 py-3 hover:bg-gray-600 transition-colors w-20 text-center">About Us</a>
              </li>
              <li className="relative group">
                <span className="block px-4 py-3 hover:bg-gray-600 transition-colors cursor-pointer w-20 text-center">Services ▼</span>
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
                <span className="block px-4 py-3 hover:bg-gray-600 transition-colors cursor-pointer w-20 text-center">Solutions ▼</span>
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: '#660033' }}>Contact Us for Service</h1>
          <p className="text-gray-700 text-lg">
            Ready to get started? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                Service Needed *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="consultation">15 Minute Consultation Call</option>
                <option value="cybersecurity">Free Cybersecurity Scan</option>
                <option value="onsite">On-Site Service Appointment</option>
                <option value="computer-repair">Computer Repair</option>
                <option value="network-setup">Network Setup</option>
                <option value="data-recovery">Data Recovery</option>
                <option value="virus-removal">Virus Removal</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                Urgency Level
              </label>
              <select
                id="urgency"
                name="urgency"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="normal">Normal (1-2 business days)</option>
                <option value="urgent">Urgent (Same day)</option>
                <option value="emergency">Emergency (Immediate)</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message / Problem Description *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Please describe your issue or service request in detail..."
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to be contacted by CES Inc regarding my service request *
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                style={{ backgroundColor: '#660033' }}
              >
                Submit Service Request
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="font-bold text-gray-800">Call Us</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-bold text-gray-800">Email Us</h3>
              <p className="text-gray-600">info@cesitservice.com</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🚨</div>
              <h3 className="font-bold text-gray-800">Emergency</h3>
              <p className="text-gray-600">(555) 911-TECH</p>
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

export default ContactForm;
