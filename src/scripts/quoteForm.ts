/**
 * Formulário de orçamento. Com `data-endpoint`, envia via fetch (ex.: Formspree);
 * sem ele, abre o cliente de e-mail com assunto e corpo preenchidos.
 */
const FIELDS: Record<string, string> = {
  name: 'Nome',
  email: 'E-mail',
  company: 'Empresa',
  type: 'Tipo de projeto',
  budget: 'Orçamento',
  message: 'Mensagem',
};

function buildMailto(to: string, data: FormData): string {
  const subject = `Orçamento: ${data.get('type') ?? 'novo projeto'} — ${data.get('name') ?? ''}`;
  const body = Object.entries(FIELDS)
    .map(([key, label]) => `${label}: ${String(data.get(key) ?? '').trim() || '-'}`)
    .join('\n');
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function setStatus(el: HTMLElement | null, text: string, kind: 'ok' | 'error' | 'idle') {
  if (!el) return;
  el.textContent = text;
  el.dataset.status = kind;
}

export function initQuoteForms(): void {
  document.querySelectorAll<HTMLFormElement>('form[data-quote-form]').forEach((form) => {
    const status = form.querySelector<HTMLElement>('[data-form-status]');
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const { endpoint, email = '' } = form.dataset;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);

      if (!endpoint) {
        window.location.href = buildMailto(email, data);
        setStatus(status, 'Abrimos seu e-mail com a mensagem pronta. É só enviar!', 'ok');
        return;
      }

      submit?.setAttribute('disabled', '');
      setStatus(status, 'Enviando…', 'idle');
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        setStatus(status, 'Recebemos sua mensagem! Respondemos em até 24 horas úteis.', 'ok');
      } catch {
        setStatus(status, `Não deu para enviar agora. Escreva para ${email}.`, 'error');
      } finally {
        submit?.removeAttribute('disabled');
      }
    });
  });
}
