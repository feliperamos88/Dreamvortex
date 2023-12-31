import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import { GameAPI } from '../helpers/GameAPI';
import { useState, useRef, useContext } from 'react';
import { currentPlayerContext } from '../helpers/GameContext';
import { useNavigate } from 'react-router-dom';
import NumberConverter from '../helpers/NumberConverter';

const SaveFile = ({ saveFiles, setSaveFiles, setAlertMSG }) => {
  const navigate = useNavigate();
  const {
    currentPlayer,
    setCurrentPlayer,
    menuDisplay,
    setMenuDisplay,
    currentGameID,
    setCurrentGameID,
  } = useContext(currentPlayerContext);
  const [slotClass, setSlotClass] = useState('testclass');

  const loadGameHandler = (id, setting, act, dialogue_id) => {
    setCurrentGameID(id);
    setMenuDisplay('menu-hidden');
    if (dialogue_id === 'P0') {
      setTimeout(() => {
        navigate('/prologue');
      }, 4000);
    } else {
      setTimeout(() => {
        navigate('/actI', { state: { setting, act } });
      }, 4000);
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
    <div className="container saved-file-container col-10 col-md-5 mb-3">
      {saveFiles.map((file) => {
        return (
          <div
            key={file.id}
            id={file.id}
            className={`load-file-container container py-2`}
          >
            <h5>
              {NumberConverter(file.act)}: {file.setting.toUpperCase()}
            </h5>
            <h5>{file.updatedAt}</h5>
            <div className="d-flex justify-content-evenly">
              <Button
                text="Load game"
                action={() =>
                  loadGameHandler(
                    file.id,
                    file.setting,
                    file.act,
                    file.dialogue_id
                  )
                }
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
