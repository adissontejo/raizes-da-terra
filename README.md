# Raízes da Terra

Sistema composto por API REST (Spring Boot) e web client (React), orquestrados via Docker Compose.

## Pré-requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e rodando

## Subindo o projeto

**1. Configure as variáveis de ambiente**

```bash
cp .env.example .env
cp .env.api.example .env.api
cp .env.web.example .env.web
```

Edite os arquivos criados e troque as senhas.

**2. Suba os serviços**

```bash
docker compose up --build
```

Na primeira execução o build pode levar alguns minutos. Nas próximas, omita o `--build`.

**3. Acesse**

| Serviço    | URL                                      |
|------------|------------------------------------------|
| Web client | http://localhost:3000                    |
| API        | http://localhost:8080                    |
| Swagger UI | http://localhost:8080/swagger-ui.html    |
| Health     | http://localhost:8080/actuator/health    |


## Estrutura

```
processos/
├── docker-compose.yml
├── .env.example
├── .env.api.example
├── .env.web.example
├── rdt-api/          # Spring Boot
└── rdt-web-client/   # React + Vite
```
