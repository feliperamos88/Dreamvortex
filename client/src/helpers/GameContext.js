import { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';

const currentPlayerContext = createContext();
// const FilterHandlerContext = createContext();

const PlayerContext = () => {
  const obj = {
    name: 'Skip',
    handler() {
      console.log('test');
    },
  };
  const [currentPlayer, setCurrentPlayer] = useState(false);
  const [currentGameID, setCurrentGameID] = useState('');
  const [menuDisplay, setMenuDisplay] = useState('menu-show');
  const [skipBTN, setSkipBTN] = useState(false);
  const [gameHandler, setGameHandler] = useState(obj);
  const [menuAnimationClass, setMenuAnimationClass] = useState(
    'main-menu-container-initial'
  );

  return (
    <currentPlayerContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        menuDisplay,
        setMenuDisplay,
        currentGameID,
        setCurrentGameID,
        menuAnimationClass,
        setMenuAnimationClass,
        skipBTN,
        setSkipBTN,
        gameHandler,
        setGameHandler,
      }}
    >
      <Outlet />
    </currentPlayerContext.Provider>
  );
};

export { PlayerContext, currentPlayerContext };
