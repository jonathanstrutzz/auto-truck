# GitHub Pages — Auto Truck

Esta configuração cria uma versão **estática e gratuita** para GitHub Pages. Nela, o formulário de pré-orçamento continua enviando nome, placa, modelo e serviço ao WhatsApp; a foto deve ser anexada diretamente na conversa do WhatsApp, sem upload pelo site.

## Publicação

1. Envie este projeto ao repositório `auto-truck` no GitHub.
2. Em **Settings → Pages**, selecione **GitHub Actions**.
3. Execute `pnpm media:manifest` para listar todos os vídeos, imagens, logos e áudios que devem estar em uma origem pública.
4. Envie as mídias mantendo exatamente os nomes exibidos pelo manifesto. Um repositório separado de mídia com arquivos em uma Release pública é uma alternativa gratuita; a URL base terá o formato `https://github.com/SEU_USUARIO/auto-truck-media/releases/download/v1`.
5. No repositório do site, abra **Settings → Secrets and variables → Actions → Variables** e crie `MEDIA_BASE_URL` com a URL base pública, sem barra no final.
6. Faça push para a branch `main`. O workflow `.github/workflows/deploy-pages.yml` gera e publica `dist/github-pages`.

## URLs

O workflow utiliza automaticamente o nome do repositório como caminho base. Para `https://SEU_USUARIO.github.io/auto-truck/`, o portfólio usa `#/portfolio`, uma rota compatível com GitHub Pages.

## Teste local

```bash
VITE_GITHUB_PAGES_BASE=/auto-truck/ VITE_MEDIA_BASE_URL=https://SEU_ENDERECO_DE_MIDIAS pnpm build:github-pages
cd dist/github-pages
python3 -m http.server 8080
```

Abra `http://localhost:8080/auto-truck/`. Antes de publicar, verifique a página inicial, `#/portfolio`, os links de WhatsApp e a reprodução de vídeos.
