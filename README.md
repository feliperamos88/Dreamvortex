
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

In the server directory, provide a database URL or create a new database and attach as a parameter to sequelize in the config.js located in the config directory. It runs on PostgreSQL.

Sequelize will automatically create the database, but there will be no data in it. To populate the database, from server/database, run:

```shell
$ psql < game_seed.sql
```

To install all the packages in the server and client side, you can run, from the server directory:

```shell
$ npm run client
```
After package installation, to set the application live, you can run, from the server directory: 

```shell
$ npm run start
```

Sequelize will automatically create the database, but there will be no data in it. From the database directory, located in the server directory, you can optionally run the jobly-seed.sql file to insert data into the database.


## Description

A web tool that emulates a job application page. It uses [Bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing and
[JSON Web Tokens](https://jwt.io) for authentication.
