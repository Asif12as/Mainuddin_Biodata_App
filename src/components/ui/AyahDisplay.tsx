import React from 'react';

interface AyahDisplayProps {
  arabicText?: string;
  englishText: string;
  source: string;
  className?: string;
}

const AyahDisplay: React.FC<AyahDisplayProps> = ({ 
  arabicText, 
  englishText, 
  source,
  className = '' 
}) => {
  return (
    <div className={`my-8 p-6 relative overflow-hidden rounded-lg ${className}`}>
      <div className="absolute inset-0 bg-amber-500/10 z-0" />
      
      {arabicText && (
        <h3 className="text-right font-serif text-2xl md:text-3xl mb-4 text-emerald-800 z-10 relative">
          {arabicText}
        </h3>
      )}
      
      <p className="text-emerald-800/80 italic text-lg md:text-xl mb-3 z-10 relative">
        "{englishText}"
      </p>
      
      <p className="text-right text-emerald-700 font-medium z-10 relative">
        — {source}
      </p>
    </div>
  );
};

export default AyahDisplay;