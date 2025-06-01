// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// Homepage Section Components
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Features from './components/Features';
import MarketSection from './components/MarketSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import Demo from './components/Demo';
import GetEarlyAccessSection from './components/GetEarlyAccessSection';
import BlogPreviewSection from './components/BlogPreviewSection';
import ContactSection from './components/ContactSection';

// Page Components
import AboutPage from './pages/AboutPage';
import ContactFullPage from './pages/ContactFullPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage'; // Added import

import './index.css';

const HomePage: React.FC = () => (
  <div> {/* Wrapper for homepage sections */}
    <Header />
    <Hero /> {/* id="hero" is internal or applied */}
    <Solutions /> {/* id="solutions" is internal or applied */}
    <Features /> {/* id="features" is internal or applied */}
    <MarketSection /> {/* id="market" is internal */}
    <PricingSection /> {/* id="pricing" is internal */}
    <TestimonialsSection /> {/* id="testimonials" is internal */}
    {/* <TeamSection /> id="team" is internal */}
    <Demo /> {/* id="demo" is internal or applied */}
    <GetEarlyAccessSection /> {/* id="early-access" is internal */}
    <BlogPreviewSection /> {/* id="blog" (for preview section) is internal */}
    <ContactSection /> {/* id="contact" is internal */}
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-full" element={<ContactFullPage />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* Example route for individual blog posts: <Route path="/blog/:postId" element={<BlogPostPage />} /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} /> {/* Added route */}
      </Routes>
    </Router>
  );
}

export default App;