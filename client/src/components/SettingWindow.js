import { v4 as uuidv4 } from 'uuid';

const SettingWindow = ({ currentSetting, currentText, makeChoiceHandler }) => {
  return (
    <>
      <img src={currentSetting.background_pic} key={uuidv4()}></img>
      <h1>{currentSetting.name}</h1>
      <h1 key={uuidv4()}>{currentText.text}</h1>
      {currentText &&
        currentText.choices.map((value) => (
          <button key={uuidv4()}>
            <h1
              id={value.dialogue_id_to}
              onClick={makeChoiceHandler}
              key={value.dialogue_id_to}
            >
              {value.choice_text}{' '}
            </h1>
          </button>
        ))}
    </>
  );
};

export default SettingWindow;
