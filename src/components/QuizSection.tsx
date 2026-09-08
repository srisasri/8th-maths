import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quadrilateralsData';
import confetti from 'canvas-confetti';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(userAnswers).length;

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleFinishQuiz = () => {
    setShowResults(true);
    const score = calculateScore();
    if (score >= totalQuestions * 0.7) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Fallback gracefully if confetti fails in sandbox
      }
    }
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  const score = calculateScore();

  return (
    <div className="space-y-6">
      {/* Intro Banner */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded">
            Self-Assessment
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Class 8 Quadrilaterals Exam Quiz
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Test your knowledge of angle sums, diagonal properties, and classification rules with instant explanations.
          </p>
        </div>
        <div className="bg-white border border-indigo-200 px-4 py-2.5 rounded-xl text-center shadow-xs">
          <span className="text-xs text-slate-500 font-semibold block uppercase">
            Progress
          </span>
          <span className="text-base font-extrabold text-indigo-600">
            {answeredCount} / {totalQuestions} Answered
          </span>
        </div>
      </div>

      {/* Results Banner if completed */}
      {showResults && (
        <div className="bg-white rounded-2xl border-2 border-indigo-300 p-6 shadow-md text-center space-y-3">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
            <Trophy className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-slate-900">
            Your Score: {score} out of {totalQuestions} (
            {Math.round((score / totalQuestions) * 100)}%)
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            {score === totalQuestions
              ? 'Outstanding! You have complete mastery of Class 8 Understanding Quadrilaterals!'
              : score >= 6
              ? 'Great job! You have strong conceptual clarity. Review the missed questions below.'
              : 'Keep practicing! Review the Shape Explorer and Diagonals Matrix to strengthen your fundamentals.'}
          </p>
          <button
            onClick={handleResetQuiz}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {QUIZ_QUESTIONS.map((q, qIndex) => {
          const selectedAnswer = userAnswers[q.id];
          const isAnswered = selectedAnswer !== undefined;
          const isCorrect = selectedAnswer === q.correctIndex;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-xl border p-5 shadow-xs transition ${
                showResults || isAnswered
                  ? isCorrect
                    ? 'border-emerald-200 bg-emerald-50/10'
                    : 'border-rose-200 bg-rose-50/10'
                  : 'border-slate-200'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400">
                      Question {qIndex + 1}
                    </span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 font-medium px-2 py-0.5 rounded">
                      {q.topic}
                    </span>
                    {q.ncertRef && (
                      <span className="text-[10px] text-slate-400">
                        ({q.ncertRef})
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {q.question}
                  </h3>
                </div>

                {isAnswered && (
                  <div className="shrink-0">
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                        <CheckCircle2 className="w-4 h-4" /> Correct
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-md border border-rose-200">
                        <XCircle className="w-4 h-4" /> Incorrect
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {q.options.map((option, optIdx) => {
                  const isThisSelected = selectedAnswer === optIdx;
                  const isThisCorrect = q.correctIndex === optIdx;

                  let btnClasses =
                    'border-slate-200 hover:bg-slate-50 text-slate-700';

                  if (isAnswered) {
                    if (isThisCorrect) {
                      btnClasses =
                        'bg-emerald-100/80 border-emerald-400 text-emerald-950 font-bold';
                    } else if (isThisSelected && !isThisCorrect) {
                      btnClasses =
                        'bg-rose-100/80 border-rose-400 text-rose-950 font-bold';
                    } else {
                      btnClasses = 'opacity-60 border-slate-200 text-slate-500';
                    }
                  } else if (isThisSelected) {
                    btnClasses =
                      'bg-indigo-600 text-white border-indigo-600 font-bold';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`text-left p-3 rounded-lg border text-xs sm:text-sm font-medium transition cursor-pointer flex items-center justify-between ${btnClasses}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full border border-current text-[11px] font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {isAnswered && isThisCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation after answering */}
              {isAnswered && (
                <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-700 bg-slate-50/80 p-3 rounded-lg leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-0.5">
                    💡 Explanation:
                  </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Finish Button */}
      {!showResults && answeredCount > 0 && (
        <div className="flex justify-center pt-4">
          <button
            onClick={handleFinishQuiz}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer text-sm"
          >
            <span>Submit Quiz & View Final Score</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
