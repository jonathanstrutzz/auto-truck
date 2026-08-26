# Validação — imagem do veículo no pré-orçamento

- O formulário exibe os controles **Selecionar imagem** e **Usar câmera**; o segundo usa `capture="environment"` para priorizar a câmera traseira em dispositivos compatíveis.
- A interface limita o envio a imagens JPG, PNG e WebP de até 6 MB e informa os critérios ao usuário.
- A mutation pública `vehiclePhoto.upload` foi testada com imagem PNG válida e retornou um caminho `/manus-storage/`, confirmando o armazenamento do arquivo e a criação do link que segue na mensagem do WhatsApp.
- Os testes automatizados validam formatos aceitos, rejeição de formatos incompatíveis e limite de tamanho.

Em um teste controlado no navegador, foi selecionada uma imagem válida, exibido o preview e submetido o pré-orçamento. O estado de confirmação apareceu e a URL preparada para o WhatsApp incluiu o caminho público da imagem armazenada. O segundo seletor também foi acionado no fluxo de teste: ele possui `capture="environment"` e produziu preview do arquivo `captura-camera.png`, confirmando o caminho usado por dispositivos móveis com câmera traseira.

O mesmo arquivo selecionado pelo caminho de câmera foi submetido em seguida no pré-orçamento. A confirmação foi exibida e a URL preparada para o WhatsApp incluiu o link `/manus-storage/` da imagem, validando o fluxo completo de captura, preview, armazenamento e encaminhamento.
