import { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';

const currentPlayerContext = createContext();
// const FilterHandlerContext = createContext();

const PlayerContext = () => {
  const [currentPlayer, setCurrentPlayer] = useState(false);
  const [currentGameID, setCurrentGameID] = useState('');
  const [menuDisplay, setMenuDisplay] = useState('menu-show');
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
      }}
    >
      <Outlet />
    </currentPlayerContext.Provider>
  );
};

export { PlayerContext, currentPlayerContext };
