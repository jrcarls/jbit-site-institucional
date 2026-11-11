import type { Service } from '../types';

export const services: Service[] = [
  {
    tag: '01 · Web',
    title: 'Sites e landing pages',
    description: 'Rápidos, acessíveis e prontos para aparecer no Google.',
    items: ['Site institucional', 'Landing page', 'Blog e conteúdo'],
  },
  {
    tag: '02 · Sistemas',
    title: 'Sistemas web sob medida',
    description: 'Painéis, ERPs e portais feitos para o seu processo.',
    items: ['Painéis administrativos', 'Portais de cliente', 'Integrações e APIs'],
  },
  {
    tag: '03 · Mobile',
    title: 'Aplicativos',
    description:
      'Apps com tecnologia web (Ionic): um só código para iOS, Android e navegador, com entrega mais rápida.',
    items: ['App para clientes', 'App interno', 'Publicação na App Store e Google Play'],
  },
  {
    tag: '04 · IA',
    title: 'Automação e IA',
    description: 'Tarefas repetitivas viram processos automáticos.',
    items: ['Chatbots de atendimento', 'Automação de processos', 'Análise de dados'],
  },
];
