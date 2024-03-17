
# Dreamvortex - Text-based game

- DreamVortex - Game Application
  - [Description](#description)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Testing](#testing)
  - [Endpoints](#endpoints)

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

### All of the following commands should be executed from the server directory


- To install all the packages on both the fron-tend and back-end side, run:

```shell
$ node run setup
```

- To connect to the database, you must create a [Sequelize](https://sequelize.org/docs/v6/getting-started/) instance. This can be done by renaming the .env-example file, located in the server directory, to just .env and passing the connection parameters to each variable. The config.js file, located in server/config, will look for the variables in the .env file and create the Sequelize URI. 

If you don't have the database created, you have the option to create it after you pass the parameters to the .env file by running:

```shell
$ node createdb.js
```

This will create the database based on the parameters that you passed. If you already have the database and passed the connection parameters, run the following command to seed the database:

```shell
$ node seed.js
```

To install all the packages, create the database, and seed it after passing the parameters to the .env file, you can run the single command:

```shell
$ npm run setup_local
```

After package installation and database connection, to set the application live, run the following command from the server directory: 

```shell
$ npm start
```

## Testing

Make sure to change the database name to a "database_test" name in the .env file since Sequelize uses the same parameters to create the URI for the test database. 

## Endpoints

### GET

/setting
```
{
	"settings": [
			{
				"name": "forest",
				"background_pic": "images/settings/forest2.png",
				"character": "hooded_figure"
			},
			{
				"name": "desert",
				"background_pic": "images/settings/desert.gif",
				"character": "snake"
			},
	    		{...}
		    ]
}
```

/setting/id
```
{
	"setting": {
		"name": "forest",
		"background_pic": "images/settings/forest2.png",
		"character": "hooded_figure",
		"dialogues": [
			{
				"id": "F1",
				"text": "As the sun dips below the horizon, casting long shadows through ancient trees, you find yourself deep within a dense forest. The air is thick with an otherworldly aura, and the silence is broken only by the rustle of leaves underfoot...",
				"opening_text": true,
				"ending_text": false,
				"transition_to_setting": null,
				"current_setting_name": "forest",
				"choices": [
						{
							"id": "F-CB",
							"choice_text": "Embark on a mystical journey deeper into the unknown forest.",
							"final_choice": false,
							"dialogue_id_from": "F1",
							"dialogue_id_to": "F2B"
						},
						{
							"id": "F-CA",
							"choice_text": "Seek guidance from whispers in towering trees.",
							"final_choice": false,
							"dialogue_id_from": "F1",
							"dialogue_id_to": "F2A"
						}
						{
							"id": "F2A",
							"text": "You have chosen the path less traveled. The forest responds to your curiosity. Yet, challenges....",
						}
 						{...}
					]
			},
		{...}
		]
}
```

/player
```
	{
	"players": [
			{
				"player_id": "player_1",
				"createdAt": "2024-02-28T00:51:11.445Z",
				"updatedAt": "2024-02-28T00:51:11.445Z"
			},
			{
				"player_id": "player_2",
				"createdAt": "2024-02-28T03:00:34.478Z",
				"updatedAt": "2024-02-28T03:00:34.478Z"
			},
			{
				"player_id": "player_3",
				"createdAt": "2024-02-29T17:39:59.389Z",
	   			...
				
			},
			{...}
		]
	}
```

/player/id
```
{
	"player": {
		"player_id": "player_1",
		"createdAt": "2024-02-28T00:51:11.445Z",
		"updatedAt": "2024-02-28T00:51:11.445Z",
		"saved_game": [
			{
				"id": 18,
				"act": 2,
				"setting": "city",
				"createdAt": "2024-02-28T00:51:16.369Z",
				"updatedAt": "2024-02-28T00:52:06.217Z",
				"player_id": "player_1",
				"dialogue_id": "C1",
				"concluded_settings": [
    
					{
						"setting_name": "prologue"
					},
					{
						"setting_name": "forest"
					}
				]
			}
		]
	}
}
```

/gameslot
```
{
	"game_slots": [
			{
				"id": 3,
				"act": 2,
				"setting": "city",
				"createdAt": "2024-02-28T00:51:16.369Z",
				"updatedAt": "2024-02-28T00:52:06.217Z",
				"player_id": "player_1",
				"dialogue_id": "C1"
			},
			{
				"id": 5,
				"act": 1,
				"setting": "desert",
				"createdAt": "2024-02-28T03:00:40.798Z",
				"updatedAt": "2024-02-28T03:01:04.760Z",
				"player_id": "player_2",
				"dialogue_id": "D1"
			},
	  		{...}
                     ]
}
```

/gameslot/id
```
{
	"game": {
		"id": 3,
		"act": 2,
		"setting": "city",
		"createdAt": "2024-02-28T00:51:16.369Z",
		"updatedAt": "2024-02-28T00:52:06.217Z",
		"player_id": "player_1",
		"dialogue_id": "C1",
		"concluded_settings": [
  
			{
				"setting_name": "prologue"
			},
			{
				"setting_name": "forest"
			}
		]
	}
}
```

/progress
```
{
	"progress": [
			{
				"id": 1,
				"createdAt": "2024-02-28T00:51:32.526Z",
				"updatedAt": "2024-02-28T00:51:32.526Z",
				"saved_game_id": 3,
				"setting_name": "prologue"
			},
			{
				"id": 2,
				"createdAt": "2024-02-28T00:52:05.404Z",
				"updatedAt": "2024-02-28T00:52:05.404Z",
				"saved_game_id": 3,
				"setting_name": "forest"
			},
			{...},
		]
}




