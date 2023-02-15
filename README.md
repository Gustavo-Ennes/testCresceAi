# Teste CreasceAi

This project allow you to create and remove teams of pokemon.

## Installation

To get started with this project, first you will need to have Docker and Node.js installed on your machine.

### Running Postgres with Docker

To run the PostgreSQL database for this project, use the following command:

`docker run --name postgres -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres`

This will pull the latest PostgreSQL image from Docker Hub and run it in a container named "postgres" with the password "postgres" and the default port of 5432 exposed.

### Installing Node.js Dependencies

To install the Node.js dependencies for this project, run the following command:

`npm i`

This will install all of the dependencies listed in the package.json file, including:

- axios
- vue
- vue-router
- vuex

## Usage

To start the development server, run the following command:

`npm start`

This will start a development server at http://localhost:3000/ where you can do graphql stuff in `/graphql`.

