/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { FAQS } from '../data/blogData';
import { ContactFormData } from '../types';

interface ContactViewProps {
  onNavigate: (page: string) => void;
}

export default function ContactView({ onNavigate }: ContactViewProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Nome completo é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail para conversação é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail informado é inválido.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'O assunto da pauta é obrigatório.';
    if (!formData.message.trim()) {
      newErrors.message = 'Sua mensagem de contato não pode ser vazia.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Sua mensagem é curta demais (mínimo de 15 caracteres).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset after success
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="space-y-12 font-ui max-w-5xl mx-auto py-4 animate-fade-in" id="conteudo-principal">
      
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-bold text-[#1B6CA8] bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
          Fale Conosco
        </span>
        <h1 className="font-titles text-3xl sm:text-5xl font-black text-[#1A1A2E] tracking-tight">
          Estamos abertos a discussões
        </h1>
        <p className="text-xs sm:text-base text-[#4A4A6A] font-body leading-relaxed">
          Tem dúvidas sobre pautas, parcerias editoriais programáticas AdSense ou deseja encaminhar um feedback à nossa redação de jornalistas? Escolha o melhor canal.
        </p>
      </div>

      {/* Main Grid: Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
        
        {/* Contact Coordinates Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl border border-[#E8ECF0] p-6 shadow-sm space-y-6">
            <h2 className="font-titles text-xl font-bold text-[#1A1A2E] border-b border-[#E8ECF0] pb-3">
              Informações de Contato
            </h2>

            <ul className="space-y-5 text-sm text-[#4A4A6A]">
              <li className="flex items-start gap-3.5">
                <div className="p-2 bg-emerald-50 text-[#27AE60] rounded-xl border border-emerald-100 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#1A1A2E] uppercase tracking-wider mb-0.5">Central Corporativa</span>
                  <a href="mailto:contato@financaspro.com.br" className="hover:text-[#0A3D62] hover:underline font-semibold text-slate-705">
                    contato@financaspro.com.br
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="p-2 bg-blue-50 text-[#1B6CA8] rounded-xl border border-blue-105 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#1A1A2E] uppercase tracking-wider mb-0.5">Envio de Pautas</span>
                  <a href="mailto:redacao@financaspro.com.br" className="hover:text-[#0A3D62] hover:underline font-semibold text-slate-705">
                    redacao@financaspro.com.br
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="p-2 bg-[#F8F9FA] text-[#0A3D62] rounded-xl border border-slate-200 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#1A1A2E] uppercase tracking-wider mb-0.5">Telefone de Atendimento</span>
                  <a href="tel:+551130004511" className="hover:text-[#0A3D62] hover:underline font-semibold text-slate-705">
                    +55 (11) 3000-4511
                  </a>
                  <span className="block text-[10px] text-slate-400">De seg. a sex. das 9h às 18h UT-3</span>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="p-2 bg-[#F8F9FA] text-purple-600 rounded-xl border border-slate-200 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#1A1A2E] uppercase tracking-wider mb-0.5">Escritório Central</span>
                  <span className="font-body text-[#4A4A6A]">
                    Av. Brigadeiro Faria Lima, 1485, 10º Andar<br />
                    Jardim Paulistano, São Paulo - SP<br />
                    CEP 01452-002
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-[#E8ECF0] rounded-xl p-5 text-xs text-[#4A4A6A] leading-relaxed font-body">
            <span className="font-bold block text-slate-800 mb-1.5 uppercase tracking-wider">Políticas e Privacidade</span>
            Ao se comunicar com a nossa redação, saiba que todos os seus dados pessoais transmitidos e e-mails de correspondência são protegidos e tratados sob sigilo rígido de acordo com a nossa{' '}
            <button 
              onClick={() => {
                onNavigate('privacidade');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#0A3D62] hover:underline font-bold focus:outline-none"
            >
              Política de Privacidade
            </button>{' '}
            e termos vigentes da LGPD.
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          {!isSubmitted ? (
            <div className="bg-white rounded-xl border border-[#E8ECF0] p-6 sm:p-8 shadow-sm">
              <h2 className="font-titles text-xl sm:text-2xl font-bold text-[#1A1A2E] mb-5">
                Encaminhe uma Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#1A1A2E] uppercase mb-1">
                      Nome Completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full text-xs font-semibold px-4 py-3 rounded-lg bg-[#F8F9FA] border ${
                        errors.name ? 'border-red-400 focus:ring-red-300' : 'border-[#E8ECF0] focus:ring-[#0A3D62]'
                      } text-[#1A1A2E] pr-3 focus:bg-white focus:outline-none focus:ring-1 transition-colors`}
                      placeholder="Ex: João da Silva"
                      value={formData.name}
                      onChange={handleInputChange}
                      aria-required="true"
                    />
                    {errors.name && (
                      <p className="text-[11px] font-bold text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#1A1A2E] uppercase mb-1">
                      E-mail de Contato
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full text-xs font-semibold px-4 py-3 rounded-lg bg-[#F8F9FA] border ${
                        errors.email ? 'border-red-400 focus:ring-red-300' : 'border-[#E8ECF0] focus:ring-[#0A3D62]'
                      } text-[#1A1A2E] pr-3 focus:bg-white focus:outline-none focus:ring-1 transition-colors`}
                      placeholder="Ex: joao@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      aria-required="true"
                    />
                    {errors.email && (
                      <p className="text-[11px] font-bold text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-[#1A1A2E] uppercase mb-1">
                    Assunto da Pauta
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full text-xs font-semibold px-4 py-3 rounded-lg bg-[#F8F9FA] border ${
                      errors.subject ? 'border-red-400 focus:ring-red-300' : 'border-[#E8ECF0] focus:ring-[#0A3D62]'
                    } text-[#1A1A2E] pr-3 focus:bg-white focus:outline-none focus:ring-1 transition-colors`}
                    placeholder="Ex: Sugestão de pauta de Tesouro IPCA"
                    value={formData.subject}
                    onChange={handleInputChange}
                    aria-required="true"
                  />
                  {errors.subject && (
                    <p className="text-[11px] font-bold text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#1A1A2E] uppercase mb-1">
                    Corpo da Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full text-xs font-semibold px-4 py-3 rounded-lg bg-[#F8F9FA] border ${
                      errors.message ? 'border-red-400 focus:ring-red-300' : 'border-[#E8ECF0] focus:ring-[#0A3D62]'
                    } text-[#1A1A2E] pr-3 focus:bg-white focus:outline-none focus:ring-1 transition-colors`}
                    placeholder="Diga-nos o que você pensa..."
                    value={formData.message}
                    onChange={handleInputChange}
                    aria-required="true"
                  />
                  {errors.message && (
                    <p className="text-[11px] font-bold text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#27AE60] hover:bg-[#219653] text-white text-xs font-bold rounded-xl shadow-md transition-transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem Oficial
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-[#E8ECF0] p-8 text-center shadow-sm space-y-4 h-full flex flex-col justify-center items-center animate-fade-in">
              <div className="w-16 h-16 bg-emerald-50 text-[#27AE60] rounded-full flex items-center justify-center border border-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-titles text-2xl font-bold text-[#1A1A2E]">
                Mensagem Enviada!
              </h2>
              <p className="text-xs text-[#4A4A6A] leading-relaxed max-w-sm font-body mx-auto">
                Obrigado pelo contato corporativo. O protocolo de pauta foi registrado. Nossa equipe de redação de jornalistas revisará sua mensagem e responderá em até <strong>2 dias úteis</strong>.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-bold text-[#0A3D62] hover:underline"
              >
                Escrever outra mensagem
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <div className="space-y-6 pt-4 border-t border-[#E8ECF0]">
        <div className="text-center space-y-1">
          <h2 className="font-titles text-2xl sm:text-3xl font-bold text-[#1A1A2E]">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-xs text-[#4A4A6A] max-w-sm mx-auto">
            Resolva suas principais dúvidas sobre o portal de forma imediata.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-[#E8ECF0] rounded-xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-[#1A1A2E] text-sm hover:bg-[#F8F9FA] focus:outline-none transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-titles font-semibold pr-4 leading-snug">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#0A3D62] shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#4A4A6A] shrink-0" aria-hidden="true" />
                  )}
                </button>
                
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
                    isOpen ? 'max-h-96 py-4 border-t border-[#E8ECF0] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs text-[#4A4A6A] leading-relaxed font-body">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
