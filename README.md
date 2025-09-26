# 📚 API Automática de Estudiantes

API RESTful para la gestión de **alumnos**. Construida con **Node.js, Express y Sequelize**, utilizando **MySQL** como base de datos y desplegada en **AWS EC2** con **Docker** y **GitHub Actions** para CI/CD.

---
## 📑 Índice

1. [Tecnologías](#-tecnologías)  
2. [Requisitos previos](#-requisitos-previos)  
3. [Estructura del proyecto](#-estructura-del-proyecto)  
4. [Variables de entorno](#-variables-de-entorno)  
5. [Instalación y ejecución](#️-instalación-y-ejecución)  
   - [Local](#ejecución-en-local)  
   - [Con Docker](#ejecución-con-docker)  
6. [Endpoints principales](#-endpoints-principales)  
7. [CI/CD con GitHub Actions](#-cicd-con-github-actions)  
8. [Despliegue en AWS EC2](#-despliegue-en-aws-ec2)  
9. [Autores](#-autores)  
10. [Licencia](#-licencia)  

---

## 🚀 Tecnologías

- [Node.js 18](https://nodejs.org/)  
- [Express 5](https://expressjs.com/)  
- [Sequelize 6](https://sequelize.org/)  
- [MySQL 8](https://www.mysql.com/)  
- [Docker & Docker Compose](https://www.docker.com/)  
- [Nginx](https://www.nginx.com/) (reverse proxy)  
- [Certbot](https://certbot.eff.org/) (HTTPS con Let’s Encrypt)  
- [GitHub Actions](https://github.com/features/actions) (CI/CD)  

---

## ⚙️ Requisitos previos

- Tener instalado [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/)  
- Tener una cuenta en [Docker Hub](https://hub.docker.com/)  
- Instancia de **AWS EC2** con Ubuntu 22.04 o similar  

---

## 📂 Estructura del proyecto
api-automatica/
│── config/ # Configuración de Sequelize y conexión a DB
│── controllers/ # Lógica de negocio
│── models/ # Modelos Sequelize
│── routes/ # Rutas Express
│── server.js # Punto de entrada de la API
│── docker-compose.yml # Orquestación de contenedores
│── Dockerfile # Construcción de la imagen
│── .env.example # Variables de entorno
│── .github/workflows/ # CI/CD con GitHub Actions