# Qualidade de mídia — Auto Truck

As quatro fontes usadas na faixa de vídeos da galeria de serviços foram conferidas em resolução nativa de **3840 × 2160 pixels**. Elas foram encapsuladas em MP4 sem recompressão de imagem, com metadados de câmera removidos para compatibilidade de navegador, e são reproduzidas como registros 4K reais.

Os demais vídeos e imagens preservam a melhor resolução efetivamente fornecida. Registros originalmente inferiores a 4K não são ampliados artificialmente, pois isso não cria detalhe real e pode reduzir a qualidade percebida. As imagens são utilizadas diretamente de seus originais publicados, sem redução no código.

## Fontes 4K mapeadas para o portfólio

| Registro publicado | Fonte 4K disponibilizada |
| --- | --- |
| Volvo FH Guareschi | `/manus-storage/IMG_0464(1)_70043b41.MOV` |
| Scania em chegada | `/manus-storage/IMG_6695_0c37bb1e.MOV` |
| Volvo noturno | `/manus-storage/IMG_7163_b201c997.MOV` |
| Volvo e DAF finalizados | `/manus-storage/IMG_7535_327b9368.MOV` |
| Scania em conjunto | `/manus-storage/IMG_7248_f5e4b5a2.MOV` |
| Bastidores DAF | `/manus-storage/IMG_7541_7f95a07a.MOV` |
| DAF na fachada | `/manus-storage/IMG_7542_25ca833a.MOV` |
| Volvo FH em lavagem com espuma | `/manus-storage/IMG_7665_f2c24e4c.MOV` |
| Unidade noturna | `/manus-storage/IMG_7683_65ae1b50.MOV` |
| Volvo FH em polimento | `/manus-storage/IMG_7715_c4d6bc3a.MOV` |
| DAF XF 530 | `/manus-storage/IMG_7777_63cc1621.MOV` |
| Volvo FH rosa | `/manus-storage/IMG_8020_784ee461.MOV` |
| Scania personalizada | `/manus-storage/IMG_8247_90c93c7e.MOV` |

O player do portfólio mantém duas fontes quando há original 4K: primeiro o arquivo original em QuickTime para navegadores compatíveis e, em seguida, o MP4 já publicado como fallback. Essa ordem preserva a máxima definição disponível sem retirar a reprodução em navegadores que não aceitam o codec da câmera.

Os fallbacks foram refeitos em **Full HD vertical (1080 px de altura)**, H.264 e com alta taxa de qualidade, a partir dos arquivos 4K. Assim, navegadores compatíveis reproduzem o original 4K; os demais mantêm uma versão Full HD nativa, sem interpolação de arquivos menores.

Em validação no navegador, o player apresentou a fonte 4K da cena de chegada como primeira opção e reproduziu o fallback H.264 Full HD com `readyState` completo no ambiente sem suporte ao codec original. A troca de cenas também recarregou corretamente a fonte de fallback atualizada.

## Registros mantidos abaixo de 4K

Os vídeos **Presença em movimento**, **Lavagem detalhada**, **Acabamento premium** e **Oficina em operação** têm fonte original vertical de 1280 × 2276. **Scania laranja** e **Pintura de projeto especial** têm fonte de 1080 × 1920. **DAF XF em polimento** foi fornecido em 576 × 1024. Eles permanecem na resolução original, sem ampliação artificial. Todos os demais registros que possuíam fonte 4K receberam prioridade 4K com fallback Full HD nativo.

Em inspeção desktop do navegador, as superfícies computadas da galeria e da linha do tempo retornaram `rgb(255, 255, 255)`, confirmando a retirada do tom amarelado nas áreas claras.

A revisão visual desktop da página principal confirmou a identidade preto, branco e laranja com áreas claras neutras. A navegação direta à galeria e a inspeção de estilos confirmaram que suas superfícies usam branco puro; a ferramenta de captura automática não conseguiu gerar uma imagem isolada dessa âncora, sem afetar a renderização no navegador.

Uma revisão visual desktop concluída pela navegação da própria página exibiu a galeria com fundo branco neutro, sem pigmento amarelado, e os quatro vídeos de serviço com enquadramento e nitidez preservados.
