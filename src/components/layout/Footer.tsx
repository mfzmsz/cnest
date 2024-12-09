import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#9b87f5] mb-4">Code Nest</h3>
            <p className="text-gray-300">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/products/ai-b2b" className="text-gray-300 hover:text-[#9b87f5]">AI B2B Solutions</Link></li>
              <li><Link to="/products/general-solutions" className="text-gray-300 hover:text-[#9b87f5]">General Solutions</Link></li>
              <li><Link to="/products/fullstack" className="text-gray-300 hover:text-[#9b87f5]">Fullstack Web Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#9b87f5]">About Us</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-[#9b87f5]">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#9b87f5]">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#9b87f5]">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#9b87f5]">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#9b87f5]">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Code Nest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;