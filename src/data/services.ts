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
    description: 'Apps iOS e Android com uma única base de código.',
    items: ['App para clientes', 'App interno', 'Publicação nas lojas'],
  },
  {
    tag: '04 · IA',
    title: 'Automação e IA',
    description: 'Tarefas repetitivas viram processos automáticos.',
    items: ['Chatbots de atendimento', 'Automação de processos', 'Análise de dados'],
  },
];
