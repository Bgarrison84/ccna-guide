import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { flashcards } from '../data/flashcards';
import { Layers, ChevronLeft, ChevronRight, RotateCw, Filter } from 'lucide-react';

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filter, setFilter] = useState<'All' | 'Ports' | 'Protocols' | 'Acronyms' | 'Commands'>('All');

  const filteredCards = filter === 'All' 
    ? flashcards 
    : flashcards.filter(card => card.category === filter);

  const currentCard = filteredCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleFilterChange = (newFilter: any) => {
    setFilter(newFilter);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="page-container max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <Layers className="text-purple-500 w-8 h-8" />
          <h1 className="text-3xl font-bold">Study Flashcards</h1>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <Filter size={18} className="text-gray-400 mr-1" />
          {['All', 'Ports', 'Protocols', 'Acronyms', 'Commands'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                filter === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-[400px] w-full perspective-1000 mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="w-full h-full relative preserve-3d transition-transform duration-500"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden bg-gray-900 border-2 border-purple-500/30 rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-xl shadow-purple-500/5">
                <span className="absolute top-6 left-6 px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-bold uppercase tracking-widest">
                  {currentCard.category}
                </span>
                <h2 className="text-3xl font-bold leading-tight">{currentCard.question}</h2>
                <div className="mt-8 flex items-center gap-2 text-gray-500 text-sm">
                  <RotateCw size={14} /> Click to reveal answer
                </div>
              </div>

              {/* Back */}
              <div 
                className="absolute inset-0 backface-hidden bg-purple-900/20 border-2 border-purple-500 rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-2xl shadow-purple-500/10"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <span className="absolute top-6 left-6 px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-bold uppercase tracking-widest">
                  Answer
                </span>
                <p className="text-4xl font-bold text-purple-100">{currentCard.answer}</p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between gap-6">
        <button
          onClick={handlePrev}
          className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-2xl transition-all border border-gray-700"
        >
          <ChevronLeft size={20} /> Previous
        </button>
        <div className="text-gray-400 font-medium bg-gray-800/50 px-6 py-4 rounded-2xl border border-gray-700">
          {currentIndex + 1} / {filteredCards.length}
        </div>
        <button
          onClick={handleNext}
          className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white py-4 rounded-2xl transition-all shadow-lg shadow-purple-500/20"
        >
          Next <ChevronRight size={20} />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}} />
    </div>
  );
};

export default Flashcards;
