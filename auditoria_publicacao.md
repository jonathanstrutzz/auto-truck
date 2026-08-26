# Auditoria de publicação — Auto Truck

## 26 de agosto de 2026

### Produção

- O domínio público `autotruck-jxfznarn.manus.space` está indisponível por pendência de cobrança, exibindo a tela de indisponibilidade da plataforma. Isso impede a validação da versão de produção até a regularização da conta.

### Preview desktop

- As rotas `/` e `/portfolio` carregam no preview de desenvolvimento com identidade visual consistente e mídia real.
- A página inicial apresenta boa estrutura, mas há espaço para tornar a assinatura da marca mais evidente no primeiro bloco, reduzir a repetição de títulos em escala máxima nas seções intermediárias e reforçar a prova visual de processo na primeira dobra.
- O portfólio apresenta organização, filtros e grade audiovisual coerentes. A auditoria mobile e a verificação de links/erros de execução ainda serão realizadas.

### Fluxos e responsividade

- A página inicial carrega no preview com navegação por âncoras, CTAs de WhatsApp, formulário de pré-orçamento, filtros, galeria, links de localização e links sociais disponíveis.
- A página de portfólio foi capturada em viewport móvel e preserva filtros, pesquisa, cards e CTA de conversão sem indício visual de sobreposição crítica.
- A captura móvel em página completa da home falhou no mecanismo de screenshot; a primeira dobra foi verificada separadamente no preview e carrega com conteúdo e CTAs visíveis.
- Uma nova tentativa de captura da primeira dobra em viewport móvel também falhou no mecanismo de screenshot, sem mensagem de erro da aplicação. Como a rota, o HTML acessível e os testes de compilação carregam normalmente, o problema foi classificado como limitação de captura do ambiente, não como defeito reproduzido do site.
- A execução de `pnpm check`, `pnpm test` e `pnpm build` foi concluída sem falhas. Os registros recentes do console não exibem erros de aplicação; o aviso histórico sobre `dotenv` não reapareceu na execução atual.

### Refinamento do cabeçalho

- A navegação principal foi revisada no preview após o aumento de fonte e espaçamento. Os oito links permanecem alinhados entre a marca e o CTA de WhatsApp, sem sobreposição observada em desktop.
- Em telas com até 900px, a regra responsiva mantém os links de desktop ocultos e exibe o gatilho do menu móvel; como o ajuste foi limitado a `.desktop-links`, ele não altera a tipografia do menu compacto.
- A captura do cabeçalho nos viewports móveis voltou a falhar por limitação do mecanismo de screenshot, sem erro de aplicação. A validação técnica e a regra responsiva foram preservadas.
