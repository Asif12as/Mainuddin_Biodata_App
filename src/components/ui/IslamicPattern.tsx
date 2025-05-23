import React, { CSSProperties } from 'react';

interface IslamicPatternProps {
  opacity?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

const IslamicPattern: React.FC<IslamicPatternProps> = ({ 
  opacity = 0.1, 
  color = '#1D7874',
  className = '',
  style = {}
}) => {
  return (
    <div 
      className={`absolute inset-0 z-0 pointer-events-none ${className}`}
      style={style}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 80 80" 
        width="100%" 
        height="100%"
        className="w-full h-full"
        style={{
          opacity,
          backgroundColor: 'transparent',
          fill: color,
        }}
      >
        <pattern 
          id="pattern" 
          x="0" 
          y="0" 
          width="80" 
          height="80" 
          patternUnits="userSpaceOnUse"
        >
          <path d="M0,0 L80,0 L80,80 L0,80 L0,0 Z M40,40 L40,0 A40,40 0 0,1 80,40 L40,40 Z M40,40 L80,40 A40,40 0 0,1 40,80 L40,40 Z M40,40 L40,80 A40,40 0 0,1 0,40 L40,40 Z M40,40 L0,40 A40,40 0 0,1 40,0 L40,40 Z" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
      </svg>
    </div>
  );
};

export default IslamicPattern;