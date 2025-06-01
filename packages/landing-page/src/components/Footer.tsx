// components/Footer.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

// Modern Social Icons with SVG
const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.13 4.687.309 3.953.563c-.789.306-1.459.717-2.126 1.384S.563 3.164.257 3.953C.003 4.687-.176 5.526-.234 6.756-.293 7.989-.28 8.396-.28 12.017c0 3.621-.013 4.028.072 5.261.058 1.23.237 2.069.491 2.803.306.789.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.734.254 1.574.433 2.803.491 1.233.059 1.64.072 5.261.072 3.621 0 4.028-.013 5.261-.072 1.23-.058 2.069-.237 2.803-.491.789-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.337 1.384-2.126.254-.734.433-1.573.491-2.803.059-1.233.072-1.64.072-5.261 0-3.621-.013-4.028-.072-5.261-.058-1.23-.237-2.069-.491-2.803C22.794 4.687 22.383 4.017 21.716 3.35c-.667-.666-1.337-1.079-2.126-1.384C18.856.003 18.017-.176 16.787-.234 15.554-.293 15.147-.28 11.526-.28zm.471 2.166c3.503 0 3.921.016 5.307.081 1.281.058 1.976.27 2.441.447.614.239 1.052.525 1.513.986.461.461.747.899.986 1.513.177.465.389 1.16.447 2.441.065 1.386.081 1.804.081 5.307 0 3.503-.016 3.921-.081 5.307-.058 1.281-.27 1.976-.447 2.441-.239.614-.525 1.052-.986 1.513-.461.461-.899.747-1.513.986-.465.177-1.16.389-2.441.447-1.386.065-1.804.081-5.307.081-3.503 0-3.921-.016-5.307-.081-1.281-.058-1.976-.27-2.441-.447-.614-.239-1.052-.525-1.513-.986-.461-.461-.747-.899-.986-1.513-.177-.465-.389-1.16-.447-2.441C2.696 15.938 2.68 15.52 2.68 12.017c0-3.503.016-3.921.081-5.307.058-1.281.27-1.976.447-2.441.239-.614.525-1.052.986-1.513.461-.461.899-.747 1.513-.986.465-.177 1.16-.389 2.441-.447 1.386-.065 1.804-.081 5.307-.081z"/>
    <path d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
    <path d="M19.846 5.595a1.445 1.445 0 1 1-2.89 0 1.445 1.445 0 0 1 2.89 0z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
  </svg>
);

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8">
        {/* Newsletter Section */}
        <div className="mb-12 sm:mb-16 relative">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl sm:rounded-2xl blur-xl" />
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-3 sm:mb-4">
                Stay Ahead of the Curve
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-2">
                Join thousands of security professionals receiving cutting-edge insights, feature updates, 
                and industry intelligence delivered straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3 sm:gap-4">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg text-sm sm:text-base"
                >
                  <span className="relative z-10">
                    {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
              {isSubscribed && (
                <p className="mt-3 sm:mt-4 text-green-400 font-medium animate-pulse text-sm sm:text-base">
                  Welcome aboard! Check your email for confirmation.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Brand Column */}
            <div className="lg:col-span-1">
            <div className="flex items-center mb-6 group">
              <img
              src={logo}
              alt="TagGuard Logo"
              className="h-12 w-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 bg-gradient-to-br from-blue-500 to-blue-700 object-cover"
              />
              <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              TagGuard 
              </span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Revolutionizing security management with intelligent RFID monitoring, 
              real-time guard tracking, and advanced analytics for the modern world.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: TwitterIcon, href: "https://twitter.com", name: "Twitter" },
                { icon: LinkedInIcon, href: "https://linkedin.com", name: "LinkedIn" },
                { icon: FacebookIcon, href: "https://facebook.com", name: "Facebook" },
                { icon: InstagramIcon, href: "https://instagram.com", name: "Instagram" }
              ].map(({ icon: Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2.5 sm:p-3 bg-white/5 rounded-lg hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={name}
                >
                  <Icon />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Home", href: "/#hero" },
                { label: "Solutions", href: "/#solutions" },
                { label: "Features", href: "/#features" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Our Team", href: "/#team" }
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 text-sm sm:text-base"
                  >
                    <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-500 rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 relative">
              Resources
              <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "Blog", to: "/blog" },
                { label: "Contact Us", href: "/#contact" },
                { label: "Help Center", href: "#" },
                { label: "API Documentation", href: "#" }
              ].map(({ label, to, href }) => (
                <li key={label}>
                  {to ? (
                    <Link
                      to={to}
                      className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 text-sm sm:text-base"
                    >
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-500 rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 text-sm sm:text-base"
                    >
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-500 rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 relative">
              Connect With Us
              <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full" />
            </h4>
            
            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="group">
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Email</p>
                <a
                  href="mailto:tagguard9@gmail.com"
                  className="flex items-center text-white hover:text-blue-400 transition-colors duration-300 group-hover:translate-x-1 text-sm sm:text-base break-all sm:break-normal"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  tagguard9@gmail.com
                </a>
              </div>
              <div className="group">
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Phone</p>
                <a
                  href="tel:+254111566445"
                  className="flex items-center text-white hover:text-blue-400 transition-colors duration-300 group-hover:translate-x-1 text-sm sm:text-base"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +254 111 56 6445
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Terms of Service", to: "/terms-of-service" },
                { label: "Cookie Policy", href: "#" }
              ].map(({ label, to, href }) => (
                <li key={label}>
                  {to ? (
                    <Link
                      to={to}
                      className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} TagGuard LTD. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Proudly built for a safer tomorrow.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                All systems operational
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-700" />
              <span>🇰🇪 Made in Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;