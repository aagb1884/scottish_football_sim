import './App.css';
import './derek_adams_simulator/DAApp.css';
import HomePage from './HomePage';
import AboutScreen from './AboutScreen/AboutScreen'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DAStartScreen from './derek_adams_simulator/pages/StartScreen/DAStartScreen';
import DAGameScreen from './derek_adams_simulator/pages/GameScreen/DAGameScreen';
import DACreditsScreen from './derek_adams_simulator/pages/CreditsScreen/DACreditsScreen';
import Error from './components/Error';
import HibsMergePage from './hibs_manager_merger/pages/index';
import GameProvider from './hibs_manager_merger/context/game-context';
import RangersStartScreen from './rangers_management_simulator/pages/StartScreen/RangersStartScreen';
import RangersGameScreen from './rangers_management_simulator/pages/GameScreen/RangersGameScreen';
import RangersCreditsScreen from './rangers_management_simulator/pages/CreditsScreen/RangersCreditsScreen';

function App() {
  return (
    <div className="App">
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/derekadams" element={<DAStartScreen />} />
          <Route path="/derekadams/game" element={<DAGameScreen />} />
          <Route path="/derekadams/credits" element={<DACreditsScreen />} />
          <Route path="/hibs-merger" element={<HibsMergePage />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="*" element={<Error />} />
          <Route path="/rangers" element={<RangersStartScreen /> } />
          <Route path="/rangers/game" element={<RangersGameScreen />} />
          <Route path="/rangers/credits" element={<RangersCreditsScreen />} />        </Routes>
      </Router>
    </GameProvider>
    </div>
  );
}

export default App;
