import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { currentPlayerContext } from '../helpers/GameContext';

const NavBar = () => {
  const { currentPlayer, setCurrentPlayer } = useContext(currentPlayerContext);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const showNav = () => {
      setNav(true);
    };
    if (currentPlayer) {
      showNav();
    }
  }, [currentPlayer]);

  return (
    <>
      <div className={nav ? 'show-nav mt-2 ms-2' : 'hide-nav mt-2 ms-2'}>
        <h4>
          Current player:{' '}
          {currentPlayer ? currentPlayer.player_id : 'No player is logged in'}
        </h4>
      </div>

      <Outlet />
    </>
  );
};

export default NavBar;
