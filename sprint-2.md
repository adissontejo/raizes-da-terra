# Sprint 2 – Retrospectiva e Reflexão

## Docker

Durante esta sprint, adicionamos suporte ao Docker no projeto por meio da criação de um Dockerfile para o backend, outro para o frontend e de um arquivo docker-compose.yml responsável por orquestrar os containers da aplicação e do banco de dados PostgreSQL.

A utilização do Docker trouxe diversos benefícios para a equipe, principalmente na padronização do ambiente de desenvolvimento. Com isso, o processo de setup e execução do projeto tornou-se mais simples, rápido e consistente entre os membros do time, além de eliminar problemas específicos de configuração que haviam ocorrido anteriormente em algumas máquinas.

---

## Pipeline de Integração Contínua (CI)

Também implementamos uma pipeline de CI no GitHub para realizar validações automáticas de build e lint tanto no frontend quanto no backend.

Essa automação ajudou a aumentar a qualidade do código entregue pela equipe, impedindo o envio de alterações que quebrassem a aplicação ou que não seguissem os padrões de qualidade e boas práticas definidos no projeto.

---

## Mudanças na Estratégia de Branches

Nesta sprint, revisamos a estratégia de branches utilizada pela equipe.

Anteriormente, cada subtask possuía sua própria branch de feature, enquanto cada task principal possuía uma branch de release correspondente. O fluxo funcionava da seguinte forma: as branches de feature eram mergeadas primeiro na branch de release e, somente após a conclusão completa da task principal, a branch de release era integrada à main.

Entretanto, percebemos que esse processo não estava alinhado com os princípios de Continuous Integration, já que alterações permaneciam isoladas nas branches de release por longos períodos antes de serem integradas à branch principal. Isso aumentava o risco de conflitos e dificultava a integração contínua do código.

Por esse motivo, decidimos simplificar o fluxo de trabalho removendo as branches de release. A partir dessa mudança, as branches de feature passaram a ser mergeadas diretamente na main, aumentando a frequência de integração, reduzindo complexidade e tornando o desenvolvimento mais colaborativo e eficiente.

---

## Funcionalidades Desenvolvidas

Durante a sprint, foram implementadas as seguintes funcionalidades:

* Desenvolvimento do frontend da tela de gerenciamento de produtos;
* Integração entre frontend e backend das funcionalidades de cadastro e edição de produtores.
