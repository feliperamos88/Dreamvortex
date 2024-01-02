import { useState, useEffect, useRef, useContext } from 'react';
import { GameAPI } from '../helpers/GameAPI';
import { currentPlayerContext } from '../helpers/GameContext';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import Button from './Button';

import Typewriter from 'typewriter-effect';

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
  // const [btn, setBtn] = useState(true);
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
        handler: actChangeHandle,
      }));
    }, 2000);
  };

  const actChangeHandle = async () => {
    try {
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
      }, 6000);
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
      <div className={display}>
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
        <div className="text-center">
          {/* <Typewriter
          options={{
            strings: [
              'Hello world.',
              'It is me',
              'The one that lives in your dreams.',
            ],
            autoStart: true,
            pauseFor: 2000,
            deleteAll: false,
          }}
        /> */}
          {/* <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(5000)
              .typeString('Hello World!')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(1500)
              .typeString('It is me! The one that lives in your dreams!')
              .deleteAll(0.1)
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        /> */}
          {/* {btn && (
            <div className="mt-5 d-flex justify-content-end me-5">
              <Button
                addClass="menu-button"
                text="Skip intro"
                action={() => {
                  actChangeHandle();
                  setBtn(false);
                }}
              />
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Prologue;
