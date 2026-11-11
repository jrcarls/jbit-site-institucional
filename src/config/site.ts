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
  announcement: {
    text: 'Agenda aberta para novos projetos em',
    highlight: '2027',
  },
  nav: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Quem somos', href: '#sobre' },
    { label: 'Como trabalhamos', href: '#processo' },
    { label: 'Orçamento', href: '#orcamento' },
    { label: 'Dúvidas', href: '#duvidas' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],
  legal: {
    company: 'JBIT Tecnologia LTDA',
    document: 'CNPJ 00.000.000/0001-00',
    address: 'Sua cidade, UF — Brasil',
  },
};
