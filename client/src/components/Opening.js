import { useState, useEffect, useRef, useContext } from 'react';
import { Audio, ButtonClick } from './Audio';
import Button from './Button';
import Agreement from './Agreement';
import MainMenu from './MainMenu';
import { currentPlayerContext } from '../helpers/GameContext';

const Opening = () => {
  const {
    menuDisplay,
    setMenuDisplay,
    currentPlayer,
    setCurrentPlayer,
    skipBTN,
    setSkipBTN,
    gameHandler,
    setGameHandler,
  } = useContext(currentPlayerContext);
  const [visible, setVisible] = useState(false);
  const [openTXT, setOpenTXT] = useState('');
  const [image, setImage] = useState(false);
  const [menu, setMenu] = useState(false);
  const [title, setTitle] = useState(false);
  const [agree, setAgree] = useState();

  const songAudio = useRef();
  const clickAudio = useRef();

  useEffect(() => {
    if (!currentPlayer) {
      const timeout = setTimeout(() => {
        setAgree('pending');
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentPlayer]);

  useEffect(() => {
    if (currentPlayer) {
      skipOpeningHandler();
    }
  }, [currentPlayer]);

  const skipOpeningHandler = () => {
    setImage(true);
    setTitle(true);
    setMenu(true);
    setAgree('');
  };

  const fn = async (value, time) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        setVisible(value);
        resolve();
      }, time)
    );
  };

  useEffect(() => {
    const initialScreen = async () => {
      setOpenTXT('A COOL COMPANY NAME WILL COME HERE!');
      const timeout1 = setTimeout(() => {
        songAudio.current.play();
        setSkipBTN(true);
        setGameHandler((prevState) => ({
          ...prevState,
          handler: skipOpeningHandler,
        }));
      }, 4000);
      await fn(true, 8000);
      await fn(false, 5000);
      setOpenTXT('SOMETHING WILL COM HERE TOO');
      await fn(true, 5000);
      await fn(false, 5000);
      setTimeout(() => {
        setImage(true);
      }, 7000);

      const timeout2 = setTimeout(() => {
        setTitle(true);
      }, 20000);
      const timeout3 = setTimeout(() => {
        setSkipBTN(false);
        setMenu(true);
      }, 25000);
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      };
    };
    if (agree === 'accepted') {
      initialScreen();
    }
  }, [agree]);

  return (
    <>
      <div className={`d-flex justify-content-center ${menuDisplay} `}>
        <Audio src="audio/MorbidCuriosity.mp3" ref={songAudio} loop={'loop'} />
        <ButtonClick src="audio/buttonsound.mp3" ref={clickAudio} />
        <div className={image ? 'menu' : 'opening-warnings'}>
          {agree === 'pending' ? (
            <>
              <Agreement />{' '}
              <Button
                action={() => {
                  setAgree('accepted');
                  clickAudio.current.play();
                }}
                text="Agree"
              />
            </>
          ) : (
            ''
          )}

          {visible && agree === 'accepted' && <h1 className="">{openTXT}</h1>}

          {image && (
            <div className="opening-image-container">
              {title && <div className="game-title">SURREAL ENIGMA</div>}
              <div
                className="image-background"
                style={{
                  backgroundImage: `url('images/settings/menucityjpg.jpg')`,
                }}
              ></div>
            </div>
          )}

          {menu && <MainMenu clickAudio={clickAudio} />}
        </div>
      </div>
    </>
  );
};

export default Opening;
