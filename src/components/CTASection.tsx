import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-indigo-600 rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl shadow-indigo-200">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-500/30 blur-[80px] rounded-full" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold mb-8 border border-white/20">
              <Sparkles className="w-4 h-4" />
              Start Your AI Journey Today
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              Ready to Unlock Your <br /> Full Potential?
            </h2>
            
            <p className="text-indigo-100 text-lg md:text-xl mb-12 leading-relaxed opacity-90">
              Join thousands of learners who are already mastering the skills of the future with EduGenie AI. Get your personalized roadmap now.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/courses"
                className="w-full sm:w-auto bg-white text-indigo-600 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 group"
              >
                Explore All Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/tutor"
                className="w-full sm:w-auto bg-indigo-500 text-white border border-indigo-400 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-indigo-400 transition-all flex items-center justify-center gap-2"
              >
                Talk to AI Tutor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
