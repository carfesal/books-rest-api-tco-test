# REST API for test to TCO - Blackbox

[Repositorio de Github](https://github.com/carfesal/books-rest-api-tco-test)

## Pasos para correr el proyecto con docker: 

1. Tener instalado docker. En caso de ser necesario se adjunta [guia de instalacion](https://docs.docker.com/engine/install/)
2. clonar el proyecto:

    ``git clone https://github.com/carfesal/books-rest-api-tco-test``

3. Moverse a la carpeta del proyecto
4. Copiar el archivo .env.example y renombrarlo a .env
5. Correr el comando

    ``docker compose up --build -d``
6. En estos momentos el proyecto estara apto para su uso

> Nota: Para facilidad de prueba en la autenticacion solo se necestia pasar el email como valor de un header con nombre **authorization**:
    ``authorization: <correo electronico de usuario>``

## Pasos para correr el proyecto en local sin docker: 

1. Tener instalado nodejs. En caso de ser necesario se adjunta [guia de instalacion](https://nodejs.org/es/download/)
2. clonar el proyecto:

    ``git clone https://github.com/carfesal/books-rest-api-tco-test``

3. Moverse a la carpeta del proyecto
4. Copiar el archivo .env.example y renombrarlo a .env
5. Editar la variable de entorno **DB_HOST** con la direccion de la base de datos. **Ej:** localhost
6. Correr el comando

    ``npm install``
7. Correr el comando

    ``npm run start``
