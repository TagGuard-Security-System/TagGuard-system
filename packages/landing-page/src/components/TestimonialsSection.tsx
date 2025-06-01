import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield, Users, Building2, MapPin } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
  companyType: 'ceo' | 'operations' | 'security' | 'government';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Kiprotich",
    role: "CEO",
    company: "SecureGuard Kenya",
    location: "Nairobi, Kenya",
    rating: 5,
    quote: "TagGuard transformed our operations completely. We reduced supervision costs by 55% while improving coverage quality. Our clients love the real-time visibility.",
    avatar: "DK",
    companyType: "ceo"
  },
  {
    id: 2,
    name: "Sarah Wanjiku",
    role: "Operations Manager",
    company: "Westlands Mall",
    location: "Nairobi, Kenya",
    rating: 5,
    quote: "Having direct access to guard performance data gives us confidence in our security. The system alerts us immediately if there are any issues.",
    avatar: "SW",
    companyType: "operations"
  },
  {
    id: 3,
    name: "James Mwangi",
    role: "Security Guard",
    company: "Individual Guard Perspective",
    location: "Nairobi, Kenya",
    rating: 5,
    quote: "The mobile app is easy to use, even for those of us who aren't tech-savvy. It makes our job easier and helps us stay accountable.",
    avatar: "JM",
    companyType: "security"
  },
  {
    id: 4,
    name: "Dr. Margaret Nyong'o",
    role: "Deputy Director",
    company: "Kenya Security Board",
    location: "Government Regulatory Body",
    rating: 5,
    quote: "TagGuard's compliance features help us maintain better oversight of the industry while reducing administrative burden on companies.",
    avatar: "DMN",
    companyType: "government"
  },
  {
    id: 5,
    name: "John Mwangi",
    role: "CEO",
    company: "SecureGuard Kenya",
    location: "Nairobi, Kenya",
    rating: 5,
    quote: "TagGuard reduced our supervision costs by 55% in just 6 months. We can now monitor 50+ sites with the same resources we used for 20 sites before.",
    avatar: "JM",
    companyType: "ceo"
  },
  {
    id: 6,
    name: "Aisha Omar",
    role: "Operations Manager",
    company: "Eagle Eye Security",
    location: "Mombasa, Kenya",
    rating: 5,
    quote: "The real-time tracking and automated reporting are fantastic. Our response times have improved, and managing guards across multiple sites is now seamless.",
    avatar: "AO",
    companyType: "operations"
  }
];

const getAvatarColor = (type: string) => {
  const colors = {
    ceo: 'bg-blue-500',
    operations: 'bg-teal-500',
    security: 'bg-orange-500',
    government: 'bg-purple-500'
  };
  return colors[type as keyof typeof colors] || 'bg-gray-500';
};

const getCompanyIcon = (type: string) => {
  const icons = {
    ceo: Building2,
    operations: Users,
    security: Shield,
    government: MapPin
  };
  const IconComponent = icons[type as keyof typeof icons] || Building2;
  return <IconComponent className="w-4 h-4" />;
};

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Responsive slides calculation
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1280) setSlidesToShow(4); // xl
      else if (width >= 1024) setSlidesToShow(3); // lg
      else if (width >= 768) setSlidesToShow(2); // md
      else setSlidesToShow(1); // sm
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = testimonials.length - slidesToShow;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slidesToShow]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - slidesToShow;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - slidesToShow;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const maxDots = Math.ceil(testimonials.length / slidesToShow);

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Trusted by Security Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Security Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how TagGuard is transforming security operations across Kenya with real results from industry leaders
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-3 ${
                    slidesToShow === 1 ? 'w-full' :
                    slidesToShow === 2 ? 'w-1/2' :
                    slidesToShow === 3 ? 'w-1/3' : 'w-1/4'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow italic">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-full ${getAvatarColor(testimonial.companyType)} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {testimonial.avatar}
                      </div>
                      <div className="flex-grow">
                        <div className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          {getCompanyIcon(testimonial.companyType)}
                          <span>{testimonial.role}</span>
                        </div>
                        <div className="text-gray-500 text-sm">
                          {testimonial.company}
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[...Array(maxDots)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600">Security Guards Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">55%</div>
            <div className="text-gray-600">Reduction in Supervision Costs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Sites Monitored</div>
          </div>
        </div>
      </div>

      <style>
        {`
          .bg-grid-pattern {
            background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialsSection;