import { useState, useEffect, useRef, useContext } from 'react';
import { Audio, ButtonClick } from './Audio';
import Button from './Button';
import Agreement from './Agreement';
import MainMenu from './MainMenu';
import { currentPlayerContext } from '../helpers/GameContext';

const Opening = () => {
  const { menuDisplay, setMenuDisplay } = useContext(currentPlayerContext);
  const [visible, setVisible] = useState(false);
  const [openTXT, setOpenTXT] = useState('');
  // CHANGE TO FALSE THE FOLLOWING THREE!
  const [image, setImage] = useState(true);
  const [menu, setMenu] = useState(true);
  const [title, setTitle] = useState(true);
  // CHANGE TO FALSE THE THREE ABOVE!
  const [agree, setAgree] = useState();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAgree('pending');
  //   }, 3000);
  // }, []);

  const fn = async (value, time) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        setVisible(value);
        resolve();
      }, time)
    );
  };

  const songAudio = useRef();
  const clickAudio = useRef();

  // useEffect(() => {
  //   const initialScreen = async () => {
  //     setOpenTXT('A COOL COMPANY NAME WILL COME HERE!');
  //     setTimeout(() => {
  //       songAudio.current.play();
  //     }, 4000);
  //     await fn(true, 8000);
  //     await fn(false, 5000);
  //     setOpenTXT('SOMETHING WILL COM HERE TOO');
  //     await fn(true, 5000);
  //     await fn(false, 5000);
  //     setTimeout(() => {
  //       setImage(true);
  //     }, 7000);

  //     setTimeout(() => {
  //       setTitle(true);
  //     }, 20000);
  //     setTimeout(() => {
  //       setMenu(true);
  //     }, 25000);
  //   };
  //   if (agree === 'accepted') {
  //     initialScreen();
  //   }
  // }, [agree]);

  return (
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

        {visible && <h1 className="">{openTXT}</h1>}
        <div className="container-fluid opening-image-container col-10 col-lg-6 ">
          {title && <div className="tale">A title will come here!</div>}
          {image && (
            <img
              src="images/settings/menucityjpg.jpg"
              className="img-fluid opening-image"
            />
          )}
        </div>
        {menu && <MainMenu clickAudio={clickAudio} />}
        {/* {menu && ( 
          <div className="menuOptions mt-5">
            <div>
              <Button
                addClass="menu-button"
                action={() => {
                  clickAudio.current.play();
                }}
                text="New Game"
              />
              <Button
                addClass="menu-button"
                text="Load Game"
                action={() => {
                  clickAudio.current.play();
                }}
              />
              <Button
                addClass="menu-button"
                text="Credits"
                action={() => {
                  clickAudio.current.play();
                }}
              />
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Opening;
