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

### Novo registro audiovisual — pintura de rodas

- O vídeo enviado registra a renovação estética das rodas de um caminhão DAF, com preparação visual, aplicação de tinta e finalização de aros e cubos.
- A fonte possui 24,8 segundos, orientação vertical Full HD (1080 × 1920), vídeo H.264 e áudio AAC; foi preparada em MP4 com início otimizado para reprodução web.
- A capa selecionada usa um quadro real de rodas finalizadas, preservando a leitura direta do processo sem criar imagem artificial.
- O preview confirmou o novo item como vídeo 21, o filtro `Pintura 01` e a contagem `DAF 05`.
- O player carregou o MP4 de pintura de rodas com duração de 24,8 segundos, estado pronto para reprodução e sem erro de mídia; a reprodução automática silenciosa também foi confirmada no destaque.
- No viewport móvel de 375px, o portfólio preserva a hierarquia do hero, a contagem de 21 vídeos e a entrada do card de pintura de rodas sem sobreposição no início da grade.

### Validação GitHub Pages

- A primeira abertura do pacote estático em servidor HTTP mostrou uma página em branco no caminho de subpasta. A correção do comportamento de rota e de carregamento será concluída antes da entrega da configuração gratuita.
- O HTML e os bundles de CSS e JavaScript responderam com sucesso, mas o elemento raiz permaneceu vazio. A investigação aponta para a inicialização do cliente, não para a disponibilidade dos arquivos estáticos.
- Ao iniciar a prévia com o mesmo caminho base de GitHub Pages, a página inicial estática renderizou com navegação, formulário, atalhos e seções institucionais. As imagens apontaram para a origem pública configurável de mídia, como esperado.
- A rota `#/portfolio` carregou corretamente no servidor HTTP sem reescrita de backend. O pré-orçamento da versão estática apresentou a orientação de anexar fotos diretamente no WhatsApp.

### Parceria JF Express

- O logotipo utilizado na parceria foi obtido do cabeçalho do site oficial informado da JF Express e salvo como ativo dedicado, preservando a referência institucional fornecida pelo usuário.
- No preview da Auto Truck, a seção de parceria exibe o logotipo com texto alternativo, a identificação “Conexão parceira” e o link externo para o site oficial da JF Express.
- Em desktop, o logotipo aparece em cartão branco com borda de sinalização laranja, alinhado ao texto institucional e separado do painel de dados da Auto Truck, sem competir com o pré-orçamento.
- A captura móvel do ambiente não foi concluída por limitação de recursos do navegador. A composição possui regra específica abaixo de 900px para ocupar a largura disponível, sem largura fixa além do contêiner; a validação de tipos, testes e build foi concluída sem erros.
