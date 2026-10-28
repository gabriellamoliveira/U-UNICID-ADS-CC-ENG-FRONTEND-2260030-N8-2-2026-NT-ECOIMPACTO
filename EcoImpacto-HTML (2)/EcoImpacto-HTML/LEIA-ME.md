# EcoImpacto — versão HTML

Site com dez páginas em HTML, CSS e JavaScript puro. Não precisa de React, Node ou instalação de pacotes.

## Abrir no computador
Extraia o ZIP e abra `index.html` no navegador. Mantenha os arquivos HTML e a pasta `assets` juntos.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub, por exemplo `ecoimpacto`.
2. Envie o conteúdo desta pasta (não o ZIP): `index.html`, as outras páginas, a pasta `assets`, este guia e `.nojekyll`.
3. Em **Settings → Pages**, selecione **Deploy from a branch**.
4. Escolha a branch **main**, a pasta **/(root)** e clique em **Save**.
5. Aguarde a publicação e abra o endereço informado pelo GitHub.

Os caminhos são relativos e funcionam tanto na raiz quanto em uma pasta de repositório.

## Conteúdo e limites
- Menu, preferências de leitura e validação do formulário funcionam com o JavaScript local.
- Preferências de leitura ficam somente no navegador; o formulário é demonstrativo e não envia nem armazena mensagens.
- Vídeo e mapa precisam de internet. As legendas em português estão em `assets/flor.vtt`.
- O áudio ainda não foi fornecido pela equipe; sua transcrição está disponível. Para acrescentar uma gravação, use um arquivo local e um elemento `<audio controls>` na página `midia.html`.
- Dados fictícios e imagens ilustrativas estão identificados no site.
- Conteúdo acadêmico UNICID, 2026. Equipe: Giovanna Nascimento, Nikollas Paiva, Diego Veiga, Rafaella Oliveira, Gabriella Oliveira e Felipe Tatsuo.
