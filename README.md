# Jbit — site institucional

Site em [Astro](https://astro.build) com visual pixel art (inspirado no design system do habblaude.com):
dark-first com tema claro, cantos "em degrau" via `box-shadow`, sombras duras, Pixelify Sans nos títulos e Verdana no texto.

## Comandos

| Comando             | Ação                                  |
| :------------------ | :------------------------------------ |
| `npm run dev`       | Servidor local em `localhost:4321`    |
| `npm run build`     | Gera o site estático em `./dist/`     |
| `npm run preview`   | Pré-visualiza o build                 |

## Estrutura

```text
src/
├── config/site.ts          # Dados da empresa: nome, contatos, menu, redes, aviso do topo
├── data/                   # Conteúdo de cada seção (serviços, FAQ, processo...) — edite aqui
├── types/index.ts          # Tipos/contratos do conteúdo
├── styles/
│   ├── tokens.css          # Design tokens (cores, fontes, medidas, temas claro/escuro)
│   └── global.css          # Reset, utilitários (.wrap, .section, .grid-4) e moldura .px-frame
├── utils/                  # Helpers puros (cores de destaque, gerador de pixel art)
├── scripts/theme.ts        # Lógica do botão de tema
├── components/
│   ├── ui/                 # Primitivas reutilizáveis: Button, Badge, Card, CodeWindow, Heading, Logo...
│   ├── layout/             # Header, Footer, AnnouncementBar
│   ├── sections/           # Uma seção da página por arquivo (Hero, Services, Faq...)
│   └── illustrations/      # Pixel art em SVG gerado por código (logo)
├── layouts/BaseLayout.astro# <head>, SEO, fontes, tema
└── pages/index.astro       # Monta a página compondo as seções
```

### Convenções

- **Conteúdo separado da apresentação**: textos ficam em `src/data` e `src/config`; componentes só renderizam.
- **Tokens centralizados**: cores sempre via `var(--px-*)`; nunca hex solto em componente (exceto paleta da pixel art).
- **Estilos com escopo**: cada componente tem seu `<style>`; só o que é compartilhado vai em `global.css`.
- **Cores de destaque** (`accent | pink | orange | sky`) são passadas por `--c` e convertidas com `accentVar()`.
- Nova seção: crie em `components/sections/`, dados em `data/`, tipo em `types/` e adicione em `pages/index.astro`.
