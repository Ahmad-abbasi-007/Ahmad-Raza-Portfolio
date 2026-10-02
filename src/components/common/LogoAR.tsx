import React from 'react';

interface LogoARProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  showStatus?: boolean;
  statusColor?: string;
  animated?: boolean;
  glow?: boolean;
}

export const LogoAR: React.FC<LogoARProps> = ({
  size = 'md',
  className = '',
  showStatus = false,
  statusColor = 'bg-emerald-400',
  animated = true,
  glow = true,
}) => {
  const uniqueId = React.useId().replace(/:/g, '_');
  const primaryGradId = `arGradLogo_${uniqueId}`;
  const secondaryGradId = `arGradSec_${uniqueId}`;
  const glowFilterId = `logoGlow_${uniqueId}`;

  // Determine sizing
  const sizeMap = {
    xs: { box: 'w-7 h-7', svg: 28, dot: 'w-2 h-2 -bottom-0.5 -right-0.5', radius: 'rounded-lg' },
    sm: { box: 'w-8 h-8', svg: 32, dot: 'w-2.5 h-2.5 -bottom-0.5 -right-0.5', radius: 'rounded-xl' },
    md: { box: 'w-10 h-10', svg: 40, dot: 'w-3 h-3 -bottom-0.5 -right-0.5', radius: 'rounded-xl' },
    lg: { box: 'w-14 h-14 sm:w-16 sm:h-16', svg: 64, dot: 'w-4 h-4 -bottom-1 -right-1', radius: 'rounded-2xl' },
    xl: { box: 'w-20 h-20', svg: 80, dot: 'w-4 h-4 -bottom-1 -right-1', radius: 'rounded-3xl' },
  };

  const currentSize = typeof size === 'string' ? sizeMap[size] || sizeMap.md : {
    box: '',
    svg: size,
    dot: 'w-3 h-3 -bottom-0.5 -right-0.5',
    radius: 'rounded-xl'
  };

  const customStyle = typeof size === 'number' ? { width: `${size}px`, height: `${size}px` } : undefined;

  return (
    <div
      style={customStyle}
      className={`relative inline-flex shrink-0 items-center justify-center select-none group/logo ${currentSize.box} ${className}`}
    >
      {/* Outer ambient glow */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-blue-500/30 to-indigo-500/30 rounded-2xl blur-md opacity-60 group-hover/logo:opacity-100 group-hover/logo:blur-lg transition-all duration-300 pointer-events-none" />
      )}

      {/* Main Logo Card / Monogram Container */}
      <div
        className={`relative w-full h-full ${currentSize.radius} p-[1.5px] bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_15px_rgba(6,182,212,0.35)] group-hover/logo:shadow-[0_0_25px_rgba(6,182,212,0.65)] transition-all duration-300 ${
          animated ? 'transform group-hover/logo:scale-[1.03]' : ''
        }`}
      >
        <div className={`w-full h-full ${currentSize.radius} bg-[#090D16] flex items-center justify-center overflow-hidden p-1 sm:p-1.5`}>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_2px_8px_rgba(6,182,212,0.4)]"
            aria-label="Ahmad Raza Logo"
          >
            <defs>
              <linearGradient id={primaryGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="45%" stopColor="#38BDF8" />
                <stop offset="75%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#818CF8" />
              </linearGradient>

              <linearGradient id={secondaryGradId} x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#67E8F9" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>

              <filter id={glowFilterId} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Subtle background tech grid lines inside logo */}
            <line x1="15" y1="50" x2="85" y2="50" stroke="#1E293B" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
            <line x1="50" y1="15" x2="50" y2="85" stroke="#1E293B" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />

            {/* Geometric Letter 'A' */}
            <path
              d="M20 74 L37 26 L54 74"
              stroke={`url(#${primaryGradId})`}
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* 'A' Crossbar with modern code-bracket notch */}
            <path
              d="M27 57 H47"
              stroke={`url(#${secondaryGradId})`}
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Geometric Letter 'R' */}
            {/* R vertical spine */}
            <path
              d="M54 26 V74"
              stroke={`url(#${primaryGradId})`}
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* R top loop */}
            <path
              d="M54 26 H68 C76.5 26 81 31 81 38.5 C81 46 76.5 51 68 51 H54"
              stroke={`url(#${primaryGradId})`}
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* R dynamic angled kick leg */}
            <path
              d="M66 51 L80 74"
              stroke={`url(#${primaryGradId})`}
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Cyberpunk Accent Dot */}
            <circle cx="81" cy="26" r="3.5" fill="#22D3EE" filter={`url(#${glowFilterId})`} />
          </svg>
        </div>
      </div>

      {/* Online / Active status pulse indicator dot */}
      {showStatus && (
        <span
          className={`absolute ${currentSize.dot} rounded-full ${statusColor} border-2 border-[#090D16] shadow-sm z-10 flex items-center justify-center`}
          title="Available for Frontend Opportunities"
        >
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusColor} opacity-75`} />
        </span>
      )}
    </div>
  );
};
