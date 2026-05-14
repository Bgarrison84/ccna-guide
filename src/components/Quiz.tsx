import { useState } from 'react';
import type { Question } from '../data/content';

interface QuizProps {
  questions: Question[];
  onComplete?: (score: number) => void;
}

const Quiz = ({ questions, onComplete }: QuizProps) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (submitted) return;
    setAnswers({ ...answers, [qIdx]: oIdx });
  };

  const score = questions.reduce((acc, q, idx) => acc + (answers[idx] === q.answer ? 1 : 0), 0);

  const handleSubmit = () => {
    setSubmitted(true);
    if (onComplete) {
      onComplete(score);
    }
  };

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
            <div style={{ marginTop: '10px', padding: '10px', backgroundColor: answers[qIdx] === q.answer ? '#e6fffa' : '#fff5f5', borderRadius: '4px', color: '#333' }}>
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
          onClick={handleSubmit}
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

export default Quiz;
