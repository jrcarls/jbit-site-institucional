import type { Delivery } from '../types';

// Exemplos ilustrativos — troque por entregas reais (ou anonimizadas).
export const deliveries: Delivery[] = [
  { date: '04/11', team: 'Front-end', project: 'loja-online', initial: 'L', color: 'sky', summary: 'Novo checkout em uma página' },
  { date: '05/11', team: 'Back-end', project: 'portal-rh', initial: 'P', color: 'orange', summary: 'Integração com a folha de pagamento' },
  { date: '06/11', team: 'Mobile', project: 'app-delivery', initial: 'A', color: 'pink', summary: 'Rastreamento do pedido em tempo real' },
  { date: '07/11', team: 'IA', project: 'atendimento', initial: 'C', color: 'accent', summary: 'Chatbot respondendo 70% dos chamados' },
  { date: '08/11', team: 'DevOps', project: 'loja-online', initial: 'L', color: 'sky', summary: 'Deploy automático a cada merge' },
  { date: '10/11', team: 'Design', project: 'portal-rh', initial: 'P', color: 'orange', summary: 'Nova tela de onboarding' },
];
