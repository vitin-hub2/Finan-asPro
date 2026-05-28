/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Twitter, 
  Linkedin, 
  Link, 
  Heart, 
  ZoomIn, 
  ZoomOut, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2,
  Bookmark,
  ExternalLink,
  MessageSquare,
  Flame,
  Check
} from 'lucide-react';
import { Article, Category, CategoryId, Author } from '../types';
import { EXPERT_ARTICLES, CATEGORIES, AUTHORS } from '../data/blogData';
import Sidebar from './Sidebar';
import AdsterraBanner from './AdsterraBanner';

interface ArticleViewProps {
  articleSlug: string;
  onNavigate: (page: string, categoryId?: CategoryId | null, articleSlug?: string | null) => void;
  onLikeChange?: (articleId: number, liked: boolean) => void;
}

export default function ArticleView({ articleSlug, onNavigate, onLikeChange }: ArticleViewProps) {
  // Find current article
  const article = EXPERT_ARTICLES.find(a => a.slug === articleSlug) || EXPERT_ARTICLES[0];
  const category = CATEGORIES.find(c => c.id === article.category) as Category;
  const author = AUTHORS.find(a => a.id === article.authorId) as Author;

  // Reading settings states
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(1); // 0 = Small, 1 = Normal, 2 = Large
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(article.likes);
  const [showCopiedAlert, setShowCopiedAlert] = useState<boolean>(false);

  // CTA States
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaSubscribed, setCtaSubscribed] = useState(false);

  // Related Articles (3 other articles from the same category or overall)
  const relatedArticles = EXPERT_ARTICLES
    .filter(a => a.id !== article.id)
    .sort((a, b) => {
      if (a.category === article.category && b.category !== article.category) return -1;
      if (b.category === article.category && a.category !== article.category) return 1;
      return b.views - a.views;
    })
    .slice(0, 3);

  // Increase Simulated views
  useEffect(() => {
    const viewKey = `financas_viewed_${article.id}`;
    const wasViewed = localStorage.getItem(viewKey);
    if (!wasViewed) {
      localStorage.setItem(viewKey, 'true');
      article.views += 1;
    }
    
    // Check if liked in past
    const likedKey = `financas_liked_${article.id}`;
    if (localStorage.getItem(likedKey) === 'true') {
      setIsLiked(true);
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [articleSlug]);

  // Handle Like trigger
  const handleLike = () => {
    const likedKey = `financas_liked_${article.id}`;
    if (isLiked) {
      setIsLiked(false);
      setLikeCount(prev => prev - 1);
      localStorage.removeItem(likedKey);
      if (onLikeChange) onLikeChange(article.id, false);
    } else {
      setIsLiked(true);
      setLikeCount(prev => prev + 1);
      localStorage.setItem(likedKey, 'true');
      if (onLikeChange) onLikeChange(article.id, true);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopiedAlert(true);
    setTimeout(() => setShowCopiedAlert(false), 2000);
  };

  const getFontSizeClass = () => {
    if (fontSizeLevel === 0) return 'text-sm md:text-base';
    if (fontSizeLevel === 1) return 'text-base md:text-lg';
    return 'text-lg md:text-xl';
  };

  const handleBackToCategory = () => {
    onNavigate('categoria', article.category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRelatedClick = (slug: string) => {
    onNavigate('artigo', null, slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ctaEmail && /\S+@\S+\.\S+/.test(ctaEmail)) {
      setCtaSubscribed(true);
      setCtaEmail('');
    }
  };

  // Build social share links
  const textEncoded = encodeURIComponent(`${article.title} - lido via FinançasPro`);
  const urlEncoded = encodeURIComponent(window.location.href);
  const xShareUrl = `https://twitter.com/intent/tweet?text=${textEncoded}&url=${urlEncoded}`;
  const lnShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${urlEncoded}`;
  const waShareUrl = `https://api.whatsapp.com/send?text=${textEncoded}%20${urlEncoded}`;

  return (
    <article 
      className={`font-ui py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-250 ${
        isHighContrast ? 'reader-mode-high-contrast text-white' : ''
      }`}
      id="conteudo-principal"
    >
      
      {/* 1. Category Breadcrumb & Back button */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs sm:text-sm">
        <nav aria-label="Navegação secundária" className="flex items-center gap-2">
          <button 
            onClick={() => onNavigate('home')}
            className={`hover:underline font-medium ${isHighContrast ? 'text-slate-300' : 'text-[#4A4A6A]'}`}
          >
            Início
          </button>
          <span className="text-gray-400">/</span>
          <button 
            onClick={handleBackToCategory}
            className={`font-bold hover:underline ${isHighContrast ? 'text-emerald-400' : 'text-[#0A3D62]'}`}
          >
            {category.name}
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-slate-400 line-clamp-1 max-w-[200px] sm:max-w-xs">{article.title}</span>
        </nav>

        <button
          onClick={handleBackToCategory}
          className={`inline-flex items-center gap-1 text-xs font-bold transition-transform hover:-translate-x-1 cursor-pointer ${
            isHighContrast ? 'text-slate-300 hover:text-white' : 'text-[#0A3D62] hover:text-[#27AE60]'
          }`}
          aria-label={`Voltar para a categoria ${category.name}`}
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para {category.name}
        </button>
      </div>

      {/* 2. Headline Grid: Title, subtitle & Author */}
      <div className="space-y-4 mb-8">
        <span className={`inline-block py-1.5 px-3 rounded-full text-xs font-bold uppercase tracking-wider ${category.bgColor}`}>
          {category.name}
        </span>
        
        <h1 className="font-titles text-2xl sm:text-4xl md:text-5xl font-black text-[#1A1A2E] tracking-tight leading-tight max-w-4xl">
          {article.title}
        </h1>
        
        <p className={`text-sm sm:text-lg font-body leading-relaxed max-w-3xl ${isHighContrast ? 'text-slate-300' : 'text-[#4A4A6A]'}`}>
          {article.subtitle}
        </p>

        {/* Metas controls row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-y border-[#E8ECF0] gap-4">
          
          {/* Author Block */}
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-xl ${author.bgColor} text-white flex items-center justify-center font-titles font-bold select-none`}>
              {author.avatarChar}
            </div>
            <div className="text-left leading-snug">
              <span className={`block text-xs font-bold ${isHighContrast ? 'text-white' : 'text-[#1A1A2E]'}`}>
                {author.name}
              </span>
              <span className="block text-[10px] text-slate-450 uppercase font-bold tracking-wider">
                {author.role} • {article.date}
              </span>
            </div>
          </div>

          {/* Reading Metas & Control Panel Widgets */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-slate-500">
              <Clock className="w-4 h-4" />
              {article.readTime} min de leitura
            </span>

            <span className="text-slate-300">|</span>

            {/* Accessibility Reader Buttons */}
            <div className="flex items-center gap-1.5" aria-label="Controles do modo de leitura">
              <button
                onClick={() => setFontSizeLevel(prev => Math.max(0, prev - 1))}
                className="p-1 px-2 rounded-lg bg-[#F8F9FA] hover:bg-[#E8ECF0] text-slate-700 cursor-pointer disabled:opacity-40"
                disabled={fontSizeLevel === 0}
                title="Diminuir fonte do artigo"
                aria-label="Diminuir tamanho da fonte"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setFontSizeLevel(prev => Math.min(2, prev + 1))}
                className="p-1 px-2 rounded-lg bg-[#F8F9FA] hover:bg-[#E8ECF0] text-slate-700 cursor-pointer disabled:opacity-40"
                disabled={fontSizeLevel === 2}
                title="Aumentar fonte do artigo"
                aria-label="Aumentar tamanho da fonte"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={() => setIsHighContrast(!isHighContrast)}
                className={`text-[10px] font-bold px-2.5 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                  isHighContrast 
                    ? 'bg-yellow-400 text-slate-900 border-yellow-500' 
                    : 'bg-[#F8F9FA] hover:bg-slate-200 text-[#4A4A6A] border-[#E8ECF0]'
                }`}
                aria-label="Alternar modo de alto contraste para leitura"
              >
                Acessibilidade
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Main layout content grid split with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Body core article text */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Article Banner Visual Mockup */}
          <div className="rounded-xl overflow-hidden shadow-sm relative h-56 sm:h-80 bg-gradient-to-br from-[#0A3D62] to-[#1B6CA8] flex flex-col justify-between p-6 sm:p-10 text-white group select-none">
            {/* Geometric watermark lines */}
            <div className="absolute inset-x-0 bottom-0 top-0 opacity-10 flex items-center justify-center">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#27AE60] bg-emerald-500/15 px-2.5 py-1 rounded-md">
                {article.category.replace('_', ' ')} Portal Análises
              </span>
            </div>

            <div className="relative z-10 space-y-2">
              <span className="font-titles text-xl sm:text-3xl font-black leading-tight block drop-shadow-md">
                {article.title}
              </span>
              <span className="text-xs sm:text-sm text-slate-200 block drop-shadow-sm font-body italic">
                Redigido e auditado por: {author.name} ({author.role})
              </span>
            </div>
          </div>

          {/* Social Share actions row */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[#E8ECF0]">
            
            {/* Like trigger */}
            <button
              onClick={handleLike}
              className={`inline-flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-lg border transition-all hover:scale-105 cursor-pointer ${
                isLiked 
                  ? 'bg-rose-50 border-rose-150 text-rose-600' 
                  : 'bg-white border-[#E8ECF0] text-slate-600 hover:bg-slate-50'
              }`}
              aria-label={`Gostar do artigo. Curtidas atuais: ${likeCount}`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-600 font-bold' : ''}`} />
              <span>Gostei ({likeCount})</span>
            </button>

            {/* Sharing Platform icons */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1"><Share2 className="w-3.5 h-3.5" /> Compartilhar:</span>
              
              <a 
                href={waShareUrl} 
                className="p-1 px-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                title="Compartilhar no WhatsApp"
                aria-label="Compartilhar no WhatsApp"
              >
                <span className="text-[10px] font-bold">WhatsApp</span>
              </a>

              <a 
                href={xShareUrl} 
                className="p-1 px-1.5 bg-slate-100 text-slate-800 hover:bg-slate-200 rounded-lg transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                title="Compartilhar no Twitter / X"
                aria-label="Compartilhar no Twitter / X"
              >
                <span className="text-[10px] font-bold">Twitter</span>
              </a>

              <a 
                href={lnShareUrl} 
                className="p-1 px-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                title="Compartilhar no LinkedIn"
                aria-label="Compartilhar no LinkedIn"
              >
                <span className="text-[10px] font-bold">LinkedIn</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="p-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-lg flex items-center justify-center transition"
                title="Copiar URL para área de transferência"
                aria-label="Copiar link"
              >
                {showCopiedAlert ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Link className="w-3.5 h-3.5 text-slate-600" />}
              </button>
            </div>
          </div>

          {/* Copied visual notification */}
          {showCopiedAlert && (
            <div className="bg-emerald-50 text-[#27AE60] border border-emerald-100 rounded-lg p-2 flex items-center gap-1.5 text-xs font-semibold leading-none animate-bounce">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Link do artigo copiado com sucesso para a área de transferência!
            </div>
          )}

          {/* 4. Article Narrative core body text dynamically styled */}
          <div 
            className={`font-body leading-relaxed max-w-none prose prose-slate tracking-wide space-y-5 ${getFontSizeClass()} ${
              isHighContrast ? 'text-slate-200' : 'text-[#1A1A2E]'
            }`}
          >
            {/* Mapping markdown-like parts split by ## */}
            {article.content.split('##').map((section, idx) => {
              if (idx === 0) {
                // Intro paragraphs before headers
                return (
                  <div key={idx} className="space-y-4">
                    {section.split('\n\n').map((para, pIdx) => para.trim() && (
                      <p key={pIdx} className="first-letter:text-4xl first-letter:font-titles first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:text-[#0A3D62] text-justify">
                        {para}
                      </p>
                    ))}
                  </div>
                );
              }

              // Normal title and text mapping
              const lines = section.split('\n');
              const headingText = lines[0].trim();
              const restText = lines.slice(1).join('\n');

              return (
                <div key={idx} className="space-y-4 pt-4">
                  <h2 className="font-titles text-xl sm:text-2xl font-bold text-[#1A1A2E] leading-tight border-b-2 border-emerald-500/20 pb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-5 bg-[#0A3D62] rounded" />
                    {headingText}
                  </h2>
                  
                  <div className="space-y-4 text-justify">
                    {restText.split('\n\n').map((para, pIdx) => {
                      const trimmed = para.trim();
                      if (!trimmed) return null;
                      
                      // Check for markdown lists
                      if (trimmed.startsWith('* ') || trimmed.startsWith('1. ') || trimmed.startsWith('### ')) {
                        if (trimmed.startsWith('### ')) {
                          return (
                            <h3 className="font-serif text-lg font-bold text-[#0A3D62] pt-2" key={pIdx}>
                              {trimmed.replace('### ', '')}
                            </h3>
                          );
                        }
                        
                        const items = trimmed.split('\n');
                        return (
                          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-base text-slate-650" key={pIdx}>
                            {items.map((it, itIdx) => (
                              <li key={itIdx}>{it.replace(/^\* |^\d+\. /, '')}</li>
                            ))}
                          </ul>
                        );
                      }

                      return <p key={pIdx}>{trimmed}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 5. Blue Key Points box */}
          <div className="bg-[#F0F7FC] border-l-4 border-[#1B6CA8] p-5 sm:p-6 rounded-r-xl space-y-3 shadow-inner">
            <h3 className="font-titles text-sm font-black text-[#1B6CA8] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-5 h-5" />
              <span>Pontos-Chave e Resumo Operacional</span>
            </h3>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-[#4A4A6A] leading-relaxed font-body">
              {article.keyPoints.map((pt, index) => (
                <li key={index} className="flex gap-2.5">
                  <span className="text-[#1C6CA8] font-bold text-lg leading-none select-none">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Amber Warning Box if applicable */}
          {article.warning && (
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl flex items-start gap-3.5">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider">Aviso importante Editorial</h4>
                <p className="text-xs text-amber-700 font-body leading-relaxed">{article.warning}</p>
              </div>
            </div>
          )}

          {/* 7. Format comparative table if applicable */}
          {article.tableData && (
            <div className="space-y-2 pt-4">
              <h3 className="text-sm font-semibold text-[#1A1A2E] flex items-center gap-1.5 uppercase tracking-wider">
                Tabulação Comparativa de Apoio
              </h3>
              
              <div className="border border-[#E8ECF0] rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#F8F9FA] border-b border-[#E8ECF0] text-[#1A1A2E] font-bold">
                        {article.tableData.headers.map((h, i) => (
                          <th key={i} className="px-4 py-3 font-semibold uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8ECF0] font-slate-600 font-body">
                      {article.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-3 leading-relaxed">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {article.tableData.caption && (
                  <div className="bg-[#F8F9FA]/65 px-4 py-2 border-t border-[#E8ECF0] text-[10px] text-slate-450 italic text-center font-body">
                    {article.tableData.caption}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Conclusao editorial section */}
          <div className="space-y-3.5 pt-4">
            <h2 className="font-titles text-xl sm:text-2xl font-black text-[#1A1A2E] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              Disposições Finais e Conclusão
            </h2>
            <p className="text-xs sm:text-base text-[#4A4A6A] leading-relaxed font-body text-justify">
              Formular sua rotina de poupança, investimento e eficiência tributária requer perseverança operacional. Nem o Tesouro Selic renderá fortunas da noite para o dia, nem as ações pagarão lucros absurdos aos que operam com impaciência de curto prazo. O patrimônio se estrutura com depósitos calmos, diversificação profissional de classe e consistência mental física. Utilize as ferramentas de simulação do FinançasPro para guiar seus horizontes de tempo e se blindar contra os ruídos especulativos do mercado financeiro de varejo.
            </p>
          </div>

          {/* Adsterra Integration Banner */}
          <AdsterraBanner className="shadow-xs border-[#E8ECF0]" />

          {/* 8. Full-Width elegant Category final subscription CTA */}
          <div className="bg-[#1A1A2E]/5 border border-[#E8ECF0] rounded-xl p-6 text-center space-y-4">
            <h3 className="font-titles text-lg sm:text-xl font-bold text-[#1A1A2E]">
              Gostou da análise de campo de {author.name}?
            </h3>
            <p className="text-xs text-[#4A4A6A] max-w-sm mx-auto font-body leading-normal">
              Inscreva-se gratuitamente para receber de forma privada as atualizações de taxas e análises de juros toda sexta-feira.
            </p>

            {!ctaSubscribed ? (
              <form onSubmit={handleCtaSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  className="flex-grow text-xs font-semibold px-4 py-2.5 rounded-lg bg-white border border-[#E8ECF0] text-[#1A1A2E] placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0A3D62]"
                  placeholder="Seu melhor e-mail corporativo"
                  required
                  aria-label="Digitar e-mail na caixa final do artigo"
                  value={ctaEmail}
                  onChange={(e) => setCtaEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#27AE60] hover:bg-[#219653] text-white text-xs font-bold rounded-lg transition shadow-sm cursor-pointer"
                >
                  Garantir Leituras
                </button>
              </form>
            ) : (
              <div className="text-emerald-600 font-bold text-xs flex items-center justify-center gap-1.5 animate-bounce">
                <CheckCircle2 className="w-4 h-4" />
                Inscrição concluída com sucesso! Verifique sua caixa.
              </div>
            )}
          </div>

          {/* 9. Related Articles Drawer: 3 cards showing small thumbnail summaries */}
          <div className="space-y-4 pt-6 border-t border-[#E8ECF0]">
            <h3 className="font-titles text-xl font-bold text-[#1A1A2E] flex items-center gap-2">
              <span className="w-1.5 h-5 bg-[#27AE60] rounded inline-block" />
              Artigos Recomendados
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map((rel) => (
                <button
                  onClick={() => handleRelatedClick(rel.slug)}
                  key={rel.id}
                  className="w-full text-left bg-white border border-[#E8ECF0] rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group focus:outline-none focus:ring-1 focus:ring-[#0A3D62] flex flex-col justify-between"
                  aria-label={`Artigo recomendado: ${rel.title}`}
                >
                  <div className="space-y-1.5">
                    <span className="text-[9px] uppercase font-bold text-emerald-600 tracking-wider">
                      {rel.category.replace('_', ' ')}
                    </span>
                    <h4 className="font-titles text-xs font-bold text-[#1A1A2E] group-hover:text-[#0A3D62] transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  
                  <div className="flex items-center justify-between text-[10px] text-slate-450 pt-3 border-t border-dashed border-[#E8ECF0] mt-3">
                    <span>{rel.readTime} min</span>
                    <span className="text-[#27AE60] font-bold group-hover:translate-x-1 transition-transform">Ler →</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Sidebar panel (Visible on Large screens) */}
        <div className="hidden lg:block lg:col-span-4 lg:self-start">
          <Sidebar onNavigate={onNavigate} />
        </div>

      </div>

    </article>
  );
}
