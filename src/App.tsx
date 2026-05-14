import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ModulePage from './pages/ModulePage';
import TechnicianLog from './pages/TechnicianLog';
import ExamSim from './pages/ExamSim';
import SubnettingTool from './pages/SubnettingTool';
import Flashcards from './pages/Flashcards';
import LabGuides from './pages/LabGuides';
import './styles/theme.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/module/:id" element={<ModulePage />} />
            <Route path="/technician-log" element={<TechnicianLog />} />
            <Route path="/exam-sim" element={<ExamSim />} />
            <Route path="/subnetting" element={<SubnettingTool />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/labs" element={<LabGuides />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
