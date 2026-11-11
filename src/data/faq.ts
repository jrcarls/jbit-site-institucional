import type { FaqItem } from '../types';

export const faq: FaqItem[] = [
  { question: 'Quanto custa um projeto?', answer: 'Depende do escopo. Depois de uma conversa de diagnóstico, enviamos uma proposta com valor fechado e prazo em até 48 horas.' },
  { question: 'Quanto tempo leva?', answer: 'Sites costumam levar de 2 a 4 semanas. Sistemas e aplicativos são entregues em etapas semanais, então você usa o produto bem antes do fim.' },
  {
    question: 'O aplicativo é nativo?',
    answer:
      'Nossos apps usam tecnologia web com Ionic: um único código gera o app para iOS e Android, publicado normalmente na App Store e no Google Play, com acesso a câmera, GPS e notificações. Isso deixa o desenvolvimento mais rápido e a manutenção mais barata. Para jogos pesados ou recursos muito específicos do aparelho, avisamos já no diagnóstico.',
  },
  {
    question: 'Como funciona o trabalho com IA?',
    answer:
      'Agentes de IA escrevem, testam e documentam código em paralelo, sob supervisão de um desenvolvedor que revisa cada entrega antes de chegar até você. O resultado é mais velocidade com o mesmo cuidado. E o código final é seu, como em qualquer projeto.',
  },
  { question: 'O código fica com quem?', answer: 'Com você. Repositório, domínio e servidores ficam no nome da sua empresa desde o início.' },
  { question: 'Vocês dão suporte depois da entrega?', answer: 'Sim. Todo projeto tem 30 dias de garantia, e oferecemos planos mensais de manutenção e evolução.' },
  { question: 'Atendem empresas de outras cidades?', answer: 'Sim, trabalhamos 100% remoto com clientes de todo o Brasil e do exterior.' },
];
