/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FileText, CheckCircle, HelpCircle, ShieldAlert } from 'lucide-react';

export default function TermsView() {
  return (
    <div className="bg-white rounded-xl border border-[#E8ECF0] p-6 sm:p-10 shadow-sm max-w-4xl mx-auto font-ui text-[#1A1A2E] leading-relaxed space-y-6 font-body text-justify animate-fade-in" id="conteudo-principal">
      <div className="text-center space-y-2 border-b border-[#E8ECF0] pb-6">
        <div className="w-12 h-12 bg-blue-50 text-[#1B6CA8] rounded-xl flex items-center justify-center mx-auto">
          <FileText className="w-6 h-6" />
        </div>
        <h1 className="font-titles text-2xl sm:text-4xl font-bold tracking-tight text-[#1A1A2E]">
          Termos de Uso do Portal
        </h1>
        <p className="text-xs text-[#4A4A6A] uppercase font-bold tracking-widest font-ui">
          Atualizado em: 28 de Maio de 2026 • Termos Editoriais Regulamentados
        </p>
      </div>

      <p className="text-sm">
        Bem-vindo ao **FinançasPro**. Ao acessar, navegar ou utilizar as ferramentas, simuladores e textos informativos contidos em nosso portal de conteúdo público, você (doravante denominado "Usuário" ou "Leitor") declara estar de acordo com os termos e regras estabelecidas a seguir. Caso não concorde com qualquer termo, solicitamos que interrompa a visitação imediata deste Portal.
      </p>

      <div className="space-y-3.5 pt-2">
        <h2 className="font-titles text-lg sm:text-xl font-bold text-[#0A3D62] flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#1B6CA8] rounded" />
          1. Escopo Puramente Informativo de Opções
        </h2>
        <p className="text-xs sm:text-sm">
          Todo o conteúdo publicado no FinançasPro destina-se puramente a propósitos **educativos, didáticos e jornalísticos**. 
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg flex items-start gap-3.5">
          <ShieldAlert className="w-6 h-6 text-amber-650 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 font-body leading-relaxed">
            **ATENÇÃO CRÍTICA:** As análises setoriais, dados de fomento de juros e simulações das calculadoras financeiras não devem ser interpretados ou utilizados como prospecções de renda garantida, recomendações oficiais de compra de ações, fundos ou investimentos emitidos pela CVM. O Portal não atua como corretora e não comercializa planos ou produtos de terceiros.
          </p>
        </div>
      </div>

      <div className="space-y-3.5">
        <h2 className="font-titles text-lg sm:text-xl font-bold text-[#0A3D62] flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#1B6CA8] rounded" />
          2. Direitos de Propriedade Intelectual
        </h2>
        <p className="text-xs sm:text-sm text-[#4A4A6A]">
          Todos os direitos autorais relacionados aos textos e matérias exclusivos publicados no Portal são de titularidade da FinançasPro S.A. e estão protegidos nacionalmente sob a Lei de Direitos Autorais (Lei nº 9.610/98). 
          É estritamente proibida a cópia, republicação, modificação, redistribuição ou exploração de qualquer parte do Portal para fins comerciais em outros canais de mídia sem a devida autorização escrita e explícita do corpo editorial. A citação parcial acadêmica ou jornalística é permitida desde que contenha o link canônico de atribuição direta ao artigo original.
        </p>
      </div>

      <div className="space-y-3.5">
        <h2 className="font-titles text-lg sm:text-xl font-bold text-[#0A3D62] flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#1B6CA8] rounded" />
          3. Responsabilidade de Uso dos Simuladores
        </h2>
        <p className="text-xs sm:text-sm text-[#4A4A6A]">
          Nossas calculadoras e simuladores (por exemplo, a calculadora de Juros Compostos com estimador regressivo tributário) realizam cálculos que servem apenas como aproximações baseadas em dados históricos do mercado de capitais. Rentabilidades acumuladas anteriores nunca serviram e nunca servirão como promessa ou garantia jurídica de ganhos financeiros futuros. O leitor assume integralmente todos os riscos de perda ou ganhos em qualquer tomada de decisão real baseada em suas próprias decisões de investimento.
        </p>
      </div>

      <div className="space-y-3.5">
        <h2 className="font-titles text-lg sm:text-xl font-bold text-[#0A3D62] flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#1B6CA8] rounded" />
          4. Limitação de Responsabilidade
        </h2>
        <p className="text-xs sm:text-sm text-[#4A4A6A]">
          Na extensão das limitações permitidas pela legislação brasileira, a FinançasPro e seus autores de redação de matérias não serão Civil ou juridicamente responsabilizados por qualquer prejuízo comercial direto, indireto ou consequencial resultante de erros táticos nas planilhas domésticas do Usuário, decisões de financiamento habitacional fora de tempo, ou investimentos mal sucedidos estruturados em corretoras de custódia.
        </p>
      </div>

      <div className="pt-4 border-t border-[#E8ECF0] text-center text-xs text-[#4A4A6A]">
        Os presentes termos de uso são regidos sob as leis brasileiras do Tribunal de Justiça de São Paulo - SP para dirimir controvérsias comerciais. Em caso de dúvidas, escreva para: <a href="mailto:ajuridico@financaspro.com.br" className="text-[#0A3D62] font-semibold underline">ajuridico@financaspro.com.br</a>
      </div>
    </div>
  );
}
