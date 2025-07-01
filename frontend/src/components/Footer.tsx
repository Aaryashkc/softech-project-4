import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import MAIN from '../assets/main.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src={MAIN} alt="Logo" className="w-8 h-8" />
              </div>
              <span className="text-xl font-bold">Gagan Kumar Thapa</span>
            </div>
            <p className="text-gray-400 text-sm">
              General Secretary, Nepali Congress. Working for a progressive, inclusive Nepal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-700 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-green-700 transition-colors">About</Link></li>
              <li><Link to="/career" className="text-gray-400 hover:text-green-700 transition-colors">Career</Link></li>
              <li><Link to="/achievements" className="text-gray-400 hover:text-green-700 transition-colors">Achievements</Link></li>
              <li><Link to="/vision" className="text-gray-400 hover:text-green-700 transition-colors">Vision</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Focus Areas</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Healthcare Reform</li>
              <li>Quality Education</li>
              <li>Youth Employment</li>
              <li>Democratic Values</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span className="text-sm">+977-1-XXXXXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span className="text-sm">contact@gaganthapa.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Gagan Kumar Thapa. All rights reserved. Built with dedication for Nepal's future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;