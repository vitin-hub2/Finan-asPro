/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Lock, Eye, RefreshCw } from 'lucide-react';

export default function PrivacyView() {
  return (
    <div className="bg-white rounded-xl border border-[#E8ECF0] p-6 sm:p-10 shadow-sm max-w-4xl mx-auto font-ui text-[#1A1A2E] leading-relaxed space-y-6 font-body text-justify animate-fade-in" id="conteudo-principal">
      <div className="text-center space-y-2 border-b border-[#E8ECF0] pb-6">
        <div className="w-12 h-12 bg-emerald-50 text-[#27AE60] rounded-xl flex items-center justify-center mx-auto">
          <Shield className="w-6 h-6" />
        </div>
        <h1 className="font-titles text-2xl sm:text-4xl font-bold tracking-tight text-[#1A1A2E]">
          Política de Privacidade do Portal
        </h1>
        <p className="text-xs text-[#4A4A6A] uppercase font-bold tracking-widest font-ui">
          Atualizado em: 28 de Maio de 2026 • LGPD & AdSense Compliant
        </p>
      </div>

      <p className="text-sm">
        O portal **FinançasPro** (doravante denominado "Portal"), de propriedade da FinançasPro S.A., preza pela transparência, integridade e segurança no tratamento das informações pessoais de seus leitores e assinantes. Esta Política de Privacidade descreve de forma clara e objetiva quais dados coletamos, como eles são processados, armazenados e quais são os seus direitos sob a égide da **Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)** e conforme os termos regulatórios para a monetização programática **Google AdSense**.
      </p>

      <div className="space-y-3.5 pt-2">
        <h2 className="font-titles text-lg sm:text-xl font-bold text-[#0A3D62] flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#27AE60] rounded" />
          1. Informações que Coletamos
        </h2>
        <p className="text-xs sm:text-sm">
          Coletamos informações por meio de interações ativas e automáticas no uso do nosso Portal:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#4A4A6A]">
          <li>
            <strong className="text-slate-800">Dados Fornecidos Ativamente por Você:</strong> Nome completo, endereço de e-mail e dados de mensagens submetidos voluntariamente nos formulários de **Contato** ou de cadastro na nossa **Newsletter**.
          </li>
          <li>
            <strong className="text-slate-800">Dados Coletados de Forma Automática (Cookies e Pixels):</strong> Endereço IP aproximado, dados do navegador, sistema operacional, comportamento de cliques, tempo de permanência nos artigos e termos de busca digitados. Esses metadados servem puramente para estatísticas agregadas locais e entrega contextualizada de publicidade AdSense.
          </li>
        </ul>
      </div>

      <div className="space-y-3.5">
        <h2 className="font-titles text-lg sm:text-xl font-bold text-[#0A3D62] flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#27AE60] rounded" />
          2. Finalidade do Tratamento de Dados
        </h2>
        <p className="text-xs sm:text-sm">
          Seus dados são tratados sob as seguintes permissões regulatórias:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#4A4A6A]">
          <li>**Consentimento Expresso:** Para envio da nossa newsletter semanal de educação financeira ou respostas oficiais para as suas pautas do formulário de contato.</li>
          <li>**Legítimo Interesse:** Para auditorias e melhoria de desempenho técnico das nossas calculadoras rápidas e infraestrutura de servidores de rede.</li>
          <li>**Otimização AdSense:** Os cookies do Google AdSense ajudam parceiros terceiros a exibir anúncios inteligentes baseados no histórico de navegação relevante para você (anúncios personalizados).</li>
        </ul>
      </div>

      <div className="space-y-3.5">
        <h2 className="font-titles text-lg sm:text-xl font-bold text-[#0A3D62] flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#27AE60] rounded" />
          3. Proteção e Segurança de Dados
        </h2>
        <p className="text-xs sm:text-sm">
          Adotamos protocolos rígidos de segurança cibernética (incluindo criptografia ponta a ponta e certificados SSL/HTTPS em todo o tráfego do portal). O armazenamento de emails de cadastro de boletim informativo é feito em servidores cloud certificados independentes, dotados de barreiras físicas e digitais rigorosas de firewalls.
        </p>
      </div>

      <div className="space-y-3.5">
        <h2 className="font-titles text-lg sm:text-xl font-bold text-[#0A3D62] flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#27AE60] rounded" />
          4. Links de Terceiros e Divulgação AdSense
        </h2>
        <p className="text-xs sm:text-sm">
          O Portal contém parcerias programáticas com redes publicitárias do Google AdSense. Nós não temos controle formal e não nos responsabilizamos pelas políticas de cookies operacionais de navegação praticadas pelo Google Inc. Você pode configurar o seu navegador de internet a qualquer momento para bloquear a leitura desses rastreios ou customizar no site oficial de preferências do Google a personalização de links corporativos.
        </p>
      </div>

      <div className="space-y-3.5">
        <h2 className="font-titles text-lg sm:text-xl font-bold text-[#0A3D62] flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#27AE60] rounded" />
          5. Direitos dos Usuários sob a LGPD
        </h2>
        <p className="text-xs sm:text-sm">
          A qualquer momento e sem nenhum ônus financeiro, o leitor do Portal pode exercer seus direitos legais previstos no artigo 18 da LGPD, tais como:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#4A4A6A]">
          <li>Confirmação da existência de qualquer dado pessoal armazenado.</li>
          <li>Correção ou atualização de e-mails fornecidos de forma incorreta.</li>
          <li>**Revogação de Consentimento:** Exclusão definitiva do cadastro da nossa Newsletter e purgação de dados cadastrais dos bancos de dados, o que é feito instantaneamente por meio do link contido nos rodapés dos emails enviados.</li>
        </ul>
      </div>

      <div className="pt-4 border-t border-[#E8ECF0] text-center text-xs text-[#4A4A6A]">
        Para dúvidas adicionais ou requisições formais, encaminhe uma declaração ao encarregado de dados no e-mail: <a href="mailto:dpo@financaspro.com.br" className="text-[#0A3D62] font-semibold underline">dpo@financaspro.com.br</a>
      </div>
    </div>
  );
}
