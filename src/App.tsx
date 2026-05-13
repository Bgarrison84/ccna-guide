import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { modules } from './data/content';
import type { Question } from './data/content';
import './styles/theme.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>CCNA Guide</h2>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <hr />
        <h3>Modules</h3>
        {modules.map(mod => (
          <Link key={mod.id} to={`/module/${mod.id}`} className="nav-link">
            {mod.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

const Quiz = ({ questions }: { questions: Question[] }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (submitted) return;
    setAnswers({ ...answers, [qIdx]: oIdx });
  };

  const score = questions.reduce((acc, q, idx) => acc + (answers[idx] === q.answer ? 1 : 0), 0);

  return (
    <div className="card" style={{ borderTop: '4px solid var(--cisco-blue)' }}>
      <h2>Knowledge Check</h2>
      {questions.map((q, qIdx) => (
        <div key={qIdx} style={{ marginBottom: '20px' }}>
          <p><strong>{qIdx + 1}. {q.question}</strong></p>
          {q.options.map((opt, oIdx) => (
            <label key={oIdx} style={{ display: 'block', margin: '5px 0', cursor: 'pointer' }}>
              <input
                type="radio"
                name={`q-${qIdx}`}
                checked={answers[qIdx] === oIdx}
                onChange={() => handleSelect(qIdx, oIdx)}
              />
              {opt}
            </label>
          ))}
          {submitted && (
            <div style={{ marginTop: '10px', padding: '10px', backgroundColor: answers[qIdx] === q.answer ? '#e6fffa' : '#fff5f5', borderRadius: '4px' }}>
              <p>
                {answers[qIdx] === q.answer ? '✅ Correct!' : `❌ Incorrect. The correct answer is: ${q.options[q.answer]}`}
              </p>
              <p><small>{q.explanation}</small></p>
            </div>
          )}
        </div>
      ))}
      {!submitted ? (
        <button 
          onClick={() => setSubmitted(true)}
          style={{ padding: '10px 20px', backgroundColor: 'var(--cisco-blue)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Submit Answers
        </button>
      ) : (
        <div>
          <h3>Your Score: {score} / {questions.length}</h3>
          <button 
            onClick={() => { setSubmitted(false); setAnswers({}); }}
            style={{ padding: '10px 20px', backgroundColor: '#666', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
};

const Home = () => (
  <div className="card">
    <h1>Welcome to the CCNA Guide</h1>
    <p>This application is designed to help you learn the fundamentals of networking and prepare for the CCNA certification.</p>
    <p>All information is derived from official CCNA source materials to ensure accuracy.</p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
      <div className="card" style={{ margin: 0 }}>
        <h3>Beginner Friendly</h3>
        <p>No prior experience required. We start from the basics of computer hardware and build up to complex networking.</p>
      </div>
      <div className="card" style={{ margin: 0 }}>
        <h3>Interactive Quizzes</h3>
        <p>Test your knowledge after each module with real-world exam questions.</p>
      </div>
    </div>
  </div>
);

const ModulePage = () => {
  const { id } = useParams<{ id: string }>();
  const module = modules.find(m => m.id === id);

  if (!module) return <div>Module not found</div>;

  return (
    <div>
      <h1>{module.title}</h1>
      <p style={{ fontSize: '1.2em', color: '#666' }}>{module.description}</p>
      {module.sections.map((section, idx) => (
        <div key={idx} className="card">
          <h2>{section.title}</h2>
          <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{section.content}</div>
        </div>
      ))}
      {module.quiz && <Quiz questions={module.quiz} />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/module/:id" element={<ModulePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
