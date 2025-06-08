import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Users, Shield } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: '',
    urgency: 'normal'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Request Submitted!",
      description: "Thank you for your request. We will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      message: '',
      urgency: 'normal'
    });
  };

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

      {/* Page Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#660033' }}>Contact CES Inc</h1>
          <p className="text-xl text-gray-600">Get in touch with our IT experts today</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form - Left Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#660033' }}>Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="serviceType">Service Needed *</Label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="consultation">15 Minute Consultation Call</option>
                    <option value="cybersecurity">Free Cybersecurity Scan</option>
                    <option value="onsite">Schedule On-Site Service</option>
                    <option value="computer-repair">Computer Repair</option>
                    <option value="network-setup">Network Setup</option>
                    <option value="data-recovery">Data Recovery</option>
                    <option value="virus-removal">Virus Removal</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="software-solutions">Software Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="normal">Normal (2-3 business days)</option>
                    <option value="urgent">Urgent (24 hours)</option>
                    <option value="emergency">Emergency (Same day)</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your IT needs or issues in detail..."
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-lg font-semibold py-3"
                  style={{ backgroundColor: '#660033' }}
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information - Right Column */}
          <div className="space-y-6">
            
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#660033' }}>Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1" style={{ color: '#660033' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Tech Street<br />Computer City, TC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-1" style={{ color: '#660033' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Emergency: (555) 911-TECH</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 mt-1" style={{ color: '#660033' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@cesitservice.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-1" style={{ color: '#660033' }} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Emergency Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <h3 className="text-xl font-bold p-4 border-b" style={{ color: '#660033' }}>Our Location</h3>
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e4a2d55%3A0x3b2e6a5c2b8b8b8b!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1629814230000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#660033' }}>Why Choose Us</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5" style={{ color: '#660033' }} />
                  <span className="text-gray-600">500+ Satisfied Customers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5" style={{ color: '#660033' }} />
                  <span className="text-gray-600">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" style={{ color: '#660033' }} />
                  <span className="text-gray-600">24/7 Emergency Support</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <p className="text-sm text-gray-600">
                  <strong>Free Estimates:</strong> Get a no-obligation quote for your project
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Satisfaction Guaranteed:</strong> We stand behind our work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white mt-12" style={{ backgroundColor: 'darkslategray' }}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#660033' }}>CES Inc</h4>
              <p className="text-sm text-gray-300 mb-4">
                Computer Enhancement Systems Inc - Your trusted IT partner since 2008.
              </p>
              <div className="text-sm text-gray-300">
                <div className="mb-1">(555) 123-4567</div>
                <div>info@cesitservice.com</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><a href="/computer-repair" className="hover:text-white transition-colors">Computer Repair</a></li>
                <li><a href="/network-setup" className="hover:text-white transition-colors">Network Setup</a></li>
                <li><a href="/data-recovery" className="hover:text-white transition-colors">Data Recovery</a></li>
                <li><a href="/virus-removal" className="hover:text-white transition-colors">Virus Removal</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><a href="/cloud-solutions" className="hover:text-white transition-colors">Cloud Solutions</a></li>
                <li><a href="/software-solutions" className="hover:text-white transition-colors">Software Solutions</a></li>
                <li><a href="/disaster-recovery" className="hover:text-white transition-colors">Disaster Recovery</a></li>
                <li><a href="/database-implementation" className="hover:text-white transition-colors">Database Implementation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 CES Inc - Computer Enhancement Systems Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
