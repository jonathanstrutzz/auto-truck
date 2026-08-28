# GitHub Pages — Auto Truck

Esta configuração cria uma versão **estática e gratuita** para GitHub Pages. Nela, o formulário de pré-orçamento continua enviando nome, placa, modelo e serviço ao WhatsApp; a foto deve ser anexada diretamente na conversa do WhatsApp, sem upload pelo site.

## Publicação

1. Envie este projeto ao repositório `auto-truck` no GitHub.
2. Em **Settings → Pages**, selecione **GitHub Actions**.
3. As mídias públicas já estão no repositório `auto-truck-media`, servidas pela CDN com o endereço `https://cdn.jsdelivr.net/gh/jonathanstrutzz/auto-truck-media@main/public-media`.
4. Faça push para a branch `main`. O workflow `.github/workflows/deploy-pages.yml` gera e publica `dist/github-pages` usando essa origem de mídias.

## URLs

O workflow utiliza automaticamente o nome do repositório como caminho base. Para `https://SEU_USUARIO.github.io/auto-truck/`, o portfólio usa `#/portfolio`, uma rota compatível com GitHub Pages.

## Teste local

```bash
VITE_GITHUB_PAGES_BASE=/auto-truck/ VITE_MEDIA_BASE_URL=https://cdn.jsdelivr.net/gh/jonathanstrutzz/auto-truck-media@main/public-media pnpm build:github-pages
cd dist/github-pages
python3 -m http.server 8080
```

Abra `http://localhost:8080/auto-truck/`. Antes de publicar, verifique a página inicial, `#/portfolio`, os links de WhatsApp e a reprodução de vídeos.
