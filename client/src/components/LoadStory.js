import { useState, useEffect, useRef, useContext } from 'react';
import { GameAPI } from '../helpers/GameAPI';
import { currentPlayerContext } from '../helpers/GameContext';
import { useNavigate } from 'react-router-dom';
import SaveFile from './SaveFile';

import { v4 as uuidv4 } from 'uuid';

const LoadStory = ({ loadGame, setLoadGame, clickAudio }) => {
  const [alertMSG, setAlertMSG] = useState();
  const [saveFiles, setSaveFiles] = useState(false);
  const [loadSuccess, setLoadSucess] = useState('superfalse');
  const [slotsNumber, setSlotsNumber] = useState(false);
  const [blockClass, setBlockClass] = useState('');
  const navigate = useNavigate();
  const {
    currentPlayer,
    setCurrentPlayer,
    menuDisplay,
    setMenuDisplay,
    currentGameID,
    setCurrentGameID,
  } = useContext(currentPlayerContext);

  const loadingGameMSG = 'Loading your files';
  const failureMSG = 'Sorry, but something went wrong!';

  const updatePlayer = async (id) => {
    const { data } = await GameAPI.getOne('player', id);
    setCurrentPlayer(data.player);
    setLoadGame(false);
  };

  const loadPlayer = async (id) => {
    try {
      setAlertMSG(loadingGameMSG);
      const { data } = await GameAPI.getOne('player', id);
      setSaveFiles(data.player.saved_game);
      console.log(saveFiles);
      setAlertMSG('');
    } catch (err) {
      setAlertMSG(failureMSG);
    }
  };

  const removeSlots = () => {
    if (saveFiles.length === 0) {
      setSlotsNumber(['Game Slot 01', 'Game Slot 02', 'Game Slot 03']);
    } else if (saveFiles.length === 1) {
      setSlotsNumber(['Game Slot 02', 'Game Slot 03']);
    } else if (saveFiles.length === 2) {
      setSlotsNumber(['Game Slot 03']);
    } else {
      setSlotsNumber(false);
    }
  };

  useEffect(() => {
    if (saveFiles) {
      removeSlots();
    }
  }, [saveFiles]);

  useEffect(() => {
    const load = async () => {
      await loadPlayer(currentPlayer.player_id);
    };
    if (loadGame) {
      load();
    }
  }, [loadGame]);

  return (
    <>
      <h4 className="text-center mt-2">
        {saveFiles.length === 0
          ? 'No saved files'
          : saveFiles.length === 3
          ? "You've reached your maximum (3) of save game slots"
          : ''}
      </h4>{' '}
      <div className={`mt-3 ${blockClass}`}>
        {saveFiles && (
          <SaveFile
            saveFiles={saveFiles}
            setSaveFiles={setSaveFiles}
            setAlertMSG={() => setAlertMSG(failureMSG)}
            key={uuidv4()}
            clickAudio={clickAudio}
            setBlockClass={setBlockClass}
          />
        )}
        <div className="container game-slot-container col-10 col-md-5">
          {slotsNumber &&
            slotsNumber.map((value) => (
              <div className="container" key={uuidv4()}>
                {value}
              </div>
            ))}
        </div>
        {loadGame && (
          <div
            className="text-center mt-2"
            style={
              alertMSG === loadingGameMSG
                ? { color: 'purple' }
                : { color: 'red' }
            }
            role="alert"
          >
            {alertMSG}{' '}
            {alertMSG === loadingGameMSG && (
              <i
                className="fa-solid fa-dice-d6 fa-spin-pulse fa-lg"
                style={{ color: 'purple' }}
              ></i>
            )}
          </div>
        )}
        {loadGame && (
          <div className="d-flex justify-content-center mt-2 mb-1">
            <button
              className="back-button p-2 "
              type="button"
              aria-label="Close"
              onClick={() => {
                updatePlayer(currentPlayer.player_id);
              }}
              style={{
                marginLeft: '2px',
                backgroundColor: 'transparent',
                color: 'white',
                display: 'block',
                textAlign: 'center',
                border: 'transparent',
              }}
            >
              Back
              <i
                className="fa-solid fa-left-long fa-lg ms-3"
                style={{ color: 'white' }}
              ></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default LoadStory;
