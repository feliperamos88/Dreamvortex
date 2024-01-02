import { currentPlayerContext } from '../helpers/GameContext';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useContext } from 'react';

const Auth = () => {
  const { currentPlayer, setCurrentPlayer, currentGameID, setCurrentGameID } =
    useContext(currentPlayerContext);

  return <> {currentPlayer ? <Outlet /> : <Navigate to={'/'} />}</>;
};
// const navigate = useNavigate();

export default Auth;
