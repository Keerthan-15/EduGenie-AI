import { useState } from 'react';
import { generateQuiz } from '../services/geminiService';
import { BrainCircuit, Sparkles, CheckCircle2, XCircle, ArrowRight, Trophy, Target, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export default function PracticePage() {
  const [topic, setTopic] = useState('React Hooks');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleStartQuiz = async () => {
    setLoading(true);
    const newQuestions = await generateQuiz(topic);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
    setLoading(false);
  };

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === questions[currentIndex].correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-indigo-100">
            <BrainCircuit className="w-4 h-4" />
            AI Practice Lab
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Master Through Practice</h1>
          <p className="text-gray-500 text-lg">Generate adaptive quizzes on any topic and get instant feedback.</p>
        </div>

        {questions.length === 0 || showResults ? (
          <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-indigo-100/50 p-12 text-center">
            {showResults ? (
              <div className="space-y-8">
                <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Trophy className="w-12 h-12 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
                  <p className="text-gray-500">You scored {score} out of {questions.length}</p>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleStartQuiz}
                    className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Try Again
                  </button>
                  <button
                    onClick={() => setQuestions([])}
                    className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                  >
                    New Topic
                  </button>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto space-y-8">
                <div className="space-y-4">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest block">Choose a Topic</label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-lg font-medium text-center"
                    placeholder="e.g. React Hooks, Python Basics..."
                  />
                </div>
                <button
                  onClick={handleStartQuiz}
                  disabled={loading || !topic.trim()}
                  className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-xl shadow-indigo-200"
                >
                  {loading ? (
                    <RefreshCw className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6" />
                      Generate Quiz
                    </>
                  )}
                </button>
                <div className="grid grid-cols-2 gap-4">
                  {['JavaScript', 'Data Science', 'UI Design', 'Marketing'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTopic(t)}
                      className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            {/* Progress Bar */}
            <div className="flex items-center gap-4">
              <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                  className="h-full bg-indigo-600"
                />
              </div>
              <span className="text-sm font-bold text-gray-400">{currentIndex + 1} / {questions.length}</span>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-indigo-100/50 p-8 md:p-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-10 leading-relaxed">
                  {questions[currentIndex].question}
                </h2>

                <div className="space-y-4">
                  {questions[currentIndex].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={isAnswered}
                      className={`w-full p-6 rounded-2xl text-left font-medium transition-all flex items-center justify-between border-2 ${
                        isAnswered
                          ? i === questions[currentIndex].correctIndex
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                            : i === selectedAnswer
                            ? 'bg-red-50 border-red-500 text-red-700'
                            : 'bg-gray-50 border-gray-100 text-gray-400'
                          : 'bg-white border-gray-100 hover:border-indigo-600 hover:bg-indigo-50 text-gray-700'
                      }`}
                    >
                      <span>{option}</span>
                      {isAnswered && i === questions[currentIndex].correctIndex && <CheckCircle2 className="w-5 h-5" />}
                      {isAnswered && i === selectedAnswer && i !== questions[currentIndex].correctIndex && <XCircle className="w-5 h-5" />}
                    </button>
                  ))}
                </div>

                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 p-6 bg-indigo-50 rounded-2xl border border-indigo-100"
                  >
                    <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-2">
                      <Target className="w-4 h-4" />
                      Explanation
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {questions[currentIndex].explanation}
                    </p>
                    <button
                      onClick={handleNext}
                      className="mt-6 w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                    >
                      {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
