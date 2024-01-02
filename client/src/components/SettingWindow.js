import { useState, useEffect, useRef, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typewriter from 'typewriter-effect';

const SettingWindow = ({ currentSetting, currentText, makeChoiceHandler }) => {
  const [settingChange, setSettingChange] = useState();

  const showChoicesHandler = () => {
    setSettingChange(false);
    setTimeout(() => {
      setSettingChange(true);
    }, 3000);
  };

  useEffect(() => {
    showChoicesHandler();
  }, [currentText.text]);

  return (
    <>
      <div className="setting-container">
        <div className="setting-image-container" key={uuidv4()}>
          <div
            className="setting-image-background"
            style={{
              backgroundImage: `url('${currentSetting.background_pic}')`,
            }}
          ></div>
        </div>
        {/* <div className="col-10 col-md-6">
          <img
            src={currentSetting.background_pic}
            key={uuidv4()}
            className="img-fluid"
          ></img>
        </div> */}
      </div>
      <div className="text-center">
        <div style={{ fontSize: '20px' }}>
          <Typewriter
            options={{
              strings: currentText.text,
              autoStart: true,
              delay: 20,
              pauseFor: 1000,
            }}
          />
        </div>
        {settingChange && (
          <div className="setting-text mt-3 mb-0">
            {currentText &&
              currentText.choices.map((value) => (
                <button
                  className="game-button"
                  id={value.dialogue_id_to}
                  onClick={makeChoiceHandler}
                  key={value.dialogue_id_to}
                >
                  {value.choice_text}
                </button>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SettingWindow;
