import { Link } from 'react-router-dom';
import { modules } from '../data/content';
import { Home, Book, GraduationCap, ClipboardList, Binary, Layers, Terminal } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ margin: 0, color: 'var(--cisco-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Book size={24} />
          CCNA Guide
        </h2>
      </div>
      <nav style={{ padding: '20px' }}>
        <Link to="/" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Home size={18} />
          Home
        </Link>
        <Link to="/technician-log" className="nav-link" style={{ border: '1px solid #ffcc00', marginTop: '10px', color: '#ffcc00', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ClipboardList size={18} />
          Technician's Log
        </Link>
        <Link to="/exam-sim" className="nav-link" style={{ border: '1px solid #ce1031', marginTop: '10px', color: '#ce1031', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <GraduationCap size={18} />
          Exam Simulator
        </Link>

        <div style={{ marginTop: '20px', marginBottom: '10px', textTransform: 'uppercase', fontSize: '0.8em', color: '#888', fontWeight: 'bold' }}>
          Tools & Practice
        </div>
        <Link to="/subnetting" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3b82f6' }}>
          <Binary size={18} />
          Subnetting Tool
        </Link>
        <Link to="/flashcards" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a855f7' }}>
          <Layers size={18} />
          Flashcards
        </Link>
        <Link to="/labs" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10b981' }}>
          <Terminal size={18} />
          Lab Guides
        </Link>
        
        <div style={{ marginTop: '30px', marginBottom: '10px', textTransform: 'uppercase', fontSize: '0.8em', color: '#888', fontWeight: 'bold' }}>
          Study Modules
        </div>
        {modules.map(mod => (
          <Link key={mod.id} to={`/module/${mod.id}`} className="nav-link" style={{ fontSize: '0.9em' }}>
            {mod.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
