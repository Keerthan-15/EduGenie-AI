import { useState, useEffect } from 'react';
import { generateRoadmap } from '../services/geminiService';
import { RoadmapItem } from '../types';
import { CheckCircle2, Circle, Clock, Sparkles, Trophy, Target, Zap, ArrowRight, BrainCircuit } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [goal, setGoal] = useState('Full-Stack Web Development');

  useEffect(() => {
    handleGenerateRoadmap();
  }, []);

  const handleGenerateRoadmap = async () => {
    setLoading(true);
    const newRoadmap = await generateRoadmap(goal);
    setRoadmap(newRoadmap);
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">Welcome back, Alex! 👋</h1>
            <p className="text-gray-500">You're on a 5-day learning streak. Keep it up!</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="bg-amber-50 p-2 rounded-lg">
                <Trophy className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Total Points</span>
                <span className="text-lg font-bold text-gray-900">2,450</span>
              </div>
            </div>
            <div className="bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="bg-indigo-50 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Current Streak</span>
                <span className="text-lg font-bold text-gray-900">5 Days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Roadmap Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-indigo-50/50 p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-6 h-6 text-indigo-600" />
                    Your Personalized Roadmap
                  </h2>
                  <p className="text-gray-500 text-sm">AI-generated path based on your goals.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <input
                    type="text"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="flex-grow md:w-64 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    placeholder="Enter your goal..."
                  />
                  <button
                    onClick={handleGenerateRoadmap}
                    disabled={loading}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all disabled:opacity-50 flex items-center gap-2"
                  >
                    {loading ? '...' : <Sparkles className="w-4 h-4" />}
                    Regenerate
                  </button>
                </div>
              </div>

              {loading ? (
                <div className="space-y-8 animate-pulse">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0" />
                      <div className="flex-grow space-y-2">
                        <div className="h-5 bg-gray-100 rounded w-1/3" />
                        <div className="h-4 bg-gray-100 rounded w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative space-y-12">
                  {/* Vertical Line */}
                  <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gray-100 -z-0" />
                  
                  {roadmap.map((item, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i}
                      className="relative z-10 flex gap-6 group"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-md transition-all duration-300 ${
                        item.status === 'completed' ? 'bg-emerald-500 text-white' :
                        item.status === 'current' ? 'bg-indigo-600 text-white scale-110 ring-4 ring-indigo-100' :
                        'bg-gray-200 text-gray-400'
                      }`}>
                        {item.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> :
                         item.status === 'current' ? <Zap className="w-5 h-5" /> :
                         <Circle className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg mb-1 ${item.status === 'upcoming' ? 'text-gray-400' : 'text-gray-900'}`}>
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                        {item.status === 'current' && (
                          <button className="mt-4 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-100 transition-all flex items-center gap-2">
                            Continue Learning
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Widgets */}
          <div className="space-y-8">
            {/* AI Tutor Widget */}
            <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform" />
              <BrainCircuit className="w-10 h-10 text-indigo-200 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Stuck on a concept?</h3>
              <p className="text-indigo-100 text-sm mb-8 relative z-10 opacity-90 leading-relaxed">
                Your AI Tutor is ready to explain anything from basic syntax to complex architectures.
              </p>
              <Link
                to="/tutor"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-4 rounded-2xl font-bold text-sm hover:bg-indigo-50 transition-all relative z-10 shadow-xl"
              >
                Start Chatting
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Progress Widget */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-indigo-50/50 p-8">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                Weekly Progress
              </h3>
              <div className="space-y-6">
                {[
                  { label: 'Web Dev', progress: 75, color: 'bg-indigo-600' },
                  { label: 'Python', progress: 40, color: 'bg-violet-500' },
                  { label: 'UI Design', progress: 90, color: 'bg-emerald-500' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="text-indigo-600">{item.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className={`h-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 text-indigo-600 text-sm font-bold hover:underline">
                View Detailed Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
