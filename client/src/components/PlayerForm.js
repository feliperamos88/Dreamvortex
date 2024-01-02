import { useState, useRef, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { currentPlayerContext } from '../helpers/GameContext';
import { GameAPI } from '../helpers/GameAPI';
import Button from './Button';

const PlayerForm = ({ setLogin, clickAudio }) => {
  const [formData1, setFormData1] = useState('');
  const [formData2, setFormData2] = useState('');
  const [submit, setSubmit] = useState(false);
  const [alertMSG, setAlertMSG] = useState();
  const [blockClass, setBlockClass] = useState('');

  const creatingPlayerMessage = 'Creating new Player_ID';
  const loadingPlayerMessage = 'Loading Player_ID';

  //   const failureMessage = 'I am sorry, but something went wrong';

  const { currentPlayer, setCurrentPlayer } = useContext(currentPlayerContext);

  const createForm = useRef();
  const loginForm = useRef();

  const handleChange = (e) => {
    setFormData1(e.target.value);
  };

  const handleChange2 = (e) => {
    setFormData2(e.target.value);
  };

  const createPlayer = (id) => {
    const new_player = GameAPI.create('player', { player_id: id });
    return new_player;
  };

  const loadPlayer = (id) => {
    const player = GameAPI.getOne('player', id);
    return player;
  };

  //   const handleLeaveInput = (e) => {
  //     setFormData2('');
  //   };
  console.log(currentPlayer);
  const closeAlert = () => {
    setSubmit(false);
    setAlertMSG();
  };

  const handleSubmit = async (e) => {
    setSubmit(false);
    setAlertMSG();
    e.preventDefault();
    try {
      if (e.target === createForm.current) {
        if (formData1 === '') {
          setSubmit(true);
          setAlertMSG('Field is empty');
        } else {
          setAlertMSG(creatingPlayerMessage);
          setSubmit(true);
          setBlockClass('block-itens');
          const { data } = await createPlayer(formData1);
          setTimeout(() => {
            setCurrentPlayer(data.player);
            setLogin(true);
          }, 2000);
        }
      } else {
        if (formData2 === '') {
          setSubmit(true);
          setAlertMSG('Field is empty');
        } else {
          setAlertMSG(loadingPlayerMessage);
          setSubmit(true);
          setBlockClass('block-itens');
          const { data } = await loadPlayer(formData2);
          setTimeout(() => {
            setCurrentPlayer(data.player);
            setLogin(true);
          }, 2000);
        }
      }
    } catch (err) {
      setAlertMSG(err.response.data.error.message);
      setSubmit(true);
      setBlockClass('');
    }
    setFormData1('');
    setFormData2('');
  };

  return (
    <div
      className={`container d-flex justify-content-center flex-column align-items-center mt-4 ${blockClass}`}
    >
      <div className="mb-3 form-div p-2">
        <form onSubmit={handleSubmit} ref={createForm}>
          <div className="form-container">
            <label htmlFor="first_name" className="">
              Choose your Player_ID
            </label>
            <input
              type="text"
              id="create_player_id"
              name="player_id"
              value={formData1}
              onChange={handleChange}
            />
          </div>
          <div className="text-center mt-2">
            <Button
              action={() => {
                clickAudio.current.play();
              }}
              text="Create"
            />
          </div>
        </form>
      </div>
      <div className="form-div p-2">
        <form onSubmit={handleSubmit} ref={loginForm}>
          <div className="form-container">
            <label htmlFor="first_name" className="">
              Or if you already have a Player ID, just type it!
            </label>
            <input
              type="text"
              id="login_player_id"
              name="player_id"
              value={formData2}
              onChange={handleChange2}
              className="w-50"
            />
          </div>
          <div className="text-center mt-2">
            <Button
              action={() => {
                clickAudio.current.play();
              }}
              text="Login"
            />
          </div>
        </form>
      </div>
      <div className="mt-3">
        {submit && (
          <div
            style={
              alertMSG === creatingPlayerMessage ||
              alertMSG === loadingPlayerMessage
                ? { color: 'purple' }
                : { color: 'red' }
            }
            role="alert"
          >
            {alertMSG}{' '}
            {(alertMSG === creatingPlayerMessage ||
              alertMSG === loadingPlayerMessage) && (
              <i
                className="fa-solid fa-dice-d6 fa-spin-pulse fa-lg"
                style={{ color: 'purple' }}
              ></i>
            )}
            {alertMSG !== creatingPlayerMessage &&
              alertMSG !== loadingPlayerMessage && (
                <button
                  type="button"
                  aria-label="Close"
                  onClick={closeAlert}
                  style={{
                    marginLeft: '2px',
                    backgroundColor: 'transparent',
                    color: 'white',
                  }}
                >
                  X
                </button>
              )}
          </div>
        )}
      </div>
      {alertMSG !== creatingPlayerMessage &&
        alertMSG !== loadingPlayerMessage && (
          <div className="d-flex justify-content-center mt-1 mb-1">
            <button
              className="back-button p-2"
              type="button"
              aria-label="Close"
              onClick={() => setLogin(false)}
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
  );
};

export default PlayerForm;
