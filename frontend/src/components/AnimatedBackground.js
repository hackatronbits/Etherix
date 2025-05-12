import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0" style={{ zIndex: -1 }}>
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30" />
      <div 
        className="absolute inset-0 bg-[url('/public/grid.svg')] bg-center opacity-20"
        style={{
          maskImage: 'linear-gradient(180deg, white, rgba(255,255,255,0))',
          WebkitMaskImage: 'linear-gradient(180deg, white, rgba(255,255,255,0))'
        }}
      />
      
      {/* Semi-transparent overlay to improve content visibility */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default AnimatedBackground;
