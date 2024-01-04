import { useState, useEffect, useRef, useContext } from 'react';

import { currentPlayerContext } from '../helpers/GameContext';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';

import Typewriter from 'typewriter-effect';

const finaleText = {
  f1: '...dreamer',

  f2: 'in the tangled weave of reality and fantasy, your odyssey nears its zenith',

  f3: 'Within this ethereal realm, you awaken to the enchanting glow of a mysterious path, a beacon promising release from the labyrinths of your thoughts',

  f4: "A siren's call promising liberation from the shackles of your own mind...",

  f5: 'The end is a prelude to cryptic rebirth. Shadows conceal truths, and spectral realms hold keys to unlocking mysteries lingering in your subconscious recesses',

  f6: 'As the enigma unravels, a pivotal decision beckons. Will you transcend the confines of your dreams? The answer, veiled in shadows, entwines with your spectral narrative.',

  f7: 'Choose wisely, for beyond its radiant facade lies the ultimate awakening – a revelation transcending haunting dreams and elusive reality',

  f8: 'the ethereal portal beckons your fateful decision...',
};

const Finale = () => {
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
  const [freedom, setFreedom] = useState(false);
  const [display, setDisplay] = useState('');
  const [endingBtn, setEndingBtn] = useState(false);
  const [wake, setWake] = useState(false);
  const navigate = useNavigate();
  const location = useLocation;

  return (
    <>
      {freedom && (
        <div className="final-text-container">
          <div>THE END</div>
        </div>
      )}
      {wake && !freedom && (
        <div className="final-text-container">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(150)
                .pauseFor(500)
                .typeString('You are now...')
                .pauseFor(3000)
                .callFunction((e) => {
                  e.elements.wrapper.innerHTML = '';
                })
                .pasteString('FREE')
                .pauseFor(250)
                .callFunction((e) => {
                  setFreedom(true);
                })

                .start();
            }}
          />
        </div>
      )}

      {!wake && (
        <div className={`prologue-main ${display}`}>
          <div className="prologue-container">
            <div className="animation-container">
              <div className="portal-animation-finale"></div>
              <div className="d-flex justify-content-center shadow-container">
                <div className="div-shadow-finale" id="shadow-left"></div>
                <div className="div-shadow-finale" id="shadow-right"></div>
              </div>
            </div>
          </div>
          <div className="text-center d-flex flex-column justify-content-center prologue-text">
            <div className="container col-8">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(60)
                    .pauseFor(6000)
                    .typeString(finaleText.f1)
                    .pauseFor(3000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .typeString(finaleText.f2)
                    .pauseFor(5000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .typeString(finaleText.f3)
                    .pauseFor(5000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .typeString(finaleText.f4)
                    .pauseFor(5000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .typeString(finaleText.f5)
                    .pauseFor(3000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .typeString(finaleText.f6)
                    .pauseFor(5000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })
                    .typeString(finaleText.f7)
                    .pauseFor(3000)
                    .callFunction((e) => {
                      e.elements.wrapper.innerHTML = '';
                    })

                    .changeDelay(120)
                    .typeString(finaleText.f8)
                    .callFunction((e) => {
                      setEndingBtn(true);
                    })

                    .start();
                }}
              />
            </div>
            {endingBtn && (
              <div className="mt-5">
                <button
                  className="game-button set-id-button p-3"
                  onClick={() => setWake(true)}
                >
                  Wake me up and set me free!
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Finale;
