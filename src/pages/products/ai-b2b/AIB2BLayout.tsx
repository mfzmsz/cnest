import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import ProductCard from '../../../components/ProductCard';

interface AIB2BLayoutProps {
  children: React.ReactNode;
}

const AIB2BLayout: React.FC<AIB2BLayoutProps> = ({ children }) => {
  const aiProducts = products.filter(product => product.category === 'ai');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {aiProducts.map(product => (
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

export default AIB2BLayout;