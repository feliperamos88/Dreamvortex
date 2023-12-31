import { Routes, Route } from 'react-router-dom';
import Opening from './components/Opening';
import MainWindow from './components/MainWindow';
import Prologue from './components/Prologue';
import NavBar from './components/NavBar';
import { PlayerContext } from './helpers/GameContext';

import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route element={<PlayerContext />}>
          <Route element={<NavBar />}>
            <Route path="/" element={<Opening />} />
            <Route path="/prologue" element={<Prologue />} key={uuidv4()} />
            <Route path="/actI" element={<MainWindow />} key={uuidv4()} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
