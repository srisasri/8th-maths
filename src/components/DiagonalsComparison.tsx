import React, { useState } from 'react';
import { DIAGONAL_COMPARISON_DATA } from '../data/quadrilateralsData';
import { Check, X, ShieldAlert, Sparkles, Filter } from 'lucide-react';

export const DiagonalsComparison: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredData = DIAGONAL_COMPARISON_DATA.filter((item) => {
    if (activeFilter === 'bisect') return item.bisect;
    if (activeFilter === 'equal') return item.equal;
    if (activeFilter === 'perpendicular') return item.perpendicular;
    if (activeFilter === 'all_props')
      return item.bisect && item.equal && item.perpendicular && item.bisectAngles;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Intro */}
      <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-2 py-0.5 rounded">
            Most Tested Exam Topic
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Diagonals Master Comparison Matrix
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Diagonal properties are the #1 source of exam trick questions in Class 8. Master this table to get full marks on True/False and MCQ questions!
          </p>
        </div>
        <div className="bg-white border border-purple-200 px-4 py-3 rounded-xl shadow-xs text-xs text-purple-900 space-y-1">
          <span className="font-bold block text-purple-950">Memory Rule:</span>
          <span>• Square has EVERYTHING</span>
          <span>• Rhombus = 90° Bisector</span>
          <span>• Rectangle = Equal Length</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Filter by:
        </span>
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Quadrilaterals (6)
        </button>
        <button
          onClick={() => setActiveFilter('bisect')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
            activeFilter === 'bisect'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Diagonals Bisect Each Other
        </button>
        <button
          onClick={() => setActiveFilter('equal')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
            activeFilter === 'equal'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Diagonals are Equal in Length
        </button>
        <button
          onClick={() => setActiveFilter('perpendicular')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
            activeFilter === 'perpendicular'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Diagonals are Perpendicular (90°)
        </button>
        <button
          onClick={() => setActiveFilter('all_props')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
            activeFilter === 'all_props'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Has ALL 4 Properties (Square)
        </button>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-800 text-white font-semibold">
                <th className="py-3 px-4 sm:px-6">Quadrilateral</th>
                <th className="py-3 px-3 text-center">
                  Bisect Each Other?
                </th>
                <th className="py-3 px-3 text-center">
                  Equal in Length?
                </th>
                <th className="py-3 px-3 text-center">
                  Perpendicular (90°)?
                </th>
                <th className="py-3 px-3 text-center">
                  Bisect Vertex Angles?
                </th>
                <th className="py-3 px-4 hidden md:table-cell">
                  Key Exam Takeaway
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-slate-50 transition ${
                    row.shape === 'Square' ? 'bg-amber-50/50 font-medium' : ''
                  }`}
                >
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 flex items-center gap-2">
                    <span>{row.shape}</span>
                    {row.shape === 'Square' && (
                      <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-bold uppercase">
                        Master
                      </span>
                    )}
                  </td>

                  {/* Bisect each other */}
                  <td className="py-3.5 px-3 text-center">
                    {row.bisect ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                        <Check className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                        <X className="w-4 h-4" />
                      </span>
                    )}
                  </td>

                  {/* Equal in length */}
                  <td className="py-3.5 px-3 text-center">
                    {row.equal ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                        <Check className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                        <X className="w-4 h-4" />
                      </span>
                    )}
                  </td>

                  {/* Perpendicular at 90 */}
                  <td className="py-3.5 px-3 text-center">
                    {row.perpendicular ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                        <Check className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                        <X className="w-4 h-4" />
                      </span>
                    )}
                  </td>

                  {/* Bisect vertex angles */}
                  <td className="py-3.5 px-3 text-center">
                    {row.bisectAngles ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                        <Check className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                        <X className="w-4 h-4" />
                      </span>
                    )}
                  </td>

                  {/* Quick Note */}
                  <td className="py-3.5 px-4 hidden md:table-cell text-xs text-slate-600">
                    {row.quickNote}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4 Critical Rules Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 text-indigo-700">
            <Sparkles className="w-4 h-4" />
            <span>Question: Whose diagonals are equal in length?</span>
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Only <strong className="text-slate-900">Rectangle</strong> and{' '}
            <strong className="text-slate-900">Square</strong> (and Isosceles Trapezium). Parallelogram and Rhombus diagonals are NOT equal!
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 text-indigo-700">
            <Sparkles className="w-4 h-4" />
            <span>Question: Whose diagonals intersect at 90° (perpendicular)?</span>
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Only <strong className="text-slate-900">Rhombus</strong>,{' '}
            <strong className="text-slate-900">Square</strong>, and{' '}
            <strong className="text-slate-900">Kite</strong>. Rectangle and Parallelogram diagonals do NOT meet at 90°!
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 text-indigo-700">
            <Sparkles className="w-4 h-4" />
            <span>Question: Whose diagonals bisect each other?</span>
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            ALL members of the <strong className="text-slate-900">Parallelogram Family</strong> (Parallelogram, Rectangle, Rhombus, Square). Trapezium does NOT bisect. Kite only has one diagonal bisected by the other.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 text-amber-700">
            <ShieldAlert className="w-4 h-4" />
            <span>Common Exam Trap in NCERT Class 8</span>
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            "Name the quadrilateral whose diagonals are perpendicular bisectors of each other."
            <br />
            <strong>Answer: Rhombus and Square.</strong> (Writing only rhombus or only square loses half marks!)
          </p>
        </div>
      </div>
    </div>
  );
};
