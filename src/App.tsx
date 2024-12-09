import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AIB2BSolutions from './pages/products/ai-b2b';
import IoTSolutions from './pages/products/iot-solutions';
import FullstackSolutions from './pages/products/fullstack';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/ai-b2b" element={<AIB2BSolutions />} />
          <Route path="/products/iot-solutions" element={<IoTSolutions />} />
          <Route path="/products/fullstack" element={<FullstackSolutions />} />
        </Routes>
        <Chatbot />
      </Layout>
    </Router>
  );
}

export default App;