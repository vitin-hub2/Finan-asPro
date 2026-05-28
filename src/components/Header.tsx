/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Mail, TrendingUp, BookOpen } from 'lucide-react';
import { CategoryId } from '../types';

interface HeaderProps {
  activePage: string;
  activeCategoryId: CategoryId | null;
  onNavigate: (page: string, categoryId?: CategoryId | null, articleSlug?: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenNewsletter: () => void;
}

export default function Header({
  activePage,
  activeCategoryId,
  onNavigate,
  searchQuery,
  onSearchChange,
  onOpenNewsletter
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate reading scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      
      // Toggle sticky shadow/shading
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string, categoryId: CategoryId | null = null) => {
    onNavigate(page, categoryId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Início', page: 'home', categoryId: null },
    { label: 'Investimentos', page: 'categoria', categoryId: 'investimentos' as CategoryId },
    { label: 'Finanças Pessoais', page: 'categoria', categoryId: 'financas_pessoais' as CategoryId },
    { label: 'Economia', page: 'categoria', categoryId: 'economia' as CategoryId },
    { label: 'Sobre Nós', page: 'sobre', categoryId: null },
    { label: 'Contato', page: 'contato', categoryId: null }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md border-b border-[#E8ECF0]' : 'bg-white border-b border-[#E8ECF0]'
    } font-ui`}>
      {/* Reading progress bar */}
      <div 
        className="h-1 bg-[#27AE60] transition-all duration-155 ease-out origin-left sticky top-0 left-0 z-50 animate-pulse" 
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso de leitura"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo with explicit SVG */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#0A3D62] p-1.5 rounded-lg group"
            id="logo-button"
            aria-label="Página inicial do FinançasPro"
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-[#0A3D62] to-[#1B6CA8] rounded-xl flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <TrendingUp className="w-5.5 h-5.5" aria-hidden="true" />
            </div>
            <div className="text-left">
              <span className="block font-titles text-xl sm:text-2xl font-black tracking-tight text-[#1A1A2E]">
                Finanças<span className="text-[#27AE60]">Pro</span>
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-[#4A4A6A] leading-none mt-0.5">
                Inteligência Real
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" role="navigation" aria-label="Negação principal">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navItems.map((item, idx) => {
                const isActive = 
                  activePage === item.page && 
                  (item.categoryId === null || activeCategoryId === item.categoryId);
                
                return (
                  <li key={idx}>
                    <button
                      onClick={() => handleNavClick(item.page, item.categoryId)}
                      className={`relative py-2 px-1 focus:outline-none transition-colors duration-200 cursor-pointer ${
                        isActive 
                          ? 'text-[#0A3D62] font-bold' 
                          : 'text-[#4A4A6A] hover:text-[#0A3D62]'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#27AE60] rounded-full" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Search bar and CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative w-56 xl:w-64">
              <span className="absolute inset-y-0 left-3 flex items-center pr-3 pointer-events-none text-gray-400">
                <Search className="w-4 h-4" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="w-full text-xs font-semibold pl-9 pr-4 py-2 border border-[#E8ECF0] rounded-xl bg-[#F8F9FA] text-[#1A1A2E] placeholder-[#4A4A6A] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0A3D62]/25 focus:border-[#0A3D62] transition-all"
                placeholder="Pesquisar artigos..."
                value={searchQuery}
                aria-label="Digitar termos para busca de artigos"
                onChange={(e) => onSearchChange(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-2.5 text-xs text-[#4A4A6A] hover:text-[#1A1A2E] p-0.5"
                  aria-label="Limpar campo de pesquisa"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={onOpenNewsletter}
              className="px-4 py-2.5 bg-[#27AE60] hover:bg-[#219653] text-white text-xs font-bold rounded-xl shadow-sm transition-all hover:shadow duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#27AE60]"
              aria-label="Inscrever-se na Newsletter de finanças"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Newsletter
            </button>
          </div>

          {/* Tablet & Mobile Buttons (Menu trigger & Search Toggle) */}
          <div className="flex lg:hidden items-center gap-2.5">
            <div className="relative w-36 sm:w-48">
              <span className="absolute inset-y-0 left-2.5 flex items-center text-gray-400">
                <Search className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="w-full text-xs font-semibold pl-8 pr-6 py-1.5 border border-[#E8ECF0] rounded-lg bg-[#F8F9FA] text-[#1A1A2E] focus:bg-white focus:ring-1 focus:ring-[#0A3D62] transition-colors"
                placeholder="Pesquisar..."
                aria-label="Busca em dispositivos móveis"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="absolute right-1.5 top-2 text-xs text-[#4A4A6A] hover:text-[#1A1A2E]"
                  aria-label="Limpar pesquisa"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 sm:p-2.5 border border-[#E8ECF0] rounded-xl text-[#0A3D62] hover:bg-[#F8F9FA] active:bg-[#E8ECF0] focus:ring-2 focus:ring-[#0A3D62] transition-colors"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Menu Drawer with slide-down transition */}
      <div 
        id="mobile-nav-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[#E8ECF0] bg-white ${
          isMenuOpen ? 'max-video opacity-100 py-4 block' : 'max-h-0 opacity-0 hidden'
        }`}
      >
        <div className="px-4 space-y-2">
          <ul className="space-y-1">
            {navItems.map((item, idx) => {
              const isActive = 
                activePage === item.page && 
                (item.categoryId === null || activeCategoryId === item.categoryId);
              
              return (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(item.page, item.categoryId)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive 
                        ? 'bg-[#0A3D62]/5 text-[#0A3D62] border-l-4 border-[#27AE60]' 
                        : 'text-[#4A4A6A] hover:bg-[#F8F9FA] hover:text-[#1A1A2E]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <BookOpen className={`w-4 h-4 opacity-50 ${isActive ? 'text-[#0A3D62]' : 'hidden'}`} />
                  </button>
                </li>
              );
            })}
          </ul>
          
          <div className="pt-4 border-t border-[#E8ECF0] px-4">
            <button
              onClick={() => {
                onOpenNewsletter();
                setIsMenuOpen(false);
              }}
              className="w-full py-3 bg-[#27AE60] text-center text-white text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#27AE60]"
            >
              <Mail className="w-4 h-4" />
              Inscrever-se na Newsletter
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
