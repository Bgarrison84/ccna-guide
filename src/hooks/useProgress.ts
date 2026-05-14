import { useState, useEffect } from 'react';

export const useProgress = () => {
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});

  useEffect(() => {
    const saved = localStorage.getItem('ccna_guide_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCompletedModules(parsed.completedModules || []);
        setQuizScores(parsed.quizScores || {});
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
  }, []);

  const saveProgress = (moduleId: string, score: number) => {
    const newScores = { ...quizScores, [moduleId]: Math.max(quizScores[moduleId] || 0, score) };
    const newModules = [...new Set([...completedModules, moduleId])];
    
    setQuizScores(newScores);
    setCompletedModules(newModules);
    
    localStorage.setItem('ccna_guide_progress', JSON.stringify({
      completedModules: newModules,
      quizScores: newScores
    }));
  };

  return { completedModules, quizScores, saveProgress };
};
