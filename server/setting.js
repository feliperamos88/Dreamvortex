const forestSetting = {
  F1: {
    dialogue:
      "As the sun dips below the horizon, casting long shadows through the ancient trees, you find yourself deep within a dense forest. The air is thick with an otherworldly aura, and the silence is broken only by the rustle of leaves underfoot. Suddenly, a figure emerges from the shadows, draped in a hooded cloak that seems to meld seamlessly with the surrounding darkness. 'Greetings, wanderer,' they speak, their voice echoing through the ancient trees. 'In this mystical forest where time itself dances on the edge of dreams, your fate is entwined with the choices you make.'",
    choices: {
      'F-CA': 'Embrace the unknown path.',
      'F-CB': 'Seek guidance from the whispers.',
    },
  },
  F2A: {
    dialogue:
      'You have chosen the path less traveled. The forest responds to your curiosity. Yet, challenges await. Two diverging trails beckon you. What will you do? Your journey through this dream world is shaped by the decisions you make.',
    choices: {
      'F-CAA': 'Explore the sunlit trail.',
      'F-CAB': 'Venture into the shadowed realm.',
    },
  },
  F2B: {
    dialogue:
      'The whispered guidance leads you to a different trail. It is shrouded in mystery, and the air is thick with anticipation. Two paths branch off. What is your next move? Remember, the dream world is malleable, shaped by your choices.',
    choices: {
      'F-CBA': 'Follow the moonlit path.',
      'F-CBB': 'Enter the twilight passage.',
    },
  },
  F3AA: {
    dialogue:
      'The sunlit trail reveals its secrets. Creatures of light and harmony surround you. Ahead, a fork in the road awaits. How will you navigate this enchanted realm? The dream world responds to your desires and fears, reflecting them in its mystical landscapes.',
    choices: {
      'F-CAAA': 'Befriend the luminous beings.',
      'F-CAAB': 'Proceed with caution, but do not fear the unknown.',
    },
  },
  F3AB: {
    dialogue:
      'The shadowed realm unfolds its mysteries. Dark whispers accompany your journey. Another fork appears, challenging your resolve. What path will you tread? In this dream world, the shadows harbor both danger and hidden truths.',
    choices: {
      'F-CABA': 'Confront the shadows with courage.',
      'F-CABB': "Seek refuge in the twilight's embrace.",
    },
  },
  F3BA: {
    dialogue:
      'The moonlit path reveals its wonders. Mythical creatures dance in the moonbeams. Yet, the path ahead holds another choice. What will you decide? Your journey through this dream world unfolds like a story, each chapter shaped by your decisions.',
    choices: {
      'F-CBAA': 'Join the moonlit revelry.',
      'F-CBAB': 'Continue on your solitary journey.',
    },
  },
  F3BB: {
    dialogue:
      'The twilight passage reveals its secrets. Mysterious sounds fill the air. Another crossroads appears. What will be your course of action? In the dream world, the veil between reality and imagination is thin. Choose wisely, for the path you walk may influence your awakening.',
    choices: {
      'F-CBBA': 'Confront the unknown in the twilight.',
      'F-CBBB': 'Retreat to the safety of shadows.',
    },
  },
  F4X: {
    dialogue:
      'Your journey through the mystical forest has come to an end. The path you chose has led you to a tranquil grove. Here, the whispers of the trees impart ancient wisdom. You have learned the secrets of the forest, unlocking a piece of the dream world that surrounds you. As you stand in this serene grove, the dream world awaits your next move. The possibilities are as vast as the unexplored landscapes ahead.',
  },
  F4Z: {
    dialogue:
      'The winding trails have brought you to a hidden clearing. The shadows play tricks on your senses, revealing glimpses of the unknown. In this mysterious realm, you have uncovered the enigmatic facets of the forest, a reflection of the intricate dream that ensnares you. The dream world remains a tapestry of uncharted territories, and your choices have set the stage for the next chapter. What realm will unfold before you next?',
  },
};

// Access the dialogues and choices using forestSetting["F1"].dialogue, forestSetting["F1"].choices["F-CA"], etc.
