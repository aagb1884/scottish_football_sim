import './App.css';
import './derek_adams_simulator/DAApp.css';
import HomePage from './HomePage';
import AboutScreen from './AboutScreen/AboutScreen'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DAStartScreen from './derek_adams_simulator/pages/StartScreen/DAStartScreen';
import DAGameScreen from './derek_adams_simulator/pages/GameScreen/DAGameScreen';
import DACreditsScreen from './derek_adams_simulator/pages/CreditsScreen/DACreditsScreen';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/derekadams" element={<DAStartScreen />} />
          <Route path="/derekadams/game" element={<DAGameScreen />} />
          <Route path="/derekadams/credits" element={<DACreditsScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="/rangers" element={<StartScreen />} />
          <Route path="/rangers/game" element={<GameScreen />} />
          <Route path="/rangers/credits" element={<CreditsScreen />} /> */}
        </Routes>
      </Router>
    </>
    </div>
  );
}

export default App;
