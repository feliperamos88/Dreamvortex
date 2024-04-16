import { useState, useEffect, useRef, useContext } from 'react';
import { GameAPI } from '../helpers/GameAPI';
import { currentPlayerContext } from '../helpers/GameContext';
import { useNavigate } from 'react-router-dom';

const NewStory = ({ newGame, setNewGame }) => {
  const [alertMSG, setAlertMSG] = useState();
  const [gameSlot, setNewGameSlot] = useState(false);
  const navigate = useNavigate();
  const {
    currentPlayer,
    setCurrentPlayer,
    menuDisplay,
    setMenuDisplay,
    currentGameID,
    setCurrentGameID,
  } = useContext(currentPlayerContext);

  const memoryFullMSG =
    'You have reached the limit of your save game slots (3). To start a new game, delete one of your slots';
  const creatingGameMSG =
    'Creating new game. Your game will be saved automatically on every act change.';
  const failureMSG = 'Sorry, but something went wrong!';

  const loadPlayer = (id) => {
    const player = GameAPI.getOne('player', id);
    return player;
  };

  const createNewGame = async () => {
    const { data } = await GameAPI.create('gameslot', {
      player_id: currentPlayer.player_id,
      setting: 'prologue',
      dialogue_id: 'P0',
      act: 0,
    });
    setCurrentGameID(data.game.id);
  };

  const createGameSlot = async () => {
    if (currentPlayer.saved_game.length > 2) {
      setAlertMSG(memoryFullMSG);
    } else {
      setAlertMSG(creatingGameMSG);
      try {
        await createNewGame();
        const { data } = await loadPlayer(currentPlayer.player_id);
        setCurrentPlayer(data.player);
        setMenuDisplay('menu-hidden');
        setTimeout(() => {
          navigate('/prologue');
        }, 7000);
      } catch (err) {
        setAlertMSG(failureMSG);
      }
    }
  };

  useEffect(() => {
    const gameSlotHandler = () => {
      setNewGameSlot(true);
    };
    if (newGame) {
      gameSlotHandler();
    }
  }, [newGame]);

  useEffect(() => {
    if (gameSlot) {
      createGameSlot();
    }
  }, [gameSlot]);

  return (
    <>
      <div className="mt-3">
        {newGame && (
          <div
            style={
              alertMSG === failureMSG ? { color: 'red' } : { color: 'purple' }
            }
            role="alert"
          >
            {alertMSG}{' '}
            {alertMSG === creatingGameMSG && (
              <i
                className="fa-solid fa-dice-d6 fa-spin-pulse fa-lg"
                style={{ color: 'purple' }}
              ></i>
            )}
          </div>
        )}
        {alertMSG !== creatingGameMSG && (
          <div className="d-flex justify-content-center mt-3">
            <button
              className="back-button p-2"
              type="button"
              aria-label="Close"
              onClick={() => setNewGame(false)}
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

export default NewStory;
