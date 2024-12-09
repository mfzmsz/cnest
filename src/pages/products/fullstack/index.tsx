import React from 'react';
import ProductLayout from '../ProductLayout';
import FullstackLayout from './FullstackLayout';

const FullstackSolutions = () => {
  return (
    <ProductLayout
      title="Fullstack Web Solutions"
      description="End-to-end web development solutions for modern businesses"
      backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
    >
      <FullstackLayout />
    </ProductLayout>
  );
};

export default FullstackSolutions;