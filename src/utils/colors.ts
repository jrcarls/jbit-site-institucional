import type { AccentColor } from '../types';

/** Converte um nome de cor do design system na variável CSS correspondente. */
export const accentVar = (color: AccentColor): string => `var(--px-${color})`;

/** Ordem padrão de cores para itens sequenciais (cards, passos, listas). */
export const accentCycle: AccentColor[] = ['accent', 'pink', 'orange', 'sky'];

export const accentAt = (index: number): AccentColor =>
  accentCycle[index % accentCycle.length];
