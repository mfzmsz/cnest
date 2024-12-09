import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import ProductCard from '../../../components/ProductCard';

interface FullstackLayoutProps {
  children: React.ReactNode;
}

const FullstackLayout: React.FC<FullstackLayoutProps> = ({ children }) => {
  const fullstackProducts = products.filter(product => product.category === 'fullstack');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {fullstackProducts.map(product => (
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

export default FullstackLayout;