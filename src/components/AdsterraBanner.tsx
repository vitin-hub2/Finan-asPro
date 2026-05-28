/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';

interface AdsterraBannerProps {
  className?: string;
  label?: string;
}

export default function AdsterraBanner({ className = '', label = 'Publicidade Patrocinada' }: AdsterraBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reset container contents
    containerRef.current.innerHTML = '';

    // Create the target div matching exactly the requested unique ID container
    const adContainer = document.createElement('div');
    adContainer.id = 'container-23d041e75ff3ddbd9e3a32ee99a927ea';
    adContainer.className = 'w-full flex justify-center items-center mx-auto';
    containerRef.current.appendChild(adContainer);

    // Create a script tag for Adsterra integration
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = 'https://pl29577562.effectivecpmnetwork.com/23d041e75ff3ddbd9e3a32ee99a927ea/invoke.js';

    // Append the script right after the container within our referenced DOM element
    containerRef.current.appendChild(script);

    return () => {
      // Clean up DOM on component unmount to prevent memory leaks and duplicated ads
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={`bg-white rounded-xl border border-[#E8ECF0] p-4 shadow-sm text-center space-y-2.5 font-ui ${className}`}>
      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest block leading-none select-none">
        {label}
      </span>
      {/* Wrapper element serving as the anchor point for the script execution */}
      <div 
        ref={containerRef} 
        className="w-full flex justify-center items-center overflow-hidden min-h-[50px] sm:min-h-[90px]" 
      />
    </div>
  );
}
