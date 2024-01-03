


\connect game-db



INSERT INTO settings (name, background_pic, character)
VALUES ('forest',
        'images/settings/forest2.png',
        'hooded_figure'),
         ('desert',
        'images/settings/desert.gif',
        'snake'),
         ('city',
        'images/settings/urban.gif',
        'witch_woman'),
         ('ocean',
        'images/settings/sunriseocean.gif',
        'shark'),
         ('sky',
        'images/settings/galaxy.gif',
        'sun_figure'),
         ('prologue', NULL, NULL),
         ('final', NULL, NULL);


-- DIALOGUES:

INSERT INTO dialogues (id, text, opening_text, current_setting_name, ending_text, transition_to_setting) VALUES 

-- PROLOGUE
        ('P0', 'P0 Base Text', TRUE, 'prologue', FALSE, NULL), 
-- FINAL
        ('F0', 'F0 Base Text', FALSE, 'final', FALSE, NULL), 
-- FOREST SETTING
        ('F1', 'As the sun dips below the horizon, casting long shadows through ancient trees, you find yourself deep within a dense forest. The air is thick with an otherworldly aura, and the silence is broken only by the rustle of leaves underfoot. Suddenly, a figure emerges from the shadows, draped in a hooded cloak that melds seamlessly with the surrounding darkness. "Greetings, wanderer," they speak, their voice echoing through the ancient trees. "In this mystical forest where time itself dances on the edge of dreams, your fate is entwined with the choices you make as you traverse these ethereal realms."', TRUE, 'forest', FALSE, NULL),
        ('F2A', 'You have chosen the path less traveled. The forest responds to your curiosity. Yet, challenges await. Two diverging trails beckon you. What will you do? Your journey through this dream world is shaped by the decisions you make.', FALSE, 'forest', FALSE, NULL),
        ('F2B', 'The whispered guidance leads you to a different trail. It is shrouded in mystery, and the air is thick with anticipation. Two paths branch off. What is your next move? Remember, the dream world is malleable, shaped by your choices.', FALSE, 'forest', FALSE, NULL),
        ('F3AA', 'The sunlit trail reveals its secrets. Creatures of light and harmony surround you. Ahead, a fork in the road awaits. How will you navigate this enchanted realm? The dream world responds to your desires and fears, reflecting them in its mystical landscapes.', FALSE, 'forest', FALSE, NULL),
        ('F3AB', 'The shadowed realm unfolds its mysteries. Dark whispers accompany your journey. Another fork appears, challenging your resolve. What path will you tread? In this dream world, the shadows harbor both danger and hidden truths.', FALSE, 'forest', FALSE, NULL),
        ('F3BA', 'The moonlit path reveals its wonders. Mythical creatures dance in the moonbeams. Yet, the path ahead holds another choice. What will you decide? Your journey through this dream world unfolds like a story, each chapter shaped by your decisions.', FALSE, 'forest', FALSE, NULL),
        ('F3BB', 'The twilight passage reveals its secrets. Mysterious sounds fill the air. Another crossroads appears. What will be your course of action? In the dream world, the veil between reality and imagination is thin. Choose wisely, for the path you walk may influence your awakening.', FALSE, 'forest', FALSE, NULL),
        ('F4X', 'Your journey through the mystical forest has come to an end. The path you chose has led you to a tranquil grove. Here, the whispers of the trees impart ancient wisdom. You have learned the secrets of the forest, unlocking a piece of the dream world that surrounds you. As you stand in this serene grove, the dream world awaits your next move. The possibilities are as vast as the unexplored landscapes ahead.', FALSE, 'forest', TRUE, NULL),
        ('F4Z', 'The winding trails have brought you to a hidden clearing. The shadows play tricks on your senses, revealing glimpses of the unknown. In this mysterious realm, you have uncovered the enigmatic facets of the forest, a reflection of the intricate dream that ensnares you. The dream world remains a tapestry of uncharted territories, and your choices have set the stage for the next chapter. What realm will unfold before you next?', FALSE, 'forest', TRUE, NULL),
-- OCEAN SETTING
        ('O1', 'A vast ocean stretches beyond the horizon, its waves whispering tales of forgotten dreams. As the sun sets, casting a warm glow upon the water, you find yourself standing on the shore. The rhythmic sounds of the waves are interrupted by the majestic presence of a whale emerging from the depths. "Welcome to the Tides of Dreams, where every crest and trough holds a story untold. Your journey through this oceanic realm is guided by the choices you make as you navigate these boundless waters."', TRUE, 'ocean', FALSE, NULL),
        ('O2A', 'You embark on a journey through the gentle waves, where the sun''s last rays paint the sea with hues of gold. Two paths unfold, each leading to unexplored depths. What course will you set in this ocean of dreams?', FALSE, 'ocean', FALSE, NULL),
        ('O2B', 'Venture into the mysterious depths, where shadows dance beneath the surface. Two diverging currents beckon, each holding secrets yet unveiled. What decision will you make in this ocean where reality and fantasy intertwine?', FALSE, 'ocean', FALSE, NULL),
        ('O3AA', 'Amongst the shimmering waves, you encounter creatures of grace and beauty. A crossroads approaches, demanding a decision. How will you navigate the currents of this dream-laden ocean?', FALSE, 'ocean', FALSE, NULL),
        ('O3AB', 'The shadows beneath the waves conceal enigmatic wonders. Another choice awaits, shaping the course of your journey through this ocean of mysteries. What path will you tread in the depths of dreams?', FALSE, 'ocean', FALSE, NULL),
        ('O3BA', 'Embrace the serenity of the sunlit waters, where marine life dances in harmony. The path forward presents another choice. How will you shape your destiny in this ocean where reality blends with the fantastical?', FALSE, 'ocean', FALSE, NULL),
        ('O3BB', 'Delve into the enigmatic shadows below, where whispers echo through the depths. A crucial decision lies ahead, echoing through the dream-laden currents of this oceanic realm. What path will you carve in this ocean of secrets?', FALSE, 'ocean', FALSE, NULL),
        ('O4X', 'Your journey through the Tides of Dreams has come to an end. The path you chose has led you to a tranquil abyss, where the whispers of the ocean reveal ancient secrets. You have unraveled the mysteries of the ocean, unlocking a piece of the dream world that surrounds you. As you float in this serene abyss, the dream world awaits your next move. The possibilities are as vast as the unexplored depths ahead.', FALSE, 'ocean', TRUE, NULL),
        ('O4Z', 'The underwater currents have guided you to a hidden cavern, where shadows play on the walls like fleeting dreams. From this secret sanctuary, you''ve glimpsed the hidden intricacies of the ocean. The dream world remains a tapestry of uncharted territories, and your choices have set the stage for the next chapter. What realm will unfold before you next?', FALSE, 'ocean', TRUE, NULL),
 -- SKY SETTING
        ('S1', 'Walking through a dreamy night sky filled with stars, you feel a celestial presence. A group of stars coalesces into a shimmering entity before you. "Welcome, traveler, to the cosmic tapestry," it beckons, as you step into the dreamland where choices weave through the timeless expanse of the sky.', TRUE, 'sky', FALSE, NULL), 
        ('S2A', 'The gentle celestial breeze guides you through the starlit expanse, unveiling ethereal wonders. The group of stars speaks, "We are the storytellers of the cosmos. A choice awaits, each leading to a unique revelation within the cosmic canvas."', FALSE, 'sky', FALSE, NULL),  
        ('S2B', 'The distant stars cast a tranquil glow on your journey, and in the cosmic shadows, mysteries unfold. The group of stars murmurs, "Destiny unfolds in the night sky. A pivotal choice awaits, shaping the destiny of your dream-laden adventure."', FALSE, 'sky', FALSE, NULL), 
        ('S3AA', 'Amidst the starry dance, a constellation forms, narrating a vivid tale. The brilliance of the stars intensifies. The group of stars beckons, "Choices ahead hold keys to unlock celestial secrets."', FALSE, 'sky', FALSE, NULL),
        ('S3AB', 'In the cosmic tapestry, shadows whisper of concealed knowledge. A decisive choice presents itself, offering a path to unravel the secrets woven into the dream-laden sky. The group of stars softly adds, "The cosmic secrets await your discovery."', FALSE, 'sky', FALSE, NULL),
        ('S3BA', 'Distant stars form a celestial symphony, and a cosmic figure emerges. The group of stars speaks with a melodic harmony, "Choices await, each echoing through the vast expanse, shaping your celestial destiny."', FALSE, 'sky', FALSE, NULL),
        ('S3BB', 'Cosmic whispers resonate in the depths of the night sky. A shadowy presence beckons, and with choices ahead, the dream-laden sky holds untold stories. The group of stars utters, "The mysteries of the cosmos unfold."', FALSE, 'sky', FALSE, NULL), 
        ('S4X', 'As you navigate the celestial realms, the dreamy sky becomes a part of you. The choices you made resonate in the cosmos, shaping your destiny within the dream world. The group of stars speaks, "Your journey continues, guided by the choices you make."', FALSE, 'sky', TRUE, NULL), 
        ('S4Z', 'The mysteries of the cosmic tapestry unfold. Your choices reverberate through the dream-laden sky, guiding your journey into the vast unknown. The group of stars whispers, "The cosmic journey is yours to explore."', FALSE, 'sky', TRUE, NULL),
 -- DESERT SETTING
        ('D1', 'As the relentless desert sun beats down, a wise desert snake approaches. "In this dream, where time dances with the shifting sands, the canvas of day and night paints an ever-changing masterpiece," it hisses. The eternal desert unfolds before you, a landscape shaped by the choices you make as you journey through this transient realm.', TRUE, 'desert', FALSE, NULL), 
        ('D2A', 'The desert winds whisper tales of hidden caves, and the snake says, "Amongst the dunes lie secret entrances. Choices can lead you to the shelter of ancient caverns."', FALSE, 'desert', FALSE, NULL),  
        ('D2B', 'Beneath the ever-changing sky, the desert snake reveals, "In this realm where day and night coalesce like fleeting mirages, oasis blooms and fades. Choices unveil the wonders amidst the transient sands."', FALSE, 'desert', FALSE, NULL), 
        ('D3AA', 'Amidst the surreal cycle, shadows unveil an oasis where a group of nomads gather. The desert snake suggests, "Choices may lead you to the company of dream wanderers, sharing tales under the desert sky."', FALSE, 'desert', FALSE, NULL),
        ('D3AB', 'In the perpetual dance of day and night, shadows reveal a hidden cave. The snake hisses, "Choices may guide you to the mysterious depths where secrets are woven into the dream-laden sands."', FALSE, 'desert', FALSE, NULL),
        ('D3BA', 'Beneath the ever-changing canvas of the desert sky, an scavenger caravan crosses your path. The desert snake murmurs, "Choices may determine whether you join the nomads, venturing into uncharted territories."', FALSE, 'desert', FALSE, NULL),
        ('D3BB', 'Amidst the relentless cycle, the desert snake speaks, "Choices are the oasis in this temporal desert, guiding you through the ever-shifting sands."', FALSE, 'desert', FALSE, NULL), 
        ('D4X', 'Navigating the sands of time, your choices become echoes in the eternal desert. The desert snake whispers, "The sands shift, revealing the path forged by your decisions."', FALSE, 'desert', TRUE, NULL), 
        ('D4Z', 'As the sun sets once more, the desert snake utters, "The choices made in this transient desert echo into eternity, shaping the sands of your dream."', FALSE, 'desert', TRUE, NULL),
 -- CITY SETTING
        ('C1', 'In the bustling city night, amidst neon lights and pouring rain, a mysterious old lady approaches you. "Welcome to the city where dreams are woven into the fabric of reality. Choices are the threads that navigate its labyrinth," she declares. Your journey through this cityscape is a sequence of choices, each one shaping the dream that unfolds before you.', TRUE, 'city', FALSE, NULL),
        ('C2A', 'The rain-soaked city streets hold tales of hidden cafes and stores. The old lady whispers, "Choices may lead you to places where the city''s heartbeat resonates."', FALSE, 'city', FALSE, NULL),  
        ('C2B', 'Amidst the neon glow and downpour, the old lady reveals, "In this cyberpunk dream, choices can unveil secrets within the city''s vibrant alleys."', FALSE, 'city', FALSE, NULL), 
        ('C3AA', 'Within the rhythmic dance of raindrops, shadows unveil a mysterious club. The old lady suggests, "Choices may draw you into the pulse of the city nightlife."', FALSE, 'city', FALSE, NULL),
        ('C3AB', 'Beneath the vibrant neon lights, shadows conceal a secret store. The old lady hisses, "Choices may guide you to the hidden emporiums of this city labyrinth."', FALSE, 'city', FALSE, NULL),
        ('C3BA', 'Navigating through the crowded streets, an dark figure invites you to a hidden alley. The old lady murmurs, "Choices may determine whether you unravel the secrets within the city''s embrace."', FALSE, 'city', FALSE, NULL),
        ('C3BB', 'In the pouring rain, the old lady speaks, "Choices are the whispers in the city''s storm, guiding you through the maze of possibilities."', FALSE, 'city', FALSE, NULL), 
        ('C4X', 'As the neon-lit rain persists, your choices become echoes in the city''s cacophony. The old lady whispers, "The city''s symphony is shaped by the choices you make."', FALSE, 'city', TRUE, NULL), 
        ('C4Z', 'With the rain as your witness, the old lady utters, "Choices cast ripples in the neon-lit pools of this city dream."', FALSE, 'city', TRUE, NULL);

-- CHOICES:
INSERT INTO choices (id, choice_text, dialogue_id_from, dialogue_id_to, final_choice)
VALUES 
-- FOREST SETTING
        ('F-CB', 'Embark on a mystical journey deeper into the unknown forest.', 'F1', 'F2B', FALSE),
        ('F-CA', 'Seek guidance from whispers in towering trees.', 'F1', 'F2A', FALSE),
        ('F-CAA', 'Explore the sunlit trail, revealing secrets of the enchanted woods.', 'F2A', 'F3AA', FALSE),
        ('F-CAB', 'Venture into the shadowed realm, where mysterious creatures lurk.', 'F2A', 'F3AB', FALSE),
        ('F-CBA', 'Follow the moonlit path through silvery glow.', 'F2B', 'F3BA', FALSE),
        ('F-CBB', 'Enter the twilight passage, where reality blurs with enchantment.', 'F2B', 'F3BB', FALSE),
        ('F-CAAA', 'Befriend luminous beings, illuminating your path.', 'F3AA', 'F4X', TRUE),
        ('F-CAAB', 'Proceed with caution, fear not unknown shadows in the moonlight.', 'F3AA', 'F4Z', TRUE),
        ('F-CABA', 'Confront shadows with courage, unraveling secrets in ancient woods.', 'F3AB', 'F4X', TRUE),
        ('F-CABB', 'Seek refuge in twilight''s embrace, where mystical aura shields you.', 'F3AB', 'F4Z', TRUE),
        ('F-CBAA', 'Join moonlit revelry of forest creatures, feeling nature''s pulse.', 'F3BA', 'F4X', TRUE),
        ('F-CBAB', 'Continue on a solitary journey, guided by whispers of ancient trees.', 'F3BA', 'F4Z', TRUE),
        ('F-CBBA', 'Confront the unknown in twilight, where forest enchantment peaks.', 'F3BB', 'F4X', TRUE),
        ('F-CBBB', 'Retreat to safety in shadows, where mysterious forest tales remain veiled.', 'F3BB', 'F4Z', TRUE),
-- OCEAN SETTING
        ('O-CB', 'Plunge into the abyss, where unknown depths beckon your curiosity.', 'O1', 'O2B', FALSE),
        ('O-CA', 'Embark on a serene journey through sunlit waves, guided by gentle currents.', 'O1', 'O2A', FALSE),
        ('O-CAA', 'Witness elegance of sea creatures beneath the golden surface.', 'O2A', 'O3AA', FALSE),
        ('O-CAB', 'Explore hidden shadows beneath the ocean''s surface, where wonders await.', 'O2A', 'O3AB', FALSE),
        ('O-CBA', 'Immerse in tranquil glow of sunlit waters.', 'O2B', 'O3BA', FALSE),
        ('O-CBB', 'Delve into enigmatic depths where whispers echo mysteriously.', 'O2B', 'O3BB', FALSE),
        ('O-CAAA', 'Navigate sunlit waters with a heart full of curiosity.', 'O3AA', 'O4X', TRUE),
        ('O-CAAB', 'Proceed cautiously, mindful of secrets concealed beneath sunlit surface.', 'O3AA', 'O4Z', TRUE),
        ('O-CABA', 'Embrace harmonious dance within sunlit waters.', 'O3AB', 'O4X', TRUE),
        ('O-CABB', 'Uncover mysterious whispers echoing from shadows beneath.', 'O3AB', 'O4Z', TRUE),
        ('O-CBAA', 'Dance amidst tranquility of sunlit waves.', 'O3BA', 'O4X', TRUE),
        ('O-CBAB', 'Plunge into depths guided by elusive whispers.', 'O3BA', 'O4Z', TRUE),
        ('O-CBBA', 'Float in gentle embrace of the ocean''s tranquility.', 'O3BB', 'O4X', TRUE),
        ('O-CBBB', 'Explore abyss where mysterious whispers resonate.', 'O3BB', 'O4Z', TRUE),
-- DESERT SETTING
        ('D-CB', 'Venture into shifting sands of night, where secrets may be hidden.', 'D1', 'D2B', FALSE),
        ('D-CA', 'Embark on journey under scorching day, where revelations may unfold.', 'D1', 'D2A', FALSE),
        ('D-CAA', 'Wander through luminous dunes, where day''s secrets are revealed.', 'D2A', 'D3AA', FALSE),
        ('D-CAB', 'Navigate through shadowed realms where night''s embrace reveals mysteries.', 'D2A', 'D3AB', FALSE),
        ('D-CBA', 'Traverse sunlit desert, where revelations shimmer beneath the heat.', 'D2B', 'D3BA', FALSE),
        ('D-CBB', 'Embark on night journey through desert, where shadows whisper secrets.', 'D2B', 'D3BB', FALSE),
        ('D-CAAA', 'Embrace revelations in the heart of sunlit desert.', 'D3AA', 'D4X', TRUE),
        ('D-CAAB', 'Navigate shadows of night, unveiling secrets woven into the desert sands.', 'D3AA', 'D4Z', TRUE),
        ('D-CABA', 'Confront mysteries within the luminous heart of the desert.', 'D3AB', 'D4X', TRUE),
        ('D-CABB', 'Wander through night''s veil, where secrets are whispered by desert winds.', 'D3AB', 'D4Z', TRUE),
        ('D-CBAA', 'Seek revelations shimmering within sunlit desert sands.', 'D3BA', 'D4X', TRUE),
        ('D-CBAB', 'Navigate through shadows with the guidance of desert whispers.', 'D3BA', 'D4Z', TRUE),
        ('D-CBBA', 'Unveil secrets woven into the heart of the night-draped desert.', 'D3BB', 'D4X', TRUE),
        ('D-CBBB', 'Conceal yourself in the shadows, where the desert''s secrets remain veiled.', 'D3BB', 'D4Z', TRUE),
-- CITY SETTING
        ('C-CB', 'Dive into the neon-lit labyrinth of the city, where unknown stories await.', 'C1', 'C2B', FALSE),
        ('C-CA', 'Stroll through the rain-kissed streets, where secrets may reveal themselves.', 'C1', 'C2A', FALSE),
        ('C-CAA', 'Explore the vibrant cityscape under the glow of neon lights.', 'C2A', 'C3AA', FALSE),
        ('C-CAB', 'Navigate through the shadowed alleys where the city''s mysteries unfold.', 'C2A', 'C3AB', FALSE),
        ('C-CBA', 'Wander through the bustling city streets illuminated by neon glow.', 'C2B', 'C3BA', FALSE),
        ('C-CBB', 'Disappear into the night, where shadows whisper untold tales.', 'C2B', 'C3BB', FALSE),
        ('C-CAAA', 'Immerse in the vibrant energy of neon-lit city streets.', 'C3AA', 'C4X', TRUE),
        ('C-CAAB', 'Explore shadows cast by neon lights, unraveling hidden city tales.', 'C3AA', 'C4Z', TRUE),
        ('C-CABA', 'Embark on a journey through the city''s shadows, where secrets dwell.', 'C3AB', 'C4X', TRUE),
        ('C-CABB', 'Navigate through neon-lit night, where city mysteries emerge.', 'C3AB', 'C4Z', TRUE),
        ('C-CBAA', 'Wander through the neon-lit city, absorbing its vibrant energy.', 'C3BA', 'C4X', TRUE),
        ('C-CBAB', 'Disappear into the night, guided by mysterious city whispers.', 'C3BA', 'C4Z', TRUE),
        ('C-CBBA', 'Unravel city mysteries hidden in the shadows of the night.', 'C3BB', 'C4X', TRUE),
        ('C-CBBB', 'Vanish into the city shadows, where untold stories remain concealed.', 'C3BB', 'C4Z', TRUE),
-- SKY SETTING
        ('S-CB', 'Soar into the unknown constellations, guided by insatiable curiosity.', 'S1', 'S2B', FALSE),
        ('S-CA', 'Embark on a serene journey through starlit realms, guided by celestial breezes.', 'S1', 'S2A', FALSE),
        ('S-CAA', 'Witness brilliance of celestial wonders dancing in harmonious patterns.', 'S2A', 'S3AA', FALSE),
        ('S-CAB', 'Explore concealed depths of cosmic tapestry, where enigmatic constellations await.', 'S2A', 'S3AB', FALSE),
        ('S-CBA', 'Immerse in tranquil glow of distant stars, reflecting dreams in celestial realm.', 'S2B', 'S3BA', FALSE),
        ('S-CBB', 'Delve into enigmatic depths of cosmic expanse, where whispers reveal dream-laden sky secrets.', 'S2B', 'S3BB', FALSE),
        ('S-CAAA', 'Navigate starlit realms with curiosity, discovering beauty in celestial symphony.', 'S3AA', 'S4X', TRUE),
        ('S-CAAB', 'Proceed cautiously, mindful of secrets in cosmic tapestry, awaiting revelation.', 'S3AA', 'S4Z', TRUE),
        ('S-CABA', 'Embrace harmonious dance within starlit realms, where each constellation tells tales of tranquility.', 'S3AB', 'S4X', TRUE),
        ('S-CABB', 'Uncover mysterious whispers from cosmic shadows, revealing narratives in dream-laden sky.', 'S3AB', 'S4Z', TRUE),
        ('S-CBAA', 'Dance amidst tranquility of distant stars, feeling cosmic heartbeat through dream-laden sky.', 'S3BA', 'S4X', TRUE),
        ('S-CBAB', 'Plunge into cosmic depths guided by elusive whispers, exploring celestial secrets below the surface.', 'S3BA', 'S4Z', TRUE),
        ('S-CBBA', 'Float in gentle embrace of dream-laden sky, where each constellation whispers untold stories.', 'S3BB', 'S4X', TRUE),
        ('S-CBBB', 'Explore cosmic expanse where mysterious whispers resonate, revealing hidden tales in dream-laden sky.', 'S3BB', 'S4Z', TRUE);











