/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  PiggyBank, 
  Globe, 
  Home, 
  CreditCard, 
  Briefcase, 
  Search, 
  Mail, 
  BookOpen, 
  CheckCircle2, 
  X, 
  ChevronRight, 
  Eye, 
  Heart, 
  Menu,
  Clock,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';
import { CategoryId, Category, Article } from './types';
import { CATEGORIES, EXPERT_ARTICLES, AUTHORS } from './data/blogData';

// Views
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CookieBanner from './components/CookieBanner';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import ArticleView from './components/ArticleView';
import PrivacyView from './components/PrivacyView';
import TermsView from './components/TermsView';
import AdsterraBanner from './components/AdsterraBanner';

export default function App() {
  // Navigation Routing States
  const [currentPage, setCurrentPage] = useState<string>('home'); // home, categoria, sobre, contato, artigo, privacidade, termos
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId | null>(null);
  const [activeArticleSlug, setActiveArticleSlug] = useState<string | null>(null);
  
  // Filtering and Search States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Overlay Newsletter Modal
  const [isNewsletterOpen, setIsNewsletterOpen] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSuccess, setNewsletterSuccess] = useState<boolean>(false);
  const [newsletterError, setNewsletterError] = useState<string>('');

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Router coordination callback
  const handleNavigate = (page: string, categoryId: CategoryId | null = null, articleSlug: string | null = null) => {
    setCurrentPage(page);
    setActiveCategoryId(categoryId);
    setActiveArticleSlug(articleSlug);
    setSearchQuery('');
    setSelectedTag(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Tag click handler (filters content in home or switches views)
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setSearchQuery('');
    setCurrentPage('home');
    setActiveCategoryId(null);
    setActiveArticleSlug(null);
    
    // Smooth scroll down to feedstock anchor
    const feedAnchor = document.getElementById('grid-artigos');
    if (feedAnchor) {
      feedAnchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Search trigger helper
  const handleSearchFocus = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Submit newsletter modal form
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      setNewsletterError('Por favor, informe seu e-mail.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterError('Informe um e-mail válido.');
      return;
    }
    
    setNewsletterSuccess(true);
    setNewsletterEmail('');
    setNewsletterError('');
  };

  // Get SVG React elements corresponding to category identifiers
  const getCategoryIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'PiggyBank': return <PiggyBank className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'Home': return <Home className={className} />;
      case 'CreditCard': return <CreditCard className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      default: return <BookOpen className={className} />;
    }
  };

  // Map likes and liked list in state for high dynamic accuracy
  const [likesState, setLikesState] = useState<Record<number, number>>({});
  const handleLikeChange = (articleId: number, liked: boolean) => {
    setLikesState(prev => ({
      ...prev,
      [articleId]: (prev[articleId] || EXPERT_ARTICLES.find(a => a.id === articleId)?.likes || 0) + (liked ? 1 : -1)
    }));
  };

  // Filter Articles based on Category, Search query or selected tags
  const filteredArticles = EXPERT_ARTICLES.filter(article => {
    // 1. Category check
    if (activeCategoryId && article.category !== activeCategoryId) {
      return false;
    }

    // 2. Selected tag lookup inside title, excerpt or contents
    if (selectedTag) {
      const tagLower = selectedTag.toLowerCase();
      const inTitle = article.title.toLowerCase().includes(tagLower);
      const inExcerpt = article.excerpt.toLowerCase().includes(tagLower);
      const inPoints = article.keyPoints.some(pt => pt.toLowerCase().includes(tagLower));
      if (!inTitle && !inExcerpt && !inPoints) {
        return false;
      }
    }

    // 3. Search query filter
    if (searchQuery) {
      const queryLower = searchQuery.toLowerCase();
      const matchTitle = article.title.toLowerCase().includes(queryLower);
      const matchExcerpt = article.excerpt.toLowerCase().includes(queryLower);
      const matchContent = article.content.toLowerCase().includes(queryLower);
      if (!matchTitle && !matchExcerpt && !matchContent) {
        return false;
      }
    }

    return true;
  });

  // Highlight parameters (Hero Layout configuration)
  const primaryFeatured = EXPERT_ARTICLES.find(a => a.isFeatured) || EXPERT_ARTICLES[0];
  const secondaryFeaturedList = EXPERT_ARTICLES.filter(a => a.id !== primaryFeatured.id).slice(0, 3);

  // IntersectionObserver effect for entering animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.05 });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(sec => observer.observe(sec));

    return () => observer.disconnect();
  }, [currentPage, searchQuery, activeCategoryId, selectedTag]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A2E] flex flex-col font-ui relative pb-16 lg:pb-0">
      
      {/* 1. Sticky Navigation Header */}
      <Header 
        activePage={currentPage}
        activeCategoryId={activeCategoryId}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q && currentPage !== 'home') {
            setCurrentPage('home');
            setActiveCategoryId(null);
            setActiveArticleSlug(null);
          }
        }}
        onOpenNewsletter={() => {
          setIsNewsletterOpen(true);
          setNewsletterSuccess(false);
        }}
      />

      {/* Main Container spacing buffer */}
      <main className="flex-grow pt-24 sm:pt-28 pb-12" id="conteudo-principal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SEARCH ACTIVE OUTLET OVERLAY HEADER */}
          {searchQuery && (
            <div className="bg-white border border-[#E8ECF0] rounded-xl p-5 mb-8 flex justify-between items-center shadow-sm animate-fade-in font-ui">
              <div>
                <span className="text-xs font-bold text-emerald-600 block uppercase tracking-wider">Filtro de Conteúdo</span>
                <h2 className="font-titles text-lg sm:text-2xl font-bold text-[#1A1A2E] mt-0.5">
                  Resultados para: "{searchQuery}"
                </h2>
                <p className="text-xs text-slate-450 mt-1">Found {filteredArticles.length} matching articles</p>
              </div>
              <button 
                onClick={() => setSearchQuery('')}
                className="px-3.5 py-1.5 bg-[#F8F9FA] hover:bg-slate-200 text-[#4A4A6A] rounded-lg text-xs font-bold transition border border-[#E8ECF0]"
                aria-label="Limpar campo de pesquisa"
              >
                Limpar Busca
              </button>
            </div>
          )}

          {/* TAG FILTERS ACTIVE HEADER */}
          {selectedTag && !searchQuery && (
            <div className="bg-white border border-[#E8ECF0] rounded-xl p-5 mb-8 flex justify-between items-center shadow-sm animate-fade-in font-ui">
              <div>
                <span className="text-xs font-bold text-[#1B6CA8] block uppercase tracking-wider">Filtro por tag</span>
                <h2 className="font-titles text-lg sm:text-2xl font-bold text-[#1A1A2E] mt-0.5">
                  Artigos sobre: <span className="text-[#0A3D62] underline">#{selectedTag}</span>
                </h2>
              </div>
              <button 
                onClick={() => setSelectedTag(null)}
                className="px-3.5 py-1.5 bg-[#F8F9FA] hover:bg-slate-200 text-[#4A4A6A] rounded-lg text-xs font-bold transition border border-[#E8ECF0]"
                aria-label="Remover filtro de tag"
              >
                Ver Tudo
              </button>
            </div>
          )}

          {/* ======================================= */}
          {/* VIEW: HOME PAGE                         */}
          {/* ======================================= */}
          {currentPage === 'home' && !activeCategoryId && (
            <div className="space-y-10">
              
              {/* editorial Hero Section block */}
              {!searchQuery && !selectedTag && (
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
                  
                  {/* Big primary featured column card */}
                  <div className="lg:col-span-8 bg-white border border-[#E8ECF0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between group">
                    <div className="relative h-48 sm:h-72 bg-gradient-to-tr from-[#0A3D62] to-[#1B6CA8] p-5 sm:p-8 flex flex-col justify-between text-white select-none">
                      {/* Pattern decoration */}
                      <div className="absolute inset-x-0 bottom-0 top-0 opacity-10">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                          <defs>
                            <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                          </defs>
                        </svg>
                      </div>

                      <span className="inline-block self-start text-[10px] sm:text-xs font-bold bg-[#27AE60] text-white py-1 px-2.5 rounded-full uppercase tracking-wider z-10 shadow-sm leading-none">
                        Destaque Editorial
                      </span>

                      <div className="space-y-2 z-10">
                        <span className="text-yellow-300 text-xs font-extrabold flex items-center gap-1">
                          <Sparkles className="w-4.5 h-4.5" />
                          RECOMENDADO PARA VOCÊ
                        </span>
                        <h2 className="font-titles text-xl sm:text-3.5xl font-black leading-tight drop-shadow">
                          {primaryFeatured.title}
                        </h2>
                      </div>
                    </div>

                    <div className="p-5 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                      <p className="text-sm font-body text-[#4A4A6A] leading-relaxed text-justify line-clamp-3">
                        {primaryFeatured.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E8ECF0]">
                        <div className="flex items-center gap-2.5 text-xs text-[#1A1A2E] font-medium leading-none">
                          <span className="w-8 h-8 rounded-lg bg-[#0A3D62] text-white flex items-center justify-center font-titles font-semibold select-none">CM</span>
                          <div>
                            <span className="font-bold block text-slate-800 leading-tight">Carlos Malta</span>
                            <span className="text-[10px] text-slate-450 uppercase font-bold tracking-wider block mt-0.5">Economista-Chefe</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleNavigate('artigo', null, primaryFeatured.slug)}
                          className="px-5 py-2.5 bg-[#0A3D62] hover:bg-[#1B6CA8] text-white text-xs font-bold rounded-xl shadow transition duration-200 flex items-center gap-1 focus:ring-2 focus:ring-[#0A3D62] cursor-pointer"
                          aria-label={`Ler o artigo em destaque: ${primaryFeatured.title}`}
                        >
                          Ler Artigo Completo
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Secondary 3 vertical articles column next to it */}
                  <div className="lg:col-span-4 flex flex-col justify-between gap-4">
                    <h3 className="font-titles text-sm font-bold text-[#1A1A2E] uppercase tracking-wider pb-1.5 border-b-2 border-[#E8ECF0] block leading-none">
                      Secundários em Foco
                    </h3>

                    <div className="space-y-4 flex-grow flex flex-col justify-between">
                      {secondaryFeaturedList.map((sec) => (
                        <button
                          onClick={() => handleNavigate('artigo', null, sec.slug)}
                          key={sec.id}
                          className="w-full text-left bg-white border border-[#E8ECF0] rounded-xl p-4 shadow-sm hover:shadow transition group focus:outline-none focus:ring-1 focus:ring-[#0A3D62] flex flex-col justify-between flex-grow cursor-pointer"
                          aria-label={`Artigo em foco: ${sec.title}`}
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[10px] text-emerald-600 font-bold uppercase tracking-wider leading-none">
                              <span>{sec.category.replace('_', ' ')}</span>
                              <span className="text-slate-400 font-medium font-ui flex items-center gap-0.5">
                                <Clock className="w-3 h-3" />
                                {sec.readTime}m
                              </span>
                            </div>
                            <h4 className="font-titles text-xs sm:text-sm font-bold text-[#1A1A2E] group-hover:text-[#0A3D62] transition line-clamp-2 leading-snug">
                              {sec.title}
                            </h4>
                          </div>

                          <div className="text-[9px] uppercase font-bold text-[#27AE60] flex items-center gap-1 mt-2.5">
                            <span>Continuar Lendo</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                </section>
              )}

              {/* 2. categories grid horizontal section */}
              <section className="py-6 border-y border-[#E8ECF0]">
                <div className="text-center mb-6 max-w-sm mx-auto space-y-1">
                  <h2 className="font-titles text-xl sm:text-2xl font-bold text-[#1A1A2E]">
                    Explore Diferentes Temas
                  </h2>
                  <p className="text-xs text-[#4A4A6A] font-body">
                    Filtre o feed e acesse análises direcionadas selecionando um nicho abaixo
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleNavigate('categoria', cat.id)}
                      className="bg-white border border-[#E8ECF0] p-4.5 rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 text-center font-ui flex flex-col items-center justify-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0A3D62]"
                      aria-label={`Explorar categoria ${cat.name}`}
                    >
                      <div className={`p-2.5 rounded-lg border transition group-hover:scale-105 duration-200 ${cat.bgColor}`}>
                        {getCategoryIcon(cat.iconName, "w-5 h-5")}
                      </div>
                      <span className="text-xs font-bold text-[#1A1A2E] leading-dense tracking-tight">
                        {cat.name}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Adsterra Integration Banner */}
              <AdsterraBanner className="shadow-xs border-[#E8ECF0] max-w-5xl mx-auto" label="Recomendação de Patrocinador" />

              {/* 3. Main core articles Feed split layout */}
              <section className="grid grid-cols-1 lg:grid-cols-12 gap-10" id="grid-artigos">
                
                {/* Left Feed Grid Column and indices list */}
                <div className="lg:col-span-8 space-y-6">
                  <h3 className="font-titles text-lg sm:text-2xl font-bold text-[#1A1A2E] border-b-2 border-emerald-500/20 pb-2.5 mt-2 flex items-center justify-between">
                    <span>{selectedTag ? `Artigos Filtrados por #${selectedTag}` : 'Acervo Editoriais de Análise'}</span>
                    <span className="text-xs text-slate-450 font-ui font-medium">Visualizando {filteredArticles.length} matérias</span>
                  </h3>

                  {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {filteredArticles.map((article) => {
                        const cellCategory = CATEGORIES.find(c => c.id === article.category) as Category;
                        const likesCount = likesState[article.id] !== undefined ? likesState[article.id] : article.likes;
                        
                        return (
                          <article 
                            key={article.id}
                            className="bg-white rounded-2xl border border-[#E8ECF0] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group fade-in-section"
                          >
                            <div className="relative h-36 bg-gradient-to-tr from-[#0A3D62] to-[#1B6CA8] flex items-center p-4 text-white select-none origin-top">
                              {/* Small graphic standard SVG patterned */}
                              <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="30" r="30" fill="currentColor" />
                                <circle cx="200" cy="40" r="60" fill="currentColor" />
                              </svg>
                              <span className={`absolute left-4 top-4 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-inner ${cellCategory.bgColor}`}>
                                {cellCategory.name}
                              </span>
                              <div className="font-titles text-xs font-bold leading-tight line-clamp-2 md:pt-4 drop-shadow pr-2">
                                {article.title}
                              </div>
                            </div>

                            <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-3">
                              <p className="text-xs text-[#4A4A6A] leading-relaxed line-clamp-3 font-body text-justify">
                                {article.excerpt}
                              </p>

                              <div className="pt-3 border-t border-[#E8ECF0]" />

                              <div className="flex items-center justify-between">
                                <div className="text-[10px] text-slate-450 leading-none">
                                  <span className="font-bold text-[#1A1A2E]">{article.date}</span>
                                  <span className="mx-1">•</span>
                                  <span>{article.readTime} min</span>
                                </div>

                                <button
                                  onClick={() => handleNavigate('artigo', null, article.slug)}
                                  className="text-xs font-bold text-[#0A3D62] hover:text-[#27AE60] flex items-center gap-0.5 leading-none cursor-pointer focus:outline-none"
                                  aria-label={`Ler artigo completo: ${article.title}`}
                                >
                                  Continuar lendo →
                                </button>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-10 text-center space-y-3 font-ui">
                      <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto border">
                        <Search className="w-6 h-6" />
                      </div>
                      <h4 className="font-titles text-lg font-bold text-slate-800">
                        Nenhum artigo localizado
                      </h4>
                      <p className="text-xs text-slate-500 max-w-sm mx-auto">
                        Infelizmente não encontramos publicações com os critérios "{searchQuery || selectedTag}". Tente utilizar palavras mais amplas de renda fixa ou investimentos.
                      </p>
                      <button 
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedTag(null);
                        }}
                        className="px-4 py-2 bg-[#0A3D62] hover:bg-[#1B6CA8] text-white text-xs font-bold rounded-lg transition"
                      >
                        Redefinir Filtros
                      </button>
                    </div>
                  )}
                </div>

                {/* Right side: Sidebar (Desktop only) */}
                <div className="hidden lg:block lg:col-span-4 lg:self-start">
                  <Sidebar 
                    onNavigate={handleNavigate} 
                    onTagClick={handleTagClick}
                  />
                </div>

              </section>

              {/* 4. Large full-width middle promotional box */}
              <section className="bg-[#1A1A2E] rounded-2xl p-7 sm:p-10 text-white relative overflow-hidden shadow-lg select-none fade-in-section">
                <div className="absolute right-0 top-0 bottom-0 opacity-[0.03] flex items-center pr-10">
                  <Mail className="w-96 h-96" />
                </div>
                
                <div className="relative z-10 max-w-2xl space-y-4">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md uppercase tracking-widest leading-none inline-block">
                    CONHECIMENTO É ATIVO
                  </span>
                  <h2 className="font-titles text-xl sm:text-3.5xl font-black leading-tight">
                    Análise macroeconômica limpa na sua caixa de entrada
                  </h2>
                  <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-body">
                    Assine gratuitamente o boletim semanal **FinançasPro**. Receba as projeções das taxas Selic, análises comparativas de CDB e informativos setoriais brasileiros diretamente compilados por nossos economistas.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsNewsletterOpen(true);
                        setNewsletterSuccess(false);
                      }}
                      className="px-6 py-3 bg-[#27AE60] hover:bg-[#219653] text-white text-xs font-bold rounded-xl shadow-md transition hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      Aproveitar Assinatura Gratuita
                    </button>
                  </div>
                </div>
              </section>

            </div>
          )}

          {/* ======================================= */}
          {/* VIEW: CATEGORY ARTICLES VIEW            */}
          {/* ======================================= */}
          {currentPage === 'categoria' && activeCategoryId && (
            <div className="space-y-8 animate-fade-in font-ui">
              {/* Category Showcase Header Banner */}
              {(() => {
                const catInfo = CATEGORIES.find(c => c.id === activeCategoryId) as Category;
                return (
                  <div className="bg-white border border-[#E8ECF0] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6">
                    <div className={`p-4 rounded-xl border shrink-0 scale-110 ${catInfo.bgColor}`}>
                      {getCategoryIcon(catInfo.iconName, "w-8 h-8")}
                    </div>
                    <div className="space-y-1 text-center md:text-left">
                      <span className="text-xs font-bold text-[#27AE60] block uppercase tracking-wider">Você está na categoria</span>
                      <h1 className="font-titles text-2xl sm:text-3xl font-black text-[#1A1A2E] leading-none mt-0.5">{catInfo.name}</h1>
                      <p className="text-xs sm:text-sm text-slate-500 max-w-2xl font-body leading-relaxed">{catInfo.description}</p>
                    </div>
                  </div>
                );
              })()}

              {/* Categoric content grid split with sidebar */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Left Side: Category articles list */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center justify-between border-b pb-2">
                    <h2 className="font-titles text-lg font-bold text-[#1A1A2E] flex items-center gap-1.5 leading-none">
                      <span className="w-1.5 h-4 bg-[#0A3D62] rounded" />
                      Análises de {CATEGORIES.find(c => c.id === activeCategoryId)?.name}
                    </h2>
                    <span className="text-xs text-slate-400 font-medium">Encontrados {filteredArticles.length} artigos</span>
                  </div>

                  {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {filteredArticles.map((article) => {
                        const cellCategory = CATEGORIES.find(c => c.id === article.category) as Category;
                        return (
                          <article 
                            key={article.id}
                            className="bg-white rounded-2xl border border-[#E8ECF0] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                          >
                            <div className="relative h-32 bg-gradient-to-tr from-[#0A3D62] to-[#1B6CA8] p-4 text-white flex items-end select-none">
                              <h3 className="font-titles text-xs sm:text-sm font-bold leading-tight line-clamp-2 drop-shadow z-10">
                                {article.title}
                              </h3>
                              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-350" />
                            </div>

                            <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-3">
                              <p className="text-xs text-[#4A4A6A] leading-relaxed line-clamp-3 font-body text-justify">
                                {article.excerpt}
                              </p>

                              <div className="pt-3 border-t border-[#E8ECF0] flex items-center justify-between text-[11px] text-slate-450">
                                <span>{article.date}</span>
                                <button
                                  onClick={() => handleNavigate('artigo', null, article.slug)}
                                  className="text-xs font-bold text-[#0A3D62] hover:text-[#27AE60] focus:outline-none"
                                >
                                  Ler análise →
                                </button>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="bg-white border rounded-2xl p-8 text-center text-slate-500 font-body">
                      Nenhum artigo publicado sob esta categoria no momento. Retorne à{' '}
                      <button onClick={() => handleNavigate('home')} className="text-[#0A3D62] underline font-bold">Página Inicial</button>.
                    </div>
                  )}
                </div>

                {/* Right Side: Sidebar */}
                <div className="hidden lg:block lg:col-span-4 lg:self-start">
                  <Sidebar 
                    onNavigate={handleNavigate} 
                    onTagClick={handleTagClick}
                  />
                </div>

              </div>
            </div>
          )}

          {/* ======================================= */}
          {/* VIEW: ARTICLE SINGLE FULL VIEW          */}
          {/* ======================================= */}
          {currentPage === 'artigo' && activeArticleSlug && (
            <ArticleView 
              articleSlug={activeArticleSlug}
              onNavigate={handleNavigate}
              onLikeChange={handleLikeChange}
            />
          )}

          {/* ======================================= */}
          {/* VIEW: SOBRE NOS PAGE                    */}
          {/* ======================================= */}
          {currentPage === 'sobre' && <AboutView />}

          {/* ======================================= */}
          {/* VIEW: CONTATO PAGE                      */}
          {/* ======================================= */}
          {currentPage === 'contato' && <ContactView onNavigate={handleNavigate} />}

          {/* ======================================= */}
          {/* VIEW: PRIVACY COMPLIANCE VIEW           */}
          {/* ======================================= */}
          {currentPage === 'privacidade' && <PrivacyView />}

          {/* ======================================= */}
          {/* VIEW: TERMS OF USE VIEW                 */}
          {/* ======================================= */}
          {currentPage === 'termos' && <TermsView />}

        </div>
      </main>

      {/* 5. Cookie Compliance popup banner */}
      <CookieBanner />

      {/* 6. Comprehensive Corporate Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* ======================================= */}
      {/* MOBILE-ONLY FLOATING BOTTOM NAVIGATION   */}
      {/* ======================================= */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E8ECF0] shadow-2lg block lg:hidden"
        role="navigation"
        aria-label="Ações rápidas de rodapé móvel"
      >
        <div className="grid grid-cols-5 h-16 max-w-md mx-auto items-center text-center">
          
          {/* Início trigger */}
          <button
            onClick={() => handleNavigate('home')}
            className={`flex flex-col items-center justify-center h-full focus:outline-none focus:bg-[#F8F9FA] transition-colors ${
              currentPage === 'home' && !activeCategoryId ? 'text-[#0A3D62]' : 'text-slate-450'
            }`}
            style={{ minHeight: '44px', minWidth: '44px' }}
            aria-label="Ir para a página inicial"
          >
            <BookOpen className="w-5 h-5 leading-none" />
            <span className="text-[9px] font-bold mt-1 tracking-tight">Início</span>
          </button>

          {/* Categorias trigger */}
          <button
            onClick={() => {
              handleNavigate('home');
              setTimeout(() => {
                const headerAnchor = document.getElementById('logo-button');
                if (headerAnchor) headerAnchor.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className={`flex flex-col items-center justify-center h-full focus:outline-none focus:bg-[#F8F9FA] transition-colors ${
              currentPage === 'categoria' ? 'text-[#0A3D62]' : 'text-slate-450'
            }`}
            style={{ minHeight: '44px', minWidth: '44px' }}
            aria-label="Ver seções e categorias editoriais"
          >
            <TrendingUp className="w-5 h-5 leading-none" />
            <span className="text-[9px] font-bold mt-1 tracking-tight">Categorias</span>
          </button>

          {/* Busca trigger */}
          <button
            onClick={handleSearchFocus}
            className="flex flex-col items-center justify-center h-full focus:outline-none focus:bg-[#F8F9FA] text-slate-450 transition-colors"
            style={{ minHeight: '44px', minWidth: '44px' }}
            aria-label="Focar campo de pesquisa de artigos"
          >
            <Search className="w-5 h-5 leading-none" />
            <span className="text-[9px] font-bold mt-1 tracking-tight">Pesquisa</span>
          </button>

          {/* Newsletter trigger */}
          <button
            onClick={() => {
              setIsNewsletterOpen(true);
              setNewsletterSuccess(false);
            }}
            className={`flex flex-col items-center justify-center h-full focus:outline-none focus:bg-[#F8F9FA] transition-colors ${
              isNewsletterOpen ? 'text-[#27AE60]' : 'text-slate-450'
            }`}
            style={{ minHeight: '44px', minWidth: '44px' }}
            aria-expanded={isNewsletterOpen}
            aria-label="Abrir formulário de boletim newsletter"
          >
            <Mail className="w-5 h-5 leading-none" />
            <span className="text-[9px] font-bold mt-1 tracking-tight">Boletim</span>
          </button>

          {/* Menu indicator / Toggle back view */}
          <button
            onClick={() => handleNavigate('sobre')}
            className={`flex flex-col items-center justify-center h-full focus:outline-none focus:bg-[#F8F9FA] transition-colors ${
              currentPage === 'sobre' ? 'text-[#0A3D62]' : 'text-slate-450'
            }`}
            style={{ minHeight: '44px', minWidth: '44px' }}
            aria-label="Ir para fomento de sobre e equipe"
          >
            <Award className="w-5 h-5 leading-none" />
            <span className="text-[9px] font-bold mt-1 tracking-tight">Sobre</span>
          </button>

        </div>
      </div>

      {/* ======================================= */}
      {/* NEWSLETTER POPUP SIGNUP OVERLAY MODAL   */}
      {/* ======================================= */}
      {isNewsletterOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs px-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-newsletter-title"
        >
          {/* Modal box */}
          <div className="bg-[#1A1A2E] text-slate-200 border border-slate-800 rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl overflow-hidden font-ui">
            
            {/* Close button with high hit-area */}
            <button
              onClick={() => setIsNewsletterOpen(false)}
              className="absolute right-4 top-4 p-2 bg-slate-850 hover:bg-slate-750 text-slate-350 rounded-xl transition hover:scale-105 select-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
              style={{ minHeight: '44px', minWidth: '44px' }}
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Pattern background element */}
            <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-emerald-500/5 rounded-full filter blur-xl pointer-events-none" />

            {!newsletterSuccess ? (
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold text-[#27AE60] tracking-widest block leading-none">
                  Inscrição Inteiramente Gratuita
                </span>
                
                <h3 id="modal-newsletter-title" className="font-titles text-xl sm:text-2.5xl font-bold leading-tight text-white pr-6">
                  Inteligência financeira real toda semana
                </h3>
                
                <p className="text-xs text-slate-300 font-body leading-relaxed text-justify">
                  Inscreva-se na central **FinançasPro**. Enviamos todas as sextas-feiras uma síntese das movimentações de mercado, projeções da Selic, e alertas relevantes da Receita e Poupança de forma direta, sem spam e sem custos ocultos.
                </p>

                <form onSubmit={handleNewsletterSubmit} className="space-y-3 pt-2">
                  <div>
                    <label id="newsletter-email-label" htmlFor="newsletter_modal_email" className="block text-[10px] uppercase font-bold text-slate-400 mb-1 leading-none">
                      Seu E-mail Profissional
                    </label>
                    <input
                      id="newsletter_modal_email"
                      type="email"
                      className="w-full text-xs font-semibold px-4 py-3 rounded-lg bg-white/10 border border-slate-700 text-white placeholder-slate-400 focus:bg-white focus:text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#27AE60]/50 transition-colors"
                      placeholder="Ex: joao@empresa.com.br"
                      aria-labelledby="newsletter-email-label"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        setNewsletterError('');
                      }}
                    />
                    {newsletterError && (
                      <p className="text-[11px] font-bold text-red-400 mt-1">{newsletterError}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#27AE60] hover:bg-[#219653] text-white text-xs font-bold rounded-lg transition-transform hover:scale-[1.015] active:scale-95 cursor-pointer shadow-md text-center"
                  >
                    Ativar Assinatura de Boletim
                  </button>
                </form>

                <p className="text-[10px] text-slate-500 text-center font-body pt-1">
                  Ao assinar, você concorda em compartilhar seu e-mail de acordo com nossa Política e Termos. Desinscreva-se opcionalmente a qualquer momento com um único clique.
                </p>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4 animate-fade-in flex flex-col items-center">
                <div className="w-14 h-14 bg-[#27AE60]/10 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h3 className="font-titles text-xl sm:text-2xl font-bold text-white">Inscrição Ativada!</h3>
                
                <p className="text-xs text-slate-200 leading-relaxed font-body max-w-sm">
                  Parabéns por priorizar o controle de suas finanças. O manual do investidor inteligente já está a caminho de sua caixa postal. Certifique-se de salvar nosso endereço da central para não cair no spam.
                </p>

                <button
                  onClick={() => setIsNewsletterOpen(false)}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-705 text-white text-xs font-bold rounded-lg cursor-pointer max-w-xs"
                >
                  Concluído
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
