import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import { GameAPI } from '../helpers/GameAPI';
import { useState, useRef, useContext, useEffect } from 'react';
import { currentPlayerContext } from '../helpers/GameContext';
import { useNavigate } from 'react-router-dom';
import NumberConverter from '../helpers/NumberConverter';
import moment from 'moment';

const SaveFile = ({
  saveFiles,
  setSaveFiles,
  setAlertMSG,
  clickAudio,
  setBlockClass,
}) => {
  const navigate = useNavigate();
  const {
    currentPlayer,
    setCurrentPlayer,
    menuDisplay,
    setMenuDisplay,
    currentGameID,
    setCurrentGameID,
  } = useContext(currentPlayerContext);

  const parseDateHandler = (date) => {
    const stringDate = moment(`${date}`).format('YYYY-MM-DD HH:mm');
    const splitDate = stringDate.split(' ');
    return `${splitDate[0]} at ${splitDate[1]} `;
  };

  const loadGameHandler = (id, setting, act, dialogue_id) => {
    setBlockClass('block-files');

    try {
      setCurrentGameID(id);
      setMenuDisplay('menu-hidden');
      setTimeout(() => {
        const slotDiv = document.getElementById(id);
        slotDiv.classList.add('loading-file');
      }, 0);
      if (dialogue_id === 'P0') {
        setTimeout(() => {
          navigate('/prologue');
        }, 3000);
      } else {
        setTimeout(() => {
          navigate('/story', { state: { setting, act } });
        }, 3000);
      }
    } catch (err) {
      setBlockClass('');
      setAlertMSG();
    }
  };

  const deleteFileHandler = async (id) => {
    const slotDiv = document.getElementById(id);
    slotDiv.classList.add('deleted-file');
    try {
      const deletedGame = await GameAPI.delete('gameslot', id);
      setTimeout(
        () =>
          setSaveFiles((prevState) =>
            prevState.filter((value) => value.id !== id)
          ),
        1600
      );
    } catch (err) {
      setAlertMSG();
    }
  };

  return (
    <div className={`container saved-file-container col-10 col-md-5 mb-3`}>
      {saveFiles.map((file) => {
        return (
          <div
            key={file.id}
            id={file.id}
            className={`load-file-container container py-2`}
          >
            <h5>
              {file.setting === 'prologue'
                ? 'PROLOGUE'
                : `${NumberConverter(file.act)}:
              ${file.setting.toUpperCase()}`}
            </h5>
            <h5 style={{ fontSize: '1em' }}>
              LAST SAVE: {parseDateHandler(file.updatedAt)}
            </h5>
            <div className="d-flex justify-content-evenly">
              <Button
                text="Load game"
                action={() => {
                  loadGameHandler(
                    file.id,
                    file.setting,
                    file.act,
                    file.dialogue_id
                  );
                  clickAudio.current.play();
                }}
              />
              <Button text="Delete" action={() => deleteFileHandler(file.id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SaveFile;
