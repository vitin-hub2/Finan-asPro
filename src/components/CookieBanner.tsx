/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or declined cookies
    const cookieConsent = localStorage.getItem('financaspro_cookie_consent');
    if (!cookieConsent) {
      // Trigger a slight delay for elegant enter transition
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('financaspro_cookie_consent', accepted ? 'accepted' : 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-[#1A1A2E]/98 text-slate-200 border border-slate-750 p-4 rounded-xl shadow-xl font-ui animate-slide-up"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 mt-0.5">
          <Cookie className="w-5 h-5 animate-spin-slow" aria-hidden="true" />
        </div>
        
        <div className="space-y-1">
          <h4 id="cookie-title" className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <span>Controle de Cookies & Privacidade</span>
            <span className="bg-emerald-400/20 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">Adsense Ready</span>
          </h4>
          <p id="cookie-desc" className="text-[11px] text-slate-400 leading-relaxed font-body">
            Usamos cookies essenciais para analisar o tráfego do site de forma anônima e possibilitar a entrega de anúncios monetizados AdSense contextualizados relevantes para você, conforme as diretrizes do Marco Civil e da LGPD brasileira.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2.5 mt-3 pt-3 border-t border-slate-800">
        <button
          onClick={() => handleConsent(false)}
          className="text-[10px] font-bold text-slate-400 hover:text-white px-3 py-1.5 cursor-pointer rounded transition-colors focus:ring-1 focus:ring-offset-1 focus:ring-[#27AE60]"
        >
          Recusar
        </button>
        <button
          onClick={() => handleConsent(true)}
          className="text-[10px] font-bold bg-[#27AE60] hover:bg-[#219653] text-white px-4 py-1.5 rounded-lg shadow-sm transition-transform hover:scale-[1.02] cursor-pointer focus:ring-1 focus:ring-[#27AE60]"
        >
          Aceitar Essenciais
        </button>
      </div>
    </div>
  );
}
