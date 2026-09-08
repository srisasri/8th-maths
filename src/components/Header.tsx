import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, Printer } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onPrint,
}) => {
  const tabs = [
    { id: 'shapes', label: 'Shape Explorer', icon: '🔷' },
    { id: 'angles', label: 'Angle Sum & Solver', icon: '📐' },
    { id: 'diagonals', label: 'Diagonals Matrix', icon: '⚖️' },
    { id: 'family', label: 'Family Tree', icon: '🌳' },
    { id: 'problems', label: 'Solved Problems', icon: '💡' },
    { id: 'quiz', label: 'Exam Quiz', icon: '🎯' },
    { id: 'cheatsheet', label: 'Quick Revision', icon: '📋' },
  ];

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50 shadow-md">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-inner">
            <BookOpen className="w-5 h-5 text-indigo-100" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white">
                Quadrilaterals Guide
              </h1>
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold px-2 py-0.5 rounded-full">
                Class 8 Math
              </span>
              <span className="hidden sm:inline-flex bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold px-2 py-0.5 rounded-full items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> NCERT Aligned
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Understanding Quadrilaterals & Practical Geometry • Concepts, Proofs, Formulas & Tricks
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="print-sheet-btn"
            onClick={onPrint}
            className="flex items-center gap-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded-lg border border-slate-700 transition cursor-pointer"
            title="Print or save revision cheat sheet"
          >
            <Printer className="w-3.5 h-3.5 text-slate-300" />
            <span>Print Sheet</span>
          </button>
          <div className="hidden lg:flex items-center text-xs text-amber-300 bg-amber-950/40 border border-amber-800/40 px-3 py-2 rounded-lg gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Angle Sum = 360° always!</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 overflow-x-auto">
        <nav className="flex space-x-1 py-2 min-w-max" aria-label="Tabs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
