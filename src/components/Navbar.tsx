import { Link } from 'react-router-dom';
import { Menu, X, BrainCircuit, User } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', path: '/overview' },
    { name: 'Courses', path: '/courses' },
    { name: 'AI Tutor', path: '/tutor' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              EduGenie <span className="text-indigo-600">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-xl transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-slate-200 mx-4" />
            <Link
              to="/dashboard"
              className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
            >
              <User className="w-4 h-4" />
              Portal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block w-full mt-4 bg-indigo-600 text-white px-4 py-3 rounded-lg text-center font-medium"
              >
                My Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
