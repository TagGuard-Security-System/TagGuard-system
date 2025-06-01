// components/Header.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

// Types
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

interface NavLinkConfig {
  label: string;
  href: string;
  type: 'anchor' | 'page';
  children?: NavLinkConfig[];
}

interface ThemeClasses {
  text: string;
  textHover: string;
  logo: string;
  tagline: string;
  mobileButton: string;
  background: string;
  border: string;
}

// Constants
const SCROLL_THRESHOLD = 20;
const HEADER_HEIGHT = {
  mobile: 64,
  tablet: 72,
  desktop: 80
};

// Mock Button Component (replace with actual shared component)
const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick 
}) => {
  const baseClasses = [
    'font-semibold',
    'transition-all',
    'duration-300',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'relative',
    'overflow-hidden',
    'group'
  ].join(' ');
  
  const variantClasses = {
    primary: [
      'bg-gradient-to-r',
      'from-blue-600',
      'to-blue-700',
      'hover:from-blue-700',
      'hover:to-blue-800',
      'text-white',
      'focus:ring-blue-500',
      'shadow-lg',
      'hover:shadow-xl',
      'transform',
      'hover:scale-105'
    ].join(' '),
    outline: [
      'border-2',
      'border-blue-600',
      'text-blue-600',
      'hover:bg-blue-600',
      'hover:text-white',
      'focus:ring-blue-500',
      'backdrop-blur-sm'
    ].join(' '),
    ghost: [
      'text-gray-700',
      'hover:text-blue-600',
      'hover:bg-blue-50',
      'focus:ring-blue-500'
    ].join(' ')
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-2.5 text-sm rounded-lg',
    lg: 'px-8 py-3 text-base rounded-xl'
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      type="button"
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
};

// Icon Components
const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

// Navigation configuration
const NAV_LINKS: NavLinkConfig[] = [
  { 
    label: 'Products', 
    href: '/#solutions', 
    type: 'anchor',
    children: [
      { label: 'RFID Solutions', href: '/#solutions', type: 'anchor' },
      { label: 'Guard Tracking', href: '/#features', type: 'anchor' },
      { label: 'Analytics Dashboard', href: '/#features', type: 'anchor' }
    ]
  },
  { label: 'Features', href: '/#features', type: 'anchor' },
  { label: 'Pricing', href: '/#pricing', type: 'anchor' },
  { 
    label: 'Resources', 
    href: '/blog', 
    type: 'page',
    children: [
      { label: 'Blog', href: '/blog', type: 'page' },
      { label: 'About Us', href: '/about', type: 'page' },
      { label: 'Case Studies', href: '/#testimonials', type: 'anchor' },
      { label: 'Help Center', href: '/help', type: 'page' }
    ]
  },
  { label: 'Contact', href: '/#contact', type: 'anchor' }
];

// Utility functions
const detectSectionTheme = (): 'light' | 'dark' | 'colored' => {
  const sections = document.querySelectorAll('section, .section, .hero, [data-section]');
  let currentTheme: 'light' | 'dark' | 'colored' = 'light';
  let highestZIndex = -1;
  
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionBottom = rect.bottom;
    
    // Check if header overlaps with this section
    if (sectionTop <= HEADER_HEIGHT.desktop && sectionBottom >= 0) {
      const computedStyle = window.getComputedStyle(section);
      const zIndex = parseInt(computedStyle.zIndex) || 0;
      
      // Only process sections that are visible (higher z-index or same level)
      if (zIndex >= highestZIndex) {
        highestZIndex = zIndex;
        
        const backgroundColor = computedStyle.backgroundColor;
        const backgroundImage = computedStyle.backgroundImage;
        const sectionTheme = section.getAttribute('data-theme');
        
        // Check for explicit theme attribute first
        if (sectionTheme) {
          currentTheme = sectionTheme as 'light' | 'dark' | 'colored';
          return;
        }
        
        // Dark background detection
        const darkPatterns = [
          // Class-based detection
          () => ['bg-gray-900', 'bg-black', 'bg-slate-900', 'bg-blue-900', 'bg-indigo-900', 'bg-purple-900'].some(cls => section.classList.contains(cls)),
          
          // Color-based detection
          () => {
            const darkColors = [
              'rgb(17, 24, 39)',   // gray-900
              'rgb(0, 0, 0)',      // black
              'rgb(15, 23, 42)',   // slate-900
              'rgb(30, 58, 138)',  // blue-900
              'rgb(49, 46, 129)',  // indigo-900
              'rgb(88, 28, 135)'   // purple-900
            ];
            return darkColors.some(color => backgroundColor.includes(color));
          },
          
          // Gradient detection
          () => backgroundImage.includes('gradient') && (
            backgroundImage.includes('black') ||
            backgroundImage.includes('gray-900') ||
            backgroundImage.includes('slate-900')
          ),
          
          // RGB value analysis
          () => {
            const rgbMatch = backgroundColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (rgbMatch) {
              const [, r, g, b] = rgbMatch.map(Number);
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              return brightness < 128;
            }
            return false;
          }
        ];
        
        // Colored background detection (blues, purples, etc.)
        const coloredPatterns = [
          () => ['bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-indigo-600', 'bg-purple-600', 'bg-green-600'].some(cls => section.classList.contains(cls)),
          () => {
            const coloredBgs = [
              'rgb(37, 99, 235)',   // blue-600
              'rgb(29, 78, 216)',   // blue-700
              'rgb(30, 64, 175)',   // blue-800
              'rgb(79, 70, 229)',   // indigo-600
              'rgb(147, 51, 234)',  // purple-600
              'rgb(34, 197, 94)'    // green-600
            ];
            return coloredBgs.some(color => backgroundColor.includes(color));
          }
        ];
        
        // Light background detection
        const lightPatterns = [
          () => ['bg-white', 'bg-gray-50', 'bg-gray-100', 'bg-slate-50'].some(cls => section.classList.contains(cls)),
          () => {
            const lightColors = [
              'rgb(255, 255, 255)', // white
              'rgb(249, 250, 251)', // gray-50
              'rgb(243, 244, 246)', // gray-100
              'rgb(248, 250, 252)'  // slate-50
            ];
            return lightColors.some(color => backgroundColor.includes(color));
          }
        ];
        
        if (darkPatterns.some(pattern => pattern())) {
          currentTheme = 'dark';
        } else if (coloredPatterns.some(pattern => pattern())) {
          currentTheme = 'colored';
        } else if (lightPatterns.some(pattern => pattern())) {
          currentTheme = 'light';
        }
      }
    }
  });
  
  return currentTheme;
};

// Main Header Component
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark' | 'colored'>('light');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  // Theme-based styling
  const getThemeClasses = useCallback((): ThemeClasses => {
    const baseStyles = {
      light: {
        text: 'text-gray-900',
        textHover: 'hover:text-blue-600',
        logo: 'text-gray-900',
        tagline: 'text-blue-600',
        mobileButton: 'text-gray-700 hover:text-blue-600 hover:bg-blue-50',
        background: 'bg-white/95 backdrop-blur-md',
        border: 'border-gray-200/50'
      },
      dark: {
        text: 'text-white',
        textHover: 'hover:text-blue-300',
        logo: 'text-white',
        tagline: 'text-blue-300',
        mobileButton: 'text-white hover:text-blue-300 hover:bg-white/10',
        background: 'bg-gray-900/95 backdrop-blur-md',
        border: 'border-gray-700/50'
      },
      colored: {
        text: 'text-white',
        textHover: 'hover:text-blue-200',
        logo: 'text-white',
        tagline: 'text-blue-200',
        mobileButton: 'text-white hover:text-blue-200 hover:bg-white/10',
        background: 'bg-black/20 backdrop-blur-md',
        border: 'border-white/20'
      }
    };
    
    return baseStyles[headerTheme];
  }, [headerTheme]);

  // Event handlers
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > SCROLL_THRESHOLD);
    
    // Update theme based on current section
    const newTheme = detectSectionTheme();
    setHeaderTheme(newTheme);
  }, []);

  const handleClickOutside = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleDropdownToggle = useCallback((label: string) => {
    setActiveDropdown(current => current === label ? null : label);
  }, []);

  const handleSignIn = useCallback(() => {
    // TODO: Implement sign-in logic
    console.log('Sign-in clicked');
  }, []);

  // Effects
  useEffect(() => {
    handleScroll(); // Initial check
    
    const handleScrollThrottled = () => {
      requestAnimationFrame(handleScroll);
    };
    
    window.addEventListener('scroll', handleScrollThrottled, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
      window.removeEventListener('resize', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleScroll, handleClickOutside]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const themeClasses = getThemeClasses();

  // NavLink Component
  const NavLinkItem: React.FC<{
    label: string;
    href: string;
    type: 'anchor' | 'page';
    onClick?: () => void;
    children?: NavLinkConfig[];
    className?: string;
  }> = ({ label, href, type, onClick, children, className = '' }) => {
    const baseClassName = [
      'relative',
      'px-3',
      'py-2',
      'text-sm',
      'font-medium',
      'transition-all',
      'duration-300',
      'rounded-lg',
      'group',
      themeClasses.text,
      themeClasses.textHover,
      className
    ].join(' ');

    if (children) {
      return (
        <div 
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={`${baseClassName} flex items-center space-x-1`}
            onClick={() => handleDropdownToggle(label)}
            type="button"
            aria-expanded={activeDropdown === label}
            aria-haspopup="true"
          >
            <span>{label}</span>
            <ChevronDownIcon 
              className={`w-4 h-4 transition-transform duration-200 ${
                activeDropdown === label ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          {activeDropdown === label && (
            <div 
              className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in slide-in-from-top-2 duration-200"
              role="menu"
            >
              {children.map((child) => (
                <NavLinkItem
                  key={child.label}
                  {...child}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 mx-2 rounded-lg"
                  onClick={() => {
                    setActiveDropdown(null);
                    onClick?.();
                  }}
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    const linkElement = (
      <>
        {label}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
      </>
    );

    if (type === 'anchor' && isHomePage) {
      return (
        <a 
          href={href} 
          onClick={onClick} 
          className={baseClassName}
        >
          {linkElement}
        </a>
      );
    }
    
    return (
      <RouterLink 
        to={href} 
        onClick={onClick} 
        className={baseClassName}
      >
        {linkElement}
      </RouterLink>
    );
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${themeClasses.background} border-b ${themeClasses.border} shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            
            {/* Logo Section */}
            <RouterLink 
              to="/" 
              className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
              aria-label="TagGuard Home"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="TagGuard Logo"
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <h1 className={`text-lg sm:text-xl lg:text-2xl font-bold transition-all duration-500 ${themeClasses.logo}`}>
                  TagGuard
                </h1>
                <span className={`text-xs font-medium transition-all duration-500 -mt-1 ${themeClasses.tagline}`}>
                  Security Solutions
                </span>
              </div>
            </RouterLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" role="navigation">
              {NAV_LINKS.map(link => (
                <NavLinkItem key={link.label} {...link} />
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <RouterLink to="/#demo">
                <Button variant="ghost" size="sm">Request Demo</Button>
              </RouterLink>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <RouterLink to="/#early-access">
                <Button variant="primary" size="sm">Get Started</Button>
              </RouterLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${themeClasses.mobileButton}`}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}>
                    <MenuIcon className="w-6 h-6" />
                  </div>
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}>
                    <XIcon className="w-6 h-6" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-16 sm:top-18 lg:top-20 left-0 w-full bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-200 transition-all duration-500 ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            
            {/* Mobile Navigation Links */}
            <nav className="space-y-1 mb-6" role="navigation">
              {NAV_LINKS.map(link => (
                <div key={link.label} className="space-y-1">
                  <NavLinkItem 
                    {...link}
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium"
                    onClick={closeMobileMenu} 
                  />
                  {link.children && (
                    <div className="ml-4 space-y-1">
                      {link.children.map((child) => (
                        <NavLinkItem
                          key={child.label}
                          {...child}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                          onClick={closeMobileMenu}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              <RouterLink to="/#demo" className="block">
                <Button variant="ghost" className="w-full justify-center">
                  Request Demo
                </Button>
              </RouterLink>
              <Button 
                variant="outline" 
                className="w-full justify-center" 
                onClick={() => {
                  handleSignIn();
                  closeMobileMenu();
                }}
              >
                Sign In
              </Button>
              <RouterLink to="/#early-access" className="block">
                <Button variant="primary" className="w-full justify-center">
                  Get Started
                </Button>
              </RouterLink>
            </div>

            {/* Mobile Footer Links */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 mt-6">
              <RouterLink 
                to="/privacy-policy" 
                onClick={closeMobileMenu} 
                className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </RouterLink>
              <RouterLink 
                to="/terms-of-service" 
                onClick={closeMobileMenu} 
                className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;