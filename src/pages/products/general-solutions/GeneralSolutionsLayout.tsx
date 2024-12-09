import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import ProductCard from '../../../components/ProductCard';

interface GeneralSolutionsLayoutProps {
  children: React.ReactNode;
}

const GeneralSolutionsLayout: React.FC<GeneralSolutionsLayoutProps> = ({ children }) => {
  const generalProducts = products.filter(product => product.category === 'general');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {generalProducts.map(product => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
      {children}
    </div>
  );
};

export default GeneralSolutionsLayout;