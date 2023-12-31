import { useState, useEffect, useRef, useContext } from 'react';
import { GameAPI } from '../helpers/GameAPI';
import { currentPlayerContext } from '../helpers/GameContext';
import { useNavigate } from 'react-router-dom';
import SaveFile from './SaveFile';

import { v4 as uuidv4 } from 'uuid';

const LoadStory = ({ loadGame, setLoadGame }) => {
  const [alertMSG, setAlertMSG] = useState();
  const [saveFiles, setSaveFiles] = useState(false);
  const [loadSuccess, setLoadSucess] = useState('superfalse');
  const [slotsNumber, setSlotsNumber] = useState(false);
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
      console.log(slotsNumber);
    }
  }, [saveFiles]);

  //   const createNewGame = async () => {
  //     const { data } = await GameAPI.create('gameslot', {
  //       player_id: currentPlayer.player_id,
  //       dialogue_id: 'P0',
  //     });
  //     setCurrentGameID(data.game.id);
  //     console.log(data.game.id);
  //   };

  //   const createGameSlot = async () => {
  //     setAlertMSG(creatingGameMSG);
  //     try {
  //       await createNewGame();
  //       const { data } = await loadPlayer(currentPlayer.player_id);
  //       setCurrentPlayer(data.player);
  //       setMenuDisplay('menu-hidden');
  //       setTimeout(() => {
  //         navigate('/prologue');
  //       }, 6000);
  //     } catch (err) {
  //       setAlertMSG(failureMSG);
  //     }
  //   };

  useEffect(() => {
    const load = async () => {
      await loadPlayer(currentPlayer.player_id);
    };
    if (loadGame) {
      load();
    }
  }, [loadGame]);

  //   useEffect(() => {
  //     if (gameSlot) {
  //       createGameSlot();
  //     }
  //   }, [gameSlot]);

  return (
    <>
      <h4 className="text-center">
        {saveFiles.length === 0
          ? 'No saved files'
          : saveFiles.length === 3
          ? "You've reached your maximum (3) of save game slots"
          : ''}
      </h4>{' '}
      {/* {loadSuccess === 'yay' && <SaveFile saveFiles={saveFiles} />} */}
      <div className="mt-3">
        {saveFiles && (
          <SaveFile
            saveFiles={saveFiles}
            setSaveFiles={setSaveFiles}
            setAlertMSG={() => setAlertMSG(failureMSG)}
            key={uuidv4()}
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
          <div className="d-flex justify-content-center mt-3">
            <button
              className="back-button p-2 "
              type="button"
              aria-label="Close"
              onClick={() => setLoadGame(false)}
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
