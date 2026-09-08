import { QuadrilateralInfo, SolvedProblem, QuizQuestion } from '../types';

export const QUADRILATERALS: QuadrilateralInfo[] = [
  {
    id: 'parallelogram',
    name: 'Parallelogram',
    class8Definition:
      'A quadrilateral with both pairs of opposite sides parallel and equal in length.',
    parentType: 'Trapezium (special case with both pairs parallel)',
    properties: [
      {
        category: 'sides',
        title: 'Opposite sides are parallel & equal',
        description: 'AB ∥ CD and AD ∥ BC. Also AB = CD and AD = BC.',
      },
      {
        category: 'angles',
        title: 'Opposite angles are equal',
        description: '∠A = ∠C and ∠B = ∠D.',
      },
      {
        category: 'angles',
        title: 'Adjacent angles are supplementary',
        description:
          'Any two consecutive angles add up to 180°: ∠A + ∠B = 180°, ∠B + ∠C = 180°, etc.',
        isSpecialToThis: true,
      },
      {
        category: 'diagonals',
        title: 'Diagonals bisect each other',
        description:
          'The intersection point O is the midpoint of both diagonals (OA = OC and OB = OD). Diagonals are NOT necessarily equal or perpendicular.',
      },
    ],
    diagonals: {
      bisectEachOther: true,
      equalInLength: false,
      perpendicular: false,
      bisectAngles: false,
      notes:
        'Diagonals bisect each other into two equal halves, but are usually unequal in length unless it is a rectangle.',
    },
    formulas: {
      area: 'Base × Height (b × h)',
      perimeter: '2 × (Length + Breadth) = 2(a + b)',
      diagonal: '√(2a² + 2b² - d₂²) [Parallelogram law]',
    },
    examTips: [
      'If two adjacent angles are in ratio 3:2, their sum is 180°. 3x + 2x = 180° ⇒ x = 36° (angles are 108° and 72°).',
      'Opposite angles are EQUAL; consecutive angles add up to 180°.',
      'A diagonal divides a parallelogram into two congruent triangles.',
    ],
    svgPoints: [
      { x: 120, y: 70 },
      { x: 330, y: 70 },
      { x: 260, y: 220 },
      { x: 50, y: 220 },
    ],
    defaultLabels: { a: 'A', b: 'B', c: 'C', d: 'D' },
  },
  {
    id: 'rectangle',
    name: 'Rectangle',
    class8Definition:
      'A parallelogram in which every interior angle is a right angle (90°).',
    parentType: 'Parallelogram (with all angles = 90°)',
    properties: [
      {
        category: 'angles',
        title: 'All angles are 90°',
        description: '∠A = ∠B = ∠C = ∠D = 90° (equiangular).',
        isSpecialToThis: true,
      },
      {
        category: 'sides',
        title: 'Opposite sides are parallel & equal',
        description: 'Length l and breadth b are equal to opposite counterparts.',
      },
      {
        category: 'diagonals',
        title: 'Diagonals are equal & bisect each other',
        description:
          'AC = BD, and OA = OB = OC = OD! All four half-diagonals are equal.',
        isSpecialToThis: true,
      },
    ],
    diagonals: {
      bisectEachOther: true,
      equalInLength: true,
      perpendicular: false,
      bisectAngles: false,
      notes:
        'Diagonals are equal in length and bisect each other. (Not perpendicular unless it is a square).',
    },
    formulas: {
      area: 'Length × Breadth (l × b)',
      perimeter: '2 × (l + b)',
      diagonal: '√(l² + b²) [by Pythagoras Theorem]',
    },
    examTips: [
      'Every rectangle is a parallelogram, but every parallelogram is NOT a rectangle.',
      'Diagonals of a rectangle are EQUAL. If diagonal AC = 2x + 4 and BD = 3x - 1, then 2x + 4 = 3x - 1 ⇒ x = 5.',
    ],
    svgPoints: [
      { x: 80, y: 80 },
      { x: 320, y: 80 },
      { x: 320, y: 210 },
      { x: 80, y: 210 },
    ],
    defaultLabels: { a: 'A', b: 'B', c: 'C', d: 'D' },
  },
  {
    id: 'rhombus',
    name: 'Rhombus',
    class8Definition:
      'A parallelogram in which all four sides are of equal length.',
    parentType: 'Parallelogram (with all 4 sides equal)',
    properties: [
      {
        category: 'sides',
        title: 'All four sides are equal',
        description: 'AB = BC = CD = DA = side s (equilateral).',
        isSpecialToThis: true,
      },
      {
        category: 'diagonals',
        title: 'Diagonals are perpendicular bisectors',
        description:
          'Diagonals intersect at right angles (90°): AC ⊥ BD, and OA = OC, OB = OD.',
        isSpecialToThis: true,
      },
      {
        category: 'diagonals',
        title: 'Diagonals bisect vertex angles',
        description:
          'Each diagonal splits the opposite corner angles into two equal halves.',
        isSpecialToThis: true,
      },
      {
        category: 'angles',
        title: 'Opposite angles are equal',
        description: '∠A = ∠C and ∠B = ∠D, with adjacent angles adding to 180°.',
      },
    ],
    diagonals: {
      bisectEachOther: true,
      equalInLength: false,
      perpendicular: true,
      bisectAngles: true,
      notes:
        'Diagonals are perpendicular bisectors of each other. They create four congruent right-angled triangles inside.',
    },
    formulas: {
      area: '½ × d₁ × d₂ (Half of product of diagonals)',
      perimeter: '4 × Side (4s)',
      diagonal: 'Side = √((d₁/2)² + (d₂/2)²) [Pythagoras theorem in right triangle]',
    },
    examTips: [
      'Very famous 8th class question: Diagonals are 6 cm and 8 cm. Find side: half-diagonals are 3 cm and 4 cm, side = √(3² + 4²) = 5 cm!',
      'Diagonals of a rhombus are NOT equal unless it is a square.',
      'Every rhombus is a parallelogram, and also a kite.',
    ],
    svgPoints: [
      { x: 200, y: 55 },
      { x: 320, y: 145 },
      { x: 200, y: 235 },
      { x: 80, y: 145 },
    ],
    defaultLabels: { a: 'A', b: 'B', c: 'C', d: 'D' },
  },
  {
    id: 'square',
    name: 'Square',
    class8Definition:
      'A regular quadrilateral with all four sides equal and all four angles equal to 90°.',
    parentType: 'Rectangle + Rhombus + Parallelogram',
    properties: [
      {
        category: 'special',
        title: 'King of Quadrilaterals (All properties combined)',
        description:
          'Has ALL properties of a Parallelogram, Rectangle, and Rhombus.',
        isSpecialToThis: true,
      },
      {
        category: 'sides',
        title: 'All 4 sides are equal',
        description: 'AB = BC = CD = DA = s.',
      },
      {
        category: 'angles',
        title: 'All 4 angles are 90°',
        description: '∠A = ∠B = ∠C = ∠D = 90°.',
      },
      {
        category: 'diagonals',
        title: 'Diagonals: Equal, Bisect, and Perpendicular!',
        description:
          'AC = BD, AC ⊥ BD, OA = OB = OC = OD, and diagonals bisect angles into 45°.',
        isSpecialToThis: true,
      },
    ],
    diagonals: {
      bisectEachOther: true,
      equalInLength: true,
      perpendicular: true,
      bisectAngles: true,
      notes:
        'The ONLY quadrilateral with all 4 diagonal properties: equal in length, bisect each other, perpendicular (90°), and bisect vertex angles.',
    },
    formulas: {
      area: 'Side² (s²) OR ½ × d²',
      perimeter: '4 × Side (4s)',
      diagonal: 's√2 ≈ 1.414 × s',
    },
    examTips: [
      'Is a square a rectangle? YES (it is a rectangle with equal sides).',
      'Is a square a rhombus? YES (it is a rhombus with 90° angles).',
      'Is a square a parallelogram? YES (both opposite sides parallel and equal).',
      'Diagonal makes 45° angle with each side.',
    ],
    svgPoints: [
      { x: 125, y: 70 },
      { x: 275, y: 70 },
      { x: 275, y: 220 },
      { x: 125, y: 220 },
    ],
    defaultLabels: { a: 'A', b: 'B', c: 'C', d: 'D' },
  },
  {
    id: 'trapezium',
    name: 'Trapezium (Trapezoid)',
    class8Definition:
      'A quadrilateral with at least one pair of opposite sides parallel.',
    parentType: 'Polygon (4 sides)',
    properties: [
      {
        category: 'sides',
        title: 'One pair of parallel sides',
        description: 'AB ∥ CD. The parallel sides are called bases.',
        isSpecialToThis: true,
      },
      {
        category: 'angles',
        title: 'Consecutive interior angles along transversals are supplementary',
        description: 'If AB ∥ CD, then ∠A + ∠D = 180° and ∠B + ∠C = 180°.',
      },
      {
        category: 'special',
        title: 'Isosceles Trapezium (Special subtype)',
        description:
          'When non-parallel sides are equal (AD = BC), base angles are equal (∠A = ∠B, ∠C = ∠D) and diagonals are equal.',
      },
    ],
    diagonals: {
      bisectEachOther: false,
      equalInLength: false,
      perpendicular: false,
      bisectAngles: false,
      notes:
        'Diagonals do not bisect each other (they divide each other proportionally: AO/OC = BO/OD). Equal only in Isosceles Trapezium.',
    },
    formulas: {
      area: '½ × (Sum of parallel sides) × Distance between them = ½ × (a + b) × h',
      perimeter: 'Sum of all four sides (a + b + c + d)',
    },
    examTips: [
      'In a trapezium ABCD with AB ∥ CD, if ∠A = 55°, then ∠D = 180° - 55° = 125° (co-interior angles).',
      'All parallelograms are trapeziums, but not all trapeziums are parallelograms.',
    ],
    svgPoints: [
      { x: 130, y: 75 },
      { x: 270, y: 75 },
      { x: 330, y: 215 },
      { x: 70, y: 215 },
    ],
    defaultLabels: { a: 'A', b: 'B', c: 'C', d: 'D' },
  },
  {
    id: 'kite',
    name: 'Kite',
    class8Definition:
      'A quadrilateral with two distinct pairs of equal-length adjacent sides.',
    parentType: 'Polygon (4 sides)',
    properties: [
      {
        category: 'sides',
        title: 'Two pairs of equal adjacent sides',
        description: 'AB = AD and BC = CD.',
        isSpecialToThis: true,
      },
      {
        category: 'diagonals',
        title: 'Diagonals are perpendicular',
        description: 'AC ⊥ BD (intersect at 90°).',
        isSpecialToThis: true,
      },
      {
        category: 'diagonals',
        title: 'One diagonal bisects the other',
        description:
          'The longer diagonal (AC) bisects the shorter diagonal (BD), so OB = OD.',
        isSpecialToThis: true,
      },
      {
        category: 'angles',
        title: 'One pair of opposite angles are equal',
        description: '∠B = ∠D (the angles between the unequal sides). ∠A ≠ ∠C.',
      },
    ],
    diagonals: {
      bisectEachOther: false,
      equalInLength: false,
      perpendicular: true,
      bisectAngles: false,
      notes:
        'Only ONE diagonal is bisected by the other, and they are perpendicular (90°). Diagonals are unequal.',
    },
    formulas: {
      area: '½ × d₁ × d₂',
      perimeter: '2 × (side₁ + side₂) = 2(a + b)',
    },
    examTips: [
      'A kite is NOT a parallelogram because its opposite sides are not equal and parallel.',
      'Only the angles between unequal sides are equal (∠B = ∠D). The top and bottom angles (∠A and ∠C) are generally not equal.',
    ],
    svgPoints: [
      { x: 200, y: 50 },
      { x: 290, y: 130 },
      { x: 200, y: 240 },
      { x: 110, y: 130 },
    ],
    defaultLabels: { a: 'A', b: 'B', c: 'C', d: 'D' },
  },
  {
    id: 'general',
    name: 'General Quadrilateral',
    class8Definition:
      'Any closed flat shape formed by 4 line segments joined end to end.',
    parentType: 'Polygon',
    properties: [
      {
        category: 'sides',
        title: '4 sides and 4 vertices',
        description: 'Can have arbitrary side lengths and shapes.',
      },
      {
        category: 'angles',
        title: 'Angle Sum = 360°',
        description:
          '∠A + ∠B + ∠C + ∠D = 360° (Proof: divided into 2 triangles, 180° × 2 = 360°).',
        isSpecialToThis: true,
      },
      {
        category: 'angles',
        title: 'Exterior Angle Sum = 360°',
        description: 'Sum of exterior angles of any polygon is always 360°.',
        isSpecialToThis: true,
      },
      {
        category: 'special',
        title: 'Convex vs Concave',
        description:
          'In convex quadrilaterals (Class 8 syllabus), all angles are < 180° and diagonals lie entirely inside.',
      },
    ],
    diagonals: {
      bisectEachOther: false,
      equalInLength: false,
      perpendicular: false,
      bisectAngles: false,
      notes:
        'In general, diagonals do not have special length or perpendicularity relations.',
    },
    formulas: {
      area: '½ × d × (h₁ + h₂) [where h₁, h₂ are perpendicular offsets from other two vertices to diagonal d]',
      perimeter: 'a + b + c + d',
    },
    examTips: [
      'Angle sum property is the most tested theorem: if 3 angles are 80°, 110°, 70°, the fourth angle is 360° - (80+110+70) = 100°.',
      'To construct a unique quadrilateral, you need exactly 5 independent measurements.',
    ],
    svgPoints: [
      { x: 140, y: 65 },
      { x: 310, y: 90 },
      { x: 260, y: 225 },
      { x: 75, y: 195 },
    ],
    defaultLabels: { a: 'A', b: 'B', c: 'C', d: 'D' },
  },
];

export const GOLDEN_RULES_CLASS_8 = [
  {
    rule: 'Angle Sum of Interior Angles is always 360°',
    explanation:
      'Draw one diagonal: it splits the quadrilateral into 2 triangles. Each triangle has 180°, so 2 × 180° = 360°.',
    icon: 'Triangle',
    category: 'Theorems',
  },
  {
    rule: 'Sum of Exterior Angles is ALWAYS 360°',
    explanation:
      'Regardless of whether it is a triangle, quadrilateral, or 100-gon, the sum of exterior angles around any convex polygon is 360°.',
    icon: 'RotateCw',
    category: 'Theorems',
  },
  {
    rule: 'Adjacent Angles in a Parallelogram are Supplementary',
    explanation:
      'Because opposite lines are parallel, adjacent angles form consecutive interior angles along a transversal. Therefore, ∠A + ∠B = 180°.',
    icon: 'Sparkles',
    category: 'Parallelograms',
  },
  {
    rule: 'The "Who is Who" Classification Hierarchy',
    explanation:
      'Square is BOTH a Rectangle and a Rhombus. Rectangle and Rhombus are both Parallelograms. Parallelogram is a Trapezium.',
    icon: 'GitFork',
    category: 'Exam Secrets',
  },
  {
    rule: 'Rhombus Diagonal Pythagoras Trick',
    explanation:
      'Diagonals of a rhombus bisect at 90°. Each quarter is a right triangle with legs (d₁/2) and (d₂/2). Side = √[(d₁/2)² + (d₂/2)²].',
    icon: 'Calculator',
    category: 'Exam Secrets',
  },
  {
    rule: '5 Independent Measurements to Construct',
    explanation:
      'You cannot uniquely construct a quadrilateral with just 4 sides. You need 5 elements (e.g., 4 sides + 1 diagonal, or 3 sides + 2 angles).',
    icon: 'Ruler',
    category: 'Practical Geometry',
  },
];

export const SOLVED_PROBLEMS: SolvedProblem[] = [
  {
    id: 'prob-1',
    title: 'Finding the 4th Angle using Angle Sum Property',
    type: 'angles',
    difficulty: 'Basic',
    curriculumRef: 'NCERT Class 8 Exercise 3.1',
    problemText:
      'Three angles of a quadrilateral are 65°, 105°, and 75°. Find the measure of the fourth angle.',
    given: ['∠A = 65°', '∠B = 105°', '∠C = 75°'],
    toFind: 'Fourth angle ∠D',
    solutionSteps: [
      'Recall the Angle Sum Property of a Quadrilateral: Sum of all interior angles = 360°.',
      'Equation: ∠A + ∠B + ∠C + ∠D = 360°',
      'Substitute known values: 65° + 105° + 75° + ∠D = 360°',
      'Add the known angles: 245° + ∠D = 360°',
      'Solve for ∠D: ∠D = 360° - 245° = 115°',
    ],
    finalAnswer: 'The fourth angle is 115°.',
  },
  {
    id: 'prob-2',
    title: 'Parallelogram with Adjacent Angles in Ratio 3:2',
    type: 'angles',
    difficulty: 'Standard',
    curriculumRef: 'NCERT Class 8 Exercise 3.3 Question 5',
    problemText:
      'Two adjacent angles of a parallelogram are in the ratio 3 : 2. Find the measure of each of the angles of the parallelogram.',
    given: ['Adjacent angles are in ratio 3 : 2', 'Figure is a parallelogram ABCD'],
    toFind: 'All four angles: ∠A, ∠B, ∠C, ∠D',
    solutionSteps: [
      'Let the adjacent angles be ∠A = 3x and ∠B = 2x.',
      'In a parallelogram, adjacent angles are supplementary (add up to 180°): ∠A + ∠B = 180°',
      '3x + 2x = 180° ⇒ 5x = 180° ⇒ x = 180° / 5 = 36°',
      'Calculate angles: ∠A = 3 × 36° = 108°, ∠B = 2 × 36° = 72°',
      'Since opposite angles of a parallelogram are equal: ∠C = ∠A = 108° and ∠D = ∠B = 72°',
    ],
    finalAnswer: 'The four angles are 108°, 72°, 108°, and 72°.',
  },
  {
    id: 'prob-3',
    title: 'Side Length of a Rhombus from Diagonals',
    type: 'diagonals',
    difficulty: 'Hot',
    curriculumRef: 'NCERT Class 8 Important Board Question',
    problemText:
      'The diagonals of a rhombus are 16 cm and 12 cm. Find the length of each side of the rhombus.',
    given: ['Diagonal d₁ = 16 cm', 'Diagonal d₂ = 12 cm'],
    toFind: 'Side length of the rhombus (s)',
    solutionSteps: [
      'Properties of rhombus diagonals: Diagonals bisect each other at right angles (90°).',
      'Half of diagonal 1: OA = d₁ / 2 = 16 / 2 = 8 cm.',
      'Half of diagonal 2: OB = d₂ / 2 = 12 / 2 = 6 cm.',
      'In right-angled triangle AOB (with ∠AOB = 90°), side AB is the hypotenuse.',
      'By Pythagoras Theorem: AB² = OA² + OB² = 8² + 6² = 64 + 36 = 100.',
      'Taking square root: AB = √100 = 10 cm.',
    ],
    finalAnswer: 'The length of each side of the rhombus is 10 cm.',
  },
  {
    id: 'prob-4',
    title: 'Finding Perimeter of a Parallelogram',
    type: 'sides',
    difficulty: 'Basic',
    curriculumRef: 'NCERT Class 8 Example',
    problemText:
      'The perimeter of a parallelogram is 150 cm. One of its sides is greater than the other by 25 cm. Find the lengths of all sides.',
    given: ['Perimeter = 150 cm', 'One side is x + 25, adjacent side is x'],
    toFind: 'Length of all 4 sides',
    solutionSteps: [
      'Let shorter side = x cm. Then adjacent longer side = (x + 25) cm.',
      'Opposite sides of a parallelogram are equal. The four sides are x, (x + 25), x, (x + 25).',
      'Perimeter = 2 × (Sum of adjacent sides) = 2 × (x + x + 25) = 2(2x + 25) = 4x + 50.',
      'Equate to perimeter: 4x + 50 = 150 ⇒ 4x = 100 ⇒ x = 25 cm.',
      'Shorter sides = 25 cm each. Longer sides = 25 + 25 = 50 cm each.',
    ],
    finalAnswer: 'Sides are 25 cm, 50 cm, 25 cm, and 50 cm.',
  },
  {
    id: 'prob-5',
    title: 'Number of Sides of a Regular Polygon from Exterior Angle',
    type: 'angles',
    difficulty: 'Standard',
    curriculumRef: 'NCERT Class 8 Exercise 3.2',
    problemText:
      'How many sides does a regular polygon have if the measure of an exterior angle is 24°?',
    given: ['Measure of each exterior angle = 24°', 'Polygon is regular (all angles equal)'],
    toFind: 'Number of sides n',
    solutionSteps: [
      'Formula: Sum of exterior angles of any regular polygon is 360°.',
      'Each exterior angle = 360° / n',
      'Substitute: 24° = 360° / n',
      'Rearrange: n = 360° / 24° = 15',
    ],
    finalAnswer: 'The polygon has 15 sides.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the sum of the interior angles of a quadrilateral?',
    options: ['180°', '360°', '540°', '720°'],
    correctIndex: 1,
    explanation:
      'A quadrilateral can be split into two triangles by drawing one diagonal. Since each triangle sum is 180°, 2 × 180° = 360°.',
    topic: 'Angle Sum Property',
    ncertRef: 'NCERT Chapter 3 Theorem 1',
  },
  {
    id: 'q2',
    question: 'Which of the following statements is FALSE?',
    options: [
      'All squares are rectangles.',
      'All rhombuses are parallelograms.',
      'All rectangles are squares.',
      'All squares are rhombuses.',
    ],
    correctIndex: 2,
    explanation:
      'A rectangle only needs opposite sides equal and 90° angles. A rectangle does not necessarily have all 4 sides equal, so not all rectangles are squares.',
    topic: 'Classification',
    ncertRef: 'NCERT True/False Check',
  },
  {
    id: 'q3',
    question:
      'The diagonals of which quadrilateral are PERPENDICULAR BISECTORS of each other?',
    options: ['Rectangle and Parallelogram', 'Rhombus and Square', 'Trapezium and Kite', 'Only Rectangle'],
    correctIndex: 1,
    explanation:
      'Both Rhombus and Square have diagonals that bisect each other at right angles (90°). In addition, square diagonals are also equal in length.',
    topic: 'Diagonals',
    ncertRef: 'NCERT Chapter 3 Properties',
  },
  {
    id: 'q4',
    question:
      'If two adjacent angles of a parallelogram are in the ratio 4:5, what is the measure of the smaller angle?',
    options: ['40°', '80°', '100°', '90°'],
    correctIndex: 1,
    explanation:
      'Adjacent angles of a parallelogram are supplementary (sum = 180°). 4x + 5x = 180° ⇒ 9x = 180° ⇒ x = 20°. Smaller angle = 4 × 20° = 80°.',
    topic: 'Parallelograms',
    ncertRef: 'NCERT Exercise 3.3',
  },
  {
    id: 'q5',
    question:
      'How many independent measurements are required to uniquely construct a quadrilateral?',
    options: ['3', '4', '5', '6'],
    correctIndex: 2,
    explanation:
      'Exactly 5 independent measurements (like 4 sides + 1 diagonal, or 3 sides + 2 angles) are needed to uniquely fix the shape and size.',
    topic: 'Practical Geometry',
    ncertRef: 'NCERT Chapter 4',
  },
  {
    id: 'q6',
    question: 'In a kite ABCD, which of the following is true regarding its diagonals?',
    options: [
      'They are equal in length',
      'Both bisect each other',
      'They are perpendicular, and only one is bisected',
      'They never meet at 90°',
    ],
    correctIndex: 2,
    explanation:
      'In a kite, the diagonals intersect at 90° (perpendicular), and the longer diagonal bisects the shorter diagonal into two equal halves.',
    topic: 'Kite',
    ncertRef: 'NCERT Chapter 3',
  },
  {
    id: 'q7',
    question:
      'The diagonals of a rhombus are 6 cm and 8 cm. What is the length of each side?',
    options: ['5 cm', '7 cm', '10 cm', '14 cm'],
    correctIndex: 0,
    explanation:
      'Diagonals bisect at 90°. Half-diagonals are 3 cm and 4 cm. By Pythagoras theorem: Side = √(3² + 4²) = √(9 + 16) = √25 = 5 cm.',
    topic: 'Rhombus',
    ncertRef: 'NCERT HOTS Question',
  },
  {
    id: 'q8',
    question: 'What is the sum of exterior angles of ANY convex quadrilateral?',
    options: ['180°', '360°', '540°', 'Depends on the angles'],
    correctIndex: 1,
    explanation:
      'The sum of the measures of the exterior angles of ANY convex polygon (including quadrilaterals) is always 360°.',
    topic: 'Exterior Angles',
    ncertRef: 'NCERT Exercise 3.2',
  },
];

export const DIAGONAL_COMPARISON_DATA = [
  {
    shape: 'Parallelogram',
    bisect: true,
    equal: false,
    perpendicular: false,
    bisectAngles: false,
    quickNote: 'Bisect only; not equal, not 90°',
  },
  {
    shape: 'Rectangle',
    bisect: true,
    equal: true,
    perpendicular: false,
    bisectAngles: false,
    quickNote: 'Equal & Bisect; not 90°',
  },
  {
    shape: 'Rhombus',
    bisect: true,
    equal: false,
    perpendicular: true,
    bisectAngles: true,
    quickNote: 'Perpendicular bisectors & bisect angles; not equal',
  },
  {
    shape: 'Square',
    bisect: true,
    equal: true,
    perpendicular: true,
    bisectAngles: true,
    quickNote: 'All 4: Equal, Bisect, 90°, & Bisect angles!',
  },
  {
    shape: 'Trapezium',
    bisect: false,
    equal: false,
    perpendicular: false,
    bisectAngles: false,
    quickNote: 'None (equal only if isosceles trapezium)',
  },
  {
    shape: 'Kite',
    bisect: false,
    equal: false,
    perpendicular: true,
    bisectAngles: false,
    quickNote: 'Perpendicular (90°); only longer diagonal bisects shorter one',
  },
];
