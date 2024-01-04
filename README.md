
# Dreamvortex - Text-based game

- Jobly - Job Application App
  - [TeckStack](#teckstack)
  - [Installation](#installation)
  - [Description](#description)

## TeckStack

This application was developed with the support of the following tools:

- Programming languages: [JavaScript](https://www.javascript.com)
- Libraries/Frameworks: [Express](https://expressjs.com), [React](https://react.dev)
- Database storage and management: [PostgreSQL](https://www.postgresql.org)



## Installation

To connect to the database, you must create a [Sequelize](https://sequelize.org/docs/v6/getting-started/) instance. This can be done by either passing the connection parameters separately to the Sequelize constructor or by passing a single connection URI from the server directory.

Sequelize will automatically create the database, but there will be no data in it. To populate the database, from the server/database directory, run:

```shell
$ psql < game_seed.sql
```

To install all the packages on the server and client side, run the following command from the server directory:

```shell
$ npm run client
```
After package installation, to set the application live, run the following command from the server directory: 

```shell
$ npm run start
```

## Description

Dreamvortex is a text-based choice game. It involves the player making choices (via click events) that lead to different stages of the game based on their choice selections.
