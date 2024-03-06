
# Dreamvortex - Text-based game

- DreamVortex - Game Application
  - [Description](#description)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)

## Description

Dreamvortex: Interactive Fiction with Dynamic Choices

Dive into a branching narrative where your every decision shapes your destiny. Navigate five distinct acts, each packed with unique events and consequences. Your choices ripple through the story, influencing dialogue, interactions, and even visuals.

Dreamvortex is a text-based browser game that moves the player across five different levels ('acts'). The story unfolds through texts that narrate the events to the player, followed by the presentation of two choices, each one leading to a different outcome in the story. The player needs to choose which choice better suits their goals in the game.

As a demo, the storyline is limited to only five distinct acts that intertwine until the end of the game. Although each stage has its own unique set of events, the texts don't change between one game and another just because one player made a different choice from another. What breaks the game's linearity is that it randomly chooses which stage will be presented to the player next, so the order of the stages can be different every time you play.

Features:

- Dynamic Narrative: Your choices impact the story, creating a personalized experience.
- Expanding Adventure: Demo showcases the core, with more acts planned for regular addition.
- Persistent Decisions: Saved data lets you explore alternate paths and see the consequences. The data is saved on the database and accessed via a "load game" menu.
- Secure Your Progress: Account creation and login enable progress tracking and achievement comparison (no authentication at this point)
- Visual presentation: Images and CSS animations enhance the text-based experience.

## Tech Stack

This application was developed with the support of the following tools:

- Programming languages: [JavaScript](https://www.javascript.com)
- Libraries/Frameworks: [Express](https://expressjs.com), [React](https://react.dev)
- Database storage and management: [PostgreSQL](https://www.postgresql.org)


## Installation

To connect to the database, you must create a [Sequelize](https://sequelize.org/docs/v6/getting-started/) instance. This can be done by either passing the connection parameters separately to the Sequelize constructor or by passing a single connection URI from the server directory.

Sequelize will automatically create the database, but there will be no data in it. Considering that you have PostgreSQL installed on your computer, to populate the database, run the following command from the server/database directory:

```shell
$ psql < db_seed.sql
```

To install all the packages on the server and client side, run the following command from the server directory:

```shell
$ npm run client
```
After package installation, to set the application live, run the following command from the server directory: 

```shell
$ npm run start
```


