export type QuadrilateralId =
  | 'general'
  | 'trapezium'
  | 'kite'
  | 'parallelogram'
  | 'rhombus'
  | 'rectangle'
  | 'square';

export interface QuadrilateralProperty {
  category: 'sides' | 'angles' | 'diagonals' | 'special';
  title: string;
  description: string;
  isSpecialToThis?: boolean;
}

export interface QuadrilateralInfo {
  id: QuadrilateralId;
  name: string;
  hindiName?: string;
  class8Definition: string;
  parentType?: string;
  properties: QuadrilateralProperty[];
  diagonals: {
    bisectEachOther: boolean;
    equalInLength: boolean;
    perpendicular: boolean;
    bisectAngles: boolean;
    notes: string;
  };
  formulas: {
    area: string;
    perimeter: string;
    diagonal?: string;
  };
  examTips: string[];
  svgPoints: { x: number; y: number }[]; // Normalized points for SVG rendering
  defaultLabels: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
}

export interface SolvedProblem {
  id: string;
  title: string;
  type: 'angles' | 'sides' | 'diagonals' | 'practical';
  difficulty: 'Basic' | 'Standard' | 'Hot';
  problemText: string;
  given: string[];
  toFind: string;
  solutionSteps: string[];
  finalAnswer: string;
  curriculumRef: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
  ncertRef?: string;
}
