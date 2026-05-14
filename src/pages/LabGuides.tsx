import { useState } from 'react';
import { labs } from '../data/labs';
import { Terminal, CheckSquare, Map, Target, ChevronDown, ChevronUp } from 'lucide-react';

const LabGuides = () => {
  const [expandedLab, setExpandedLab] = useState<string | null>(labs[0].id);
  const [completedTasks, setCompletedTasks] = useState<Record<string, string[]>>({});

  const toggleTask = (labId: string, task: string) => {
    const labTasks = completedTasks[labId] || [];
    if (labTasks.includes(task)) {
      setCompletedTasks({ ...completedTasks, [labId]: labTasks.filter(t => t !== task) });
    } else {
      setCompletedTasks({ ...completedTasks, [labId]: [...labTasks, task] });
    }
  };

  return (
    <div className="page-container max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Terminal className="text-emerald-500 w-8 h-8" />
        <h1 className="text-3xl font-bold">Lab Implementation Guides</h1>
      </div>

      <div className="space-y-6">
        {labs.map((lab) => (
          <div 
            key={lab.id} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              expandedLab === lab.id ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-gray-800 bg-gray-900/40 hover:border-gray-700'
            }`}
          >
            <button
              onClick={() => setExpandedLab(expandedLab === lab.id ? null : lab.id)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <div>
                <h2 className="text-xl font-bold mb-1">{lab.title}</h2>
                <p className="text-gray-400 text-sm line-clamp-1">{lab.objective}</p>
              </div>
              {expandedLab === lab.id ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
            </button>

            {expandedLab === lab.id && (
              <div className="px-6 pb-8 animate-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="space-y-6">
                    <section>
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-xs">
                        <Target size={14} /> Objective
                      </div>
                      <p className="text-gray-300 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                        {lab.objective}
                      </p>
                    </section>

                    <section>
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-xs">
                        <Map size={14} /> Topology
                      </div>
                      <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 border-dashed text-center">
                        <p className="text-gray-400 italic">"{lab.topologyDesc}"</p>
                        <div className="mt-4 p-4 border border-emerald-500/20 rounded bg-emerald-500/5 text-xs text-emerald-300">
                          Topology visualization placeholder
                        </div>
                      </div>
                    </section>
                  </div>

                  <section>
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-xs">
                      <CheckSquare size={14} /> Tasks Checklist
                    </div>
                    <div className="space-y-3">
                      {lab.tasks.map((task, idx) => (
                        <div 
                          key={idx}
                          onClick={() => toggleTask(lab.id, task)}
                          className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                            (completedTasks[lab.id] || []).includes(task)
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                              : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:border-gray-600'
                          }`}
                        >
                          <div className={`mt-1 w-5 h-5 rounded flex items-center justify-center border ${
                            (completedTasks[lab.id] || []).includes(task)
                              ? 'bg-emerald-500 border-emerald-500'
                              : 'border-gray-500'
                          }`}>
                            {(completedTasks[lab.id] || []).includes(task) && <CheckSquare size={14} className="text-white" />}
                          </div>
                          <span className="text-sm font-medium">{task}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabGuides;
