import React, { useState, useEffect, useCallback } from 'react';
import { Shield, Radar, Lock, Smartphone, Zap, Target, BarChart3, AlertTriangle, Play, ChevronRight, MapPin, Users, Clock, TrendingUp } from 'lucide-react';

// Add CSS animation styles
const slideAnimation = `
  @keyframes slide-infinite {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-slide-infinite {
    animation: slide-infinite 20s linear infinite;
  }
  
  .animate-slide-infinite:hover {
    animation-play-state: paused;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = slideAnimation;
  document.head.appendChild(styleSheet);
}

// Enhanced floating particles with better physics
type FloatingParticleProps = {
  delay: number;
  duration: number;
  size?: 'sm' | 'md' | 'lg';
};

const FloatingParticle = ({ delay, duration, size = 'sm' }: FloatingParticleProps) => {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => ({
        x: (prev.x + (Math.random() - 0.5) * 2) % 100,
        y: (prev.y + (Math.random() - 0.5) * 2) % 100,
        rotation: (prev.rotation + 1) % 360
      }));
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div 
      className={`absolute ${sizeClasses[size]} bg-white/10 rounded-full transition-all duration-[3000ms] ease-in-out`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${position.rotation}deg)`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        filter: 'blur(0.5px)'
      }}
    />
  );
};

// Enhanced security icons with Lucide icons
type SecurityIconFloatProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  delay: number;
  color?: string;
};

const SecurityIconFloat = ({ Icon, delay, color = 'text-white/20' }: SecurityIconFloatProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
      style={{
        top: `${Math.random() * 70 + 10}%`,
        left: `${Math.random() * 70 + 10}%`,
        animationDelay: `${delay}s`,
      }}
    >
      <Icon className={`w-6 h-6 ${color} animate-pulse`} />
    </div>
  );
};

// Enhanced trust indicator with better animations
const TrustIndicator = () => {
  const companies = [
    { name: 'SecureGuard Pro', rating: 4.9 },
    { name: 'SafetyFirst Ltd', rating: 4.8 },
    { name: 'GuardTech Kenya', rating: 4.9 },
    { name: 'ProSecurity Inc', rating: 4.7 },
    { name: 'EliteWatch Co', rating: 4.8 }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % companies.length);
        setIsAnimating(false);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          ))}
        </div>
        <p className="text-white/90 text-sm font-medium">
          Trusted by 50+ Kenyan Security Companies
        </p>
      </div>
      
      <div className="relative h-16 flex items-center justify-center">
        <div className={`transition-all duration-500 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
          <div className="text-center">
            <div className="text-white font-bold text-lg">
              {companies[currentIndex].name}
            </div>
            <div className="text-yellow-400 text-sm flex items-center justify-center space-x-1 mt-1">
              <span>★</span>
              <span>{companies[currentIndex].rating}</span>
              <span className="text-white/60">/5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced network visualization
const LiveGuardNetwork = () => {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const [pulseAnimation, setPulseAnimation] = useState(false);

  type GuardStatus = 'active' | 'patrol' | 'scan' | 'standby';

  type GuardPosition = {
    x: number;
    y: number;
    name: string;
    status: GuardStatus;
    guards: number;
  };

  const guardPositions: GuardPosition[] = [
    { x: 100, y: 60, name: "KICC", status: "active", guards: 12 },
    { x: 350, y: 60, name: "Westlands", status: "patrol", guards: 8 },
    { x: 100, y: 180, name: "JKIA", status: "scan", guards: 15 },
    { x: 350, y: 180, name: "CBD", status: "standby", guards: 6 }
  ];

  const centralCommand = { x: 225, y: 120 };

  useEffect(() => {
    const interval = setInterval(() => {
      const newActiveNode = Math.floor(Math.random() * guardPositions.length);
      setActiveNodes(prev => {
        const updated = [...prev];
        if (updated.includes(newActiveNode)) {
          return updated.filter(n => n !== newActiveNode);
        } else {
          return [...updated, newActiveNode].slice(-2);
        }
      });
      setPulseAnimation(true);
      setTimeout(() => setPulseAnimation(false), 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const statusColors = {
    active: "#10b981",
    patrol: "#f59e0b", 
    scan: "#8b5cf6",
    standby: "#6b7280"
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-bold text-xl flex items-center space-x-2">
          <Radar className="w-5 h-5 text-green-400" />
          <span>Live Command Network</span>
        </h3>
        <div className="flex items-center space-x-2 text-green-400 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span>All Systems Online</span>
        </div>
      </div>
      
      <div className="relative">
        <svg width="450" height="240" className="w-full h-auto">
          <defs>
            <radialGradient id="commandGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background grid pattern */}
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />

          {/* Security zone areas */}
          <circle cx="100" cy="60" r="35" fill="rgba(34, 197, 94, 0.1)" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" strokeDasharray="3,3">
            <animate attributeName="r" values="35;40;35" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="60" r="35" fill="rgba(251, 191, 36, 0.1)" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1" strokeDasharray="3,3">
            <animate attributeName="r" values="35;40;35" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="180" r="35" fill="rgba(168, 85, 247, 0.1)" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" strokeDasharray="3,3">
            <animate attributeName="r" values="35;40;35" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="180" r="35" fill="rgba(156, 163, 175, 0.1)" stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1" strokeDasharray="3,3">
            <animate attributeName="r" values="35;40;35" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Connection lines with animation */}
          {guardPositions.map((guard, index) => (
            <g key={`connection-${index}`}>
              <line
                x1={centralCommand.x}
                y1={centralCommand.y}
                x2={guard.x}
                y2={guard.y}
                stroke="rgba(34, 197, 94, 0.4)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="10;0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </line>
              
              {/* Data flow particles */}
              <circle r="3" fill="rgba(34, 197, 94, 0.8)" filter="url(#glow)">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${index * 0.5}s`}
                >
                  <mpath>
                    <path d={`M${centralCommand.x},${centralCommand.y} L${guard.x},${guard.y}`} />
                  </mpath>
                </animateMotion>
              </circle>
            </g>
          ))}

          {/* Satellite signals */}
          <g>
            {[...Array(3)].map((_, i) => (
              <circle
                key={`satellite-${i}`}
                cx={centralCommand.x}
                cy={centralCommand.y}
                r={50 + i * 20}
                fill="none"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="1"
                strokeDasharray="2,4"
              >
                <animate
                  attributeName="r"
                  values={`${50 + i * 20};${60 + i * 20};${50 + i * 20}`}
                  dur={`${3 + i}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.5;0.2"
                  dur={`${3 + i}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>

          {/* Central Command Hub */}
          <g>
            <circle
              cx={centralCommand.x}
              cy={centralCommand.y}
              r="25"
              fill="url(#commandGradient)"
              stroke="rgba(59, 130, 246, 1)"
              strokeWidth="3"
              filter="url(#glow)"
              className={pulseAnimation ? "animate-pulse" : ""}
            />
            <circle
              cx={centralCommand.x}
              cy={centralCommand.y}
              r="40"
              fill="none"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              className="animate-ping"
            />
            
            {/* Command center icon */}
            <g transform={`translate(${centralCommand.x - 8}, ${centralCommand.y - 8})`}>
              <rect width="16" height="16" fill="white" rx="2"/>
              <rect x="2" y="2" width="4" height="4" fill="rgba(59, 130, 246, 1)" rx="1"/>
              <rect x="10" y="2" width="4" height="4" fill="rgba(59, 130, 246, 1)" rx="1"/>
              <rect x="6" y="6" width="4" height="4" fill="rgba(59, 130, 246, 1)" rx="1"/>
              <rect x="2" y="10" width="4" height="4" fill="rgba(59, 130, 246, 1)" rx="1"/>
              <rect x="10" y="10" width="4" height="4" fill="rgba(59, 130, 246, 1)" rx="1"/>
            </g>
            
            <text
              x={centralCommand.x}
              y={centralCommand.y + 35}
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="bold"
            >
              COMMAND HQ
            </text>
          </g>

          {/* Guard nodes with enhanced styling */}
          {guardPositions.map((guard, index) => {
            const isActive = activeNodes.includes(index);
            const color = statusColors[guard.status];

            return (
              <g key={`guard-${index}`}>
                <circle
                  cx={guard.x}
                  cy={guard.y}
                  r="18"
                  fill={color}
                  stroke="white"
                  strokeWidth="3"
                  filter="url(#glow)"
                  className={isActive ? "animate-pulse" : ""}
                  opacity="0.9"
                />
                {isActive && (
                  <>
                    <circle
                      cx={guard.x}
                      cy={guard.y}
                      r="30"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      opacity="0.6"
                      className="animate-ping"
                    />
                    <circle
                      cx={guard.x}
                      cy={guard.y}
                      r="45"
                      fill="none"
                      stroke={color}
                      strokeWidth="1"
                      opacity="0.3"
                      className="animate-ping"
                      style={{ animationDelay: '0.5s' }}
                    />
                  </>
                )}
                
                {/* Location labels */}
                <text
                  x={guard.x}
                  y={guard.y - 30}
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="600"
                >
                  {guard.name}
                </text>
                
                {/* Guard count */}
                <text
                  x={guard.x}
                  y={guard.y + 40}
                  textAnchor="middle"
                  fill="white"
                  fontSize="9"
                  opacity="0.8"
                >
                  {guard.guards} guards
                </text>

                {/* Status icon inside node */}
                <g transform={`translate(${guard.x - 6}, ${guard.y - 6})`}>
                  {guard.status === 'active' && <Shield className="w-3 h-3" fill="white" />}
                  {guard.status === 'patrol' && <Users className="w-3 h-3" fill="white" />}
                  {guard.status === 'scan' && <Radar className="w-3 h-3" fill="white" />}
                  {guard.status === 'standby' && <Clock className="w-3 h-3" fill="white" />}
                </g>
              </g>
            );
          })}

          {/* Security alerts floating */}
          <g>
            <circle cx="400" cy="40" r="8" fill="rgba(239, 68, 68, 0.8)" className="animate-pulse">
              <animate attributeName="cy" values="40;50;40" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="400" y="25" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">ALERT</text>
          </g>
        </svg>

        {/* Status legend */}
        <div className="mt-6 flex justify-center space-x-6 text-xs">
          {Object.entries(statusColors).map(([status, color]) => (
            <div key={status} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-white/80 capitalize">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Simple infinite guard slider component
const GuardSlider = () => {
  const guards = [
    {
      id: 9,
      image: "https://i.ibb.co/HDYvFwpP/guard9.jpg"
    },
    {
      id: 10,
      image: "https://i.ibb.co/ycfW32Fw/guard10.jpg"
    },
    {
      id: 11,
      image: "https://i.ibb.co/LDmRXcJ0/guard11.jpg"
    },
    {
      id: 12,
      image: "https://i.ibb.co/Dgm98gDp/guard12.jpg"
    },
    {
      id: 13,
      image: "https://i.ibb.co/5hy0dqJb/guard13.jpg"
    },
    {
      id: 14,
      image: "https://i.ibb.co/ZRqkmpHD/guard14.jpg"
    },
    {
      id: 15,
      image: "https://i.ibb.co/pj9t4mY3/guard15.jpg"
    },
    {
      id: 16,
      image: "https://i.ibb.co/XZsg56ZM/guard16.jpg"
    },
    {
      id: 17,
      image: "https://i.ibb.co/wNgH7Ngx/guard17.jpg"
    },
    {
      id: 18,
      image: "https://i.ibb.co/TxM0WKPj/guard18.jpg"
    },
    {
      id: 19,
      image: "https://i.ibb.co/ycQffkd5/guard19.jpg"
    }
  ];

  // Duplicate the array for seamless infinite loop
  const duplicatedGuards = [...guards, ...guards];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 overflow-hidden">
      <h3 className="text-white font-bold text-xl mb-6 text-center flex items-center justify-center space-x-2">
        <Users className="w-6 h-6 text-blue-400" />
        <span>Professional Guards</span>
      </h3>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-slide-infinite space-x-4">
          {duplicatedGuards.map((guard, index) => (
            <div
              key={`${guard.id}-${index}`}
              className="flex-shrink-0 w-48 h-64 relative group cursor-pointer"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300">
                <img
                  src={guard.image}
                  alt="Professional Security Guard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white font-medium text-sm">ON DUTY</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Enhanced dashboard preview
const DashboardPreview = () => {
  const [alertCount, setAlertCount] = useState(3);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setAlertCount(prev => prev + Math.floor(Math.random() * 2));
      setLastUpdate(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <LiveGuardNetwork />
      
      {/* Guards Slider */}
      <GuardSlider />
      
      {/* Command Dashboard */}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold text-xl flex items-center space-x-2">
              <Shield className="w-6 h-6" />
              <span>TagGuard Command Center</span>
            </h3>
            <div className="text-white/90 text-sm">
              Live • {lastUpdate.toLocaleTimeString()}
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1 flex items-center justify-center">
                <Users className="w-6 h-6 mr-1" />
                247
              </div>
              <div className="text-white/80 text-sm">Guards Online</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1 flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-1" />
                45
              </div>
              <div className="text-white/80 text-sm">Sites Secured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-1 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 mr-1" />
                98%
              </div>
              <div className="text-white/80 text-sm">Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 mr-1" />
                {alertCount}
              </div>
              <div className="text-white/80 text-sm">Active Alerts</div>
            </div>
          </div>
        </div>
        
        {/* Live activity feed */}
        <div className="space-y-3">
          {[
            { site: "KICC TOWER", status: "PATROL COMPLETE", color: "green", icon: Shield },
            { site: "WESTLANDS MALL", status: "GUARD ON DUTY", color: "blue", icon: Users },
            { site: "JKIA TERMINAL", status: "PERIMETER SCAN", color: "yellow", icon: Radar },
            { site: "CBD PLAZA", status: "INCIDENT RESOLVED", color: "purple", icon: Target }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-all duration-200">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 bg-${item.color}-400 rounded-full animate-pulse flex items-center justify-center`}>
                  <item.icon className="w-2 h-2 text-white" />
                </div>
                <span className="text-white font-medium">{item.site}</span>
              </div>
              <span className={`text-${item.color}-400 text-sm font-medium px-3 py-1 bg-${item.color}-400/10 rounded-full`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
        
        {/* Alert system */}
        <div className="mt-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-red-500 rounded-full animate-ping flex items-center justify-center">
                <AlertTriangle className="w-3 h-3 text-white" />
              </div>
              <span className="text-red-300 font-medium">SECURITY ALERT SYSTEM ARMED</span>
            </div>
            <Clock className="w-4 h-4 text-red-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Hero Component
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = useCallback((e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; clientY: number; }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  }, []);

  const securityIcons = [Shield, Radar, Lock, Smartphone, Zap, Target, BarChart3, AlertTriangle];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden flex items-center"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic gradient overlay based on mouse position */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />

      {/* Enhanced floating elements */}
      <div className="absolute inset-0">
        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle 
            key={`particle-${i}`}
            delay={i * 0.2}
            duration={4 + (i % 3)}
            size={['sm', 'md', 'lg'][i % 3] as 'sm' | 'md' | 'lg'}
          />
        ))}
        
        {/* Security icons */}
        {securityIcons.map((Icon, index) => (
          <SecurityIconFloat 
            key={`icon-${index}`}
            Icon={Icon}
            delay={index * 0.3}
            color={index % 2 === 0 ? 'text-blue-400/20' : 'text-teal-400/20'}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Enhanced Content */}
          <div className={`space-y-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Now Live in Kenya</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight">
                Revolutionizing{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse">
                  Security
                </span>
                <br />
                Management{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Across Kenya
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-white/85 max-w-2xl leading-relaxed font-light">
              Replace physical supervision with intelligent monitoring. 
              Real-time guard tracking, automated reporting, and centralized 
              command for security companies.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Get Early Access</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 px-10 py-5 text-lg font-bold rounded-2xl backdrop-blur-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { value: "24/7", label: "Monitoring", icon: Clock, color: "text-blue-400" },
                { value: "99.9%", label: "Uptime", icon: TrendingUp, color: "text-green-400" },
                { value: "50+", label: "Companies", icon: Users, color: "text-purple-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className={`w-6 h-6 ${stat.color} mr-2 group-hover:scale-110 transition-transform`} />
                    <div className={`text-4xl md:text-5xl font-black ${stat.color} group-hover:scale-110 transition-transform`}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced Dashboard */}
          <div className={`lg:pl-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <DashboardPreview />
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className={`mt-20 pt-16 border-t border-white/20 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <TrustIndicator />
        </div>

        {/* Enhanced Comparison Section */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Traditional Supervision */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-red-400">×</span>
              </div>
              <span>Traditional Supervision</span>
            </h3>
            <div className="space-y-4">
              {[
                "High operational costs",
                "Limited coverage areas", 
                "Delayed incident response",
                "Manual report generation"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-red-300 group">
                  <div className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center">
                    <span className="text-red-400 text-sm">×</span>
                  </div>
                  <span className="group-hover:text-red-200 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TagGuard Digital */}
          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-green-400" />
              </div>
              <span>TagGuard Digital</span>
            </h3>
            <div className="space-y-4">
              {[
                "60% cost reduction",
                "24/7 real-time monitoring",
                "Instant alert system", 
                "Automated compliance reports"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-green-300 group">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <span className="group-hover:text-green-200 transition-colors font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;