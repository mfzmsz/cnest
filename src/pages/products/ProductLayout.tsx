import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductLayoutProps {
  title: string;
  description: string;
  backgroundImage: string;
  children: React.ReactNode;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  title,
  description,
  backgroundImage,
  children,
}) => {
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <div className="relative h-[40vh] bg-[#1A1F2C] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {children}
      </div>
    </div>
  );
};

export default ProductLayout;