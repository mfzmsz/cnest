import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as HeadlessMenu } from '@headlessui/react';

const navItems: NavItem[] = [
  { title: 'Home', path: '/' },
  {
    title: 'Products & Services',
    path: '#',
    subItems: [
      { title: 'AI B2B Solutions', path: '/products/ai-b2b' },
      { title: 'IoT Solutions', path: '/products/iot-solutions' },
      { title: 'Fullstack Web Solutions', path: '/products/fullstack' },
    ],
  },
  { title: 'About Us', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <div className="w-32 h-12 flex items-center justify-center">
              <img 
                src="/logo.svg"
                alt="Code Nest Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-[#9b87f5] ml-3">Code Nest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.subItems ? (
                  <HeadlessMenu as="div" className="relative inline-block text-left">
                    <HeadlessMenu.Button className="flex items-center space-x-1 hover:text-[#9b87f5] transition-colors">
                      <span>{item.title}</span>
                      <ChevronDown size={16} />
                    </HeadlessMenu.Button>
                    <HeadlessMenu.Items className="absolute left-0 mt-2 w-56 bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] rounded-md shadow-lg z-50">
                      {item.subItems.map((subItem) => (
                        <HeadlessMenu.Item key={subItem.title}>
                          {({ active }) => (
                            <Link
                              to={subItem.path}
                              className={`block px-4 py-2 ${
                                active ? 'bg-[#9b87f5] text-white' : 'text-white'
                              } transition-colors`}
                            >
                              {subItem.title}
                            </Link>
                          )}
                        </HeadlessMenu.Item>
                      ))}
                    </HeadlessMenu.Items>
                  </HeadlessMenu>
                ) : (
                  <Link to={item.path} className="hover:text-[#9b87f5] transition-colors">
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#9b87f5] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.subItems ? (
                    <>
                      <div className="px-3 py-2 text-white font-medium">
                        {item.title}
                      </div>
                      <div className="pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path}
                            className="block px-3 py-2 text-white hover:bg-[#9b87f5] rounded-md"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-3 py-2 text-white hover:bg-[#9b87f5] rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;