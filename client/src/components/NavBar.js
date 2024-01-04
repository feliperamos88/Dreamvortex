import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { currentPlayerContext } from '../helpers/GameContext';
import Button from './Button';

const NavBar = () => {
  const {
    currentPlayer,
    setCurrentPlayer,
    currentGameID,
    setCurrentGameID,
    menuDisplay,
    setMenuDisplay,
    skipBTN,
    setSkipBTN,
    gameHandler,
    setGameHandler,
  } = useContext(currentPlayerContext);
  const [nav, setNav] = useState(false);
  const [navMSG, setNavMSG] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logginOutMSG = 'Logging out...';

  const returnToMenuMSG = 'Returning to Main Menu...';

  const logOutHandler = () => {
    setNavMSG(logginOutMSG);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const returnToMenuHandler = () => {
    setSkipBTN(false);
    setNavMSG(returnToMenuMSG);
    setCurrentGameID('');
    setTimeout(() => {
      setMenuDisplay('menu-show');
      setNavMSG(false);
      navigate('/');
    }, 500);
  };

  useEffect(() => {
    const showNav = () => {
      setNav(true);
    };
    if (currentPlayer) {
      showNav();
    }
  }, [currentPlayer]);

  console.log(skipBTN);

  return (
    <>
      <div
        className={
          nav
            ? 'show-nav mt-2 mb-2 ms-2 container'
            : 'hide-nav mt-2 mb-2 ms-2 container'
        }
      >
        {currentPlayer ? (
          <h5> Current Player: {currentPlayer.player_id}</h5>
        ) : (
          <h5>''</h5>
        )}
        <div className="d-flex column-gap-2">
          <div>
            {location.pathname !== '/' && !navMSG && (
              <button
                className="log-out-button"
                onClick={() => {
                  returnToMenuHandler();
                }}
              >
                Back to Main Menu
              </button>
            )}
            {navMSG === returnToMenuMSG && (
              <>
                {' '}
                <h5>
                  {navMSG}{' '}
                  <i
                    className="fa-solid fa-dice-d6 fa-spin-pulse fa-md"
                    style={{ color: 'white' }}
                  ></i>
                </h5>{' '}
              </>
            )}
          </div>
          <div>
            {!navMSG && (
              <button
                className="log-out-button"
                style={{ color: 'red' }}
                onClick={() => logOutHandler()}
              >
                Log Out
              </button>
            )}
            {navMSG === logginOutMSG && (
              <>
                {' '}
                <h5 className="mb-0 pb-0">
                  {navMSG}{' '}
                  <i
                    className="fa-solid fa-dice-d6 fa-spin-pulse fa-md"
                    style={{ color: 'white' }}
                  ></i>
                </h5>{' '}
              </>
            )}
          </div>
        </div>
      </div>
      <Outlet />
      <div className="skip-button-container container-fluid">
        {skipBTN && (
          <Button
            text={gameHandler.name}
            action={() => {
              gameHandler.handler();
              setSkipBTN(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default NavBar;
