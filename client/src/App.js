import { Routes, Route } from 'react-router-dom';
import Opening from './components/Opening';
import MainWindow from './components/MainWindow';
import Prologue from './components/Prologue';
import NavBar from './components/NavBar';
import Finale from './components/Finale';
import { PlayerContext } from './helpers/GameContext';
import Auth from './helpers/Auth';

import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <Routes>
      <Route element={<PlayerContext />}>
        <Route path="/">
          <Route element={<NavBar />}>
            <Route path="/" element={<Opening />} />
            <Route element={<Auth />}>
              <Route path="/prologue" element={<Prologue />} key={uuidv4()} />
              <Route path="/story" element={<MainWindow />} key={uuidv4()} />
              <Route path="/finale" element={<Finale />} key={uuidv4()} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
