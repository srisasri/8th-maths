import React from 'react';
import { GOLDEN_RULES_CLASS_8, QUADRILATERALS } from '../data/quadrilateralsData';
import {
  Printer,
  Sparkles,
  Award,
  CheckCircle2,
  BookMarked,
  ShieldCheck,
} from 'lucide-react';

interface RevisionCheatsheetProps {
  onPrint: () => void;
}

export const RevisionCheatsheet: React.FC<RevisionCheatsheetProps> = ({
  onPrint,
}) => {
  return (
    <div className="space-y-8 print:space-y-4">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 px-2.5 py-1 rounded border border-indigo-800">
            Last-Minute Exam Prep
          </span>
          <h2 className="text-xl sm:text-2xl font-black mt-2">
            Class 8 Quadrilaterals Master Cheatsheet
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Everything you need for full marks in NCERT Chapter 3 & 4: key theorems, all formulas, diagonal rules, and classification secrets.
          </p>
        </div>
        <button
          onClick={onPrint}
          className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow transition cursor-pointer text-sm shrink-0"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Printable Header for print mode only */}
      <div className="hidden print:block border-b-2 border-slate-900 pb-3 mb-4">
        <h1 className="text-2xl font-black text-slate-900">
          Class 8 Mathematics: Understanding Quadrilaterals Cheatsheet
        </h1>
        <p className="text-xs text-slate-600">
          CBSE / ICSE NCERT Syllabus • Complete Quick Revision Guide
        </p>
      </div>

      {/* 6 Golden Rules Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs print:border-slate-300 print:p-4">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>The 6 Golden Rules Every 8th Grader Must Know</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GOLDEN_RULES_CLASS_8.map((rule, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5"
            >
              <div className="flex items-center justify-between text-[11px] font-bold text-indigo-600">
                <span>Rule #{idx + 1}</span>
                <span className="text-slate-400 font-medium">
                  {rule.category}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{rule.rule}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {rule.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Comprehensive Formulas Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden print:border-slate-300">
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-indigo-600" />
            <span>Complete Formulas Reference</span>
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white font-semibold">
              <tr>
                <th className="py-3 px-4">Figure</th>
                <th className="py-3 px-4">Area Formula</th>
                <th className="py-3 px-4">Perimeter</th>
                <th className="py-3 px-4">Special Property / Diagonal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {QUADRILATERALS.map((q) => (
                <tr key={q.id} className="hover:bg-slate-50 transition">
                  <td className="py-3 px-4 font-bold text-slate-900">
                    {q.name}
                  </td>
                  <td className="py-3 px-4 font-mono text-indigo-900 font-medium">
                    {q.formulas.area}
                  </td>
                  <td className="py-3 px-4 text-slate-700">
                    {q.formulas.perimeter}
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-600">
                    {q.formulas.diagonal || q.diagonals.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Diagonals Quick Memory Matrix */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 print:border-slate-300 print:p-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-purple-600" />
          <span>Diagonals Memory Grid</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3.5 space-y-1">
            <span className="font-bold text-indigo-950 block text-sm">
              Bisect Each Other
            </span>
            <p className="text-slate-700">
              <strong>All Parallelograms:</strong>
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-0.5">
              <li>Parallelogram</li>
              <li>Rectangle</li>
              <li>Rhombus</li>
              <li>Square</li>
            </ul>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 space-y-1">
            <span className="font-bold text-emerald-950 block text-sm">
              Equal in Length
            </span>
            <p className="text-slate-700">
              <strong>Only Shapes with 90° angles:</strong>
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-0.5">
              <li>Rectangle (AC = BD)</li>
              <li>Square (AC = BD)</li>
              <li>(Also Isosceles Trapezium)</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3.5 space-y-1">
            <span className="font-bold text-purple-950 block text-sm">
              Perpendicular (90°)
            </span>
            <p className="text-slate-700">
              <strong>Shapes with equal adjacent sides:</strong>
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-0.5">
              <li>Rhombus (AC ⊥ BD)</li>
              <li>Square (AC ⊥ BD)</li>
              <li>Kite (AC ⊥ BD)</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 space-y-1">
            <span className="font-bold text-amber-950 block text-sm">
              Perpendicular Bisectors
            </span>
            <p className="text-slate-700">
              <strong>Both 90° and Bisect:</strong>
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-0.5">
              <li>Rhombus</li>
              <li>Square</li>
            </ul>
            <span className="text-[11px] text-amber-800 font-bold block pt-1">
              (Common NCERT 1-mark question)
            </span>
          </div>
        </div>
      </div>

      {/* Practical Geometry: 5 Elements */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700">
        <h4 className="font-bold text-slate-900 text-sm mb-1">
          Practical Geometry (NCERT Chapter 4): Constructing Quadrilaterals
        </h4>
        <p className="leading-relaxed">
          To uniquely construct a quadrilateral, exactly <strong>5 independent measurements</strong> are required:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2 font-medium">
          <div className="bg-white p-2 rounded border border-slate-200">
            1. Four sides and one diagonal (SSS & SSS)
          </div>
          <div className="bg-white p-2 rounded border border-slate-200">
            2. Two diagonals and three sides
          </div>
          <div className="bg-white p-2 rounded border border-slate-200">
            3. Two adjacent sides and three angles
          </div>
          <div className="bg-white p-2 rounded border border-slate-200">
            4. Three sides and two included angles
          </div>
          <div className="bg-white p-2 rounded border border-slate-200">
            5. Other special properties (e.g. square side)
          </div>
        </div>
      </div>
    </div>
  );
};
