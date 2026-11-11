# IvaneudoBlog 📝

Um blog pessoal moderno, minimalista e de alta performance construído com **Next.js**, **TypeScript** e **Emotion (CSS-in-JS)**. 

O blog renderiza artigos diretamente de arquivos `.md` locais, sem a necessidade de banco de dados ou painel administrativo — para publicar, basta criar um novo arquivo Markdown.

---

## 🚀 Funcionalidades

- **Tema Escuro & Vermelho por padrão**: Design sofisticado utilizando as cores `#191A1B` (fundo) e `#C90000` (destaque).
- **Alternador de Tema (Dark / Light)**: Botão com ícone de pincel no menu lateral para alternar suavemente entre os temas.
- **Leitura focada**: Navegação limpa com exibição de um artigo por vez através de um menu lateral.
- **Detecção automática de posts**: Qualquer novo arquivo `.md` adicionado ao projeto é identificado automaticamente.
- **Ordenação cronológica de publicações**: Artigos mais recentes aparecem no topo da lista automaticamente.
- **Artigo README fixado**: Um artigo inicial de apresentação que permanece no topo e carrega como boas-vindas.
- **100% Responsivo**: Layout otimizado para desktop e dispositivos móveis (com menu gaveta lateral).
- **Suporte completo a Markdown**: Código com syntax highlight, listas, tabelas, citações e imagens responsivas.

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Next.js](https://nextjs.org/) (Pages Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [@emotion/react](https://emotion.sh/) & [@emotion/styled](https://emotion.sh/)
- **Renderização de Markdown**: [react-markdown](https://github.com/remarkjs/react-markdown) & [remark-gfm](https://github.com/remarkjs/remark-gfm)
- **Parser de Frontmatter**: [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Ícones**: [Lucide React](https://lucide.dev/)

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18.x ou superior recomendada)
- Gerenciador de pacotes **npm** (ou yarn / pnpm)
- [Git](https://git-scm.com/)

---

## 💻 Instalação e Execução Local

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU-USUARIO/ivaneudo-blog.git
cd ivaneudo-blog
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Abra http://localhost:3000 no seu navegador para ver o blog em execução.
### 4. Build de produção (Opcional)
Para testar a versão compilada e otimizada:

```bash
npm run build
npm start
```

## ✍️ Como Criar um Novo Artigo
Para publicar um artigo novo, você só precisa criar um arquivo .md dentro do diretório posts/.
Exemplo: crie o arquivo posts/meu-novo-artigo.md:

```Markdown
---
title: "Título do Meu Artigo"
date: "2026-11-11"
---

Escreva aqui o conteúdo do seu artigo em Markdown normalmente.

### Subtítulo
- Tópico 1
- Tópico 2

\`\`\`typescript
console.log("Suporte a blocos de código!");
\`\`\`
```

> Dica: O artigo com a data mais recente ficará automaticamente no topo da lista. O artigo com readme no nome ficará fixo como primeiro da lista.

---

## 🖼️ Como Inserir Imagens nos Artigos

1. Coloque a sua imagem dentro da pasta public/posts/ (ex: public/posts/nome-artigo/minha-foto.png).
2. No seu arquivo .md, chame a imagem assim:

```Markdown
![Descrição da Imagem](/posts/nome-artigo/minha-foto.png)
```
As imagens já possuem estilização responsiva automática e cantos arredondados.

---

## 📁 Estrutura do Projeto

```Text
ivaneudo-blog/
├── posts/                  # Artigos em Markdown (.md)
│   ├── 00-readme.md        # Artigo de apresentação (fixado)
│   └── ...
├── public/                 # Arquivos estáticos (fotos, ícones)
│   └── posts/              # Imagens utilizadas nos artigos
├── src/
│   ├── components/         # Componentes React (Sidebar, MarkdownViewer)
│   ├── lib/                # Leitura e ordenação dos arquivos .md
│   ├── pages/              # Rotas e páginas do Next.js
│   └── theme/              # Configuração dos temas Dark e Light com Emotion
├── next.config.ts          # Configurações do Next.js
├── package.json
└── tsconfig.json
```

## 👤 Autor
Desenvolvido por Ivaneudo.
- GitHub: [@Ivaneudo](https://github.com/Ivaneudo)
- LinkedIn: [ivaneudo-carvlho](https://www.linkedin.com/in/ivaneudo-carvalho/)
- Instagram: [@ivaneudo.dev](https://instagram.com/ivaneudo.dev/)
