import React, { useState } from 'react';
import {
  Calculator,
  Compass,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

export const AngleSumExplorer: React.FC = () => {
  // State for 3 known angles solver
  const [angleA, setAngleA] = useState<number>(85);
  const [angleB, setAngleB] = useState<number>(115);
  const [angleC, setAngleC] = useState<number>(70);

  // Preset ratio solver
  const [ratioStr, setRatioStr] = useState<string>('3 : 5 : 9 : 13');
  const [ratioSolved, setRatioSolved] = useState<boolean>(false);

  // Exterior angle calculator
  const [polygonSides, setPolygonSides] = useState<number>(8);

  // Calculation for 4th angle
  const sumKnown = angleA + angleB + angleC;
  const angleD = 360 - sumKnown;
  const isValidQuadrilateral = sumKnown < 360 && angleD > 0;

  // Preset scenarios
  const applyPreset = (a: number, b: number, c: number) => {
    setAngleA(a);
    setAngleB(b);
    setAngleC(c);
  };

  // Ratio calculation logic
  const parseRatio = () => {
    const parts = ratioStr
      .split(':')
      .map((p) => parseFloat(p.trim()))
      .filter((n) => !isNaN(n) && n > 0);
    if (parts.length !== 4) return null;
    const sumParts = parts.reduce((a, b) => a + b, 0);
    const unitValue = 360 / sumParts;
    const calculatedAngles = parts.map((p) => +(p * unitValue).toFixed(1));
    return { parts, sumParts, unitValue: +unitValue.toFixed(2), calculatedAngles };
  };

  const ratioResult = parseRatio();

  // Exterior angle logic for regular n-gon
  const exteriorAngle = +(360 / polygonSides).toFixed(2);
  const interiorAngle = +(180 - exteriorAngle).toFixed(2);

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
            Fundamental Theorem
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Angle Sum Properties & Interactive Solvers
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Understand why all quadrilaterals add up to 360°, solve for missing angles, and explore exterior angle relationships.
          </p>
        </div>
        <div className="bg-white border border-emerald-200 px-4 py-3 rounded-xl shadow-xs text-center">
          <span className="text-xs font-bold text-slate-500 block uppercase">
            Golden Formula
          </span>
          <span className="text-lg font-extrabold text-emerald-700">
            ∠A + ∠B + ∠C + ∠D = 360°
          </span>
        </div>
      </div>

      {/* SECTION 1: Visual Proof by Splitting into 2 Triangles */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-indigo-600" />
              <span>Visual Proof: Why is the Angle Sum 360°?</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Standard NCERT proof by triangulation using 1 diagonal
            </p>
          </div>
          <span className="text-xs bg-indigo-50 text-indigo-700 font-semibold px-2.5 py-1 rounded-full border border-indigo-100">
            2 Triangles = 2 × 180° = 360°
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Visual SVG showing diagonal AC splitting ABCD */}
          <div className="md:col-span-5 bg-slate-50 rounded-xl p-4 border border-slate-200 flex items-center justify-center">
            <svg viewBox="0 0 320 240" className="w-full max-w-xs select-none">
              {/* Triangle 1 fill (ABC) */}
              <polygon
                points="50,180 270,180 180,40"
                className="fill-blue-100/60 stroke-blue-500 stroke-2"
              />
              {/* Triangle 2 fill (ADC) */}
              <polygon
                points="50,180 180,40 40,70"
                className="fill-amber-100/60 stroke-amber-500 stroke-2"
              />

              {/* Diagonal AC line */}
              <line
                x1="50"
                y1="180"
                x2="180"
                y2="40"
                stroke="#6366f1"
                strokeWidth="2.5"
                strokeDasharray="4,4"
              />

              {/* Vertex Labels */}
              <circle cx="50" cy="180" r="4" fill="#1e293b" />
              <text x="35" y="200" className="font-bold text-xs fill-slate-800">
                A
              </text>

              <circle cx="270" cy="180" r="4" fill="#1e293b" />
              <text x="280" y="195" className="font-bold text-xs fill-slate-800">
                B
              </text>

              <circle cx="180" cy="40" r="4" fill="#1e293b" />
              <text x="180" y="28" className="font-bold text-xs fill-slate-800">
                C
              </text>

              <circle cx="40" cy="70" r="4" fill="#1e293b" />
              <text x="25" y="70" className="font-bold text-xs fill-slate-800">
                D
              </text>

              {/* Triangle annotations */}
              <text
                x="160"
                y="140"
                className="font-bold text-xs fill-blue-800"
                textAnchor="middle"
              >
                △ABC (180°)
              </text>
              <text
                x="85"
                y="105"
                className="font-bold text-xs fill-amber-800"
                textAnchor="middle"
              >
                △ADC (180°)
              </text>

              <text
                x="120"
                y="90"
                className="font-bold text-[10px] fill-indigo-700 bg-white"
              >
                Diagonal AC
              </text>
            </svg>
          </div>

          {/* Proof Step breakdown */}
          <div className="md:col-span-7 space-y-2.5 text-xs sm:text-sm text-slate-700">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block text-xs uppercase mb-1">
                Step 1: Divide by Diagonal
              </span>
              Draw diagonal <span className="font-semibold text-indigo-700">AC</span>. This divides quadrilateral ABCD into two triangles: <span className="font-semibold text-blue-700">△ABC</span> and <span className="font-semibold text-amber-700">△ADC</span>.
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block text-xs uppercase mb-1">
                Step 2: Triangle Angle Sum
              </span>
              By triangle angle sum theorem:
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-600 text-xs">
                <li>In △ABC: ∠CAB + ∠B + ∠BCA = 180°</li>
                <li>In △ADC: ∠CAD + ∠D + ∠ACD = 180°</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200 text-emerald-950 font-medium">
              <span className="font-bold text-emerald-900 block text-xs uppercase mb-1">
                Step 3: Combine All Angles
              </span>
              Adding both equations gives:
              <div className="font-mono text-xs sm:text-sm text-emerald-800 mt-1 font-semibold">
                (∠CAB + ∠CAD) + ∠B + (∠BCA + ∠ACD) + ∠D = 180° + 180° = 360°
              </div>
              <div className="mt-1 text-xs text-emerald-700">
                Therefore, <span className="font-bold">∠A + ∠B + ∠C + ∠D = 360°</span>. (Proved!)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Interactive Missing Angle Calculator */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-indigo-600" />
              <span>Missing Angle Solver (Find 4th Angle)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Enter any 3 angles or pick a quick textbook preset to see step-by-step Class 8 solution!
            </p>
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-medium mr-1">Presets:</span>
            <button
              onClick={() => applyPreset(50, 130, 120)}
              className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition cursor-pointer"
            >
              50°, 130°, 120°
            </button>
            <button
              onClick={() => applyPreset(90, 90, 90)}
              className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition cursor-pointer"
            >
              All 90° (Square/Rect)
            </button>
            <button
              onClick={() => applyPreset(110, 70, 110)}
              className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition cursor-pointer"
            >
              Parallelogram
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {/* Angle A */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Angle ∠A
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="357"
                    value={angleA}
                    onChange={(e) => setAngleA(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <span className="absolute right-3 top-2 text-slate-400 text-sm">
                    °
                  </span>
                </div>
              </div>

              {/* Angle B */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Angle ∠B
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="357"
                    value={angleB}
                    onChange={(e) => setAngleB(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <span className="absolute right-3 top-2 text-slate-400 text-sm">
                    °
                  </span>
                </div>
              </div>

              {/* Angle C */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Angle ∠C
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="357"
                    value={angleC}
                    onChange={(e) => setAngleC(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <span className="absolute right-3 top-2 text-slate-400 text-sm">
                    °
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Angle Balance Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs font-medium text-slate-600">
                <span>Sum of 3 angles: {sumKnown}°</span>
                <span>Max: 360°</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
                <div
                  style={{ width: `${Math.min(100, (angleA / 360) * 100)}%` }}
                  className="bg-indigo-500 h-full"
                  title={`∠A: ${angleA}°`}
                />
                <div
                  style={{ width: `${Math.min(100, (angleB / 360) * 100)}%` }}
                  className="bg-blue-500 h-full"
                  title={`∠B: ${angleB}°`}
                />
                <div
                  style={{ width: `${Math.min(100, (angleC / 360) * 100)}%` }}
                  className="bg-teal-500 h-full"
                  title={`∠C: ${angleC}°`}
                />
                {isValidQuadrilateral && (
                  <div
                    style={{ width: `${Math.min(100, (angleD / 360) * 100)}%` }}
                    className="bg-amber-500 h-full"
                    title={`∠D (Unknown): ${angleD}°`}
                  />
                )}
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span> ∠A: {angleA}°
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> ∠B: {angleB}°
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-teal-500"></span> ∠C: {angleC}°
                </span>
                <span className="flex items-center gap-1 font-bold text-amber-700">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> ∠D: {angleD}°
                </span>
              </div>
            </div>

            {/* Validation warning if sum >= 360 */}
            {!isValidQuadrilateral && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs p-3 rounded-lg">
                ⚠️ <strong>Invalid Angles!</strong> The sum of three angles ({sumKnown}°) must be less than 360° to form a quadrilateral.
              </div>
            )}
          </div>

          {/* Step-by-step Solution Display (Exam Format) */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Class 8 Exam Working Steps
            </div>

            {isValidQuadrilateral ? (
              <div className="space-y-2 text-xs sm:text-sm">
                <p className="text-slate-700">
                  <strong>By Angle Sum Property of a Quadrilateral:</strong>
                </p>
                <div className="bg-white p-2.5 rounded-md border border-slate-200 font-mono text-xs text-indigo-900">
                  ∠A + ∠B + ∠C + ∠D = 360°
                </div>
                <p className="text-slate-700">Substituting given values:</p>
                <div className="bg-white p-2.5 rounded-md border border-slate-200 font-mono text-xs text-slate-800">
                  {angleA}° + {angleB}° + {angleC}° + ∠D = 360°
                </div>
                <div className="bg-white p-2.5 rounded-md border border-slate-200 font-mono text-xs text-slate-800">
                  {sumKnown}° + ∠D = 360°
                </div>
                <div className="bg-white p-2.5 rounded-md border border-slate-200 font-mono text-xs text-slate-800">
                  ∠D = 360° - {sumKnown}° = <strong>{angleD}°</strong>
                </div>

                <div className="mt-3 bg-emerald-100/80 border border-emerald-300 text-emerald-950 p-3 rounded-lg font-semibold flex items-center justify-between">
                  <span>Answer: Fourth angle ∠D = {angleD}°</span>
                  <span className="text-xs font-normal text-emerald-800">
                    {angleD < 180 ? 'Convex Angle' : 'Reflex Angle'}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">
                Adjust the angle inputs on the left to see the step-by-step calculation.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 3: Ratio Angle Problem Solver */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span>Frequent NCERT Problem: Angles in a Given Ratio</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            e.g., "The angles of a quadrilateral are in the ratio 3 : 5 : 9 : 13. Find all angles."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 space-y-3">
            <label className="block text-xs font-bold text-slate-700">
              Enter Ratio of Angles (e.g., 3 : 5 : 9 : 13 or 1 : 2 : 3 : 4):
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={ratioStr}
                onChange={(e) => setRatioStr(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono"
                placeholder="3 : 5 : 9 : 13"
              />
              <button
                onClick={() => setRatioStr('3 : 5 : 9 : 13')}
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition shrink-0 cursor-pointer"
              >
                Reset NCERT
              </button>
            </div>

            <div className="flex flex-wrap gap-1 text-xs">
              <span className="text-slate-400">Try also:</span>
              <button
                onClick={() => setRatioStr('1 : 2 : 3 : 4')}
                className="text-indigo-600 hover:underline cursor-pointer"
              >
                1:2:3:4
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => setRatioStr('2 : 3 : 2 : 3')}
                className="text-indigo-600 hover:underline cursor-pointer"
              >
                2:3:2:3 (Parallelogram)
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => setRatioStr('1 : 1 : 1 : 1')}
                className="text-indigo-600 hover:underline cursor-pointer"
              >
                1:1:1:1 (Rectangle)
              </button>
            </div>
          </div>

          <div className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm">
            {ratioResult ? (
              <div className="space-y-2">
                <div className="font-bold text-slate-800">
                  Step-by-Step Algebraic Solution:
                </div>
                <p className="text-slate-600 text-xs">
                  Let the angles be {ratioResult.parts.map((p, i) => `${p}x`).join(', ')}.
                </p>
                <div className="bg-white p-2 rounded border border-slate-200 font-mono text-xs text-indigo-950">
                  {ratioResult.parts.map((p) => `${p}x`).join(' + ')} = 360°
                </div>
                <div className="bg-white p-2 rounded border border-slate-200 font-mono text-xs text-indigo-950">
                  {ratioResult.sumParts}x = 360° ⇒ x = 360° / {ratioResult.sumParts} = <strong>{ratioResult.unitValue}°</strong>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {ratioResult.parts.map((p, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-2 rounded-lg border border-indigo-100 text-center"
                    >
                      <span className="text-[10px] text-slate-500 block uppercase font-bold">
                        Angle {idx + 1} ({p}x)
                      </span>
                      <span className="text-sm font-extrabold text-indigo-700">
                        {ratioResult.calculatedAngles[idx]}°
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-rose-600 text-xs">
                Please enter 4 valid positive numbers separated by colons (e.g., 3 : 5 : 9 : 13).
              </p>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 4: Exterior Angle Sum Property */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-indigo-600" />
              <span>Exterior Angle Theorem (Always 360° for Any Polygon)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              NCERT Chapter 3.2: Sum of exterior angles taken in order is 360°.
            </p>
          </div>
          <span className="text-xs bg-amber-50 text-amber-800 font-bold px-3 py-1 rounded-full border border-amber-200">
            Exterior Sum = 360°
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 space-y-3">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If you walk around any polygon and turn at each corner, you complete exactly one full turn (360°). Hence, the sum of exterior angles is always 360°.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <label className="block text-xs font-bold text-slate-700">
                Number of sides of Regular Polygon (n): {polygonSides}
              </label>
              <input
                type="range"
                min="3"
                max="24"
                value={polygonSides}
                onChange={(e) => setPolygonSides(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Triangle (3)</span>
                <span>Quadrilateral (4)</span>
                <span>Octagon (8)</span>
                <span>24-gon</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-3">
            <div className="bg-indigo-50/70 border border-indigo-200 p-4 rounded-xl text-center">
              <span className="text-xs font-bold text-indigo-700 uppercase block mb-1">
                Each Exterior Angle
              </span>
              <span className="text-2xl font-black text-indigo-900">
                {exteriorAngle}°
              </span>
              <span className="text-[11px] text-indigo-600 block mt-1">
                Formula: 360° / {polygonSides}
              </span>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl text-center">
              <span className="text-xs font-bold text-emerald-800 uppercase block mb-1">
                Each Interior Angle
              </span>
              <span className="text-2xl font-black text-emerald-900">
                {interiorAngle}°
              </span>
              <span className="text-[11px] text-emerald-700 block mt-1">
                Formula: 180° - {exteriorAngle}°
              </span>
            </div>

            <div className="col-span-2 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-600">
              💡 <strong>Board Question Tip:</strong> If an exterior angle is 24°, number of sides = 360° / 24° = <strong>15 sides</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
