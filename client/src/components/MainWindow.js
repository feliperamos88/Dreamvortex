import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { currentPlayerContext } from '../helpers/GameContext';
import { GameAPI } from '../helpers/GameAPI';
import SettingWindow from './SettingWindow';
import { v4 as uuidv4 } from 'uuid';

const MainWindow = () => {
  const location = useLocation();
  const [currentText, setCurrentText] = useState(false);
  // const [data2, setData2] = useState('');
  const [stage, setStage] = useState(location.state.setting);
  const [curretAct, setCurrentAct] = useState(location.state.act);
  const [currentSetting, setCurrentSetting] = useState('');
  const [display, setDisplay] = useState('');

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

  // const fetchAll = async () => {
  //   const { data } = await GameAPI.getAll('setting');
  //   const settingsArray = shuffleArray(data.settings);
  //   setData2(settingsArray);
  // };

  // const actChangeHandle = async () => {
  //   try {
  //     const { data } = await GameAPI.getOne('setting', settings[0].name);
  //     await GameAPI.create('progress', {
  //       setting_name: stage,
  //       saved_game_id: currentGameID,
  //     });
  //     const initial_setting = data.setting.dialogues.find(
  //       (value) => value.opening_text
  //     );

  //     console.log(initial_setting);
  //     await GameAPI.update('gameslot', currentGameID, {
  //       setting: data.setting.name,
  //       dialogue_id: initial_setting.id,
  //     });
  //     setDisplay('menu-hidden');
  //     setTimeout(() => {
  //       navigate('/actI', { state: data.setting.name });
  //     }, 6000);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
      console.log(unfinishedSettings.length);
      if (unfinishedSettings.length < 1) {
        console.log('end of the line!');
      } else {
        setStage(unfinishedSettings[0].name);
        console.log(unfinishedSettings);
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
    console.log(initial_setting);
    await GameAPI.update('gameslot', currentGameID, {
      setting: data.setting.name,
      dialogue_id: initial_setting.id,
      act: curretAct,
    });
    setDisplay('menu-hidden');
    setTimeout(() => {
      setCurrentSetting(data.setting);
      setCurrentText(initial_setting);
      setDisplay('');
    }, 3000);

    // setCurrentText(data.setting.dialogues.find((value) => value.opening_text));
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
      actChangeHandle();
    }
  }, [currentText]);

  useEffect(() => {
    fetchSetting();
    console.log(stage);
  }, [stage]);

  return (
    <>
      <div className={display}>
        <SettingWindow
          makeChoiceHandler={makeChoiceHandler}
          currentSetting={currentSetting}
          currentText={currentText}
        />
        {/* {data2 && data2.map((value) => <h1 key={uuidv4()}>{value.name}</h1>)} */}
      </div>
    </>
  );
};

export default MainWindow;
