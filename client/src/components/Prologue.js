import { useState, useEffect, useRef, useContext } from 'react';
import { GameAPI } from '../helpers/GameAPI';
import { currentPlayerContext } from '../helpers/GameContext';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import Button from './Button';

import Typewriter from 'typewriter-effect';

const prologueText = {
  p1: 'Greetings, dreamer...  ',

  p2: 'lost in the tapestry of your own subconscious',

  p3: 'Within this ethereal realm, you awaken to the enchanting glow of a mysterious path, a beacon promising release from the labyrinths of your thoughts',

  p4: 'This dream world holds you captive, entwining reality with the extraordinary. The shimmering brilliance of the path invites you to break free from the binds of your own mind',

  p5: 'A journey lies ahead, where the surreal and the unknown intertwine',

  p6: 'As you step closer to the luminous pathway, consider the road that unfolds before you. It is through this path that your destiny is revealed, a passage leading to the awakening beyond the illusions of the dream',

  p7: 'Embrace the enigma that surrounds you, for through the path lies the key to liberation from the confines of your own dreamscape...',

  p8: 'Are you ready?',
};

// You can access each choice using prologueChoices.choice1, prologueChoices.choice2, etc.

const Prologue = () => {
  const {
    currentPlayer,
    setCurrentPlayer,
    currentGameID,
    setCurrentGameID,
    skipBTN,
    setSkipBTN,
    gameHandler,
    setGameHandler,
  } = useContext(currentPlayerContext);
  const [settings, setSettings] = useState('');
  const [stage, setStage] = useState('prologue');
  const [display, setDisplay] = useState('');
  const [continueBtn, setContinueBtn] = useState(false);
  const [skip, setSkip] = useState(false);
  const navigate = useNavigate();
  const location = useLocation;

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const getSettings = async () => {
    try {
      const { data } = await GameAPI.getAll('setting');

      const settingsArray = shuffleArray(data.settings);
      setSettings(settingsArray);
    } catch (err) {
      console.log(err);
    }
  };

  const showBTN = () => {
    setTimeout(() => {
      console.log(skipBTN);
      setSkipBTN(true);
      setGameHandler((prevState) => ({
        ...prevState,
        handler: () => {
          setContinueBtn(true);
          setSkip(true);
        },
      }));
    }, 2000);
  };

  const actChangeHandle = async () => {
    try {
      setContinueBtn(false);
      const { data } = await GameAPI.getOne('setting', settings[0].name);
      await GameAPI.create('progress', {
        setting_name: stage,
        saved_game_id: currentGameID,
      });
      const initial_setting = data.setting.dialogues.find(
        (value) => value.opening_text
      );

      console.log(initial_setting);
      await GameAPI.update('gameslot', currentGameID, {
        setting: data.setting.name,
        dialogue_id: initial_setting.id,
        // act: 1,
      });
      setDisplay('menu-hidden');
      setTimeout(() => {
        navigate('/story', { state: { setting: data.setting.name, act: 1 } });
      }, 4000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (settings) {
      showBTN();
    }
  }, [settings]);

  useEffect(() => {
    getSettings();
  }, [stage]);

  return (
    <>
      <div className={`prologue-main ${display}`}>
        <div className="prologue-container">
          <div className="animation-container">
            <div className="portal-animation"></div>
            <div className="d-flex justify-content-center shadow-container">
              <div className="div-shadow " id="shadow-left">
                {/* <div className="portal-animation-left"></div>
              <div className="portal-animation-center"></div>
              <div className="portal-animation-right"></div> */}
              </div>
              <div className="div-shadow" id="shadow-right">
                {/* <div className="portal-animation-left"></div>
              <div className="portal-animation-center"></div>
              <div className="portal-animation-right"></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center d-flex flex-column justify-content-center prologue-text">
          <div className="container col-8">
            {!skip && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(60)
                    .pauseFor(6000)
                    .typeString(prologueText.p1)
                    .pauseFor(3000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .typeString(prologueText.p2)
                    .pauseFor(5000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .typeString(prologueText.p3)
                    .pauseFor(5000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .typeString(prologueText.p4)
                    .pauseFor(5000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .typeString(prologueText.p5)
                    .pauseFor(3000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .typeString(prologueText.p6)
                    .pauseFor(5000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .typeString(prologueText.p7)
                    .pauseFor(3000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .callFunction((e) => {
                      setSkipBTN(false);
                    })
                    .changeDelay(120)
                    .typeString(prologueText.p8)
                    .callFunction((e) => {
                      setContinueBtn(true);
                    })
                    .callFunction(() => {})

                    .start();
                }}
              />
            )}
            {skip && (
              <div>
                <span>Are you ready?</span>
              </div>
            )}
          </div>
          {continueBtn === true && (
            <div className="mt-5">
              <Button
                text="I am ready"
                action={() => actChangeHandle()}
                addClass="set-id-button p-3"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Prologue;
