import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Globe, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductSlider from '../components/ProductSlider';

const Home = () => {
  return (
    <div className="bg-[#1A1F2C]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Building the Future with
              <span className="text-[#9b87f5]"> Intelligent Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Code Nest delivers cutting-edge technology solutions that transform businesses
              and drive innovation across industries.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#9b87f5] hover:bg-[#8b77e5] transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Slider Section */}
      <ProductSlider />

      {/* Features Section */}
      <section className="py-20 bg-[#F6F6F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Our Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how our comprehensive suite of services can help your business thrive
              in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Brain className="w-12 h-12 text-[#9b87f5] mb-4" />
              <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">AI B2B Solutions</h3>
              <p className="text-gray-600 mb-4">
                Leverage the power of artificial intelligence to optimize your business
                processes and drive growth.
              </p>
              <Link
                to="/products/ai-b2b"
                className="text-[#9b87f5] hover:text-[#8b77e5] inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Globe className="w-12 h-12 text-[#9b87f5] mb-4" />
              <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">IoT Solutions</h3>
              <p className="text-gray-600 mb-4">
                From IoT fleet management to smart cities, we provide comprehensive
                solutions for modern challenges.
              </p>
              <Link
                to="/products/iot-solutions"
                className="text-[#9b87f5] hover:text-[#8b77e5] inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Code className="w-12 h-12 text-[#9b87f5] mb-4" />
              <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Fullstack Web Solutions</h3>
              <p className="text-gray-600 mb-4">
                End-to-end web development services that bring your digital vision to life.
              </p>
              <Link
                to="/products/fullstack"
                className="text-[#9b87f5] hover:text-[#8b77e5] inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;