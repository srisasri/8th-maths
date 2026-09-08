import React, { useState } from 'react';
import { SOLVED_PROBLEMS } from '../data/quadrilateralsData';
import {
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Award,
} from 'lucide-react';

export const SolvedExamples: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string>(SOLVED_PROBLEMS[0].id);

  const filtered = SOLVED_PROBLEMS.filter(
    (p) => filterType === 'all' || p.type === filterType
  );

  return (
    <div className="space-y-6">
      {/* Intro banner */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
            NCERT Class 8 Solved Examples
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Step-by-Step Textbook & Board Exam Problems
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Every problem features step-by-step Class 8 presentation format: Given, To Find, Formula, Working, and Final Answer.
          </p>
        </div>
        <div className="bg-white border border-amber-200 px-3 py-2 rounded-xl text-xs text-amber-900 shadow-xs flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Full marks presentation technique!</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilterType('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
            filterType === 'all'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Problems ({SOLVED_PROBLEMS.length})
        </button>
        <button
          onClick={() => setFilterType('angles')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
            filterType === 'angles'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Angle Sum & Ratios
        </button>
        <button
          onClick={() => setFilterType('diagonals')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
            filterType === 'diagonals'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Rhombus & Diagonals (HOTS)
        </button>
        <button
          onClick={() => setFilterType('sides')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
            filterType === 'sides'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Perimeter & Sides
        </button>
      </div>

      {/* Problem Cards List */}
      <div className="space-y-4">
        {filtered.map((problem, index) => {
          const isExpanded = expandedId === problem.id;
          return (
            <div
              key={problem.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition"
            >
              {/* Card Header (clickable) */}
              <button
                id={`problem-toggle-${problem.id}`}
                onClick={() => setExpandedId(isExpanded ? '' : problem.id)}
                className="w-full text-left p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3 hover:bg-slate-50/70 transition cursor-pointer"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                      Example {index + 1}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                        problem.difficulty === 'Basic'
                          ? 'bg-emerald-100 text-emerald-800'
                          : problem.difficulty === 'Standard'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {problem.difficulty}
                    </span>
                    <span className="text-xs text-slate-400">
                      {problem.curriculumRef}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {problem.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-slate-400 shrink-0 mt-1 sm:mt-0">
                  <span className="text-xs hidden sm:inline text-slate-500">
                    {isExpanded ? 'Hide Solution' : 'View Solution'}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Problem statement */}
              <div className="px-4 sm:px-5 pb-3">
                <p className="text-sm font-medium text-slate-800 bg-slate-50/90 p-3 rounded-lg border border-slate-200/80">
                  {problem.problemText}
                </p>
              </div>

              {/* Collapsible Solution Section */}
              {isExpanded && (
                <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-slate-100 space-y-4 text-xs sm:text-sm">
                  {/* Given & To Find */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-600 block text-xs uppercase mb-1">
                        Given:
                      </span>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                        {problem.given.map((g, i) => (
                          <li key={i}>{g}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-600 block text-xs uppercase mb-1">
                        To Find:
                      </span>
                      <p className="text-slate-800 font-semibold">{problem.toFind}</p>
                    </div>
                  </div>

                  {/* Step by step working */}
                  <div className="space-y-2">
                    <span className="font-bold text-slate-700 block text-xs uppercase">
                      Step-by-Step Working:
                    </span>
                    <div className="space-y-2">
                      {problem.solutionSteps.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-2.5 rounded-lg bg-indigo-50/30 border border-indigo-100/80 text-slate-800"
                        >
                          <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final answer highlight */}
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-emerald-900 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Result: {problem.finalAnswer}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
