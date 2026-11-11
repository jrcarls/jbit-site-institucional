const STORAGE_KEY = 'theme';
type Theme = 'light' | 'dark';

const read = (): Theme | null => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
};

const current = (): Theme =>
  read() ?? (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

export function initThemeToggle(): void {
  // Garante que data-theme reflita o tema efetivo (para o ícone).
  document.documentElement.dataset.theme = current();

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next: Theme = current() === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* armazenamento indisponível: mantém só na sessão */
      }
    });
  });
}
