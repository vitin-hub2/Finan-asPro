/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CategoryId = 
  | 'investimentos'
  | 'financas_pessoais'
  | 'economia'
  | 'patrimonio'
  | 'consumo_inteligente'
  | 'renda_extra';

export interface Category {
  id: CategoryId;
  name: string;
  iconName: string; // Used to select specific SVGs
  bgColor: string;
  textColor: string;
  description: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  avatarChar: string; // For customized initials avatars
  bgColor: string; // Custom background for initials avatar
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: CategoryId;
  excerpt: string;
  content: string; // High-quality, deep, authoritative text
  authorId: string;
  date: string;
  readTime: number; // in minutes
  views: number;
  likes: number;
  isFeatured?: boolean;
  isSecondaryFeatured?: boolean;
  keyPoints: string[];
  warning?: string;
  tableData?: {
    headers: string[];
    rows: string[][];
    caption?: string;
  };
}

export interface IndexRate {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
