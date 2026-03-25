import { Link } from 'react-router-dom';
import { Sparkles, Play, ArrowRight, ShieldCheck, Zap, Globe, BrainCircuit } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>The Future of Personalized Learning</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]"
          >
            Learn Smarter with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              EduGenie AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Experience a new era of education. Get personalized roadmaps, 24/7 AI tutoring, and interactive practice labs tailored to your unique learning style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/courses"
              className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:scale-105 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2"
            >
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/tutor"
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2"
            >
              Try AI Tutor
              <BrainCircuit className="w-5 h-5 text-indigo-600" />
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 pt-12 border-t border-slate-100"
          >
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by learners from</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
              <span className="text-2xl font-black tracking-tighter">GOOGLE</span>
              <span className="text-2xl font-black tracking-tighter">MICROSOFT</span>
              <span className="text-2xl font-black tracking-tighter">AMAZON</span>
              <span className="text-2xl font-black tracking-tighter">META</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
