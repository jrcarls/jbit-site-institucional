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
  /** Logo em duas partes para o efeito bicolor (ex.: "J" + "bit"). */
  logo: { first: string; second: string };
  title: string;
  description: string;
  url: string;
  locale: string;
  email: string;
  whatsapp?: string;
  /**
   * Endpoint opcional para o formulário de orçamento (ex.: Formspree).
   * Sem ele, o formulário abre o e-mail do visitante já preenchido.
   */
  formEndpoint?: string;
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

export interface ProcessStep {
  label: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TerminalLine {
  /** `command` = linha digitada ($), `ok` = concluído (✓), `info` = observação (→). */
  kind: 'command' | 'ok' | 'info';
  text: string;
  color?: AccentColor;
}

export interface AboutFact {
  label: string;
  value: string;
}
