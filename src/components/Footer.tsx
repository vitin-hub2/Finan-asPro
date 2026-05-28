/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TrendingUp, Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { CategoryId } from '../types';

interface FooterProps {
  onNavigate: (page: string, categoryId?: CategoryId | null, articleSlug?: string | null) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = 2026;

  const handleNavClick = (page: string, categoryId: CategoryId | null = null) => {
    onNavigate(page, categoryId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A2E] text-slate-300 font-ui pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-850">
          
          {/* Brand Presentation */}
          <div className="space-y-4">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left p-1 rounded focus:ring-2 focus:ring-offset-2 focus:ring-[#27AE60] focus:outline-none"
              aria-label="Voltar para o topo da página inicial do FinançasPro"
            >
              <div className="w-8 h-8 bg-gradient-to-tr from-[#1B6CA8] to-[#27AE60] rounded-lg flex items-center justify-center text-white">
                <TrendingUp className="w-4.5 h-4.5" aria-hidden="true" />
              </div>
              <span className="font-titles text-xl font-black tracking-tight text-white">
                Finanças<span className="text-[#27AE60]">Pro</span>
              </span>
            </button>
            
            <p className="text-xs text-slate-400 leading-relaxed font-body">
              FinançasPro é um portal jornalístico independente de educação financeira e investimentos. 
              Nossa missão é prover clareza analítica e dados fundamentados para subsidiar decisões reais das pessoas.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 pt-1">
              {[
                { icon: <Facebook className="w-4 h-4" />, label: 'Facebook', url: 'https://facebook.com/financaspro' },
                { icon: <Twitter className="w-4 h-4" />, label: 'Twitter / X', url: 'https://twitter.com/financaspro' },
                { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', url: 'https://linkedin.com/company/financaspro' },
                { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', url: 'https://instagram.com/financaspro' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#27AE60] hover:text-white flex items-center justify-center transition-colors text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#27AE60]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar nossa página no ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-[#27AE60] pl-2.5">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors">
                  Início (Home)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('sobre')} className="hover:text-white transition-colors">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contato')} className="hover:text-white transition-colors">
                  Fale Conosco
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('sobre')} className="hover:text-white transition-colors">
                  Equipe Editorial
                </button>
              </li>
            </ul>
          </div>

          {/* Categories Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-[#1B6CA8] pl-2.5">
              Categorias Principais
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNavClick('categoria', 'investimentos')} className="hover:text-white transition-colors">
                  💹 Investimentos Gerais
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('categoria', 'financas_pessoais')} className="hover:text-white transition-colors">
                  🏦 Finanças Pessoais
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('categoria', 'economia')} className="hover:text-white transition-colors">
                  📊 Macroeconomia Real
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('categoria', 'patrimonio')} className="hover:text-white transition-colors">
                  🏠 Proteção Patrimonial
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('categoria', 'renda_extra')} className="hover:text-white transition-colors">
                  📈 Renda Extra Paralela
                </button>
              </li>
            </ul>
          </div>

          {/* Address & Contact Information */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-emerald-500 pl-2.5">
              Contato & Redação
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 font-body">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#27AE60] mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  Av. Brigadeiro Faria Lima, 1485, 10º Andar<br />
                  Jardim Paulistano, São Paulo - SP<br />
                  CEP 01452-002
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#27AE60] shrink-0" aria-hidden="true" />
                <a href="mailto:contato@financaspro.com.br" className="hover:text-white transition-colors leading-none">
                  contato@financaspro.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>AdSense Verified & WCAG 2.1 Compliant Portal</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Warnings - Critical for AdSense compliance */}
        <div className="py-8 text-[11px] text-slate-450 leading-relaxed border-b border-slate-850 space-y-3 font-body">
          <p>
            <span className="font-bold underline text-slate-300">AVISO LEGAL DE RISCO:</span> O conteúdo publicado pelo portal FinançasPro é estritamente educativo e informativo. FinançasPro não presta assessoria, consultoria financeira oficial, gestão patrimonial focada ou serviços de corretagem mobiliária. Nenhuma publicação ou ferramenta de calculadora contida neste site se constitui em recomendação explícita de compra ou venda de ações, títulos públicos, fundos imobiliários, debêntures, criptoativos ou qualquer outro ativo mobiliário nacional ou internacional de mercado.
          </p>
          <p>
            O retorno histórico de qualquer aplicação de renda fixa ou variável abordado em nossas matérias de análise não serve como garantia ou promessa de rentabilidades financeiras futuras lucrativas. O mercado de capitais envolve oscilações constantes de preços motivados por fatores conjunturais mundiais ou fiscais do país. O leitor é integralmente responsável civil por suas ações e transações financeiras tomadas junto às suas respectivas corretoras ou bancos comerciais.
          </p>
          <p>
            O portal FinançasPro é de propriedade e editado por FinançasPro S.A. CNPJ nº 42.114.150/0001-20. Todo o material publicado segue as diretrizes da nossa Política Editorial de independência jornalística.
          </p>
        </div>

        {/* Footer Bottom Credentials */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {currentYear} FinançasPro. Todos os direitos reservados. Criado com integridade jornalística editorial brasileira.
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => handleNavClick('privacidade')} className="hover:text-white transition-colors">
              Política de Privacidade
            </button>
            <span className="text-slate-700">|</span>
            <button onClick={() => handleNavClick('termos')} className="hover:text-white transition-colors">
              Termos de Uso
            </button>
            <span className="text-slate-700">|</span>
            <button onClick={() => handleNavClick('privacidade')} className="hover:text-white transition-colors">
              Uso de Cookies
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
