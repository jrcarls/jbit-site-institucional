/** Cores de destaque disponíveis no design system. */
export type AccentColor = 'accent' | 'pink' | 'orange' | 'sky';

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  /** Logo em duas partes para o efeito bicolor (ex.: "J" + "BIT"). */
  logo: { first: string; second: string };
  title: string;
  description: string;
  url: string;
  locale: string;
  email: string;
  whatsapp?: string;
  /** Faixa de aviso no topo. Deixe `undefined` para esconder. */
  announcement?: { text: string; highlight?: string };
  nav: NavLink[];
  social: SocialLink[];
  legal: { company: string; document?: string; address?: string };
}

export interface Stat {
  value: string;
  label: string;
  color: AccentColor;
}

export interface Service {
  tag: string;
  title: string;
  description: string;
  items: string[];
}

export interface Highlight {
  title: string;
  description: string;
  color: AccentColor;
}

export interface Delivery {
  date: string;
  team: string;
  project: string;
  /** Letra exibida no selo do projeto. */
  initial: string;
  color: AccentColor;
  summary: string;
}

export interface ProcessStep {
  label: string;
  title: string;
  description: string;
}

export interface EngagementModel {
  name: string;
  subtitle: string;
  /** Proporção da largura no grid (como as "salas" 7/9/13 do original). */
  size: number;
  idealFor: string;
  details: string;
  items: string[];
  cta: { label: string; href: string };
  featured?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
