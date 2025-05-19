# 📦 Infraestrutura Local - StartupSim

Este ambiente usa **Terraform** + **Docker** para subir os serviços de backend da infraestrutura local do projeto.

## ✅ Serviços planejados

- PostgreSQL
- Redis
- RabbitMQ
- Prometheus
- Grafana
- Loki + Promtail

## ▶️ Como usar

```bash
cd infra
terraform init
terraform apply
```

Pressione yes quando solicitado.

## ⛔ Para destruir

```bash
terraform destroy
```
