import React from 'react';
import ProductLayout from '../ProductLayout';
import GeneralSolutionsLayout from './GeneralSolutionsLayout';

const GeneralSolutions = () => {
  return (
    <ProductLayout
      title="General Solutions"
      description="Comprehensive IoT and smart solutions for modern businesses"
      backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
    >
      <GeneralSolutionsLayout />
    </ProductLayout>
  );
};

export default GeneralSolutions;