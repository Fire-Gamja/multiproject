import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BuyTicket from './pages/BuyTicket'
import './styles/common.css';
import TrailerPlayer from './components/shared/TrailerPlayer'

function App() {
  return (
    <div className="app-container">
      <div className="trailer-container">
        <TrailerPlayer />
      </div>
      
      <div className="page-content"W>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<BuyTicket />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
