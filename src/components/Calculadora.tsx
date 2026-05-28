/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, Info, Calculator, TrendingUp } from 'lucide-react';

export default function Calculadora() {
  const [valorInicial, setValorInicial] = useState<number>(1000);
  const [aporteMensal, setAporteMensal] = useState<number>(200);
  const [taxaAnual, setTaxaAnual] = useState<number>(11.5);
  const [periodoAnos, setPeriodoAnos] = useState<number>(5);
  
  // Results states
  const [showResults, setShowResults] = useState<boolean>(true);
  
  // Calculations
  const taxaMensal = Math.pow(1 + taxaAnual / 100, 1 / 12) - 1;
  const totalMeses = periodoAnos * 12;
  
  let totalAcumulado = valorInicial;
  let totalInvestido = valorInicial;
  
  for (let i = 0; i < totalMeses; i++) {
    // Interest earned on current balance
    const jurosDoMes = totalAcumulado * taxaMensal;
    totalAcumulado += jurosDoMes + aporteMensal;
    totalInvestido += aporteMensal;
  }
  
  const totalJuros = totalAcumulado - totalInvestido;
  
  // Determine standard Brazilian fixed income tax rate (regressiva)
  // <180 days: 22.5% | 181-360: 20% | 361-720: 17.5% | >720 days (2 years): 15%
  let aliquotaImposto = 0.15;
  const diasPeriodo = periodoAnos * 365;
  if (diasPeriodo <= 180) {
    aliquotaImposto = 0.225;
  } else if (diasPeriodo <= 360) {
    aliquotaImposto = 0.20;
  } else if (diasPeriodo <= 720) {
    aliquotaImposto = 0.175;
  } else {
    aliquotaImposto = 0.15;
  }
  
  const impostoEstimado = totalJuros * aliquotaImposto;
  const valorLiquido = totalAcumulado - impostoEstimado;

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="bg-white rounded-xl border border-[#E8ECF0] p-5 shadow-sm font-ui transition-all duration-300 hover:shadow-md">
      <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#E8ECF0]">
        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
          <Calculator className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <h4 className="font-titles text-lg font-bold text-[#1A1A2E]">Calculadora Rápida</h4>
          <p className="text-xs text-[#4A4A6A]">Simulador de Juros Compostos</p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="valor-inicial" className="block text-xs font-semibold text-[#1A1A2E] uppercase tracking-wider mb-1">
            Valor Inicial (R$)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-xs text-[#4A4A6A] font-medium">R$</span>
            <input
              id="valor-inicial"
              type="number"
              min="0"
              className="w-full text-sm font-medium pl-8 pr-3 py-2 border border-[#E8ECF0] rounded-lg bg-[#F8F9FA] text-[#1A1A2E] focus:bg-white focus:ring-1 focus:ring-[#0A3D62] transition-colors"
              value={valorInicial || ''}
              onChange={(e) => setValorInicial(Number(e.target.value))}
              aria-label="Valor inicial do investimento em reais"
            />
          </div>
        </div>

        <div>
          <label htmlFor="aporte-mensal" className="block text-xs font-semibold text-[#1A1A2E] uppercase tracking-wider mb-1">
            Aporte Mensal (R$)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-xs text-[#4A4A6A] font-medium">R$</span>
            <input
              id="aporte-mensal"
              type="number"
              min="0"
              className="w-full text-sm font-medium pl-8 pr-3 py-2 border border-[#E8ECF0] rounded-lg bg-[#F8F9FA] text-[#1A1A2E] focus:bg-white focus:ring-1 focus:ring-[#0A3D62] transition-colors"
              value={aporteMensal || ''}
              onChange={(e) => setAporteMensal(Number(e.target.value))}
              aria-label="Aporte de dinheiro mensal em reais"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="taxa-juros" className="block text-xs font-semibold text-[#1A1A2E] uppercase tracking-wider mb-1">
              Taxa Anual (%)
            </label>
            <div className="relative">
              <input
                id="taxa-juros"
                type="number"
                step="0.1"
                min="0"
                className="w-full text-sm font-medium px-3 py-2 border border-[#E8ECF0] rounded-lg bg-[#F8F9FA] text-[#1A1A2E] focus:bg-white focus:ring-1 focus:ring-[#0A3D62] transition-colors"
                value={taxaAnual || ''}
                onChange={(e) => setTaxaAnual(Number(e.target.value))}
                aria-label="Taxa de rendimento ao ano em percentual"
              />
              <span className="absolute right-3 top-2.5 text-xs text-[#4A4A6A] font-medium">% a.a.</span>
            </div>
          </div>

          <div>
            <label htmlFor="periodo-anos" className="block text-xs font-semibold text-[#1A1A2E] uppercase tracking-wider mb-1">
              Período (Anos)
            </label>
            <div className="relative">
              <input
                id="periodo-anos"
                type="number"
                min="1"
                max="50"
                className="w-full text-sm font-medium px-3 py-2 border border-[#E8ECF0] rounded-lg bg-[#F8F9FA] text-[#1A1A2E] focus:bg-white focus:ring-1 focus:ring-[#0A3D62] transition-colors"
                value={periodoAnos || ''}
                onChange={(e) => setPeriodoAnos(Number(e.target.value))}
                aria-label="Período de retenção em anos"
              />
              <span className="absolute right-3 top-2.5 text-xs text-[#4A4A6A] font-medium">anos</span>
            </div>
          </div>
        </div>
      </form>

      {showResults && (
        <div className="mt-5 pt-4 border-t border-dashed border-[#E8ECF0] bg-[#F8F9FA] rounded-lg p-3.5 space-y-2.5">
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#4A4A6A]">Total Investido:</span>
            <span className="font-semibold text-[#1A1A2E]">{formatCurrency(totalInvestido)}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#4A4A6A] flex items-center gap-1">
              Rendimento Bruto: 
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500 inline" />
            </span>
            <span className="font-semibold text-emerald-600">+{formatCurrency(totalJuros)}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-[#E8ECF0] pb-2">
            <span className="text-[#4A4A6A] flex items-center gap-1 group relative">
              IR Estimado ({aliquotaImposto * 100}%):
              <Info className="w-3.5 h-3.5 text-gray-400 cursor-pointer inline" />
              <span className="hidden group-hover:block absolute left-0 bottom-5 z-20 w-48 p-2 bg-[#1A1A2E] text-white text-[10px] rounded shadow-lg font-normal leading-normal">
                Simula a alíquota regressiva padrão brasileira de imposto de renda para aplicações financeiras.
              </span>
            </span>
            <span className="font-medium text-red-500">-{formatCurrency(impostoEstimado)}</span>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-xs font-bold text-[#1A1A2E]">Valor Líquido Final:</span>
            <span className="text-sm font-bold text-[#27AE60]">{formatCurrency(valorLiquido)}</span>
          </div>
          
          <p className="text-[10px] text-[#4A4A6A] leading-relaxed pt-1 flex items-start gap-1">
            <span className="font-semibold text-gray-500">*</span>
            Simulação válida para aplicações de renda fixa (como CDBs comuns). Resultados não garantem lucros futuros reais.
          </p>
        </div>
      )}
    </div>
  );
}
