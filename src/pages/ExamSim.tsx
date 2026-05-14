import { useState, useEffect } from 'react';
import { modules, type Question } from '../data/content';

const ExamSim = () => {
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLimit] = useState(7200); // 120 minutes
  const [examStarted, setExamStarted] = useState(false);

  const startExam = () => {
    // Collect all questions from all modules
    const allQs = modules.reduce((acc, mod) => [...acc, ...(mod.quiz || [])], [] as Question[]);
    // Shuffle and pick 50 (actual CCNA is ~100 but 50 for sim)
    const shuffled = allQs.sort(() => 0.5 - Math.random()).slice(0, 50);
    setExamQuestions(shuffled);
    setExamStarted(true);
    setSubmitted(false);
    setAnswers({});
    setTimeLimit(7200);
  };

  useEffect(() => {
    if (examStarted && !submitted && timeLeft > 0) {
      const timer = setInterval(() => setTimeLimit(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !submitted) {
      setSubmitted(true);
    }
  }, [examStarted, submitted, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const score = examQuestions.reduce((acc, q, idx) => acc + (answers[idx] === q.answer ? 1 : 0), 0);
  const percentage = (score / examQuestions.length) * 100;
  const passed = percentage >= 82.5; // Typical CCNA passing threshold

  if (!examStarted) {
    return (
      <div className="card">
        <h1>🎓 CCNA Certification Simulator</h1>
        <p>This mode simulates the real CCNA 200-301 exam environment.</p>
        <ul>
          <li><strong>Questions:</strong> 50 (Mixed Domains)</li>
          <li><strong>Time Limit:</strong> 120 Minutes</li>
          <li><strong>Passing Score:</strong> 825 / 1000 (82.5%)</li>
          <li>No back navigation (simulated by listing all questions)</li>
        </ul>
        <button onClick={startExam} className="nav-link" style={{ backgroundColor: '#ce1031', color: 'white', padding: '15px 30px', display: 'inline-block' }}>
          START CERTIFICATION EXAM
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ position: 'sticky', top: 0, background: '#fff', padding: '10px', borderBottom: '2px solid #ce1031', zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>CCNA EXAM IN PROGRESS</h2>
        <span style={{ fontSize: '1.5em', fontWeight: 'bold', color: timeLeft < 300 ? 'red' : 'black' }}>
          TIME REMAINING: {formatTime(timeLeft)}
        </span>
      </div>

      {examQuestions.map((q, idx) => (
        <div key={idx} className="card" style={{ opacity: submitted ? 1 : 1 }}>
          <p><strong>Question {idx + 1}</strong></p>
          <p>{q.question}</p>
          {q.options.map((opt, oIdx) => (
            <label key={oIdx} style={{ display: 'block', margin: '5px 0' }}>
              <input
                type="radio"
                name={`exam-q-${idx}`}
                disabled={submitted}
                checked={answers[idx] === oIdx}
                onChange={() => setAnswers({ ...answers, [idx]: oIdx })}
              />
              {opt}
            </label>
          ))}
          {submitted && (
            <div style={{ marginTop: '10px', padding: '10px', backgroundColor: answers[idx] === q.answer ? '#e6fffa' : '#fff5f5' }}>
              <strong>{answers[idx] === q.answer ? 'CORRECT' : 'INCORRECT'}</strong> - {q.explanation}
            </div>
          )}
        </div>
      ))}

      {!submitted ? (
        <button onClick={() => setSubmitted(true)} style={{ backgroundColor: '#ce1031', color: 'white', padding: '15px 30px', margin: '20px 0' }}>
          SUBMIT EXAM
        </button>
      ) : (
        <div className="card" style={{ border: `4px solid ${passed ? 'green' : 'red'}` }}>
          <h2>EXAM RESULT: {passed ? 'PASSED' : 'FAILED'}</h2>
          <p style={{ fontSize: '2em' }}>Score: {percentage.toFixed(1)}%</p>
          <p>{passed ? 'Congratulations! You are certified for the wasteland.' : 'Keep studying the source materials and try again.'}</p>
          <button onClick={startExam} style={{ padding: '10px 20px' }}>RETAKE EXAM</button>
        </div>
      )}
    </div>
  );
};

export default ExamSim;
