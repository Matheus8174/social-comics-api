# Features

- [x] A api deve validar os dados recebidos.

- Deve ter os end-points
  - [x] create
  - [x] delete
  - [x] update
  - [x] listAll
  - [x] findOne

- [x] deve ter uma documentação

## How to run the project with docker

- You need to fill the .env file

- Run in your shell
  ```bash
    npm i
  ```

- Generate bundle folder
  ```bash
    npm run build
  ```

- Create api's image from Dockerfile
  ```bash
    docker build -t social-comics-api .
  ```

- Now, run the container
  ```bash
    docker run -p 5000:5000 social-comics-api
  ```

**If a error occurs, try to place a same port in the .env, Dockerfile and docker run command**
