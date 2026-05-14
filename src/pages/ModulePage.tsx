import { useParams } from 'react-router-dom';
import { modules } from '../data/content';
import Quiz from '../components/Quiz';
import { useProgress } from '../hooks/useProgress';

const ModulePage = () => {
  const { id } = useParams<{ id: string }>();
  const { saveProgress } = useProgress();
  const module = modules.find(m => m.id === id);

  if (!module) return <div>Module not found</div>;

  const handleQuizComplete = (score: number) => {
    saveProgress(module.id, score);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{module.title}</h1>
      <p style={{ fontSize: '1.2em', color: '#888', marginBottom: '30px' }}>{module.description}</p>
      {module.sections.map((section, idx) => (
        <div key={idx} className="card mb-6">
          <h2 className="text-xl font-bold mb-4">{section.title}</h2>
          <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', color: '#ccc' }}>{section.content}</div>
        </div>
      ))}
      {module.quiz && <Quiz questions={module.quiz} onComplete={handleQuizComplete} />}
    </div>
  );
};

export default ModulePage;
