import { useState, useRef, useEffect } from 'react';
import { getTutorResponse } from '../services/geminiService';
import { Message } from '../types';
import { Send, User, BrainCircuit, Sparkles, Trash2, ChevronDown, BookOpen, GraduationCap, Briefcase } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';

export default function TutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your EduGenie AI Tutor. How can I help you with your learning today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'Beginner' | 'Exam' | 'Interview'>('Beginner');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await getTutorResponse(newMessages, mode);
      setMessages([...newMessages, { role: 'model', text: response || 'Sorry, I encountered an error.' }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: 'model', text: 'Sorry, I am having trouble connecting right now.' }]);
    } finally {
      setLoading(false);
    }
  };

  const modes = [
    { id: 'Beginner', icon: BookOpen, desc: 'Simple explanations' },
    { id: 'Exam', icon: GraduationCap, desc: 'Key summaries' },
    { id: 'Interview', icon: Briefcase, desc: 'Technical depth' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Header Info */}
        <div className="text-center mb-10">
          <div className="bg-indigo-600 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-200">
            <BrainCircuit className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">EduGenie AI Tutor</h1>
          <p className="text-slate-500 text-sm">Your personal learning assistant, available 24/7.</p>
        </div>

        {/* Chat Card Widget */}
        <div className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 flex flex-col overflow-hidden h-[600px]">
          
          {/* Mode Selector Header */}
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-center gap-2">
            {modes.map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  mode === m.id ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                <m.icon className="w-3.5 h-3.5" />
                {m.id}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6 scroll-smooth">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border ${
                    msg.role === 'user' ? 'bg-indigo-50 border-indigo-100 text-indigo-600' : 'bg-slate-900 border-slate-800 text-white'
                  }`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <BrainCircuit className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100'
                  }`}>
                    <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-slate-900 prose-pre:text-indigo-300">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {loading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <BrainCircuit className="w-4 h-4 text-white animate-pulse" />
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-50 border-t border-slate-100">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={`Ask anything in ${mode} mode...`}
                className="w-full pl-5 pr-14 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2.5 rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-50 shadow-lg shadow-indigo-200"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            Powered by Gemini AI
          </div>
          <button onClick={() => setMessages([messages[0]])} className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
            <Trash2 className="w-3 h-3" />
            Clear Chat
          </button>
        </div>
      </div>
    </div>
  );
}

