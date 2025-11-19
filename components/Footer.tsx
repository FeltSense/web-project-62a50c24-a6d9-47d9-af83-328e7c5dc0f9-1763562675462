import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Precision Accounting Partners</h3>
          <p className="text-gray-400 mb-4">
            Your trusted partner for comprehensive accounting, tax, and financial advisory services.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <a href="#" className="block text-gray-400 hover:text-white mb-2 transition-colors">Tax Preparation</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2 transition-colors">Bookkeeping</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2 transition-colors">Financial Advisory</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2 transition-colors">Payroll Services</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2 transition-colors">Audit Support</a>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <a href="#" className="block text-gray-400 hover:text-white mb-2 transition-colors">About Us</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2 transition-colors">Our Team</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2 transition-colors">Careers</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2 transition-colors">Testimonials</a>
          <a href="#" className="block text-gray-400 hover:text-white mb-2 transition-colors">Contact</a>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <div className="flex items-start mb-3">
            <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-1 flex-shrink-0" />
            <p className="text-gray-400">123 Financial Plaza, Suite 500<br />New York, NY 10001</p>
          </div>
          <div className="flex items-center mb-3">
            <Phone className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
            <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">(555) 123-4567</a>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
            <a href="mailto:info@precisionaccounting.com" className="text-gray-400 hover:text-white transition-colors">info@precisionaccounting.com</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center text-gray-500 mb-4 md:mb-0">
            © 2024 Precision Accounting Partners. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
