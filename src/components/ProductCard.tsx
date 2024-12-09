import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Users, UserPlus, Calendar, MessageSquare, Truck, Recycle, Database, Building2, Lightbulb, Wrench, Globe, LayoutDashboard } from 'lucide-react';
import { Product } from '../types';

const iconMap = {
  FileText,
  Users,
  UserPlus,
  Calendar,
  MessageSquare,
  Truck,
  Recycle,
  Database,
  Building2,
  Lightbulb,
  Wrench,
  Globe,
  LayoutDashboard
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const IconComponent = iconMap[product.icon as keyof typeof iconMap];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-lg shadow-lg h-full"
    >
      <div className="flex items-center justify-center mb-6">
        {IconComponent && <IconComponent className="w-12 h-12 text-[#9b87f5]" />}
      </div>
      <h3 className="text-xl font-bold text-[#1A1F2C] mb-4 text-center">
        {product.title}
      </h3>
      <p className="text-gray-600 mb-6 text-center">
        {product.description}
      </p>
      <Link
        to={product.path}
        className="text-[#9b87f5] hover:text-[#8b77e5] inline-flex items-center justify-center w-full"
      >
        Learn More
        <ArrowRight className="ml-2" size={16} />
      </Link>
    </motion.div>
  );
};

export default ProductCard;