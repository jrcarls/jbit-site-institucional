import type { EngagementModel } from '../types';
import { site } from '../config/site';

const contact = `mailto:${site.email}`;

/** Modelos de contratação. `size` define a largura proporcional do card. */
export const engagementModels: EngagementModel[] = [
  {
    name: 'Projeto',
    subtitle: 'Escopo fechado',
    size: 7,
    idealFor: 'Ideal para começar',
    details: 'Prazo e valor definidos',
    items: ['Site ou landing page', 'MVP de produto', 'Automação pontual'],
    cta: { label: 'Pedir orçamento', href: `${contact}?subject=Orçamento%20-%20Projeto` },
  },
  {
    name: 'Squad',
    subtitle: 'Time dedicado',
    size: 9,
    idealFor: 'Produto em evolução',
    details: 'Dev, design e gestão por mês',
    items: ['Sistemas web e apps', 'Roadmap contínuo', 'Reuniões semanais', 'Relatórios de progresso'],
    cta: { label: 'Montar meu squad', href: `${contact}?subject=Orçamento%20-%20Squad` },
    featured: '★ Mais escolhido',
  },
  {
    name: 'Parceria',
    subtitle: 'Tecnologia como serviço',
    size: 13,
    idealFor: 'Empresas sem time de TI',
    details: 'Cuidamos de toda a tecnologia',
    items: [
      'Desenvolvimento e manutenção',
      'Infraestrutura e monitoramento',
      'Consultoria de arquitetura',
      'Suporte prioritário',
      'Planejamento trimestral',
    ],
    cta: { label: 'Falar sobre parceria', href: `${contact}?subject=Parceria` },
  },
];

export const includedInAll: string[] = [
  'Código no seu nome',
  'Contrato e NDA',
  'Hospedagem configurada',
  'Treinamento do time',
  '30 dias de garantia',
];
