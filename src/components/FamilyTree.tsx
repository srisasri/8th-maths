import React, { useState } from 'react';
import { GitFork, Check, X, HelpCircle, ArrowDown, ChevronRight } from 'lucide-react';

export const FamilyTree: React.FC = () => {
  // True / False interactive tester state
  const [selectedStatementIndex, setSelectedStatementIndex] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);

  const STATEMENTS = [
    {
      stmt: 'All squares are rectangles.',
      isTrue: true,
      reason:
        'TRUE: A rectangle is a parallelogram with four 90° angles. A square has four 90° angles and opposite sides parallel, so it meets every condition of a rectangle.',
    },
    {
      stmt: 'All rectangles are squares.',
      isTrue: false,
      reason:
        'FALSE: A square requires all four sides to be equal in length. In a general rectangle, adjacent sides may have different lengths.',
    },
    {
      stmt: 'All squares are rhombuses.',
      isTrue: true,
      reason:
        'TRUE: A rhombus is a parallelogram with all four sides equal. A square has all four sides equal, so it is always a rhombus.',
    },
    {
      stmt: 'All rhombuses are squares.',
      isTrue: false,
      reason:
        'FALSE: A rhombus does not necessarily have 90° right angles. Only a rhombus with 90° angles becomes a square.',
    },
    {
      stmt: 'All rhombuses are parallelograms.',
      isTrue: true,
      reason:
        'TRUE: A rhombus has both pairs of opposite sides parallel and equal, which is the definition of a parallelogram.',
    },
    {
      stmt: 'All parallelograms are trapeziums.',
      isTrue: true,
      reason:
        'TRUE: A trapezium requires at least one pair of opposite sides to be parallel. A parallelogram has two pairs parallel, so it fulfills the requirement.',
    },
    {
      stmt: 'All kites are parallelograms.',
      isTrue: false,
      reason:
        'FALSE: In a kite, adjacent sides are equal, but opposite sides are generally not parallel or equal.',
    },
    {
      stmt: 'All rhombuses are kites.',
      isTrue: true,
      reason:
        'TRUE: A kite has two pairs of equal adjacent sides. In a rhombus, all four sides are equal, so adjacent sides are definitely equal.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
            Taxonomy & Hierarchy
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Quadrilateral Family Tree & The "All vs Some" Rules
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Properties flow down the hierarchy! A shape lower in the tree inherits ALL properties of its parents above it.
          </p>
        </div>
        <div className="bg-white border border-blue-200 px-3 py-2 rounded-xl text-xs text-blue-900 shadow-xs">
          <strong>Hierarchy Rule:</strong> Square sits at the pinnacle of inheritance!
        </div>
      </div>

      {/* Visual Hierarchy Diagram */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <GitFork className="w-5 h-5 text-indigo-600" />
          <span>Visual Classification Flowchart</span>
        </h3>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Level 0: Quadrilateral */}
          <div className="flex justify-center">
            <div className="bg-slate-900 text-white px-6 py-3 rounded-xl shadow-md text-center border-2 border-slate-700">
              <span className="text-xs text-slate-400 uppercase font-bold block">
                Any 4-Sided Closed Polygon
              </span>
              <span className="text-base font-extrabold tracking-wide">
                QUADRILATERAL
              </span>
              <span className="text-[11px] text-slate-300 block">
                Sum of angles = 360°
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-5 h-5 text-slate-400" />
          </div>

          {/* Level 1: Split into 3 branches */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Branch 1: Kite */}
            <div className="bg-teal-50 border-2 border-teal-300 rounded-xl p-4 text-center shadow-xs">
              <span className="text-[10px] font-bold uppercase text-teal-800 bg-teal-200/80 px-2 py-0.5 rounded">
                Adjacent Equal Branch
              </span>
              <h4 className="text-base font-bold text-teal-950 mt-1">Kite</h4>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                2 pairs of equal adjacent sides. Diagonals intersect at 90°.
              </p>
            </div>

            {/* Branch 2: Trapezium */}
            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-4 text-center shadow-xs">
              <span className="text-[10px] font-bold uppercase text-indigo-800 bg-indigo-200/80 px-2 py-0.5 rounded">
                At least 1 Parallel Pair
              </span>
              <h4 className="text-base font-bold text-indigo-950 mt-1">
                Trapezium
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                One pair of parallel opposite sides. Co-interior angles = 180°.
              </p>
            </div>

            {/* Sub-branch: Isosceles Trapezium */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center shadow-xs">
              <span className="text-[10px] font-bold uppercase text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                Special Case
              </span>
              <h4 className="text-sm font-bold text-slate-800 mt-1">
                Isosceles Trapezium
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Non-parallel sides are equal; diagonals are equal in length.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-5 h-5 text-slate-400" />
          </div>

          {/* Level 2: Parallelogram */}
          <div className="flex justify-center">
            <div className="bg-indigo-600 text-white px-8 py-3.5 rounded-xl shadow-md text-center max-w-md w-full border border-indigo-700">
              <span className="text-[10px] text-indigo-200 uppercase font-bold block">
                Both Pairs Parallel & Equal
              </span>
              <span className="text-lg font-extrabold tracking-wide">
                PARALLELOGRAM
              </span>
              <span className="text-xs text-indigo-100 block mt-0.5">
                Opposite angles equal • Adjacent angles supplementary (180°) • Diagonals bisect
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-5 h-5 text-slate-400" />
          </div>

          {/* Level 3: Rectangle & Rhombus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {/* Rectangle */}
            <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-4 text-center shadow-xs">
              <span className="text-[10px] font-bold uppercase text-blue-800 bg-blue-200 px-2 py-0.5 rounded">
                Equiangular
              </span>
              <h4 className="text-base font-bold text-blue-950 mt-1">
                Rectangle
              </h4>
              <p className="text-xs text-slate-700 mt-1">
                All 4 angles = 90°
                <br />
                <span className="font-semibold text-blue-800">
                  Diagonals are EQUAL in length!
                </span>
              </p>
            </div>

            {/* Rhombus */}
            <div className="bg-purple-50 border-2 border-purple-400 rounded-xl p-4 text-center shadow-xs">
              <span className="text-[10px] font-bold uppercase text-purple-800 bg-purple-200 px-2 py-0.5 rounded">
                Equilateral
              </span>
              <h4 className="text-base font-bold text-purple-950 mt-1">
                Rhombus
              </h4>
              <p className="text-xs text-slate-700 mt-1">
                All 4 sides are equal
                <br />
                <span className="font-semibold text-purple-800">
                  Diagonals meet at 90° (perpendicular)!
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-5 h-5 text-slate-400" />
          </div>

          {/* Level 4: Square (The ultimate child) */}
          <div className="flex justify-center">
            <div className="bg-amber-100 border-2 border-amber-400 text-amber-950 px-8 py-4 rounded-2xl shadow-md text-center max-w-md w-full">
              <span className="text-[10px] text-amber-800 uppercase font-black tracking-wider block">
                👑 Ultimate Regular Quadrilateral
              </span>
              <span className="text-xl font-black tracking-wide text-amber-950">
                SQUARE
              </span>
              <p className="text-xs text-amber-900 mt-1 font-medium">
                Rectangle + Rhombus combined!
                <br />
                All 4 sides equal • All 4 angles 90° • Diagonals equal & bisect at 90°
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Interactive NCERT True / False Challenge */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              <span>Interactive True / False Challenge (NCERT Ex 3.4 Q1)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Click a statement to test your conceptual clarity on classification rules!
            </p>
          </div>
          <span className="text-xs text-indigo-600 bg-indigo-50 font-medium px-2.5 py-1 rounded-full">
            8 Standard Board Exam Questions
          </span>
        </div>

        <div className="space-y-3">
          {STATEMENTS.map((item, idx) => {
            const isSelected = selectedStatementIndex === idx;
            return (
              <div
                key={idx}
                className={`p-3.5 sm:p-4 rounded-xl border transition ${
                  isSelected
                    ? 'border-indigo-400 bg-indigo-50/40 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-bold text-slate-400 mt-0.5">
                      Q{idx + 1}.
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      "{item.stmt}"
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        setSelectedStatementIndex(idx);
                        setUserAnswer(true);
                      }}
                      className={`px-3 py-1 text-xs font-bold rounded-lg border transition cursor-pointer ${
                        isSelected && userAnswer === true
                          ? item.isTrue
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'bg-rose-600 text-white border-rose-600'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      True
                    </button>
                    <button
                      onClick={() => {
                        setSelectedStatementIndex(idx);
                        setUserAnswer(false);
                      }}
                      className={`px-3 py-1 text-xs font-bold rounded-lg border transition cursor-pointer ${
                        isSelected && userAnswer === false
                          ? !item.isTrue
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'bg-rose-600 text-white border-rose-600'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      False
                    </button>
                  </div>
                </div>

                {/* Feedback expansion */}
                {isSelected && userAnswer !== null && (
                  <div
                    className={`mt-3 pt-3 border-t text-xs leading-relaxed ${
                      userAnswer === item.isTrue
                        ? 'border-emerald-200 text-emerald-950 bg-emerald-50/50 p-2.5 rounded-lg'
                        : 'border-rose-200 text-rose-950 bg-rose-50/50 p-2.5 rounded-lg'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5 mb-1">
                      {userAnswer === item.isTrue ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-800">
                            Correct! You nailed it.
                          </span>
                        </>
                      ) : (
                        <>
                          <X className="w-4 h-4 text-rose-600" />
                          <span className="text-rose-800">
                            Incorrect. The correct answer is{' '}
                            <strong>{item.isTrue ? 'TRUE' : 'FALSE'}</strong>.
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-slate-700">{item.reason}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
