import { Link } from 'react-router-dom';
import { BrainCircuit, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              EduGenie <span className="text-indigo-600">AI</span>
            </span>
          </div>

          <p className="text-slate-500 text-sm">
            © 2026 EduGenie AI. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm font-semibold text-slate-500">
            <Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms</Link>
            <Link to="/overview" className="hover:text-indigo-600 transition-colors">Overview</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

