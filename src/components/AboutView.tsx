/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Compass, Heart, Users, Activity, GraduationCap, Award, Calendar } from 'lucide-react';
import { AUTHORS } from '../data/blogData';

export default function AboutView() {
  const stats = [
    { value: '500+', label: 'Artigos Publicados', desc: 'Análises detalhadas e de utilidade pública' },
    { value: '10k+', label: 'Inscritos na Newsletter', desc: 'Investidores recebendo inteligência toda semana' },
    { value: '120k+', label: 'Leitores Mensais', desc: 'Cidadãos brasileiros tomando decisões reais' },
    { value: '5 anos', label: 'História do Portal', desc: 'Mantendo independência jornalística integral' }
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#27AE60]" />,
      title: 'Independência Editorial',
      desc: 'Nossa linha de redação é imune a patrocínios de bancos que forcem recomendações de taxas ineficientes. Avaliamos produtos baseado unicamente em eficiência de custo.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#1B6CA8]" />,
      title: 'Rigor Técnico de Dados',
      desc: 'Fórmulas, alíquotas de impostos, regras do Banco Central e rentabilidades citadas são duplamente checados por economistas formados e credenciados do setor antes de irem ao ar.'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#0A3D62]" />,
      title: 'Didática Sem Jargões',
      desc: 'Escrevemos finanças traduzindo as tabelas complexas do mercado para a linguagem humana do dia a dia, capacitando trabalhadores comuns no controle de suas próprias realidades.'
    }
  ];

  const milestones = [
    { year: '2021', title: 'Fundação Original', desc: 'FinançasPro inicia suas atividades como uma humilde newsletter de e-mails para divulgar dicas de finanças pessoais familiares e orçamentárias básicas.' },
    { year: '2023', title: 'Lançamento do Portal', desc: 'Abertura do portal de notícias públicas online estruturado com simuladores e artigos. No primeiro ano, atingimos 30 mil leitores ativos.' },
    { year: '2024', title: 'Monetização Transparente', desc: 'Implementação de parcerias programáticas AdSense limpas e não intrusivas para sustentar a infraestrutura técnica operacional de forma autônoma e independente.' },
    { year: '2026', title: 'Consolidação Nacional', desc: 'Atualmente consolidado como veículo de referência confiável em simulações fiscais, análises de juros compostos e educação financeira popular no país.' }
  ];

  return (
    <section className="space-y-12 font-ui max-w-5xl mx-auto py-4 animate-fade-in" id="conteudo-principal">
      
      {/* Editorial Mission Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-[#27AE60] bg-emerald-50 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
          Nossa Missão
        </span>
        <h1 className="font-titles text-3xl sm:text-5xl font-black text-[#1A1A2E] tracking-tight leading-tight">
          Inteligência de campo para o seu bem-estar financeiro
        </h1>
        <p className="text-sm sm:text-lg text-[#4A4A6A] font-body leading-relaxed">
          Nascemos com a convicção de que a educação econômica não deve pertencer somente aos analistas das mesas de negociação. Traduzimos as flutuações das taxas de juros básicas, as metas inflacionárias e as alíquotas fiscais agregadas em pautas claras e aplicáveis com integridade intelectual.
        </p>
      </div>

      {/* Grid of Statistics Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-[#E8ECF0] p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="block font-titles text-2xl sm:text-4xl font-extrabold text-[#0A3D62] tracking-tight mb-1">
              {stat.value}
            </span>
            <span className="block text-xs font-bold text-[#1A1A2E] uppercase mb-1 tracking-wide">
              {stat.label}
            </span>
            <span className="text-[11px] text-[#4A4A6A] leading-relaxed block font-body">
              {stat.desc}
            </span>
          </div>
        ))}
      </div>

      {/* Editorial Core Values Section */}
      <div className="space-y-6 pt-4">
        <div className="text-center">
          <h2 className="font-titles text-2xl sm:text-3xl font-bold text-[#1A1A2E]">
            Nossos Valores Editoriais
          </h2>
          <p className="text-xs text-[#4A4A6A] max-w-md mx-auto mt-1">
            Garantimos exatidão e transparência em tudo o que é publicado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-[#E8ECF0] p-6 shadow-sm space-y-3">
              <div className="w-12 h-12 bg-[#F8F9FA] rounded-xl flex items-center justify-center border border-[#E8ECF0]">
                {v.icon}
              </div>
              <h3 className="text-sm font-semibold text-[#1A1A2E] uppercase tracking-wide">
                {v.title}
              </h3>
              <p className="text-xs text-[#4A4A6A] leading-relaxed font-body">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet Our Writers Profile Grid section */}
      <div className="space-y-6 pt-4">
        <div className="text-center">
          <h2 className="font-titles text-2xl sm:text-3xl font-bold text-[#1A1A2E]">
            Corpo Editorial de Especialistas
          </h2>
          <p className="text-xs text-[#4A4A6A] max-w-md mx-auto mt-1">
            Profissionais experientes, credenciados e dedicados à utilidade pública.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUTHORS.map((author) => (
            <div key={author.id} className="bg-white rounded-xl border border-[#E8ECF0] p-6 text-center shadow-sm space-y-4 flex flex-col items-center">
              
              {/* Initials custom avatar */}
              <div className={`w-16 h-16 ${author.bgColor} text-white font-titles font-extrabold text-xl flex items-center justify-center rounded-2xl shadow-inner select-none`}>
                {author.avatarChar}
              </div>

              <div className="space-y-1">
                <h3 className="font-titles text-base font-bold text-[#1A1A2E]">
                  {author.name}
                </h3>
                <span className="block text-[11px] font-bold text-[#27AE60] bg-emerald-50 px-2 py-0.5 rounded-full inline-block uppercase tracking-wider">
                  {author.role}
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-[#4A4A6A] mt-1">
                  Especialidade: {author.specialty}
                </span>
              </div>

              <p className="text-xs text-[#4A4A6A] leading-relaxed font-body flex-grow">
                {author.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Chronological Timeline Section */}
      <div className="space-y-6 pt-4">
        <h2 className="font-titles text-2xl sm:text-3xl font-bold text-[#1A1A2E] text-center">
          Linha do Tempo de Realização
        </h2>

        <div className="relative border-l border-[#E8ECF0] ml-4 md:ml-12 pl-6 sm:pl-8 space-y-8 max-w-2xl mx-auto">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline bubble */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-6 h-6 rounded-full bg-[#1A1A2E] group-hover:bg-[#27AE60] transition-colors border-4 border-white flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
              
              <div className="bg-white rounded-xl border border-[#E8ECF0] p-5 shadow-sm space-y-1.5 transition-all duration-300 group-hover:-translate-y-0.5">
                <span className="text-xs font-black text-[#27AE60] uppercase tracking-widest flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 inline" />
                  {item.year}
                </span>
                <h3 className="font-titles text-sm font-bold text-[#1A1A2E]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4A4A6A] leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
