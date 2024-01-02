


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
        'images/settings/purplesky2.png',
        'sun_figure'),
         ('prologue', NULL, NULL),
         ('final', NULL, NULL);


INSERT INTO dialogues (id, text, opening_text, current_setting_name, ending_text, transition_to_setting)
VALUES 
-- PROLOGUE
        ('P0', 'P0 Base Text', TRUE, 'prologue', FALSE, NULL), 
-- FINAL
        ('F0', 'F0 Base Text', FALSE, 'final', FALSE, NULL), 
-- FOREST SETTING
        ('F1', 'F1 Base Text', TRUE, 'forest', FALSE, NULL), 
        ('F2A', 'F2A Text', FALSE, 'forest', FALSE, NULL),  
        ('F2B', 'F2B Text', FALSE, 'forest', FALSE, NULL), 
        ('F3AA', 'F3AA text', FALSE, 'forest', FALSE, NULL),
        ('F3AB', 'F3AB text', FALSE, 'forest', FALSE, NULL),
        ('F3BA', 'F3BA text', FALSE, 'forest', FALSE, NULL),
        ('F3BB', 'F3BB', FALSE, 'forest', FALSE, NULL), 
        ('F4X', 'F4X text', FALSE, 'forest', TRUE, NULL), 
        ('F4Z', 'F4Z text', FALSE, 'forest', TRUE, NULL), 
-- OCEAN SETTING
        ('O1', 'O1 Base Text', TRUE, 'ocean', FALSE, NULL), 
        ('O2A', 'O2A Text', FALSE, 'ocean', FALSE, NULL),  
        ('O2B', 'O2B Text', FALSE, 'ocean', FALSE, NULL), 
        ('O3AA', 'O3AA text', FALSE, 'ocean', FALSE, NULL),
        ('O3AB', 'O3AB text', FALSE, 'ocean', FALSE, NULL),
        ('O3BA', 'O3BA text', FALSE, 'ocean', FALSE, NULL),
        ('O3BB', 'O3BB', FALSE, 'ocean', FALSE, NULL), 
        ('O4X', 'O4X text', FALSE, 'ocean', TRUE, NULL), 
        ('O4Z', 'O4Z text', FALSE, 'ocean', TRUE, NULL), 
 -- SKY SETTING
        ('S1', 'S1 Base Text', TRUE, 'sky', FALSE, NULL), 
        ('S2A', 'S2A Text', FALSE, 'sky', FALSE, NULL),  
        ('S2B', 'S2B Text', FALSE, 'sky', FALSE, NULL), 
        ('S3AA', 'S3AA text', FALSE, 'sky', FALSE, NULL),
        ('S3AB', 'S3AB text', FALSE, 'sky', FALSE, NULL),
        ('S3BA', 'S3BA text', FALSE, 'sky', FALSE, NULL),
        ('S3BB', 'S3BB', FALSE, 'sky', FALSE, NULL), 
        ('S4X', 'S4X text', FALSE, 'sky', TRUE, NULL), 
        ('S4Z', 'S4Z text', FALSE, 'sky', TRUE, NULL), 
 -- DESERT SETTING
        ('D1', 'D1 Base Text', TRUE, 'desert', FALSE, NULL), 
        ('D2A', 'D2A Text', FALSE, 'desert', FALSE, NULL),  
        ('D2B', 'D2B Text', FALSE, 'desert', FALSE, NULL), 
        ('D3AA', 'D3AA text', FALSE, 'desert', FALSE, NULL),
        ('D3AB', 'D3AB text', FALSE, 'desert', FALSE, NULL),
        ('D3BA', 'D3BA text', FALSE, 'desert', FALSE, NULL),
        ('D3BB', 'D3BB', FALSE, 'desert', FALSE, NULL), 
        ('D4X', 'D4X text', FALSE, 'desert', TRUE, NULL), 
        ('D4Z', 'D4Z text', FALSE, 'desert', TRUE, NULL),
 -- CITY SETTING
        ('C1', 'C1 Base Text', TRUE, 'city', FALSE, NULL), 
        ('C2A', 'C2A Text', FALSE, 'city', FALSE, NULL),  
        ('C2B', 'C2B Text', FALSE, 'city', FALSE, NULL), 
        ('C3AA', 'C3AA text', FALSE, 'city', FALSE, NULL),
        ('C3AB', 'C3AB text', FALSE, 'city', FALSE, NULL),
        ('C3BA', 'C3BA text', FALSE, 'city', FALSE, NULL),
        ('C3BB', 'C3BB', FALSE, 'city', FALSE, NULL), 
        ('C4X', 'C4X text', FALSE, 'city', TRUE, NULL), 
        ('C4Z', 'C4Z text', FALSE, 'city', TRUE, NULL);

INSERT INTO choices (id, choice_text, dialogue_id_from, dialogue_id_to, final_choice)
VALUES 
-- CHOICES
-- FOREST SETTING CHOICES
        ('F-CB','1st Choice-B', 'F1', 'F2B', FALSE), 
        ('F-CA','1st Choice-A', 'F1', 'F2A', FALSE), 
        ('F-CAA','2nd Choice-AA', 'F2A', 'F3AA' , FALSE), 
        ('F-CAB','2nd Choice-AB', 'F2A', 'F3AB', FALSE), 
        ('F-CBA','2nd Choice-BA', 'F2B', 'F3BA' , FALSE), 
        ('F-CBB','2nd Choice-BB', 'F2B', 'F3BB' , FALSE), 
        ('F-CAAA','3rd Choice-AAA', 'F3AA', 'F4X' , TRUE), 
        ('F-CAAB','3rd Choice-AAB', 'F3AA', 'F4Z', TRUE), 
        ('F-CABA','3rd Choice-ABA', 'F3AB', 'F4X' , TRUE), 
        ('F-CABB','3rd Choice-ABB', 'F3AB', 'F4Z' , TRUE), 
        ('F-CBAA','3rd Choice-BAA', 'F3BA', 'F4X' , TRUE), 
        ('F-CBAB','3rd Choice-BAB', 'F3BA', 'F4Z', TRUE), 
        ('F-CBBA','3rd Choice-BBA', 'F3BB', 'F4X' , TRUE), 
        ('F-CBBB','3rd Choice-BBB', 'F3BB','F4Z' , TRUE),
-- OCEAN SETTING
        ('O-CB','1st Choice-B', 'O1', 'O2B', FALSE), 
        ('O-CA','1st Choice-A', 'O1', 'O2A', FALSE), 
        ('O-CAA','2nd Choice-AA', 'O2A', 'O3AA' , FALSE), 
        ('O-CAB','2nd Choice-AB', 'O2A', 'O3AB', FALSE), 
        ('O-CBA','2nd Choice-BA', 'O2B', 'O3BA' , FALSE), 
        ('O-CBB','2nd Choice-BB', 'O2B', 'O3BB' , FALSE), 
        ('O-CAAA','3rd Choice-AAA', 'O3AA', 'O4X' , TRUE), 
        ('O-CAAB','3rd Choice-AAB', 'O3AA', 'O4Z', TRUE), 
        ('O-CABA','3rd Choice-ABA', 'O3AB', 'O4X' , TRUE), 
        ('O-CABB','3rd Choice-ABB', 'O3AB', 'O4Z' , TRUE), 
        ('O-CBAA','3rd Choice-BAA', 'O3BA', 'O4X' , TRUE), 
        ('O-CBAB','3rd Choice-BAB', 'O3BA', 'O4Z', TRUE), 
        ('O-CBBA','3rd Choice-BBA', 'O3BB', 'O4X' , TRUE), 
        ('O-CBBB','3rd Choice-BBB', 'O3BB','O4Z' , TRUE),
-- DESERT SETTING
        ('D-CB','1st Choice-B', 'D1', 'D2B', FALSE), 
        ('D-CA','1st Choice-A', 'D1', 'D2A', FALSE), 
        ('D-CAA','2nd Choice-AA', 'D2A', 'D3AA' , FALSE), 
        ('D-CAB','2nd Choice-AB', 'D2A', 'D3AB', FALSE), 
        ('D-CBA','2nd Choice-BA', 'D2B', 'D3BA' , FALSE), 
        ('D-CBB','2nd Choice-BB', 'D2B', 'D3BB' , FALSE), 
        ('D-CAAA','3rd Choice-AAA', 'D3AA', 'D4X' , TRUE), 
        ('D-CAAB','3rd Choice-AAB', 'D3AA', 'D4Z', TRUE), 
        ('D-CABA','3rd Choice-ABA', 'D3AB', 'D4X' , TRUE), 
        ('D-CABB','3rd Choice-ABB', 'D3AB', 'D4Z' , TRUE), 
        ('D-CBAA','3rd Choice-BAA', 'D3BA', 'D4X' , TRUE), 
        ('D-CBAB','3rd Choice-BAB', 'D3BA', 'D4Z', TRUE), 
        ('D-CBBA','3rd Choice-BBA', 'D3BB', 'D4X' , TRUE), 
        ('D-CBBB','3rd Choice-BBB', 'D3BB','D4Z' , TRUE),
-- CITY SETTING
        ('C-CA','1st Choice-A', 'C1', 'C2A', FALSE), 
        ('C-CB','1st Choice-B', 'C1', 'C2B', FALSE), 
        ('C-CAA','2nd Choice-AA', 'C2A', 'C3AA' , FALSE), 
        ('C-CAB','2nd Choice-AB', 'C2A', 'C3AB', FALSE), 
        ('C-CBA','2nd Choice-BA', 'C2B', 'C3BA' , FALSE), 
        ('C-CBB','2nd Choice-BB', 'C2B', 'C3BB' , FALSE), 
        ('C-CAAA','3rd Choice-AAA', 'C3AA', 'C4X' , TRUE), 
        ('C-CAAB','3rd Choice-AAB', 'C3AA', 'C4Z', TRUE), 
        ('C-CABA','3rd Choice-ABA', 'C3AB', 'C4X' , TRUE), 
        ('C-CABB','3rd Choice-ABB', 'C3AB', 'C4Z' , TRUE), 
        ('C-CBAA','3rd Choice-BAA', 'C3BA', 'C4X' , TRUE), 
        ('C-CBAB','3rd Choice-BAB', 'C3BA', 'C4Z', TRUE), 
        ('C-CBBA','3rd Choice-BBA', 'C3BB', 'C4X' , TRUE), 
        ('C-CBBB','3rd Choice-BBB', 'C3BB','C4Z' , TRUE),
-- SKY SETTING
        ('S-CB','1st Choice-B', 'S1', 'S2B', FALSE), 
        ('S-CA','1st Choice-A', 'S1', 'S2A', FALSE), 
        ('S-CAA','2nd Choice-AA', 'S2A', 'S3AA' , FALSE), 
        ('S-CAB','2nd Choice-AB', 'S2A', 'S3AB', FALSE), 
        ('S-CBA','2nd Choice-BA', 'S2B', 'S3BA' , FALSE), 
        ('S-CBB','2nd Choice-BB', 'S2B', 'S3BB' , FALSE), 
        ('S-CAAA','3rd Choice-AAA', 'S3AA', 'S4X' , TRUE), 
        ('S-CAAB','3rd Choice-AAB', 'S3AA', 'S4Z', TRUE), 
        ('S-CABA','3rd Choice-ABA', 'S3AB', 'S4X' , TRUE), 
        ('S-CABB','3rd Choice-ABB', 'S3AB', 'S4Z' , TRUE), 
        ('S-CBAA','3rd Choice-BAA', 'S3BA', 'S4X' , TRUE), 
        ('S-CBAB','3rd Choice-BAB', 'S3BA', 'S4Z', TRUE), 
        ('S-CBBA','3rd Choice-BBA', 'S3BB', 'S4X' , TRUE), 
        ('S-CBBB','3rd Choice-BBB', 'S3BB','S4Z' , TRUE);





