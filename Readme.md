## _API SIMPLES USANDO NODEJS, EXPRESS, DOCKER E MARIADB_

## Features

- Criar rotas
- Implementar banco de dados
- Implementar docker (dockerfile e docker-compose.yml)
- Implementar documentação usando Swagger
- Implementar documentação usando RAML
- Importar para github
- Documentar repositório github com o README

## Requires

- Instalar o Docker Desktop
[![official project](https://img.shields.io/badge/-docker%20desktop-blue)](https://www.docker.com/products/docker-desktop)
- Para sistemas Linux deve instalar o docker compose caso não tenha
```sh
$ sudo curl -L https://github.com/docker/compose/releases/download/X.XX.XX/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
```
- Estar disponivel as portas `3306` e `3000`
  Comando para verificar a disponibilidade das portas `netstat -o -n -a | findstr  3306` e `netstat -o -n -a | findstr  3000`
  Caso já estejá sendo usadas só alterar a porta no arquivo docker-compose.yml

## Installation

Abra o seu terminal e caminhe até a pasta que foi extraido o repositório,
```sh
C:\Users\Carlos Tomazin\Desktop\API_NodeJs-Mariadb-docke-main>
```
já dentro da pasta execute o comando `docker-compose up -d`
```sh
C:\Users\Carlos Tomazin\Desktop\API_NodeJs-Mariadb-docke-main> docker-compose up -d
```
Verifique a implantação navegando até o endereço da sua aplicação em seu navegador preferido.

```sh
localhost:3000/tech
```