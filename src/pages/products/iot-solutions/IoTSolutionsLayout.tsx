import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import ProductCard from '../../../components/ProductCard';

interface IoTSolutionsLayoutProps {
  children: React.ReactNode;
}

const IoTSolutionsLayout: React.FC<IoTSolutionsLayoutProps> = ({ children }) => {
  const iotProducts = products.filter(product => product.category === 'iot');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {iotProducts.map(product => (
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

export default IoTSolutionsLayout;