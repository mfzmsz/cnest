import React from 'react';
import ProductLayout from '../ProductLayout';
import IoTSolutionsLayout from './IoTSolutionsLayout';

const IoTSolutions = () => {
  return (
    <ProductLayout
      title="IoT Solutions"
      description="Comprehensive IoT solutions for modern businesses"
      backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
    >
      <IoTSolutionsLayout />
    </ProductLayout>
  );
};

export default IoTSolutions;