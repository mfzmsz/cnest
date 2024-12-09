import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Lightbulb, Users, Award, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2A2F3C]">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovating the Future of
              <span className="text-[#9b87f5]"> Technology</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At Code Nest, we're more than just a technology company. We're innovators, 
              problem-solvers, and visionaries committed to transforming businesses through 
              cutting-edge solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-[#2A2F3C] to-[#1A1F2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-lg"
            >
              <Target className="w-12 h-12 text-[#9b87f5] mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To empower businesses with innovative technology solutions that drive 
                growth, efficiency, and digital transformation. We strive to be at the 
                forefront of technological advancement, delivering solutions that make 
                a real difference.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-lg"
            >
              <Lightbulb className="w-12 h-12 text-[#9b87f5] mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To be the global leader in innovative technology solutions, recognized 
                for our commitment to excellence, sustainability, and transformative 
                impact on businesses and communities worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-[#1A1F2C] to-[#2A2F3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do at Code Nest
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Trust & Security',
                description: 'We prioritize the security and confidentiality of our clients\' data and systems.',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every solution we deliver, ensuring the highest quality standards.',
              },
              {
                icon: Rocket,
                title: 'Innovation',
                description: 'We continuously push the boundaries of technology to create groundbreaking solutions.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-lg text-center"
              >
                <value.icon className="w-12 h-12 text-[#9b87f5] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-[#2A2F3C] to-[#1A1F2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We specialize in cutting-edge technologies and solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Artificial Intelligence',
              'IoT Solutions',
              'AI HR Manager',
              'Web Development',
              'Asset Management',
              'Digital Transformation',
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#9b87f5] to-[#8b77e5] p-6 rounded-lg text-white text-center"
              >
                {expertise}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gradient-to-b from-[#1A1F2C] to-[#2A2F3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Global Presence</h2>
              <p className="text-gray-300 mb-6">
                Headquartered in Doha, Qatar, Code Nest serves clients with 
                innovative technology solutions. Our expertise allows us to deliver 
                solutions that meet the unique needs of businesses across the region.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full mr-2"></span>
                  GCC
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full mr-2"></span>
                  North Africa
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                alt="Global Technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;