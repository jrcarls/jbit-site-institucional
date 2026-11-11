/**
 * Anima as janelas de terminal marcadas com `.is-pending`: digita o comando
 * caractere a caractere e revela as demais linhas uma a uma. Roda uma vez.
 */
const START_DELAY = 400;
const CHAR_DELAY = 35;
const LINE_DELAY = 320;

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

async function typeLine(line: HTMLElement, caret: HTMLElement): Promise<void> {
  const text = line.querySelector<HTMLElement>('.line__text');
  if (!text) return;
  const full = text.textContent ?? '';
  text.textContent = '';
  text.after(caret);
  line.classList.add('is-shown');
  for (const char of full) {
    text.textContent += char;
    await wait(CHAR_DELAY);
  }
}

async function play(win: HTMLElement): Promise<void> {
  const lines = [...win.querySelectorAll<HTMLElement>('.line')];
  const caret = document.createElement('span');
  caret.className = 'caret';
  caret.setAttribute('aria-hidden', 'true');

  await wait(START_DELAY);
  for (const line of lines) {
    if (line.classList.contains('line--command')) {
      await typeLine(line, caret);
      await wait(LINE_DELAY);
    } else {
      line.classList.add('is-shown');
      line.querySelector('.line__text')?.after(caret);
      await wait(LINE_DELAY);
    }
  }
  caret.remove();
  win.classList.remove('is-pending');
}

export function playTerminals(): void {
  document.querySelectorAll<HTMLElement>('[data-terminal].is-pending').forEach((win) => {
    void play(win);
  });
}
