import type { Highlight } from '../types';

/** "Por que a Jbit": lista da seção Quem somos. */
export const reasons: Highlight[] = [
  { title: 'Entregas toda semana', description: 'Você acompanha o produto evoluindo, sem esperar meses por uma versão.', color: 'accent' },
  { title: 'Fala direto com quem desenvolve', description: 'Sem intermediários, sem telefone sem fio.', color: 'pink' },
  { title: 'Código é seu', description: 'Repositório, servidores e domínio ficam no seu nome desde o primeiro dia.', color: 'orange' },
  { title: 'Suporte depois do lançamento', description: 'Monitoramos, corrigimos e evoluímos o que foi entregue.', color: 'sky' },
];

/** Diferenciais técnicos (faixa de 4 colunas). */
export const differentials: Highlight[] = [
  { title: 'Performance', description: 'Sites com nota alta no Lighthouse e carregamento rápido.', color: 'accent' },
  { title: 'Segurança', description: 'Boas práticas, LGPD e backups automáticos.', color: 'pink' },
  { title: 'Escalável', description: 'Arquitetura pronta para crescer junto com o negócio.', color: 'orange' },
  { title: 'Documentado', description: 'Tudo documentado para o seu time assumir quando quiser.', color: 'sky' },
];
