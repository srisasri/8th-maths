import React, { useState } from 'react';
import { QUADRILATERALS } from '../data/quadrilateralsData';
import { QuadrilateralId } from '../types';
import {
  Check,
  Info,
  HelpCircle,
  Lightbulb,
  Maximize2,
  Sparkles,
} from 'lucide-react';

export const ShapeLab: React.FC = () => {
  const [selectedId, setSelectedId] = useState<QuadrilateralId>('parallelogram');
  const [showDiagonals, setShowDiagonals] = useState<boolean>(true);
  const [showTicks, setShowTicks] = useState<boolean>(true);
  const [showArrows, setShowArrows] = useState<boolean>(true);
  const [showAngles, setShowAngles] = useState<boolean>(true);

  const currentShape =
    QUADRILATERALS.find((q) => q.id === selectedId) || QUADRILATERALS[0];

  const points = currentShape.svgPoints;
  const pA = points[0];
  const pB = points[1];
  const pC = points[2];
  const pD = points[3];

  // Midpoint of diagonals for intersection point O
  const pO = {
    x: (pA.x + pC.x) / 2,
    y: (pA.y + pC.y) / 2,
  };

  // Helper for polygon points string
  const pointsStr = `${pA.x},${pA.y} ${pB.x},${pB.y} ${pC.x},${pC.y} ${pD.x},${pD.y}`;

  return (
    <div className="space-y-6">
      {/* Intro box */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-2 py-0.5 rounded">
            Class 8 Geometry Core
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Interactive Quadrilateral Explorer
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Select any quadrilateral to explore its geometric structure, parallel sides, equal ticks, interior angles, and diagonal characteristics.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-indigo-100 shadow-xs text-xs text-slate-700">
          <Info className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>Notice how each shape inherits from its parent!</span>
        </div>
      </div>

      {/* Shape Selector Bar */}
      <div className="flex flex-wrap gap-2">
        {QUADRILATERALS.map((shape) => {
          const isSelected = shape.id === selectedId;
          return (
            <button
              key={shape.id}
              id={`select-shape-${shape.id}`}
              onClick={() => setSelectedId(shape.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-600/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <span>{shape.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main interactive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visualizer Canvas (Left 6-7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>{currentShape.name}</span>
                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  Figure ABCD
                </span>
              </h3>
            </div>

            {/* Toggle Switches */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <button
                id="toggle-diagonals"
                onClick={() => setShowDiagonals(!showDiagonals)}
                className={`px-2.5 py-1 rounded-md font-medium border transition cursor-pointer ${
                  showDiagonals
                    ? 'bg-purple-50 text-purple-700 border-purple-200'
                    : 'bg-slate-100 text-slate-500 border-slate-200'
                }`}
              >
                Diagonals AC & BD {showDiagonals ? '✓' : ''}
              </button>
              <button
                id="toggle-ticks"
                onClick={() => setShowTicks(!showTicks)}
                className={`px-2.5 py-1 rounded-md font-medium border transition cursor-pointer ${
                  showTicks
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : 'bg-slate-100 text-slate-500 border-slate-200'
                }`}
              >
                Equal Ticks {showTicks ? '✓' : ''}
              </button>
              <button
                id="toggle-arrows"
                onClick={() => setShowArrows(!showArrows)}
                className={`px-2.5 py-1 rounded-md font-medium border transition cursor-pointer ${
                  showArrows
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-slate-100 text-slate-500 border-slate-200'
                }`}
              >
                Parallel ∥ {showArrows ? '✓' : ''}
              </button>
              <button
                id="toggle-angles"
                onClick={() => setShowAngles(!showAngles)}
                className={`px-2.5 py-1 rounded-md font-medium border transition cursor-pointer ${
                  showAngles
                    ? 'bg-amber-50 text-amber-800 border-amber-200'
                    : 'bg-slate-100 text-slate-500 border-slate-200'
                }`}
              >
                Angles {showAngles ? '✓' : ''}
              </button>
            </div>
          </div>

          {/* SVG Canvas */}
          <div className="relative w-full aspect-4/3 bg-slate-50/70 rounded-xl mt-4 border border-slate-100 flex items-center justify-center overflow-hidden">
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full max-w-lg select-none"
            >
              {/* Grid dots for background */}
              <defs>
                <pattern
                  id="grid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1" fill="#e2e8f0" />
                </pattern>
                {/* Arrow markers */}
                <marker
                  id="arrow-single"
                  viewBox="0 0 10 10"
                  refX="5"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 7 5 L 0 9 z" fill="#059669" />
                </marker>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Quadrilateral Shape Body */}
              <polygon
                points={pointsStr}
                className="fill-indigo-50/70 stroke-indigo-600 stroke-2 transition-all duration-300"
              />

              {/* Diagonals */}
              {showDiagonals && (
                <g className="transition-opacity duration-300">
                  {/* Diagonal AC */}
                  <line
                    x1={pA.x}
                    y1={pA.y}
                    x2={pC.x}
                    y2={pC.y}
                    stroke="#9333ea"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />
                  {/* Diagonal BD */}
                  <line
                    x1={pB.x}
                    y1={pB.y}
                    x2={pD.x}
                    y2={pD.y}
                    stroke="#9333ea"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />
                  {/* Intersection point O */}
                  <circle cx={pO.x} cy={pO.y} r="4" fill="#7e22ce" />
                  <text
                    x={pO.x + 8}
                    y={pO.y - 6}
                    fill="#7e22ce"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    O
                  </text>

                  {/* 90° Perpendicular symbol if rhombus, square, or kite */}
                  {(selectedId === 'rhombus' ||
                    selectedId === 'square' ||
                    selectedId === 'kite') && (
                    <g stroke="#9333ea" strokeWidth="1.5" fill="none">
                      <path
                        d={`M ${pO.x + 10} ${pO.y} L ${pO.x + 10} ${
                          pO.y - 10
                        } L ${pO.x} ${pO.y - 10}`}
                      />
                      <circle cx={pO.x + 5} cy={pO.y - 5} r="1.5" fill="#9333ea" />
                    </g>
                  )}
                </g>
              )}

              {/* Parallel indicators (Arrows) */}
              {showArrows && (
                <g>
                  {/* Parallelogram, Rectangle, Rhombus, Square: both pairs parallel */}
                  {(selectedId === 'parallelogram' ||
                    selectedId === 'rectangle' ||
                    selectedId === 'rhombus' ||
                    selectedId === 'square' ||
                    selectedId === 'trapezium') && (
                    <>
                      {/* Top Side AB arrow */}
                      <path
                        d={`M ${(pA.x + pB.x) / 2 - 4} ${(pA.y + pB.y) / 2} L ${
                          (pA.x + pB.x) / 2 + 4
                        } ${(pA.y + pB.y) / 2}`}
                        markerEnd="url(#arrow-single)"
                      />
                      {/* Bottom Side DC arrow */}
                      <path
                        d={`M ${(pD.x + pC.x) / 2 - 4} ${(pD.y + pC.y) / 2} L ${
                          (pD.x + pC.x) / 2 + 4
                        } ${(pD.y + pC.y) / 2}`}
                        markerEnd="url(#arrow-single)"
                      />
                    </>
                  )}

                  {/* Side pair 2 (AD and BC) parallel for Parallelogram, Rectangle, Rhombus, Square */}
                  {(selectedId === 'parallelogram' ||
                    selectedId === 'rectangle' ||
                    selectedId === 'rhombus' ||
                    selectedId === 'square') && (
                    <>
                      <circle
                        cx={(pA.x + pD.x) / 2}
                        cy={(pA.y + pD.y) / 2}
                        r="3"
                        fill="#059669"
                      />
                      <circle
                        cx={(pB.x + pC.x) / 2}
                        cy={(pB.y + pC.y) / 2}
                        r="3"
                        fill="#059669"
                      />
                    </>
                  )}
                </g>
              )}

              {/* Equal ticks marks */}
              {showTicks && (
                <g stroke="#2563eb" strokeWidth="2">
                  {/* All 4 sides equal: Square and Rhombus */}
                  {(selectedId === 'square' || selectedId === 'rhombus') && (
                    <>
                      {/* AB tick */}
                      <line
                        x1={(pA.x + pB.x) / 2 - 4}
                        y1={(pA.y + pB.y) / 2 - 4}
                        x2={(pA.x + pB.x) / 2 + 4}
                        y2={(pA.y + pB.y) / 2 + 4}
                      />
                      {/* BC tick */}
                      <line
                        x1={(pB.x + pC.x) / 2 - 4}
                        y1={(pB.y + pC.y) / 2 - 4}
                        x2={(pB.x + pC.y) / 2 + 4}
                        y2={(pB.y + pC.y) / 2 + 4}
                      />
                      {/* CD tick */}
                      <line
                        x1={(pC.x + pD.x) / 2 - 4}
                        y1={(pC.y + pD.y) / 2 - 4}
                        x2={(pC.x + pD.x) / 2 + 4}
                        y2={(pC.y + pD.y) / 2 + 4}
                      />
                      {/* DA tick */}
                      <line
                        x1={(pD.x + pA.x) / 2 - 4}
                        y1={(pD.y + pA.y) / 2 - 4}
                        x2={(pD.x + pA.x) / 2 + 4}
                        y2={(pD.y + pA.y) / 2 + 4}
                      />
                    </>
                  )}

                  {/* Opposite sides equal: Rectangle and Parallelogram */}
                  {(selectedId === 'rectangle' ||
                    selectedId === 'parallelogram') && (
                    <>
                      {/* AB & CD have single tick */}
                      <line
                        x1={(pA.x + pB.x) / 2 - 4}
                        y1={(pA.y + pB.y) / 2 - 4}
                        x2={(pA.x + pB.x) / 2 + 4}
                        y2={(pA.y + pB.y) / 2 + 4}
                      />
                      <line
                        x1={(pD.x + pC.x) / 2 - 4}
                        y1={(pD.y + pC.y) / 2 - 4}
                        x2={(pD.x + pC.x) / 2 + 4}
                        y2={(pD.y + pC.y) / 2 + 4}
                      />
                      {/* AD & BC have double tick */}
                      <line
                        x1={(pA.x + pD.x) / 2 - 5}
                        y1={(pA.y + pD.y) / 2 - 3}
                        x2={(pA.x + pD.x) / 2 + 3}
                        y2={(pA.y + pD.y) / 2 + 5}
                      />
                      <line
                        x1={(pA.x + pD.x) / 2 - 2}
                        y1={(pA.y + pD.y) / 2 - 6}
                        x2={(pA.x + pD.x) / 2 + 6}
                        y2={(pA.y + pD.y) / 2 + 2}
                      />

                      <line
                        x1={(pB.x + pC.x) / 2 - 5}
                        y1={(pB.y + pC.y) / 2 - 3}
                        x2={(pB.x + pC.x) / 2 + 3}
                        y2={(pB.y + pC.y) / 2 + 5}
                      />
                      <line
                        x1={(pB.x + pC.x) / 2 - 2}
                        y1={(pB.y + pC.y) / 2 - 6}
                        x2={(pB.x + pC.x) / 2 + 6}
                        y2={(pB.y + pC.y) / 2 + 2}
                      />
                    </>
                  )}

                  {/* Kite: adjacent pairs equal */}
                  {selectedId === 'kite' && (
                    <>
                      {/* AB and AD equal (single tick) */}
                      <line
                        x1={(pA.x + pB.x) / 2 - 4}
                        y1={(pA.y + pB.y) / 2 - 4}
                        x2={(pA.x + pB.x) / 2 + 4}
                        y2={(pA.y + pB.y) / 2 + 4}
                      />
                      <line
                        x1={(pA.x + pD.x) / 2 - 4}
                        y1={(pA.y + pD.y) / 2 - 4}
                        x2={(pA.x + pD.x) / 2 + 4}
                        y2={(pA.y + pD.y) / 2 + 4}
                      />
                      {/* BC and CD equal (double tick) */}
                      <line
                        x1={(pB.x + pC.x) / 2 - 5}
                        y1={(pB.y + pC.y) / 2 - 3}
                        x2={(pB.x + pC.x) / 2 + 3}
                        y2={(pB.y + pC.y) / 2 + 5}
                      />
                      <line
                        x1={(pB.x + pC.x) / 2 - 2}
                        y1={(pB.y + pC.y) / 2 - 6}
                        x2={(pB.x + pC.x) / 2 + 6}
                        y2={(pB.y + pC.y) / 2 + 2}
                      />
                      <line
                        x1={(pD.x + pC.x) / 2 - 5}
                        y1={(pD.y + pC.y) / 2 - 3}
                        x2={(pD.x + pC.x) / 2 + 3}
                        y2={(pD.y + pC.y) / 2 + 5}
                      />
                      <line
                        x1={(pD.x + pC.x) / 2 - 2}
                        y1={(pD.y + pC.y) / 2 - 6}
                        x2={(pD.x + pC.x) / 2 + 6}
                        y2={(pD.y + pC.y) / 2 + 2}
                      />
                    </>
                  )}
                </g>
              )}

              {/* Angles Representation */}
              {showAngles && (
                <g>
                  {/* If Rectangle or Square: 90° right-angle squares */}
                  {(selectedId === 'rectangle' || selectedId === 'square') && (
                    <>
                      <path
                        d={`M ${pA.x} ${pA.y + 14} L ${pA.x + 14} ${pA.y + 14} L ${
                          pA.x + 14
                        } ${pA.y}`}
                        stroke="#d97706"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d={`M ${pB.x} ${pB.y + 14} L ${pB.x - 14} ${pB.y + 14} L ${
                          pB.x - 14
                        } ${pB.y}`}
                        stroke="#d97706"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d={`M ${pC.x} ${pC.y - 14} L ${pC.x - 14} ${pC.y - 14} L ${
                          pC.x - 14
                        } ${pC.y}`}
                        stroke="#d97706"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d={`M ${pD.x} ${pD.y - 14} L ${pD.x + 14} ${pD.y - 14} L ${
                          pD.x + 14
                        } ${pD.y}`}
                        stroke="#d97706"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </>
                  )}

                  {/* Arcs for non-90 angles */}
                  {selectedId !== 'rectangle' && selectedId !== 'square' && (
                    <>
                      <circle
                        cx={pA.x}
                        cy={pA.y}
                        r="14"
                        fill="none"
                        stroke="#d97706"
                        strokeWidth="1.5"
                        strokeDasharray="2,2"
                      />
                      <circle
                        cx={pB.x}
                        cy={pB.y}
                        r="14"
                        fill="none"
                        stroke="#d97706"
                        strokeWidth="1.5"
                        strokeDasharray="2,2"
                      />
                      <circle
                        cx={pC.x}
                        cy={pC.y}
                        r="14"
                        fill="none"
                        stroke="#d97706"
                        strokeWidth="1.5"
                        strokeDasharray="2,2"
                      />
                      <circle
                        cx={pD.x}
                        cy={pD.y}
                        r="14"
                        fill="none"
                        stroke="#d97706"
                        strokeWidth="1.5"
                        strokeDasharray="2,2"
                      />
                    </>
                  )}
                </g>
              )}

              {/* Vertices Dots and Labels */}
              <g>
                {/* Vertex A */}
                <circle cx={pA.x} cy={pA.y} r="5" fill="#4f46e5" />
                <text
                  x={pA.x - 16}
                  y={pA.y - 8}
                  className="fill-slate-900 font-bold text-sm"
                >
                  A
                </text>

                {/* Vertex B */}
                <circle cx={pB.x} cy={pB.y} r="5" fill="#4f46e5" />
                <text
                  x={pB.x + 10}
                  y={pB.y - 8}
                  className="fill-slate-900 font-bold text-sm"
                >
                  B
                </text>

                {/* Vertex C */}
                <circle cx={pC.x} cy={pC.y} r="5" fill="#4f46e5" />
                <text
                  x={pC.x + 10}
                  y={pC.y + 16}
                  className="fill-slate-900 font-bold text-sm"
                >
                  C
                </text>

                {/* Vertex D */}
                <circle cx={pD.x} cy={pD.y} r="5" fill="#4f46e5" />
                <text
                  x={pD.x - 16}
                  y={pD.y + 16}
                  className="fill-slate-900 font-bold text-sm"
                >
                  D
                </text>
              </g>
            </svg>
          </div>

          {/* Visual Legend */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-3 h-0.5 bg-indigo-600 inline-block"></span> Sides
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-0.5 bg-purple-600 border-dashed inline-block"></span> Diagonals
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span> Parallel
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-600 inline-block"></span> Angle Arcs
              </span>
            </div>
            <span className="text-slate-400">Sum of angles = 360°</span>
          </div>
        </div>

        {/* Detailed Properties Card (Right 5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Definition */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between text-xs text-indigo-600 font-semibold uppercase tracking-wider mb-1">
              <span>NCERT Class 8 Definition</span>
              {currentShape.parentType && (
                <span className="text-slate-500 font-normal lowercase bg-slate-100 px-2 py-0.5 rounded">
                  Type: {currentShape.parentType}
                </span>
              )}
            </div>
            <p className="text-slate-800 text-sm font-medium leading-relaxed">
              {currentShape.class8Definition}
            </p>
          </div>

          {/* Properties List */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 border-b border-slate-100 pb-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Key Mathematical Properties</span>
            </h4>
            <div className="space-y-2.5">
              {currentShape.properties.map((prop, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-lg border text-xs ${
                    prop.isSpecialToThis
                      ? 'bg-indigo-50/70 border-indigo-200/70 text-slate-800'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="font-semibold text-slate-900 flex items-center justify-between">
                    <span>{prop.title}</span>
                    {prop.isSpecialToThis && (
                      <span className="text-[10px] bg-indigo-200/80 text-indigo-800 px-1.5 py-0.2 rounded font-medium">
                        Unique
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-slate-600 leading-normal">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Diagonal summary badge */}
          <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-4 text-xs space-y-2 text-purple-950">
            <div className="font-bold flex items-center gap-1.5 text-purple-900">
              <Maximize2 className="w-3.5 h-3.5 text-purple-700" />
              <span>Diagonal Behavior in {currentShape.name}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center pt-1 font-medium">
              <div
                className={`py-1.5 px-2 rounded border ${
                  currentShape.diagonals.bisectEachOther
                    ? 'bg-emerald-100/90 text-emerald-900 border-emerald-300'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                Bisect Each Other: {currentShape.diagonals.bisectEachOther ? 'YES' : 'NO'}
              </div>
              <div
                className={`py-1.5 px-2 rounded border ${
                  currentShape.diagonals.equalInLength
                    ? 'bg-emerald-100/90 text-emerald-900 border-emerald-300'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                Equal Length: {currentShape.diagonals.equalInLength ? 'YES' : 'NO'}
              </div>
              <div
                className={`py-1.5 px-2 rounded border ${
                  currentShape.diagonals.perpendicular
                    ? 'bg-emerald-100/90 text-emerald-900 border-emerald-300'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                Perpendicular (90°): {currentShape.diagonals.perpendicular ? 'YES' : 'NO'}
              </div>
              <div
                className={`py-1.5 px-2 rounded border ${
                  currentShape.diagonals.bisectAngles
                    ? 'bg-emerald-100/90 text-emerald-900 border-emerald-300'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                Bisect Angles: {currentShape.diagonals.bisectAngles ? 'YES' : 'NO'}
              </div>
            </div>
            <p className="text-[11px] text-purple-800 italic pt-1">
              Note: {currentShape.diagonals.notes}
            </p>
          </div>

          {/* Formulas Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs text-xs">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
              <span>📐 Formulas to Remember</span>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">
                  Area
                </span>
                <span className="font-semibold text-slate-900 text-xs">
                  {currentShape.formulas.area}
                </span>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">
                  Perimeter
                </span>
                <span className="font-semibold text-slate-900 text-xs">
                  {currentShape.formulas.perimeter}
                </span>
              </div>
            </div>
            {currentShape.formulas.diagonal && (
              <div className="mt-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">
                  Diagonal Relation
                </span>
                <span className="font-semibold text-indigo-700 text-xs">
                  {currentShape.formulas.diagonal}
                </span>
              </div>
            )}
          </div>

          {/* Exam Secret Tips */}
          <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 text-xs space-y-2 text-amber-950">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Class 8 Exam Secrets & Frequent Questions</span>
            </div>
            <ul className="space-y-1.5 list-disc list-inside text-slate-700">
              {currentShape.examTips.map((tip, idx) => (
                <li key={idx} className="text-xs leading-relaxed">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
