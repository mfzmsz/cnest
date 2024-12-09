import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Users, UserPlus, Calendar, MessageSquare, Truck, Recycle, Database, Building2, Lightbulb, Wrench, Globe, LayoutDashboard } from 'lucide-react';
import { products } from '../data/products';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

const ProductSlider = () => {
  return (
    <section className="py-20 bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive suite of innovative solutions
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {products.map((product) => {
            const IconComponent = iconMap[product.icon as keyof typeof iconMap];
            return (
              <SwiperSlide key={product.id}>
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSlider;