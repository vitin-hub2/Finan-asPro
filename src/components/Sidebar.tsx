/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Mail, Tag, ChevronRight, Eye, CheckCircle2 } from 'lucide-react';
import { SIMULATED_INDEX_RATES, EXPERT_ARTICLES } from '../data/blogData';
import { Article, CategoryId } from '../types';
import Calculadora from './Calculadora';
import AdsterraBanner from './AdsterraBanner';

interface SidebarProps {
  onNavigate: (page: string, categoryId?: CategoryId | null, articleSlug?: string | null) => void;
  onTagClick?: (tag: string) => void;
}

export default function Sidebar({ onNavigate, onTagClick }: SidebarProps) {
  const [emailValue, setEmailValue] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Top 5 most viewed articles based on the sample data sorted by views
  const topArticles = [...EXPERT_ARTICLES]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  // Financial tags pool
  const TAGS = [
    'Tesouro Direto',
    'Renda Fixa',
    'Ações',
    'Dividendos',
    'Orçamento',
    'FIIs',
    'Previdência',
    'Reserva de Emergência',
    'Taxa Selic',
    'CDI vs Poupança',
    'Regra 50/30/20'
  ];

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValue) {
      setErrorMsg('Por favor, informe seu e-mail.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(emailValue)) {
      setErrorMsg('Informe um endereço de e-mail válido.');
      return;
    }

    setIsSubscribed(true);
    setEmailValue('');
    setErrorMsg('');
  };

  const handleArticleClick = (slug: string) => {
    onNavigate('artigo', null, slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="space-y-6 font-ui" role="complementary" aria-label="Painel lateral">
      
      {/* 1. Indices Financeiros Widget */}
      <section className="bg-white rounded-xl border border-[#E8ECF0] p-5 shadow-sm">
        <h3 className="font-titles text-lg font-bold text-[#1A1A2E] mb-4 pb-2 border-b border-[#E8ECF0] flex items-center justify-between">
          <span>Índices Financeiros</span>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Simulado</span>
        </h3>
        
        <div className="space-y-3.5">
          {SIMULATED_INDEX_RATES.map((rate, idx) => (
            <div key={idx} className="flex items-center justify-between group">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#1A1A2E] leading-tight flex items-center gap-1.5 cursor-help" title={rate.description}>
                  {rate.name}
                </span>
                <span className="text-[10px] text-slate-450 leading-none mt-0.5">{rate.name === 'Selic' ? 'Alvo anual COPOM' : rate.name === 'IPCA' ? 'Acumulado 12 meses' : 'Cotação atual'}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[#1A1A2E]">{rate.value}</span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 ${
                  rate.isPositive 
                    ? 'bg-emerald-50 text-[#27AE60]' 
                    : 'bg-rose-50 text-rose-600'
                }`}>
                  {rate.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {rate.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Interactive Calculator Widget */}
      <section>
        <Calculadora />
      </section>

      {/* Adsterra Integration Banner */}
      <AdsterraBanner className="border-[#E8ECF0]" />

      {/* 3. Newsletter Signup Widget */}
      <section className="bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] rounded-xl p-5 text-white shadow-md relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-y-3 translate-x-3 scale-110">
          <Mail className="w-48 h-48 text-white" />
        </div>

        {!isSubscribed ? (
          <div>
            <span className="text-[9px] uppercase font-bold text-emerald-400 tracking-widest leading-none block mb-1">
              Gratuito & Sem Spam
            </span>
            <h3 className="font-titles text-xl font-bold leading-tight mb-2">
              Receba análises semanais exclusivas
            </h3>
            <p className="text-xs text-slate-100 font-body leading-relaxed mb-4">
              Junte-se a mais de <strong className="text-emerald-300">10.000 leitores</strong> que tomam decisões reais baseadas em inteligência financeira profissional.
            </p>

            <form onSubmit={handleSubscribeSubmit} className="space-y-2">
              <input
                type="email"
                className="w-full text-xs font-semibold px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white focus:text-[#1A1A2E] focus:placeholder-slate-400 focus:outline-none transition-all duration-200"
                placeholder="Seu melhor e-mail"
                aria-label="Digitar e-mail para newsletter"
                value={emailValue}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                  setErrorMsg('');
                }}
              />
              {errorMsg && (
                <p className="text-[11px] font-bold text-red-300 leading-none">{errorMsg}</p>
              )}
              <button
                type="submit"
                className="w-full py-2.5 bg-[#27AE60] hover:bg-[#219653] text-white text-xs font-bold rounded-lg transition-transform hover:scale-[1.02] focus:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm text-center"
              >
                Garantir Inscrição Grátis
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-3 animate-fade-in">
            <div className="w-12 h-12 bg-white/20 text-emerald-300 rounded-full flex items-center justify-center mx-auto mb-1">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-titles text-lg font-bold text-white">Inscrição Confirmada!</h3>
            <p className="text-xs text-slate-100 font-body leading-relaxed">
              Obrigado por confiar no FinançasPro. O guia de boas-vindas já foi encaminhado para a sua caixa de entrada.
            </p>
          </div>
        )}
      </section>

      {/* 4. Top 5 Most Read Articles Widget */}
      <section className="bg-white rounded-xl border border-[#E8ECF0] p-5 shadow-sm">
        <h3 className="font-titles text-lg font-bold text-[#1A1A2E] mb-4 pb-2 border-b border-[#E8ECF0]">
          Artigos Mais Lidos
        </h3>

        <div className="space-y-4">
          {topArticles.map((article, idx) => (
            <button
              onClick={() => handleArticleClick(article.slug)}
              key={article.id}
              className="w-full text-left flex gap-3 group focus:outline-none focus:ring-1 focus:ring-[#0A3D62] p-1 rounded transition-colors hover:bg-slate-50 cursor-pointer"
              aria-label={`Artigo mais lido ${idx + 1}: ${article.title}`}
            >
              {/* Order number */}
              <span className="font-titles text-2xl font-black text-[#0A3D62]/10 group-hover:text-[#27AE60]/20 transition-colors w-6 leading-none pt-0.5 select-none md:shrink-0">
                0{idx + 1}
              </span>
              
              <div className="space-y-1">
                <h4 className="font-titles text-xs font-bold text-[#1A1A2E] group-hover:text-[#0A3D62] transition-colors leading-tight line-clamp-2">
                  {article.title}
                </h4>
                <div className="flex items-center gap-2.5 text-[10px] text-slate-450">
                  <span className="flex items-center gap-0.5">
                    <Eye className="w-3.5 h-3.5" />
                    {article.views.toLocaleString('pt-BR')} leem
                  </span>
                  <span>•</span>
                  <span>{article.readTime} min</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 5. Tag Cloud Widget */}
      <section className="bg-white rounded-xl border border-[#E8ECF0] p-5 shadow-sm">
        <h3 className="font-titles text-lg font-bold text-[#1A1A2E] mb-4 pb-2 border-b border-[#E8ECF0] flex items-center gap-2">
          <Tag className="w-4 h-4 text-[#0A3D62]" />
          <span>Nuvem de Tags</span>
        </h3>
        
        <div className="flex flex-wrap gap-1.5">
          {TAGS.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (onTagClick) onTagClick(tag);
              }}
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 bg-[#F8F9FA] hover:bg-[#0A3D62] hover:text-white border border-[#E8ECF0] text-[#4A4A6A] rounded-lg transition-colors focus:ring-1 focus:ring-[#0A3D62] cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

    </aside>
  );
}
