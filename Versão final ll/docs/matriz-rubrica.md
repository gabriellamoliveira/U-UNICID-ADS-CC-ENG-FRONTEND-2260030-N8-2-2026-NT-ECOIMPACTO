# Matriz de atendimento à rubrica — EcoFuture

Esta matriz transforma a rubrica em tarefas verificáveis. Marque como concluído somente após executar o teste e guardar evidência.

| Critério | Implementação/evidência | Estado nesta versão |
|---|---|---|
| 1. JavaScript interativo | `js/main.js`: preferências persistentes, checklist e formulário demonstrativo | Implementado parcialmente; testar em navegador |
| 2. HTML semântico | `header`, `nav`, `main`, `section`, `article`, `footer`, títulos e link de salto | Presente; validar página por página |
| 3. CSS responsivo | `style.css`, Grid/Flexbox e breakpoint móvel | Implementado; testar em larguras reais |
| 4. Acessibilidade | skip link, foco visível, controles rotulados, contraste e ampliação | Boas práticas iniciais; não declarar conformidade WCAG sem auditoria |
| 5. Deploy HTTPS | GitHub Pages em `main/(root)` | Depende da configuração do repositório |
| 6. Funcionalidades de participação | Compromissos e formulário de interesse demonstrativo | Implementado localmente; sem backend |
| 7. Escopo | Dez páginas educativas/participativas mais página de acessibilidade | Estrutura existente documentada |
| 8. IA | Documentar eventual ferramenta/API e seus testes antes de anunciar integração | Não implementado; não simular IA |
| 9. Evolução do MVP | Comparar versão anterior e atual com capturas e lista de mudanças | Evidência a produzir pela equipe |
| 10. Git/versionamento | Commits pequenos, mensagens claras, branches e PRs | Processo da equipe; registrar no GitHub |
| 11. Documentação | README, matriz, testes e diário de bordo | Documentação inicial criada |
| 12. ODS/temática | Páginas sobre consumo, água, energia, resíduos, impacto social e ODS | Conteúdo presente; acrescentar referências bibliográficas |
| 13. Slides | Apresentação com arquitetura, objetivos, resultados e evidências | Preparar separadamente |
| 14. Demonstração | Roteiro de testes e demonstração ao vivo | Roteiro criado em `testes.md` |
| 15. Comunicação | Explicação das decisões técnicas e limites do protótipo | Ensaiar em equipe |
| 16. Trabalho em equipe | Responsáveis, tarefas e contribuições registradas | Preencher diário de bordo |

## Limites importantes

- O formulário de participação guarda dados apenas no `localStorage` do navegador usado. Não transmite inscrições.
- O site ainda não possui integração real com inteligência artificial, banco de dados ou serviço de e-mail.
- A presença de recursos de acessibilidade não comprova, sozinha, conformidade WCAG. É necessário testar com teclado, leitor de tela, ferramentas automáticas e pessoas com deficiência.
