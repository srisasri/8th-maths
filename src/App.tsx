/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { ShapeLab } from './components/ShapeLab';
import { AngleSumExplorer } from './components/AngleSumExplorer';
import { DiagonalsComparison } from './components/DiagonalsComparison';
import { FamilyTree } from './components/FamilyTree';
import { SolvedExamples } from './components/SolvedExamples';
import { QuizSection } from './components/QuizSection';
import { RevisionCheatsheet } from './components/RevisionCheatsheet';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Award,
  Layers,
  Compass,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('shapes');

  const handlePrint = () => {
    // If not already on cheatsheet, navigate to cheatsheet then print
    if (activeTab !== 'cheatsheet') {
      setActiveTab('cheatsheet');
      setTimeout(() => {
        window.print();
      }, 250);
    } else {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Persistent Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPrint={handlePrint}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'shapes' && <ShapeLab />}
        {activeTab === 'angles' && <AngleSumExplorer />}
        {activeTab === 'diagonals' && <DiagonalsComparison />}
        {activeTab === 'family' && <FamilyTree />}
        {activeTab === 'problems' && <SolvedExamples />}
        {activeTab === 'quiz' && <QuizSection />}
        {activeTab === 'cheatsheet' && (
          <RevisionCheatsheet onPrint={handlePrint} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <span className="font-semibold text-slate-700">
              Class 8 Mathematics Guide: Understanding Quadrilaterals
            </span>
            <span>(NCERT Chapter 3 & 4)</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('shapes')}
              className="hover:text-indigo-600 transition cursor-pointer"
            >
              Shapes
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveTab('angles')}
              className="hover:text-indigo-600 transition cursor-pointer"
            >
              Angle Sum 360°
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveTab('diagonals')}
              className="hover:text-indigo-600 transition cursor-pointer"
            >
              Diagonals
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveTab('quiz')}
              className="hover:text-indigo-600 transition cursor-pointer font-medium text-indigo-600"
            >
              Take Quiz
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
