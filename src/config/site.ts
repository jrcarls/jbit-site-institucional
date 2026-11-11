import type { SiteConfig } from '../types';

/**
 * Configuração global da empresa. Altere aqui nome, contatos e navegação —
 * todos os componentes leem deste arquivo.
 */
export const site: SiteConfig = {
  name: 'JBIT',
  logo: { first: 'J', second: 'BIT' },
  title: 'JBIT — Software sob medida',
  description:
    'A JBIT desenvolve sites, sistemas web, aplicativos e automações sob medida para empresas que querem crescer com tecnologia.',
  url: 'https://jbit.com.br',
  locale: 'pt-BR',
  email: 'contato@jbit.com.br',
  whatsapp: 'https://wa.me/5500000000000',
  // Ex.: 'https://formspree.io/f/xxxxxxx'. Deixe vazio para usar o e-mail.
  formEndpoint: undefined,
  // Faixa de aviso no topo. Ex.: { text: 'Agenda aberta para', highlight: '2027' }
  announcement: undefined,
  nav: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como trabalhamos', href: '#processo' },
    { label: 'Quem somos', href: '#sobre' },
    { label: 'Dúvidas', href: '#duvidas' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],
  legal: {
    company: 'Jbit Desenvolvimento de Software LTDA',
    document: 'CNPJ 00.000.000/0001-00',
    address: 'São Paulo, SP',
  },
};
