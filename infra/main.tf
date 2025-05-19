terraform {
  required_providers {
    docker = {
        source = "kreuzwerker/docker"
        version = "~> 3.0.2"
    }
  }
}

provider "docker" {}

resource "docker_network" "default" {
    name = "startupsim-net"
}

resource "docker_image" "postgres" {
    name = "postgres:15"
}

resource "docker_container" "postgres" {
  name  = "startupsim_postgres"
  image = docker_image.postgres.name
  networks_advanced {
    name = docker_network.default.name
  }
  env = [
    "POSTGRES_USER=${var.postgres_user}",
    "POSTGRES_PASSWORD=${var.postgres_password}",
    "POSTGRES_DB=${var.postgres_db}"
  ]
  ports {
    internal = 5432
    external = 5432
  }
}

resource "docker_image" "redis" {
  name = "redis:7"
}
resource "docker_container" "redis" {
  name  = "startupsim_redis"
  image = docker_image.redis.name
  networks_advanced {
    name = docker_network.default.name
  }
  ports {
    internal = 6379
    external = 6379
  }
}

resource "docker_image" "rabbitmq" {
  name = "rabbitmq:3-management"
}
resource "docker_container" "rabbitmq" {
  name  = "startupsim_rabbitmq"
  image = docker_image.rabbitmq.name
  networks_advanced {
    name = docker_network.default.name
  }
  env = [
    "RABBITMQ_DEFAULT_USER=${var.rabbitmq_user}",
    "RABBITMQ_DEFAULT_PASS=${var.rabbitmq_password}"
  ]
  ports {
    internal = 5672
    external = 5672
  }
  ports {
    internal = 15672
    external = 15672
  }
}

resource "docker_image" "prometheus" {
  name = "prom/prometheus"
}
resource "docker_container" "prometheus" {
  name  = "startupsim_prometheus"
  image = docker_image.prometheus.name
  networks_advanced {
    name = docker_network.default.name
  }
  ports {
    internal = 9090
    external = 9090
  }
  volumes {
    container_path = "/etc/prometheus"
    host_path      = abspath("${path.module}/prometheus")
    read_only      = false
  }
}

resource "docker_image" "grafana" {
  name = "grafana/grafana"
}
resource "docker_container" "grafana" {
  name  = "startupsim_grafana"
  image = docker_image.grafana.name
  networks_advanced {
    name = docker_network.default.name
  }
  env = [
    "GF_SECURITY_ADMIN_USER=${var.grafana_admin_user}",
    "GF_SECURITY_ADMIN_PASSWORD=${var.grafana_admin_password}"
  ]
  ports {
    internal = 3000
    external = 3000
  }
}

resource "docker_image" "promtail" {
  name = "grafana/promtail:2.9.2"
}
resource "docker_container" "promtail" {
  name  = "startupsim_promtail"
  image = docker_image.promtail.name
  command = ["-config.file=/etc/promtail/promtail.yml"]
  networks_advanced {
    name = docker_network.default.name
  }
  volumes {
    container_path = "/etc/promtail/promtail.yml"
    host_path      = abspath("${path.module}/promtail/promtail.yml")
    read_only      = false
  }
}