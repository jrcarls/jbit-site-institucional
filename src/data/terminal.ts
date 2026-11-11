import type { TerminalLine } from '../types';

/** Conteúdo da janela de código exibida no hero. */
export const terminal = {
  file: 'jbit.sh',
  lines: [
    { kind: 'command', text: 'jbit novo-projeto --cliente sua-empresa' },
    { kind: 'ok', text: 'diagnóstico concluído', color: 'sky' },
    { kind: 'ok', text: 'proposta aprovada', color: 'orange' },
    { kind: 'ok', text: 'site no ar', color: 'accent' },
    { kind: 'ok', text: 'app publicado nas lojas', color: 'pink' },
    { kind: 'ok', text: 'automação rodando 24/7', color: 'accent' },
    { kind: 'info', text: 'próxima entrega: sexta-feira' },
  ] satisfies TerminalLine[],
};
