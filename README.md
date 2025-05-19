# 🚀 StartupSim

Simulador multiplayer contínuo de startups e holdings.  
Gerencie squads, produtos, lançamentos, estratégias de crescimento e decisões empresariais em tempo real.

## 🏗️ Estrutura do Projeto

```yaml
startupsim/
├── backend/ # Backend principal - NestJS
├── frontend/ # Interface de jogo - React
├── infra/ # Infraestrutura local via Terraform + Docker
└── README.md # Documentação principal
```

## ⚙️ Tecnologias Utilizadas

```yaml
| Camada        | Stack                             |
|---------------|-----------------------------------|
| Infra         | Terraform + Docker                |
| Banco de Dados| PostgreSQL                        |
| Cache/Mensageria | Redis + RabbitMQ               |
| Backend       | NestJS + Prisma + JWT             |
| Frontend      | React + TypeScript + Tailwind     |
| Observabilidade | Prometheus + Grafana (sem Loki) |
```

## 🔧 Pré-requisitos

```yaml
- [Node.js](https://nodejs.org)
- [Docker](https://www.docker.com/)
- [Terraform](https://developer.hashicorp.com/terraform)
```

## 📦 Infraestrutura Local

```yaml
A infraestrutura local é gerenciada via Terraform + Docker.
```

### ▶️ Subir serviços

```bash
cd infra
terraform init
terraform apply
```

Os seguintes serviços serão criados:

- PostgreSQL
- Redis
- RabbitMQ
- Prometheus
- Grafana

### ⛔ Destruir

```bash
terraform destroy
```

# 🧠 Backend

NestJS com estrutura modular, JWT, Prisma e Core compartilhado.

### ▶️ Iniciar backend (dev)

```bash
cd backend
npm install
npm run start:dev
```

### 🛠️ Migrate Prisma (após alterações)

```bash
npx prisma generate
npx prisma migrate dev
```

# 🎨 Frontend

React + TypeScript (com Vite ou CRA).

### ▶️ Iniciar frontend

```bash
cd frontend
npm install
npm start
```

# 📊 Observabilidade

Acesse o Grafana em:

```makefile
http://localhost:3000
com usuário e senha
```

# 👥 Contribuição

1. Fork este repositório
2. Crie uma branch: git checkout -b feature/nova-feature
3. Commit suas alterações: git commit -m 'feat: nova funcionalidade'
4. Push: git push origin feature/nova-feature
5. Abra um Pull Request

# 📄 Licença

MIT© startupsim
