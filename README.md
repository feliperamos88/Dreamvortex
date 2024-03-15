
# Dreamvortex - Text-based game

- DreamVortex - Game Application
  - [Description](#description)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
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


To connect to the database, you must create a [Sequelize](https://sequelize.org/docs/v6/getting-started/) instance with PostgreSQL, which is necessary to run this application. 

If you already have Postgres installed, run the following command from the server directory:

```shell
$ npm run setup_local
```

The previous command:
- Installs all the packages on the server and client-side
- Create the database, and seed it
- Creates a .env file in the /server/config directory with a DB_URI variable. This allows sequelize to connect with the DB.

  After package installation, to set the application live, run the following command from the server directory: 

```shell
$ npm start
```

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




