import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { currentPlayerContext } from '../helpers/GameContext';
import { GameAPI } from '../helpers/GameAPI';
import SettingWindow from './SettingWindow';
import Button from './Button';
import { v4 as uuidv4 } from 'uuid';
import NumberConverter from '../helpers/NumberConverter';

const MainWindow = () => {
  const location = useLocation();
  const [currentText, setCurrentText] = useState(false);
  const [finalText, setFinalText] = useState(false);
  const [stage, setStage] = useState(location.state.setting);
  const [curretAct, setCurrentAct] = useState(location.state.act);
  const [currentSetting, setCurrentSetting] = useState('');
  const [display, setDisplay] = useState('');
  const [actVisible, setActVisible] = useState(false);

  const { currentPlayer, setCurrentPlayer, currentGameID, setCurrentGameID } =
    useContext(currentPlayerContext);

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
      const savedGame = await GameAPI.getOne('gameslot', currentGameID);
      const currentProgress = savedGame.data.game.concluded_settings.map(
        (value) => value.setting_name
      );
      const { data } = await GameAPI.getAll('setting');
      const acts = data.settings.filter(
        (value) => !currentProgress.includes(value.name)
      );
      const unfinishedSettings = shuffleArray(acts);

      if (unfinishedSettings.length < 1) {
        console.log('end of the line!');
      } else {
        setStage(unfinishedSettings[0].name);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSetting = async () => {
    const { data } = await GameAPI.getOne('setting', stage);
    const initial_setting = data.setting.dialogues.find(
      (value) => value.opening_text
    );
    await GameAPI.update('gameslot', currentGameID, {
      setting: data.setting.name,
      dialogue_id: initial_setting.id,
      act: curretAct,
    });
    if (stage !== 'prologue') {
      setDisplay('setting-hidden');
    }
    setTimeout(() => {
      setActVisible(true);
    }, 3000);
    setTimeout(() => {
      setActVisible(false);
      setCurrentSetting(data.setting);
      setCurrentText(initial_setting);
      setDisplay('setting-show');
    }, 10000);
  };

  const makeChoiceHandler = (e) => {
    const newTextId = e.target.id;
    const newText = currentSetting.dialogues.find((value) => {
      return value.id === newTextId;
    });
    setCurrentText(newText);
  };

  const actChangeHandle = async () => {
    setCurrentAct((prev) => prev + 1);
    try {
      const concludedSetting = await GameAPI.create('progress', {
        setting_name: stage,
        saved_game_id: currentGameID,
      });
      getSettings();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentText.ending_text) {
      setFinalText(true);
    }
  }, [currentText]);

  useEffect(() => {
    fetchSetting();
  }, [stage]);

  return (
    <>
      {actVisible && (
        <div className="act-title text-center">
          <h1 className="">{NumberConverter(curretAct)}</h1>
          <h1>{stage.toUpperCase()}</h1>
        </div>
      )}

      <div className={display}>
        <SettingWindow
          makeChoiceHandler={makeChoiceHandler}
          currentSetting={currentSetting}
          currentText={currentText}
        />
      </div>
      {finalText && (
        <div className="container text-center">
          <Button
            action={() => {
              actChangeHandle();
              setFinalText(false);
            }}
            text="Continue"
          />
        </div>
      )}
    </>
  );
};

export default MainWindow;
